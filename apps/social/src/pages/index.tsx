import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/theme";


export default function Landing() {
  return (
    <Layout home>
      <h1>Landing</h1>
      <Link href="/auth/login">login</Link>
      <br />
      <Link href="/auth/signup">signup</Link>
      <br />
      <Link href="/auth/connectwallet">connect wallet</Link>
      <br />
    </Layout>
  );
}
