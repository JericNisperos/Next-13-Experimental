import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function ServerInfo() {
  const images = [
    { id: 1, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846611827523616/image.png?width=1286&height=676", alt: "Image 1" },
    { id: 2, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846871589171240/image.png?width=1283&height=676", alt: "Image 2" },
    // { id: 3, src: "https://media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 3" },
    // { id: 4, src: "https://1media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 4" },
    // { id: 5, src: "https://1media.discordapp.net/attachments/1083083786704658472/1084846993911853116/image.png?width=1276&height=676", alt: "Image 5" },
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
    <motion.div initial={{ y: "10%" }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="border-red-400 px-8 py-4 md:mx-96 cursor-default bg-zinc-800 rounded-lg">
      {/* <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className=" flex text-4xl font-proxima"></motion.div> */}
      <div className="grid grid-cols-1 lg:grid-cols-1">
        <div className="rounded-lg flex flex-col justify-center items-center md:mx-4 ">
          <h1 className="text-red-400 text-xl md:text-4xl font-extrabold items-center justify-center text-center">⚔︎ 1.19.4 Survival Guild Realms</h1>
          <p className="my-6 md:mx-4 text-justify text-m">
            &nbsp;&nbsp;&nbsp;&nbsp;A thrilling Survival Realms that offers a unique and immersive RPG gameplay experience. Here, players can create powerful <span className="text-lime-400">Guilds</span> to play with friends and conquer
            enemies as a team. With the added feature of <span className="text-blue-500">Pets</span>, players can train and customize their companions to aid them in their <span className="text-orange-400">Quests</span>. The server also
            includes <span className="text-purple-400">Custom Enchantments</span> and unique <span className="text-yellow-400">Skills</span> to add to the excitement. In order to unlock new features, players must
            <span className="text-emerald-400"> Rank up</span> by successfully completing challenges and tasks. But the excitement doesn't stop there - players can also explore the <span className="text-amber-400">Hunting Ground</span> and
            battle fierce <span className="text-red-400">Bosses</span> to obtain <span className="text-green-400">Relic Items</span> and gain even more power. So join us on the 1.19.4 Minecraft Server and let the adventure begin!
          </p>
          <div className="grid grid-cols-1 nd:grid-cols-2 md:px-24">
          <motion.p whileHover={{ scale: 1.1 }} className="md:text-xl font-extrabold cursor-pointer text-center flex mx-auto">
            <span className="text-red-400">JAVA: </span> play.mine-smp.me <span className="text-gray-500">(1.8 - 1.19.4)</span>
          </motion.p>
          <motion.p whileHover={{ scale: 1.1 }} className="md:text-xl font-extrabold cursor-pointer">
            <span className="text-red-400">BEDROCK:</span> mine-smp.me <span className="text-gray-500">Port: 25569</span>
          </motion.p>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg md:col-span-2 mt-12 md:mt-0 md:py-2 h-[250px] md:h-[580px] hidden md:block">
          <div className="object-scale-down  md:h-full md:w-full md:relative rounded-md">
            {images.map((image, index) => (
              <motion.img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`object-scale-down  bg-gray-800 absolute md:w-full rounded-lg h-50    transition-opacity duration-500 ${activeImage === index ? "opacity-100" : "opacity-0"}`}
                variants={variants}
                initial={index === 0 ? "center" : "enter"}
                animate={activeImage === index ? "center" : "exit"}
                exit="exit"
                whileHover="hover"
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 mb-4 md:mb-8">
              {images.map((_, index) => (
                <button key={index} className={`w-4 h-4 items-center rounded-full ${activeImage === index ? "bg-red-400" : "bg-gray-300"}`} onClick={() => setActiveImage(index)} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ServerInfo;
