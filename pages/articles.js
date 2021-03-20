import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <div>
      <Head>
        <title>Articles | Chris Lapidas | Web Developer</title>
        <meta
          name="keywords"
          content="Articles, Chris Lapidas, Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1>Articles</h1>
      </main>
    </div>
  );
};

export default articles;
