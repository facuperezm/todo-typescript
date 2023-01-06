import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TodoList</title>
        <meta
          name="description"
          content="This is my first app created with TypeScript and Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
