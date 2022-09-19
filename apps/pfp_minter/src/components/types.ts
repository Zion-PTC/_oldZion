import { LayoutProps } from "../pages/type";

// LAYOUT
export type ILayout = (props: LayoutProps) => JSX.Element;

// THEME

export type BasicProps = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export type Theme = {
  body: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  headingColor: string;
  primary: BasicProps;
  secondary: BasicProps;
};

export type Temporary = Pick<
  Theme,
  "body" | "textColor" | "backgroundColor" | "borderColor"
>;
