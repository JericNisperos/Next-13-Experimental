import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
function about() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto">
      <Head>
        <title>MineCommunity About</title>
        <meta name="description" content="Made by Cyanice Blitz Corps" />
      </Head>
      <>
        <div class="mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12 max-w-6xl">
          <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
            <div className={`h-[150px] w-[150px] flex rounded-lg bg-purple-400`}>
              {/* <motion.span initial={{ scale: 1.0 }} id="about-sprite" className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span> */}
              <Image
                src="https://media.discordapp.net/attachments/1083083786704658472/1088132326732607609/MineCommunity_Icon.png"
                width="1000"
                height="1000"
                alt="logo"
                className="rounded-lg w-[200px] text-center items-center flex mx-auto my-auto"
              />
            </div>
          </motion.div>
          <motion.div className="cursor-default" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
            <div class="font-bold uppercase text-gray-500">MineCommunity</div>
            <div class="text-5xl font-bold text-white">Who we are?</div>
          </motion.div>
        </div>
        <div>
          <motion.div className="items-center justify-center" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
            <h1 className="text-2xl bg-blue-400 justify-center text-center mx-4 uppercase text-white py-2 ">MineCommunity Team</h1>
            <p className="text-lg justify-center items-center text-center text-white"></p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
            <ul className="list-none gap-2 text-lg items-center text-justify mx-4 mt-12 text-zinc-300">
              <li className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp;A small but thriving community of Minecraft players that started with a group of friends in August 2019. What began as a small group of like-minded individuals has grown into a diverse community of
                players from all corners of the world.
              </li>
              <li className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp;At MineCommunity, we pride ourselves on providing high-quality gameplay through well-maintained and managed servers. Our team is made up of licensed professionals, engineers, hobbyists, and
                enthusiasts who are passionate about Minecraft and dedicated to providing the best possible experience for our players.
              </li>
              <li className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp;We are a community run by volunteers who are committed to spearheading the development and direction of the community. We strive to create a welcoming and inclusive environment for players of all ages
                and skill levels.
              </li>
              <li className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp;At MineCommunity, we believe that everyone should have the opportunity to contribute and be part of our community. That's why we always have Staff Applications open – not because we're desperately
                seeking help, but because we want our players to have the chance to build a team, maintain a community, and explore new tools and skills.
              </li>
              <li className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp;We believe that being part of the staff team is an incredibly rewarding experience, and we want to give our players the chance to be a part of it. Whether you're interested in server administration,
                community management, or simply want to learn more about the inner workings of a gaming community, we encourage you to apply for a staff position and see what it's all about.
              </li>
              <li className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Our team is always working hard to update and add new content to the servers, never settling for what is "already okay". We are constantly challenging the limits of our creativity and pushing
                ourselves to provide innovative and exciting gameplay experiences for our players.
              </li>
              <li className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Join us at MineCommunity and become part of our growing community of Minecraft players. With dedicated volunteers, well-maintained servers, and a commitment to creativity and innovation, we are
                confident that you will have a great time playing with us.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* <div className="pt-12">
          <motion.div className="items-center justify-center" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
            <h1 className="text-2xl bg-blue-400 justify-center text-center mx-4 uppercase text-white py-2 ">Meet the Team!</h1>
            <p className="text-lg justify-center items-center text-center text-white"></p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
            <div className="grid grid-cols-3 gap-4 mx-6 mt-4">
              <div className="border-blue-400 h-16 border-solid border">test</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
          </motion.div>
        </div> */}
      </>
    </div>
  );
}

export default about;
