import { CardPfp, CardPfpProps } from "./CardPfp";

export interface CardPfpsProps {
  children: CardPfpProps[];
  small?: boolean;
  mid?: boolean;
  big?: boolean;
}

export interface CardPfps {
  (props: CardPfpsProps): JSX.Element;
}

export const CardPfps: CardPfps = (props: CardPfpsProps): JSX.Element => {
  const { children, small, mid, big } = props;
  return (
    <>
      {children.map((child) => (
        <CardPfp
          small={small}
          mid={mid}
          big={big}
          {...child}
          key={child.slug}
        ></CardPfp>
      ))}
    </>
  );
};
