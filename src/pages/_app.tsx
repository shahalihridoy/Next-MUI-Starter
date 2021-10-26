import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import cache from "@utils/emotionCache";
import theme from "@utils/theme/theme";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { Fragment } from "react";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

nProgress.configure({ showSpinner: false });

const App = (props: any) => {
  const { Component, emotionCache = cache, pageProps } = props;
  const Layout = Component?.Layout || Fragment;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Trackem</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
