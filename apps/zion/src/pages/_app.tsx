import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/theme";

const App = styled.div`
  height: 100vh;
`;

const NavBar = styled.nav`
  border: 1px red solid;
  position: absolute;
  top: 0;
`;
const Footer = styled.footer`
  border: 1px red solid;
  position: fixed;
  bottom: 0;
`;

// TODO #29 aggiungere theme provider
function Application({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App>
        <NavBar>
          <button onClick={switchTheme}>Switch Theme</button>
        </NavBar>
        <Component {...pageProps} />
        <Footer>ciao</Footer>
      </App>
    </ThemeProvider>
  );
}
export default Application;
