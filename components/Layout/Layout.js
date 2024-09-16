import Navigation from "../Navigation/Navigation";
import Head from "next/head";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Art Gallery</title>
        <meta name="description" content="Art Gallery App" />
        <link rel="icon" href="/logo.ico" />
      </Head>
    </>
  );
}
