import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <>
      <h1>ZION</h1>
      <Link href={"/monorepo"}>Monorepo</Link>
      <br />
      <Link href={"/repo"}>Repo</Link>
    </>
  );
}
