import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGoodreads } from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faHouse, faPeopleGroup, faShop } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const router = useRouter();
  const [IPAddress, setIPAddress] = useState("PLAY.MINE-SMP.ME");
  return (
    <div>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-5 md:items-center md:flex md:px-8">
          <div
            alt="Icon and Name"
            className="flex items-center justify-between py-3 md:py-5 md:block flex-no-wrap"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex items-center"
            >
              <Image
                src="https://media.discordapp.net/attachments/1083083786704658472/1088132326732607609/MineCommunity_Icon.png"
                width="48"
                height="48"
                alt="logo"
                className="flex-shrink-0 rounded-md"
              />
              <a href="#" className="text-2xl text-white font-bold ml-2">
                MineCommunity
              </a>
            </motion.div>
            <div className="md:hidden">
              <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"></button>
            </div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 `}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  {/* <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  > */}
                    <li
                      className={`text-white font-extrabold  px-3 py-2 ${
                        router.pathname === "/"
                          ? "bg-blue-500  rounded-md border-solid border-2 border-blue-500"
                          : " "
                      }`}
                    >
                        <FontAwesomeIcon icon={faHouse} className="text-md"/>
                      <Link href="/">  HOME</Link>
                    </li>
                  {/* </motion.div> */}
                  {/* <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  > */}
                    <li
                      className={`text-white font-extrabold  px-3 py-2 ${
                        router.pathname === "/shop"
                          ? "bg-blue-500  rounded-md border-solid border-2 border-blue-500"
                          : " "
                      }`}
                    >
                        <FontAwesomeIcon icon={faShop} className="text-md"/>
                      <Link href="/shop">  SHOP</Link>
                    </li>
                  {/* </motion.div> */}
                  {/* <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  > */}
                    <li
                      className={`text-white font-extrabold  px-3 py-2 ${
                        router.pathname === "/guides"
                          ? "bg-blue-500  rounded-md border-solid border-2 border-blue-500"
                          : " "
                      }`}
                    >
                    <FontAwesomeIcon icon={faGamepad} className="text-md"/>
                      <Link href="/guides">  GUIDES</Link>
                      
                    </li>
                  {/* </motion.div> */}
                  {/* <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  > */}
                    <li
                      className={`text-white font-extrabold  px-3 py-2 ${
                        router.pathname === "/about"
                          ? "bg-blue-500  rounded-md border-solid border-2 border-blue-500"
                          : " "
                      }`}
                    >
                        <FontAwesomeIcon icon={faPeopleGroup} className="text-md"/>
                      <Link href="/about">  ABOUT US</Link>
                    </li>
                  {/* </motion.div> */}
                </ul>
              </div>
            </motion.div>
          </div>
          <div alt="discord tska IP">
            <a className="text-white fa-xs hover:text-black">
              {/* <FontAwesomeIcon icon={faDiscord} size="xs" /> */}
            </a>
            <motion.a
              className="text-white font-extrabold px-3 py-2 bg-blue-500  rounded-md border-solid border-2 border-blue-500 cursor-pointer"
              onClick={() => {
                IPAddress === "PLAY.MINE-SMP.ME"
                  ? setIPAddress("📋 Copied!")
                  : setIPAddress("PLAY.MINE-SMP.ME");
              }}
            >
              {IPAddress}
            </motion.a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
