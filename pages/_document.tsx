import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <title>D</title>
      <Script src="/public/js/bootstrap.min.js" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
