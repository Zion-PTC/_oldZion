import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/theme";

const App = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;
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

function Application({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [appHeight, setAppHeight] = useState(0);
  const app = useRef<HTMLDivElement>();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App ref={app} height={appHeight}>
        <NavBar>
          <button onClick={switchTheme}>Switch Theme</button>
        </NavBar>
        <Component {...pageProps} />
        <Footer>ciao sono il footer e devo stare in basso</Footer>
      </App>
    </ThemeProvider>
  );
}
export default Application;
