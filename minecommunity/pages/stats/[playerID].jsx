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
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
function PlayerDataViewer(context) {
  const router = useRouter();
  const query = router.query;

  const [stats, setStats] = useState();
  const [nickname, setNickname] = useState();
  const [imageType, setImageType] = useState("bust");

  const [imageLink, setImageLink] = useState(`https://visage.surgeplay.com/${imageType}/1c6804056bf64fdeaac21002b4d6ebc0`);

  // console.log(stats);

  useEffect(() => {
    try {
      async function fetchData() {
        const data = await fetch(`/api/plan-player?player=${query.playerID}`);
        const res = await data.json();
        setStats(res);
        const secondData = await fetch(`/api/mcmodel?player=${query.playerID}&type=${imageType}`);
        const res2 = await secondData.text();
        setImageLink(res2);
        // console.log(res2);
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
  // console.log(stats?.info?.online);
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

  //value={`${stats?.kill_data?.mob_kills_total.toLocaleString("en-US")} / ${stats?.kill_data?.mob_deaths_total} / ${stats?.kill_data?.mob_kdr_total} `}
  const KDR = [
    { name: "Kills", value: stats?.kill_data?.mob_kills_total },
    { name: "Death", value: stats?.kill_data?.mob_deaths_total },
  ];

  return (
    <div className="min-h-screen">
      {/* <GuidesBack /> */}
      <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
        <Link href="/stats">
          <div className="text-white font-extrabold text-2xl ml-4 md:ml-96 mt-8 cursor-pointer hover:bg-white hover:text-black inline-block py-1 px-2 rounded-lg">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Statistics{" "}
          </div>
        </Link>
      </motion.div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12">
        <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
          <div className={`h-[150px] w-[150px] flex rounded-lg ${query.color}`}>
            {/* <motion.span initial={{ scale: 1.0 }} id={`shop${query.shopid}-sprite`} className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span> */}
            {/* <Image src={`https://mc-heads.net/avatar/${query.playerID}`} width={150} height={80} alt="MCHead" priority="High" className="w-auto h-auto" /> */}
            <Image src={imageLink} width={150} height={80} priority="High" className="w-auto h-auto" />
          </div>
          {/* <div className="text-center">
          <button onClick={(e) => {setImageType("full")}} className="text-white">A</button>
          <button onClick={(e) => {setImageType("face")}} className="text-white">B</button>
          <button onClick={(e) => {setImageType("bust")}} className="text-white">C</button>

          </div> */}
        </motion.div>
        <motion.div className="cursor-default " initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
          {nickname ? (
            //   <div className="text-5xl font-bold text-white "><HtmlContent html={nickname}/></div>
            <div className="flex">
              <div className="text-5xl font-bold text-white ">{query.playerID}</div>
              {stats?.info.online ? (
                <div className="rounded-full bg-green-400 w-4 h-4 tooltip">
                  <span className="tooltiptext">Online</span>
                </div>
              ) : (
                <div className="rounded-full bg-red-400 w-4 h-4 tooltip">
                  <span className="tooltiptext flex w-[350px]">Offline (Last Seen: {stats?.info?.last_seen})</span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-5xl font-bold text-white text-center md:text-left ">{query.playerID}</div>
          )}
          <div className="flex mx-auto justify-center md:mx-none md:justify-normal">
            <div className="font-bold uppercase text-gray-500">
              <HtmlContent html={stats?.extensions?.[0].extensionData?.[13].tabs?.[0].values?.[3]?.value?.toLocaleString() || "No Guild"} />

              {/* {stats?.extensions?.[0].extensionData?.[12].tabs?.[0].values?.[0].value ? stats?.extensions?.[0].extensionData?.[12].tabs?.[0].values?.[0].value.replace("default,", "").replace("default", "beginner") : "UNRANKED"} */}
            </div>
          </div>
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
                <div className="col-span-1 md:col-span-1 rounded-lg gap-4">
                  <div className="grid grid-cols-2 items-center justify-center mx-auto rounded-lg mb-8 gap-4">
                    <div className="col-span-1 text-center bg-green-200 p-4 rounded-lg items-center justify-center mx-auto ">
                      <Image src="https://visage.surgeplay.com/face/512/02b0e86dc86a4ae7bc41015d21f80c1c" width={95} height={50} priority="High" className="w-auto h-auto items-center justify-center mx-auto" />
                      <p className="text-gray-800 text-xl font-bold">{stats?.kill_data?.mob_kills_total.toLocaleString("en-US")} Mob Kills</p>
                    </div>
                    <div className="col-span-1 text-center bg-red-200 p-4 rounded-lg items-center justify-center mx-auto ">
                      <Image src="https://visage.surgeplay.com/face/512/756300a9b13f4823aac6c8f8fb287fd7" width={95} height={50} priority="High" className="w-auto h-auto items-center justify-center mx-auto" />
                      <p className="text-gray-800 text-xl font-bold">{stats?.kill_data?.player_kills_total.toLocaleString("en-US")} Player Kills</p>
                    </div>
                  </div>
                  <div className="flex px-4 text-center justify-center py-4 rounded-tl-lg rounded-tr-lg bg-blue-400">
                    <p className="text-lg md:text-2xl text-white font-semibold">Player Statistics</p>
                  </div>
                  <div className="justify-center pt-4 pb-4 font-bold bg-blue-100 rounded-bl-lg rounded-br-lg">
                    {/* <DataItems
                      icon={<IoMdClock />}
                      title="Player KDR:"
                      value={`${stats?.kill_data?.player_kills_total.toLocaleString("en-US")} K / ${stats?.kill_data?.player_deaths_total} D / ${stats?.kill_data?.player_kdr_total} Ratio`}
                    /> */}
                    {/* <DataItems icon={<IoPeople />} title="Mob KDR:" value={`${stats?.kill_data?.mob_kills_total.toLocaleString("en-US")} / ${stats?.kill_data?.mob_deaths_total} / ${stats?.kill_data?.mob_kdr_total} `} /> */}
                    <DataItems icon={<IoPeople />} title="Money:" value={`₱ ${stats?.extensions?.[0].extensionData?.[4].tabs?.[0]?.values?.[0].value.toLocaleString("en-US")}`} />
                    {/* <div className="border border-gray-700 mx-8"></div> */}

                    {/* <DataItems icon={<IoPeople />} title="Jobs:" value={`${stats?.extensions?.[0].extensionData?.[6].tabs?.[0].values?.[0]?.value?.toLocaleString()}`} /> */}
                    {/* <DataItems icon={<IoPeople />} title="Playtime:" value={`${stats?.extensions?.[0].extensionData?.[13].tabs?.[0].values?.[4]?.value?.toLocaleString()}`} /> */}
                    <DataItems icon={<IoPeople />} title="Playtime:" value={`${stats?.info?.playtime?.toLocaleString()}`} />
                    <DataItems icon={<IoPeople />} title="Last Seen:" value={`${ stats?.info?.last_seen}`} />
                    {/* stats?.info.online */}
                    <DataItems icon={<IoPeople />} title="Job Level:" value={`${stats?.extensions?.[0].extensionData?.[13].tabs?.[0].values?.[2]?.value?.toLocaleString() + " Levels" || 0}`} />
                    <DataItems icon={<IoPeople />} title="McMMO Level:" value={`${stats?.extensions?.[0].extensionData?.[13].tabs?.[0].values?.[1]?.value?.toLocaleString("en-US") || "Checking"}`} />

                    {/* <DataItems icon={<IoPeople />} title="McMMO Level:" value={`${stats?.extensions?.[0].extensionData?.[10].tabs?.[0].values?.[0].value?.toLocaleString()}`} /> */}

                    {/* <DataItems icon={<AiOutlineLineChart />} title={`Best Peak `} value="0" /> */}
                    {/* <div className="border border-gray-700 mx-8"></div> */}
                    {/* <DataItems icon={<GiBroadsword />} title="Overall Player Kills:" value="0" /> */}
                    {/* <DataItems icon={<GiDeathSkull />} title="Overall Player Deaths:" value="0" /> */}

                    {/* <DataItems icon={<GiFishMonster />} title="Overall Mob Kills:" value="0" /> */}
                  </div>
                </div>

                {/* <div className="col-span-1 rounded-lg bg-blue-100 shadow-md shadow-white">
                  <div className="flex px-4 text-center justify-center py-4 rounded-tl-lg rounded-tr-lg bg-blue-400">
                    <p className="text-lg md:text-2xl text-white font-semibold">Last 7 Days</p>
                  </div>
                  <div className="justify-center pt-8 font-bold ">
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
export const config = {
  api: {
    responseLimit: '8MB',
  },
}
export default PlayerDataViewer;
