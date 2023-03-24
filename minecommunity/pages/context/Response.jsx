import React, { createContext, useEffect } from "react";

function Response() {
  const Response = createContext();
  const [totalPlayers, setTotalPlayers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://play.mine-smp.me:25571/v1/serverOverview?server=MineCommunity%20Guilds`
      );
      const res = await data.json();
      setTotalPlayers(res.numbers.online_players);
      console.log(totalPlayers);
    }

    fetchData();
  }, []);

  return <Response.Provider value={totalPlayers}></Response.Provider>;
}

export default Response;
