// http://play.mine-smp.me:25571/v1/extensionData?server=MineCommunity%20Guilds

export default async function handler(req = {}, res = {}) {
    const response = await fetch('http://play.mine-smp.me:25571/v1/extensionData?server=MineCommunity%20Guilds');
    const data = await response?.json();
  
    res.json(data);
  }
  