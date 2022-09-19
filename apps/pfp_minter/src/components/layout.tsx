import Link from "next/link";
import React from "react";
import { ConnectionButton } from "./Elements/Button/ConnectionButtons";
import { ThemeButton } from "./Elements/Button/ThemeButton";
import { Footer } from "./Sections/Footer/Footer";
import { NavBar } from "./Sections/NavBar/NavBar";
import { ILayout } from "./types";

const Welcome = <p>Welcome</p>;
const Home = <Link href="/">Home</Link>;
const ConnectWallet = <Link href="/connect-wallet">Connect Wallet</Link>;
const Collection = <Link href="/collection">Collection</Link>;

const Layout: ILayout = function ({
  children,
  landing,
  connect,
  nft,
  navbar,
  footer,
  handleClick,
}) {
  return (
    <>
      <NavBar ref={navbar}>
        {nft ? Collection : ""}
        {!landing && !nft ? Home : ""}
        {!connect && landing ? ConnectWallet : ""}
        <ConnectionButton>
          <p>Ciao</p>
        </ConnectionButton>
        <ThemeButton onClick={handleClick}>
          <p>Switch p Theme</p>
        </ThemeButton>
      </NavBar>
      <main>
        {landing ? Welcome : ""}
        {children}
      </main>
      <Footer ref={footer}>ciao</Footer>
    </>
  );
};

export default Layout;
