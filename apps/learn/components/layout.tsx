import Head from "next/head";
import Link from "next/link";
import React from "react";

const HomeTitle = <title>Home</title>;
const HomeLink = <Link href="/">Home</Link>;

type Layout = (props: {
  children: JSX.Element | string | JSX.Element[];
  home?: boolean;
}) => JSX.Element;

const Layout: Layout = function ({ children, home }) {
  return (
    <>
      {home ? HomeTitle : ""}
      {!home ? HomeLink : ""}
      <main>{children}</main>
    </>
  );
};

export default Layout;
