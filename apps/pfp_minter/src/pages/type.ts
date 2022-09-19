export type LayoutProps = {
  children: JSX.Element | string | JSX.Element[];
  landing?: boolean;
  connect?: boolean;
  nft?: boolean;
  navbar?: React.MutableRefObject<HTMLDivElement>;
  footer?: React.MutableRefObject<HTMLDivElement>;
  handleClick?: () => void;
};

export type AppConfig = {
  slug: string;
  name: string;
  shortname: string;
  description: string[];
};

export type LandingStaticProps = {
  props: {
    appConfig: AppConfig;
  };
};

export type BasePropsFromApp = {
  contentArea: React.MutableRefObject<HTMLDivElement>;
  layout: LayoutProps;
};

export type LandingProps = BasePropsFromApp & {
  appConfig: AppConfig;
};
