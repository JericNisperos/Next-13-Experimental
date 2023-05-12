export default async function handler(req = {}, res = {}) {
    const playerName = await req.query.player;
    const response = await fetch(`${process.env.PLAN_PLAYER_API}&player=${playerName}`);
    const data = await response?.json();
  
    res.json(data);
  }
  
  export const config = {
    api: {
      responseLimit: '8MB',
    },
  }