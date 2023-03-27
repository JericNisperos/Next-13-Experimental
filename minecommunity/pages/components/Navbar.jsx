import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars, faGamepad, faHamburger, faHouse, faPeopleGroup, faPerson, faShop } from "@fortawesome/free-solid-svg-icons";
import MenuButton from "./MenuButton";
import Head from "next/head";
// import handler from "../api/hello";

function Navbar() {
  const router = useRouter();
  const [IPAddress, setIPAddress] = useState(`PLAY.MINE-SMP.ME`);
  const [navMobile, setNavMobile] = useState(false);
  const [totalPlayers, setTotalPlayers] = useState("64");
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/api/plan");
      const res = await data.json();
      setTotalPlayers(res.numbers.online_players);
    }
    fetchData();
  }, [totalPlayers]);

  function NavItems({ href, icon, title }) {
    return (
      <Link href={href} onClick={() => setNavMobile(false)}>
        <li className={`text-white font-extrabold  px-3 py-2 ${router.pathname === href ? "bg-blue-500  rounded-md border-solid border-2 border-blue-500 hover:text-white" : "hover:text-blue-400"}`}>
          <FontAwesomeIcon icon={icon} className="md:text-md" /> {title}
        </li>
      </Link>
    );
  }
  return (
    <>
      <Head>{/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}</Head>
      <main>
        <div>
          <nav className="w-full shadow">
            <div className="justify-between px-4 lg:max-w-5 lg:items-center lg:flex lg:px-8 lg:mx-48">
              <div alt="Icon and Name" className="flex items-center justify-between py-3 md:py-5 md:block flex-no-wrap">
                <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} transition={{ type: "spring", stiffness: 200, damping: 10 }} className="flex items-center">
                  <Image src="https://media.discordapp.net/attachments/1083083786704658472/1088132326732607609/MineCommunity_Icon.png" width="48" height="48" alt="logo" className="flex-shrink-0 rounded-md" />
                  <Link href="/" className="text-2xl text-white font-bold ml-2">
                    MineCommunity
                  </Link>
                </motion.div>
                <button className="md:hidden px-3 py-2 text-white rounded-md outline-none focus:border-gray-400 focus:border">
                  <MenuButton isOpen={navMobile} onClick={() => setNavMobile(!navMobile)} className="px-3 py-2 text-white rounded-md outline-none focus:border-gray-400 focus:border" />
                </button>
              </div>
              <div alt="Navbar Options" className={` ${!navMobile ? "hidden md:block" : " "}`}>
                <motion.div initial={{ opacity: 1, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                  <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 `}>
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      <NavItems href="/" icon={faHouse} title="HOME" />
                      <NavItems href="/shop" icon={faShop} title="SHOP" />
                      <NavItems href="/guides" icon={faGamepad} title="GUIDES" />
                      <NavItems href="/about" icon={faPeopleGroup} title="ABOUT US" />
                      <div className={`text-white items-center flex justify-between mx-4 ${!navMobile ? "hidden" : " "}`}>
                        <div className="bg-blue-500 px-4 py-2 items-center justify-between rounded-md cursor-pointer bg-discord"  href="https://discord.com/invite/minecommunity" target="_blank">
                          <FontAwesomeIcon icon={faDiscord} />
                        </div>
                        <div>
                          <motion.a
                            className="text-white font-extrabold px-3 py-2 bg-blue-500  rounded-md border-solid border-2 border-blue-500 cursor-pointer"
                            onClick={() => {
                              navigator.clipboard.writeText("play.mine-smp.me");
                              IPAddress === "PLAY.MINE-SMP.ME" ? setIPAddress("📋 Copied!") : setIPAddress("PLAY.MINE-SMP.ME");
                            }}
                          >
                            {IPAddress}&nbsp; | <FontAwesomeIcon icon={faPerson} size="xs" /> {totalPlayers}
                          </motion.a>
                        </div>
                      </div>
                    </ul>
                  </div>
                </motion.div>
              </div>
              <div alt="discord tska IP" className="hidden lg:block">
                <a className="text-white mx-4 bg-discord px-3 py-2 rounded-lg cursor-pointer " href="https://discord.com/invite/minecommunity" target="_blank">
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
                <motion.a
                  className="text-white font-extrabold px-3 py-2 bg-blue-500  rounded-md border-solid border-2 border-blue-500 cursor-pointer hover:border-blue-400 hover:bg-blue-400"
                  onClick={() => {
                    navigator.clipboard.writeText("play.mine-smp.me");
                    IPAddress === "PLAY.MINE-SMP.ME" ? setIPAddress("📋 Copied!") : setIPAddress("PLAY.MINE-SMP.ME");
                  }}
                >
                  {IPAddress}&nbsp; | <FontAwesomeIcon icon={faPerson} size="xs" /> {totalPlayers}
                </motion.a>
              </div>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
}

export default Navbar;
