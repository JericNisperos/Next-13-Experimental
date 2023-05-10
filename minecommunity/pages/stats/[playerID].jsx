import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GuidesBack from "../components/GuidesBack";
import { motion } from "framer-motion";
import { IoConstructOutline } from "react-icons/io5";
import { IoIosPeople, IoMdClock } from "react-icons/io";
import { IoMdPeople, IoPeople } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { BiPowerOff } from "react-icons/bi";
import { BsArrowClockwise, BsFillClockFill } from "react-icons/bs";
import { AiOutlineLineChart, AiOutlineSearch } from "react-icons/ai";
import { GiBroadsword, GiDeathSkull, GiFishMonster } from "react-icons/gi";
import Image from "next/image";
function ShopMain(context) {
  const router = useRouter();
  const query = router.query;

  const [stats, setStats] = useState();
  const [nickname, setNickname] = useState();
  useEffect(() => {
    try {
      async function fetchData() {
        const data = await fetch(`/api/plan-player?player=${query.playerID}`);
        const res = await data.json();
        setStats(res);
        // console.log(stats);
      }
      if (stats?.nicknames?.[1]?.nickname) {
        setNickname(stats?.nicknames?.[1].nickname);
      }
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  }, [stats]);

  console.log(stats);
  console.log(stats?.info?.online);
  const HtmlContent = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;

  function DataItems({ icon, title, value }) {
    return (
      <div className="flex justify-between text-lg md:text-2xl mx-2 md:mx-8 my-4 text-gray-700 items-center">
        <div className="flex justify-normal items-center">
          <span className="w-[30px]">{icon}</span>
          {/* < className="w-[30px]" /> */}
          {title}
        </div>
        <div className="md:text-xl text-sm items-center">{value}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* <GuidesBack /> */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12 ">
        <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
          <div className={`h-[150px] w-[150px] flex rounded-lg ${query.color}`}>
            {/* <motion.span initial={{ scale: 1.0 }} id={`shop${query.shopid}-sprite`} className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span> */}
            <Image src={`https://mc-heads.net/avatar/${query.playerID}`} width={150} height={80} alt="MCHead" priority="High" />
          </div>
        </motion.div>
        <motion.div className="cursor-default" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
          {nickname ? (
            //   <div className="text-5xl font-bold text-white "><HtmlContent html={nickname}/></div>
            <div className="flex">
              <div className="text-5xl font-bold text-white ">{query.playerID}</div>
              {stats?.info.online ? <div className="rounded-full bg-green-400 w-4 h-4"></div> : <div className="rounded-full bg-red-400 w-4 h-4"></div>}
            </div>
          ) : (
            <div className="text-5xl font-bold text-white ">{query.playerID}</div>
          )}
          <div className="flex">
            <div className="font-bold uppercase text-gray-500">{stats?.extensions?.[0].extensionData?.[12].tabs?.[0].values?.[0].value}</div>
          </div>
          {/* <div className="font-bold uppercase text-gray-500">{stats?.info?.online}</div> */}
        </motion.div>
      </div>
      <div>
        {stats?.sessions ? (
          <div>
            <motion.div className="items-center justify-center mb-8" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
              <h1 className="text-lg md:text-2xl bg-blue-400 justify-center text-center mx-4 md:mx-32 uppercase text-white py-2">Player Overview</h1>
              <p className="text-lg justify-center items-center text-center text-white"></p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
              <div className="grid grid-cols-1 md:grid-cols-3  mx-4 md:mx-32 gap-x-4 gap-y-4 ">
                <div className="col-span-1 md:col-span-1 rounded-lg bg-blue-100">
                  <div className="flex px-4 text-center justify-center py-4 rounded-tl-lg rounded-tr-lg bg-blue-400">
                    <p className="text-lg md:text-2xl text-white font-semibold">Player Statistics</p>
                  </div>
                  <div className="justify-center mt-8 font-bold ">
                    <DataItems icon={<IoMdClock />} title="Player KDR:" value={`${stats?.kill_data?.player_kills_total.toLocaleString("en-US")} / ${stats?.kill_data?.player_deaths_total} / ${stats?.kill_data?.player_kdr_total}`} />
                    <DataItems icon={<IoPeople />} title="Mob KDR:" value={`${stats?.kill_data?.mob_kills_total.toLocaleString("en-US")} / ${stats?.kill_data?.mob_deaths_total} / ${stats?.kill_data?.mob_kdr_total} `} />
                    <DataItems icon={<IoPeople />} title="Money:" value={`₱ ${stats?.extensions?.[0].extensionData?.[4].tabs?.[0].values?.[0].value.toLocaleString()}`} />
                    <div className="border border-gray-700 mx-8"></div>

                    <DataItems icon={<IoPeople />} title="Jobs:" value={`${stats?.extensions?.[0].extensionData?.[6].tabs?.[0].values?.[0]?.value?.toLocaleString()}`} />
                    <DataItems icon={<IoPeople />} title="Job Level:" value={`${stats?.extensions?.[0].extensionData?.[13].tabs?.[0].values?.[2]?.value?.toLocaleString()}`} />
                    <DataItems icon={<IoPeople />} title="McMMO Highest Level:" value={`${stats?.extensions?.[0].extensionData?.[10].tabs?.[0].values?.[0].value?.toLocaleString()}`} />
                    {/* <DataItems icon={<AiOutlineLineChart />} title={`Best Peak `} value="0" /> */}
                    <div className="border border-gray-700 mx-8"></div>
                    {/* <DataItems icon={<GiBroadsword />} title="Overall Player Kills:" value="0" /> */}
                    {/* <DataItems icon={<GiDeathSkull />} title="Overall Player Deaths:" value="0" /> */}

                    {/* <DataItems icon={<GiFishMonster />} title="Overall Mob Kills:" value="0" /> */}
                  </div>
                </div>

                {/* <div className="col-span-1 rounded-lg bg-blue-100 shadow-md shadow-white">
                  <div className="flex px-4 text-center justify-center py-4 rounded-tl-lg rounded-tr-lg bg-blue-400">
                    <p className="text-lg md:text-2xl text-white font-semibold">Last 7 Days</p>
                  </div>
                  <div className="justify-center mt-8 font-bold ">
                    <DataItems icon={<IoIosPeople />} title="Unique Players:" value="0" />
                    <DataItems icon={<IoPeople />} title="Unique Players / Day:" value="0" />

                    <div className="flex text-lg md:text-2xl my-2 py-2 text-white bg-blue-400">
                      <div className="flex mx-auto ">New Players</div>
                    </div>

                    <DataItems icon={<MdPeopleAlt />} title="New Players:" value="0" />
                    <DataItems icon={<MdPeopleAlt />} title="New Players Retention:" value="0" />
                    <DataItems icon={<MdPeopleAlt />} title="Retention Rate:" value="0" />

                    <div className="flex text-lg md:text-2xl my-2 py-2 text-white bg-blue-400">
                      <div className="flex mx-auto ">Ticks per Second (TPS)</div>
                    </div>

                    <DataItems icon={<BsArrowClockwise />} title="Average TPS:" value="0" />
                    <DataItems icon={<BsFillClockFill />} title="Low Spike TPS:" value="0" />
                    <DataItems icon={<BiPowerOff />} title="Downtime:" value="0" />
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        ) : (
          <div>
            {/* <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
            <h1 className="text-2xl bg-blue-300 justify-center items-center text-center md:mx-96 uppercase text-white py-2"></h1>
            <p className="text-lg justify-center items-center text-center mx-4 md:mx-96 md:px-24 text-white"></p>
          </motion.div> */}
            <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
              <ul className="list-none gap-2 text-lg items-center text-justify mx-4 md:mx-96 md:px-48 mt-12 text-zinc-300">
                <li className="mt-4">This player hasn't been in the server yet.</li>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopMain;
