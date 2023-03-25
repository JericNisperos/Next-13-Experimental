import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

export default function Home() {
  config.autoAddCss = false;
  return (
    <>
      <Head>
        <title>MineCommunity</title>
        <meta name="description" content="Made by Cyanice Blitz Corps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
<<<<<<< HEAD
=======
>>>>>>> f36ab5d55964d30ba8a1e52b693efb1d517a1007
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <div className="text-white"></div>
      </main>
    </>
  );
}
