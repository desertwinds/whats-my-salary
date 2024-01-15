package main

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"net/url"
	"os"
	"time"

	"github.com/joho/godotenv"
)

type CurrencyTable struct {
	Success   bool
	Timestamp time.Time
	Base      string
	Rates     map[string]float64
}

var apiKey string

func init() {
	err := godotenv.Load("../../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	apiKey = os.Getenv("CURRCONV_API_KEY")
}

func main() {
	currencies := [3]string{"USD", "EUR", "GBP"}
	currencyTables := make(map[string]CurrencyTable)
	currentTimestamp := time.Now()

	for _, currency := range currencies {
		currencyTables[currency] = CurrencyTable{
			Success:   true,
			Base:      currency,
			Timestamp: currentTimestamp,
			Rates:     make(map[string]float64),
		}
	}

	for i, from := range currencies {
		for _, to := range currencies[i+1:] {
			from_to := buildCurrencyPair(from, to)
			to_from := buildCurrencyPair(to, from)

			u, err := url.Parse("https://free.currconv.com/api/v7/convert")

			if err != nil {
				log.Fatal(err)
			}

			q := u.Query()
			q.Set("q", from_to+","+to_from)
			q.Set("compact", "ultra")
			q.Set("apiKey", apiKey)
			u.RawQuery = q.Encode()

			resp, err := http.Get(u.String())
			if err != nil {
				log.Fatal(err)
			}

			var parsedResponse map[string]float64
			err = json.NewDecoder(resp.Body).Decode(&parsedResponse)
			if err != nil {
				log.Fatal(err)
			}

			currencyTables[from].Rates[to] = parsedResponse[from_to]
			currencyTables[to].Rates[from] = parsedResponse[to_from]
		}
		currencyTables[from].Rates[from] = 1.0
	}

	f, err := os.Create("./output.json")
	if err != nil {
		log.Fatalf("error %s", err)
	}
	defer f.Close()

	e := json.NewEncoder(f)
	e.Encode(currencyTables)

}

func buildCurrencyPair(from, to string) string {
	var buffer bytes.Buffer
	buffer.WriteString(from)
	buffer.WriteString("_")
	buffer.WriteString(to)

	return buffer.String()
}
