// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch('http://play.mine-smp.me:25571/v1/serverOverview?server=MineCommunity%20Guilds');
  const data = await response.json();

  res.json(data)
}
