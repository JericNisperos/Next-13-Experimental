import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GuidesBack from "../components/GuidesBack";
import { motion } from "framer-motion";
import { IoConstructOutline } from "react-icons/io5";
import Image from "next/image";
function ShopMain(context) {
  const router = useRouter();
  const query = router.query;

  const [stats, setStats] = useState();
  const [nickname, setNickname] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`/api/plan-player?player=${query.playerID}`);
      const res = await data.json();
      setStats(res);
    }
    if (stats?.nicknames?.[1]?.nickname) {
      setNickname(stats?.nicknames?.[1].nickname);
    }
    fetchData();
  }, [stats]);

  const HtmlContent = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <div className="min-h-screen">
      <GuidesBack />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12 ">
        <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
          <div className={`h-[150px] w-[150px] flex rounded-lg ${query.color}`}>
            {/* <motion.span initial={{ scale: 1.0 }} id={`shop${query.shopid}-sprite`} className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span> */}
            <Image src={`https://mc-heads.net/avatar/${query.playerID}`} width={150} height={80} />
          </div>
        </motion.div>
        <motion.div className="cursor-default" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
          {/* <div class="font-bold uppercase text-gray-500">MineCommunity Player {context.params}</div> */}
          {nickname ? (
            //   <div className="text-5xl font-bold text-white "><HtmlContent html={nickname}/></div>
            <div className="text-5xl font-bold text-white ">{query.playerID}</div>
          ) : (
            <div className="text-5xl font-bold text-white ">{query.playerID}</div>
          )}
        </motion.div>
      </div>
      <div>
        {/* <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
          <h1 className="text-2xl bg-blue-300 justify-center items-center text-center md:mx-96 uppercase text-white py-2"></h1>
          <p className="text-lg justify-center items-center text-center mx-4 md:mx-96 md:px-24 text-white"></p>
        </motion.div> */}
        <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
          <ul className="list-none gap-2 text-lg items-center text-justify mx-4 md:mx-96 md:px-48 mt-12 text-zinc-300">
            <li className="mt-4">This page hasn't been created yet. Might want to check back later? I think?</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default ShopMain;
