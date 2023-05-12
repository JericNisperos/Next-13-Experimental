"use client";
import React, { useEffect, useState } from "react";

function TotalPlayers() {
  const [totalPlayers, setTotalPlayers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`http://play.mine-smp.me:25571/v1/serverOverview?server=MineCommunity%20Guilds`);
      const res = await data.json();
      setTotalPlayers(res.numbers.online_players);
      // console.log(totalPlayers);
    }

    fetchData();
  }, []);
  return <div>{totalPlayers}</div>;
}

export default TotalPlayers;
