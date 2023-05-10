export default async function handler(req = {}, res = {}) {
    // const playerName = req.playerName;
    // console.log(req);
    const playerName = await req.query.player;
    const response = await fetch(`http://play.mine-smp.me:25571/v1/player?server=MineCommunity%20Guilds&player=${playerName}`);
    const data = await response?.json();
  
    res.json(data);
    // console.log(req);
  }
  