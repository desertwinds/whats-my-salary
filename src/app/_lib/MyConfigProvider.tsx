'use client';

import React from 'react';
import { ConfigProvider, ThemeConfig, theme } from 'antd';

const myTheme: ThemeConfig = {
  token: {
    fontSizeHeading1: 64,
    fontSizeHeading3: 24,
  },
  components: {
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: "0.1em"
    }
  },
  algorithm: theme.defaultAlgorithm
};

const MyConfigProvider = ({ children }: React.PropsWithChildren) => {
    return (
      <ConfigProvider theme={myTheme}>
        {children}
      </ConfigProvider>
    )
};

export default MyConfigProvider;