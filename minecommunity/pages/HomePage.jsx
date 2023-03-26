import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function HomePage() {
  const images = [
    { id: 1, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846611827523616/image.png?width=1286&height=676", alt: "Image 1" },
    { id: 2, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846871589171240/image.png?width=1283&height=676", alt: "Image 2" },
    { id: 3, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 3" },
    { id: 4, src: "https://1media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 4" },
    { id: 4, src: "https://1media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 5" },
  ];

  const [activeImage, setActiveImage] = useState(0);

  const variants = {
    enter: { x: "0%" },
    center: { x: "0%" },
    exit: { x: "-0%" },
    hover: { scale: 1.1 },
  };

  const variants_javaIP = {
    initial: {
      y: 0,
    },
    hover: {
      y: -20,
    },
  };

  return (
    <div className="text-white ">
      <motion.div className=" mx-auto justify-center items-center flex flex-nowrap rounded-md content-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div>
          <Image className="rounded-md" src="https://media.discordapp.net/attachments/1083083786704658472/1083083816475840512/wwwww.png?width=1084&height=610" alt="cover" width="1084" height="610" />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white flex text-2xl font-proxima font-extrabold mt-5">
        <h1 className="flex mx-auto content-center md:mt-12 text-center text-2xl md:text-4xl">Mining Creativity, Building Community</h1>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white flex text-xl italic font-proxima">
        <h1 className="flex mx-auto content-center text-center ">Let's dive in and start playing together!</h1>
      </motion.div>

      <motion.div initial={{ y: "10%" }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-3 md:mx-48 mt-8 md:mt-12">
        <div className="rounded-lg flex flex-col justify-center items-center mx-4 ">
          <h1 className="text-red-400 text-2xl md:text-6xl font-extrabold items-center justify-center text-center">⚔︎ 1.19.4 Survival Guild Realms</h1>
          <p className="my-6 mx-4 text-justify text-m">
            &nbsp;&nbsp;&nbsp;&nbsp;A thrilling Survival Realms that offers a unique and immersive RPG gameplay experience. Here, players can create powerful Guilds to play with friends and conquer enemies as a team. With the added feature
            of Pets, players can train and customize their companions to aid them in their quests. The server also includes Custom Enchantments and unique skills to add to the excitement. In order to unlock new features, players must rank
            up by successfully completing challenges and tasks. But the excitement doesn't stop there - players can also explore the Hunting Ground and battle fierce Bosses to obtain legendary items and gain even more power. So join us on
            the 1.19.4 Minecraft Server and let the adventure begin!
          </p>
          <motion.p whileHover={{ scale: 1.1 }} className="md:text-2xl font-extrabold cursor-pointer">
            {" "}
            <span className="text-red-400">JAVA:</span> play.mine-smp.me <span className="text-gray-500">(1.8 - 1.19.4)</span>
          </motion.p>
          <motion.p whileHover={{ scale: 1.1 }} className="md:text-2xl font-extrabold cursor-pointer">
            {" "}
            <span className="text-red-400">BEDROCK:</span> mine-smp.me <span className="text-gray-500">Port: 25569</span>
          </motion.p>
        </div>
        <div className="rounded-lg col-span-2 mt-12 md:mt-0">
          <div className="object-scale-down md:h-full md:w-full md:relative rounded-md">
            {images.map((image, index) => (
              <motion.img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`object-scale-down bg-gray-800 absolute w-full rounded-lg h-50 md:object-cover transition-opacity duration-500 ${activeImage === index ? "opacity-100" : "opacity-0"}`}
                variants={variants}
                initial={index === 0 ? "center" : "enter"}
                animate={activeImage === index ? "center" : "exit"}
                exit="exit"
                whileHover="hover"
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 mb-4 md:mb-12">
              {images.map((_, index) => (
                <button key={index} className={`w-4 h-4 rounded-full ${activeImage === index ? "bg-gray-800" : "bg-gray-300"}`} onClick={() => setActiveImage(index)} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="py-100 min-h-screen"></div>
    </div>
  );
}

export default HomePage;
