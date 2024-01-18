export default async function handler(req = {}, res = {}) {
    const response = await fetch(`${process.env.DISCORD_API}`);
    const data = await response?.json();
    res.json(data);
  }