import { createGlobalStyle } from "styled-components";

type Theme = { body: string; textColor: string; headingColor: string };
export const darkTheme: Theme = {
  body: "#000",
  textColor: "#fff",
  headingColor: "lightblue",
};
export const lightTheme: Theme = {
  body: "#fff",
  textColor: "#000",
  headingColor: "#d23669",
};
export const GlobalStyles = createGlobalStyle<{
  theme: Theme;
}>`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
  }
  h2{
    color: ${(props) => props.theme.headingColor};
  }
`;
