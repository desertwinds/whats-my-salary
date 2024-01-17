# whats-my-salary
React project to calculate salary conversion

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Configuring your environment

You will need to create a `.env` file on your local folder containing the following variables

```
CURRCONV_API_KEY=YOUR API KEY
FILE_PATH=GLOBAL PATH TO ../public/currencyTables.json
```

## How to obtain API key

Right now I am using https://free.currencyconverterapi.com/. So the Go class directly hits their API on
https://free.currconv.com/api/v7/convert. In order for this project to work locally, you'll need to generate
a public API key from them. Please visit https://free.currencyconverterapi.com/free-api-key for more info.

If you decide to get a paid plan, then changes to the Go class may be needed to hit their paid API endpoint.