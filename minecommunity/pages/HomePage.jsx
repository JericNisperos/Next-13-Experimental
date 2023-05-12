import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import DiscordJoin from "./components/DiscordJoin";
import Footer from "./components/Footer";
import ServerInfo from "./components/ServerInfo";

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
    <div className="text-white max-w-[1446px]">
      <motion.div className=" mx-auto justify-center items-center flex flex-nowrap rounded-md content-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <motion.div 
                // whileHover={{ scale: 1.03 }}

        className="min-h-screen mt-12 max-w-[1446px]"> 
          <Image className="rounded-md relative" src="https://media.discordapp.net/attachments/1083083786704658472/1083083816475840512/wwwww.png?width=1084&height=610" alt="cover" width="1084" height="610" />
        </motion.div>
      </motion.div>

      {/* <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white flex text-2xl font-proxima font-extrabold mt-2">
        <h1 className="flex mx-auto content-center text-center text-xl md:text-1xl">MineCommunity</h1>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white flex italic font-proxima">
        <h1 className="flex mx-auto content-center text-center text-md">"Mining Creativity, Building Community"</h1>
      </motion.div> */}
      {/* <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className=" flex text-4xl mt-8 md:mt-12 font-proxima">
        <h1 className="flex mx-auto content-center text-center text-zinc-200"></h1>
      </motion.div> */}

      {/* <ServerInfo /> */}
        {/* <DiscordJoin /> */}
    </div>
  );
}

export default HomePage;
