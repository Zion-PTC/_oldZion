import Link from "next/link";

type Layout = (props: {
  children: JSX.Element | string | JSX.Element[];
  landing?: boolean;
  connect?: boolean;
  nft?: boolean;
}) => JSX.Element;

const Layout: Layout = function ({ children, landing, connect, nft }) {
  const Welcome = <p>Welcome</p>;
  const Home = <Link href="/">Home</Link>;
  const ConnectWallet = <Link href="/connect-wallet">Connect Wallet</Link>;
  const Collection = <Link href="/collection">Collection</Link>;

  return (
    <>
      <main>
        {landing ? Welcome : ""}
        {nft ? Collection : ""}
        {!landing && !nft ? Home : ""}
        {!connect && landing ? ConnectWallet : ""}
        {children}
      </main>
    </>
  );
};
