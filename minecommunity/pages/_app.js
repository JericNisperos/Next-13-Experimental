import Navbar from "./components/Navbar";
import "./globals.scss";
import "./guidesprites.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MineCommunity</title>
        <meta name="description" content="Made by Cyanice Blitz Corps" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
