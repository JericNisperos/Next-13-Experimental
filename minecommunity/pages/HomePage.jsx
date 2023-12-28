import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import DiscordJoin from "./components/DiscordJoin";
import Footer from "./components/Footer";
import ServerInfo from "./components/ServerInfo";
import ArticleList from "./components/ArticleList";

function HomePage() {
  const images = [
    { id: 1, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846611827523616/image.png?width=1286&height=676", alt: "Image 1" },
    { id: 2, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846871589171240/image.png?width=1283&height=676", alt: "Image 2" },
    { id: 3, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 3" },
    { id: 4, src: "https://1media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 4" },
    { id: 5, src: "https://1media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 5" },
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((activeImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeImage]);

  const variants = {
    enter: { x: "0%" },
    center: { x: "0%" },
    exit: { x: "-0%" },
    // hover: { scale: 1.1 },
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full h-full flex justify-center items-center mx-12">
          <Image src="https://media.discordapp.net/attachments/1083083786704658472/1083083816475840512/wwwww.png?width=1084&height=610" alt="cover" layout="responsive" width={1084} height={610} className="mx-4 object-cover rounded-lg" />

          {/* <div>
            <iframe
              src="https://discord.com/widget?id=611871069413834793&theme=dark"
              width="350"
              height="540"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div> */}
        </motion.div>

        {/* <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className=" flex text-4xl mt-8 md:mt-12 font-proxima">
        <h1 className="flex mx-auto content-center text-center text-zinc-200"></h1>
      </motion.div> */}
      </div>
      <div className="">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white flex text-2xl font-proxima font-extrabold mt-2">
          <h1 className="flex mx-auto content-center text-center text-xl md:text-1xl">MineCommunity</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white flex italic font-proxima">
          <h1 className="flex mx-auto content-center text-center text-md">"Mining Creativity, Building Community"</h1>
        </motion.div>
      </div>

      {/* <ServerInfo /> */}
      {/* <ArticleList /> */}
      {/* <div className="py-16"></div> */}
      <DiscordJoin />
    </>
  );
}

export default HomePage;
