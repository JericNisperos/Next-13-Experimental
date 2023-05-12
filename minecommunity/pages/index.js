import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import HomePage from "./HomePage";

export default function Home() {
  config.autoAddCss = false;
  return (
    <>
      <Head>
        <title>MineCommunity</title>
        <meta name="description" content="Made by Cyanice Blitz Corps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="max-w-[1446px]">
      <HomePage />
      </main>
    </>
  );
}
