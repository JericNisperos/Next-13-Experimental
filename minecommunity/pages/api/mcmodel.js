export default async function handler(req = {}, res = {}) {
  const playerName = await req.query.player;
  const imageType = await req.query.type;
  // console.log(imageType);
  const response = await fetch(`https://playerdb.co/api/player/minecraft/${playerName}`);
  const data = await response?.json();
  let  link = 'https://mc-heads.net/avatar/steve';
  if(data.code == "minecraft.api_failure") {
    link = `https://visage.surgeplay.com/${imageType}/1c6804056bf64fdeaac21002b4d6ebc0`;
  } else {
    const rawid = data.data?.player.raw_id;
    link = `https://visage.surgeplay.com/${imageType}/${rawid}`;
  }
  res.send(link);
}