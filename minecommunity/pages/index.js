import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import Image from "next/image";

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
      <main>
        {/* <Home /> */}
        <motion.div className="text-white mx-auto justify-center items-center flex flex-nowrap rounded-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div>
            <Image className="rounded-md" src="https://media.discordapp.net/attachments/1083083786704658472/1083083816475840512/wwwww.png?width=1084&height=610" alt="cover" width="1084" height="610" />
          </div>

        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-white mx-auto justify-center items-center flex text-2xl font-proxima font-extrabold mt-5">
            <p>Mining Creativity, Building Community</p>
          </motion.div>
      </main>
    </>
  );
}
