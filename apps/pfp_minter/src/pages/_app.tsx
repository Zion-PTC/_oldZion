import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/theme";
import React, { useEffect, useRef, useState } from "react";

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

const rows = 14;
const columns = 8;

function Application({ Component, pageProps }) {
  const [appHeight, setAppHeight] = useState(0);
  const [theme, setTheme] = useState("light");
  const [componentAreaHeight, setComponentAreaHeight] = useState(0);
  const app = useRef<HTMLDivElement>();
  const navbar = useRef<HTMLHeadingElement>();
  const footer = useRef<HTMLHeadingElement>();
  // collection
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [blockSize, setBlockSize] = useState(0);
  const contentArea = useRef<HTMLDivElement>();
  //
  pageProps.handleParentWidth = setParentWidth;
  pageProps.parentWidth = parentWidth;
  pageProps.handleParentHeight = setParentHeight;
  pageProps.parentHeight = parentHeight;
  pageProps.handleWidth = setWidth;
  pageProps.width = width;
  pageProps.handleHeight = setHeight;
  pageProps.height = height;
  pageProps.handleBlockSize = setBlockSize;
  pageProps.blockSize = blockSize;
  pageProps.contentArea = contentArea;
  pageProps.columns = columns;

  useEffect(() => {
    setAppHeight(window.visualViewport.height);
    setComponentAreaHeight(
      window.visualViewport.height -
        footer.current.clientHeight +
        navbar.current.clientHeight
    );
    window.addEventListener("resize", () => console.log("resized"));
  }, []);
  useEffect(() => {
    setParentWidth(contentArea.current.clientWidth);
    setParentHeight(contentArea.current.clientHeight);
  }, [componentAreaHeight]);
  useEffect(() => {
    setHeight(parentHeight * 0.99);
  }, [parentWidth]);
  useEffect(() => {
    console.log(height * 0.99);
    setBlockSize(height / rows);
    setWidth((height / rows) * columns);
  }, [height]);

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App ref={app} height={appHeight}>
        <NavBar ref={navbar}>
          <button onClick={toggleTheme}>Switch Theme</button>
        </NavBar>
        <Component {...pageProps} />
        <Footer ref={footer}>ciao</Footer>
      </App>
    </ThemeProvider>
  );
}
export default Application;
