import styled, { ThemeProvider } from "styled-components";
import React from "react";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default Application;
