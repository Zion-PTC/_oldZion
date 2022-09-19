import { createGlobalStyle } from "styled-components";
import { Temporary, Theme } from "./types";

export const darkTheme: Temporary = {
  body: "#090909",
  textColor: "#fafafa",
  backgroundColor: "#090909",
  borderColor: "#fafafa",
};

export const lightTheme: Temporary = {
  body: "#fafafa",
  textColor: "#090909",
  backgroundColor: "#fafafa",
  borderColor: "#090909",
};

export const GlobalStyles = createGlobalStyle<{
  theme: Theme;
}>`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
    margin:0;
    box-sizing: border-box;
    position:fixed;
  }
  h2{
    color: ${(props) => props.theme.headingColor};
  }
  main{
    height:100%;
  }
`;
