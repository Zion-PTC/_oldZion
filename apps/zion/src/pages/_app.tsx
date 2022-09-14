import styled, { ThemeProvider } from "styled-components";
import React from "react";

// TODO #29 aggiungere theme provider
function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default Application;
