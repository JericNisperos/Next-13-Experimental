import Head from "next/head";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosPeople, IoMdClock } from "react-icons/io";
import { IoMdPeople, IoPeople } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { BiPowerOff } from "react-icons/bi";
import { BsArrowClockwise, BsFillClockFill } from "react-icons/bs";
import { AiOutlineLineChart, AiOutlineSearch } from "react-icons/ai";
import { GiBroadsword, GiDeathSkull, GiFishMonster } from "react-icons/gi";
import { useRouter } from "next/router";
import DataItems from "../components/DataItems";

function stats() {
  const router = useRouter();

  const [totalPlayers, setTotalPlayers] = useState("64");
  const [stats, setStats] = useState("");
  const [stats2, setStats2] = useState("");
  const [playerName, setPlayerName] = useState();
  const [loading, setLoading] = useState(true);

  const [uptime, setUptime] = useState();
  const [regPlayers, setRegPlayers] = useState();
  const [onlinePlayers, setOnlinePlayers] = useState();

  const [lastPeakPlayers, setLastPeakPlayers] = useState(null);
  const [bestPeakPlayers, setBestPeakPlayers] = useState(null);
  const [overallPlayerKills, setOverallPlayerKills] = useState(null);
  const [overallPlayerDeaths, setOverallPlayerDeaths] = useState(null);
  const [overallMobKills, setOverallMobKills] = useState(null);

  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem("recentSearch")) || [];
    setRecentSearches(storedSearches);

    async function fetchData() {
      const data1 = await fetch("/api/plan");
      const res1 = await data1.json();
      // const data2 = await fetch("/api/plan-extend");
      // const res2 = await data2.json();
      setStats(res1);

      setTotalPlayers(res1.numbers.online_players);
      setUptime(stats.numbers?.current_uptime);
      setRegPlayers(stats.numbers?.regular_players);
      setOnlinePlayers(stats.numbers?.online_players);
      setLastPeakPlayers(stats.numbers?.last_peak_players);
      setBestPeakPlayers(stats.numbers?.best_peak_players);
      setOverallPlayerKills(stats.numbers?.player_kills);
      setOverallPlayerDeaths(stats.numbers?.deaths);
      setOverallMobKills(stats.numbers?.mob_kills);

      setLoading(false);
    }
    fetchData();
  }, [totalPlayers]);

  const dateToday = new Date().toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" });

  function SearchPlayer(e) {
    e.preventDefault();

    let recentSearches = JSON.parse(localStorage.getItem("recentSearch")) || [];
    if (!recentSearches.includes(playerName)) {
      if (recentSearches.length === 3) {
        recentSearches.shift();
      }
      recentSearches.push(playerName);
      localStorage.setItem("recentSearch", JSON.stringify(recentSearches));
    }
    router.push(`/stats/${playerName}`);
  }

  function SearchRecentPlayer(e) {
    const searchTerm = e.target.textContent;
    router.push(`/stats/${searchTerm}`);
  }
  return (
    <div className="min-h-screen max-w-[1446px] mx-auto">
      <Head>
        <title>MineCommunity Statistics</title>
        <meta name="description" content="Made by Cyanice Blitz Corps" />
      </Head>
      <div className="mx-auto md:mx-48 flex flex-col md:flex-row items-center md:text-left gap-10 mb-16 mt-12">
        <motion.div className="w-full cursor-default justify-between grid grid-cols-1 md:grid-cols-3" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
          <div className="col-span-2 text-lg md:text-5xl font-bold text-white">Server Statistics</div>

          <div className="col-span-1 text-lg md:text-2xl font-bold text-white grid grid-cols-1 text-center items-center">
            <p>Player Search </p>
            <form className="mx-8 md:mx-auto items-center flex justify-center placeholder-black" onSubmit={SearchPlayer} placeholder="Enter your Username">
              <input
                required
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
                className="rounded-bl-lg rounded-tl-lg border-blue-400 text-black px-2 py-2 bg-blue-200"
              />
              <button className="rounded-br-lg rounded-tr-lg bg-blue-400 p-2">
                {/* <AiOutlineSearch className="min-w-[30px] p-0"/> */}
                Search
              </button>
              {/* {recentSearches.map((query) => ( */}

              {/* ))} */}
            </form>
            <div className="flex text-sm text-white font-semibold gap-4 mx-auto text-center">
              {recentSearches.length > 0 ? <p className="flex">Recent:</p> : <p></p>}
              {recentSearches.map((search, index) => (
                <button key={index} onClick={SearchRecentPlayer} className="text-blue-400">
                  {search}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {loading ? (
        <div className="items-center w-full mx-auto flex mt-24 text-center justify-center text-white text-4xl">Loading Data. Please wait.</div>
      ) : (
        <>
          <div>
            <motion.div className="items-center justify-center mb-8" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
              <h1 className="text-lg md:text-2xl bg-blue-400 justify-center text-center mx-4 md:mx-32 uppercase text-white py-2">Server Overview</h1>
              <p className="text-lg justify-center items-center text-center text-white"></p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
              <div className="grid grid-cols-1 md:grid-cols-3  mx-4 md:mx-32 gap-x-4 gap-y-4 ">
                <div className="col-span-1 md:col-span-2 rounded-lg bg-blue-100">
                  <div className="flex px-4 text-center justify-center py-4 rounded-tl-lg rounded-tr-lg bg-blue-400">
                    <p className="text-lg md:text-2xl text-white font-semibold">Server Statistics</p>
                  </div>
                  <div className="justify-center mt-8 font-bold ">
                    <DataItems
                      // icon={<IoMdClock />}
                      title="Server Uptime:"
                      value={uptime}
                    />
                    <DataItems
                      // icon={<IoPeople />}
                      title="Total Players:"
                      value={totalPlayers}
                    />
                    <DataItems
                      // icon={<IoPeople />}
                      title="Regular Players:"
                      value={regPlayers}
                    />
                    <DataItems
                      // icon={<IoPeople />}
                      title="Currently Online:"
                      value={onlinePlayers}
                    />
                    <div className="border border-gray-700 mx-8"></div>
                    <DataItems
                      // icon={<AiOutlineLineChart />}
                      title={`Today's Peak (${dateToday}):`}
                      value={`${lastPeakPlayers} (Players)`}
                    />
                    <DataItems
                      // icon={<AiOutlineLineChart />}
                      title={`Best Peak (${stats.numbers?.best_peak_date.split(",")[0]}):`}
                      value={`${bestPeakPlayers} (Players)`}
                    />
                    <div className="border border-gray-700 mx-8"></div>
                    <DataItems
                      // icon={<GiBroadsword />}
                      title="Overall Player Kills:"
                      value={`${overallPlayerKills?.toLocaleString("en-US")} Kills`}
                    />
                    <DataItems
                      // icon={<GiDeathSkull />}
                      title="Overall Player Deaths:"
                      value={`${overallPlayerDeaths?.toLocaleString("en-US")} Deaths`}
                    />
                    <DataItems
                      // icon={<GiFishMonster />} t
                      title="Overall Mob Kills:"
                      value={`${overallMobKills?.toLocaleString("en-US")} Kills`}
                    />
                  </div>
                </div>

                <div className="col-span-1 rounded-lg bg-blue-100">
                  <div className="flex px-4 text-center justify-center py-4 rounded-tl-lg rounded-tr-lg bg-blue-400">
                    <p className="text-lg md:text-2xl text-white font-semibold">Last 7 Days</p>
                  </div>
                  <div className="justify-center mt-8 font-bold ">
                    <DataItems
                      // icon={<IoIosPeople />}
                      title="Unique Players:"
                      value={stats.last_7_days?.unique_players}
                    />
                    <DataItems
                      // icon={<IoPeople />}
                      title="Unique Players / Day:"
                      value={stats.last_7_days?.unique_players_day}
                    />

                    <div className="flex text-lg md:text-2xl my-2 py-2 text-white bg-blue-400">
                      <div className="flex mx-auto ">New Players</div>
                    </div>

                    <DataItems
                      // icon={<MdPeopleAlt />}
                      title="New Players:"
                      value={stats.last_7_days?.new_players}
                    />
                    <DataItems
                      // icon={<MdPeopleAlt />}
                      title="New Players Retention:"
                      value={stats.last_7_days?.new_players_retention}
                    />
                    <DataItems
                      // icon={<MdPeopleAlt />}
                      title="Retention Rate:"
                      value={stats.last_7_days?.new_players_retention_perc}
                    />

                    <div className="flex text-lg md:text-2xl my-2 py-2 text-white bg-blue-400">
                      <div className="flex mx-auto ">Ticks per Second (TPS)</div>
                    </div>

                    <DataItems
                      // icon={<BsArrowClockwise />}
                      title="Average TPS:"
                      value={stats.last_7_days?.average_tps}
                    />
                    <DataItems
                      //  icon={<BsFillClockFill />}
                      title="Low Spike TPS:"
                      value={stats.last_7_days?.low_tps_spikes}
                    />
                    <DataItems
                      // icon={<BiPowerOff />}
                      title="Downtime:"
                      value={stats.last_7_days?.downtime}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}

export default stats;
