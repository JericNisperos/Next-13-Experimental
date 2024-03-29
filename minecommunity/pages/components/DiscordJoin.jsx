import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
function DiscordJoin() {
  const [stats, setStats] = useState("");
  const [onlinemembers, setOnlineMembers] = useState("000");

  useEffect(() => {
    async function fetchData() {
      const discordData = await fetch("/api/discordapi");
      const discordRes = await discordData.json();

      setStats(discordRes);
      setOnlineMembers(discordRes.presence_count);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ y: "10%" }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="  rounded-lg mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 mt-8 cursor-default ">
        <motion.div whileHover={{ scale: 1.5 }} initial={{ y: "10%" }} animate={{ y: 0, scale: 1.7 }} transition={{ duration: 0.5 }} className="rounded-lg flex flex-col justify-center items-center mx-4 ">
          <Image src="https://cdn.discordapp.com/attachments/1083083786704658472/1089805740874670091/image.png" width={1000} height={1000} className="md:mt-8 hidden lg:block" />
          <h1 className="text-red-400 text-2xl md:text-6xl font-extrabold items-center justify-center text-center"></h1>
          <p className="my-6 mx-4 text-justify text-m"></p>
        </motion.div>
        <div className="rounded-lg col-span-2 mt-0 md:py-2">
          <a className="text-white text-2xl md:text-4xl font-black items-center rounded-lg bg-discord px-4 justify-center flex mx-auto py-4" href="https://discord.gg/dBHZtQcMsW" target="_blank">
            <FontAwesomeIcon icon={faDiscord} /> &nbsp;&nbsp; Join us on Discord!
          </a>
          <div className="md:h-full md:w-full md:relative rounded-md text-justify text-lg text-zinc-400 md:text-xl mt-2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Here in MineCommunity, we believe that great things happen when Minecraft enthusiasts come together to share ideas and connect. That's why we invite you to
            join our Discord community, where you'll have the opportunity to share your thoughts, collaborate with other players, and stay up-to-date on the latest Minecraft news, events, and exclusive rewards. Whether you're a seasoned
            player or just starting out, you'll find a warm and welcoming community here in MineCommunity. So don't wait - join us on Discord today and start sharing your ideas and exploring the endless possibilities of Minecraft!
            {/* <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-center mt-4 mx-auto border-2 border-blue-400 bg-blue-400 px-3 py-2 rounded-lg text-white bg-discord"
            >
              <FontAwesomeIcon icon={faPeopleGroup} /> &nbsp;Online: {onlinemembers}
              
            </motion.button>
            </div> */}
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DiscordJoin;
