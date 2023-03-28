import React from "react";
import { motion } from "framer-motion";
import GuideItems from "../components/GuideItems";
import GuidesBack from "../components/GuidesBack";

function rules() {
  return (
    <>
    <GuidesBack />
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12">
        <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
          <div className={`h-[150px] w-[150px] flex rounded-lg bg-red-400`}>
            <motion.span initial={{ scale: 1.0 }} id="map-sprite" className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span>
          </div>
        </motion.div>
        <motion.div className="cursor-default" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
          <div class="font-bold uppercase text-gray-500">MineCommunity Guide</div>
          <div class="text-5xl font-bold text-white">Rules</div>
        </motion.div>
      </div>
      <div>
        <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
          <h1 className="text-2xl bg-red-400 justify-center items-center text-center md:mx-96 uppercase text-white py-2">MineCommunity Chat and Communication Rules</h1>
          <p className="text-lg justify-center items-center text-center mx-4 md:mx-96 md:px-24 text-white">
            This applies to the entire Mine Community Network chat and by extension, other Communication Media (in-game items such as books, signs, renamed items, etc)
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
          <ul className="list-none gap-2 text-lg items-center text-justify mx-4 md:mx-96 md:px-48 mt-12 text-zinc-300">
            <li className="mt-4">
              1. <span className="font-black text-red-400">Treat other players with proper courtesy and respect.</span> This includes using language that can take away another player's gaming experience. By extension, be cordial when
              speaking to a staff member.
            </li>
            <li className="mt-4">
              2. <span className="font-black text-red-400">Harassment of any form is not tolerated.</span> This includes, but is not limited to (a) disclosing private information without permission, (b) pestering MineCommunity players
              whether in-game, discord or other platforms (i.e., Facebook) and (c) other similar forms of harassment and/or coercion.
            </li>
            <li className="mt-4">
              3. <span className="font-black text-red-400">Cursing is not allowed.</span> Excessive use of foul and vulgar language is prohibited. Additionally, racist, sexist, discriminatory, and other similar remarks are not allowed.
            </li>
            <li className="mt-4">
              4. <span className="font-black text-red-400">Do not advertise.</span> This includes other servers not affiliated with the MineCommunity Network, websites, mods, and others.
            </li>
            <li className="mt-4">
              5. <span className="font-black text-red-400">Do not spam and flood.</span> Participating in spam trains and repeatedly sending a message more than twice is forbidden. Similarly, excessive use of capped letters is also
              prohibited.
            </li>
            <li className="mt-4">
              6. <span className="font-black text-red-400">Do not threaten to hack or exploit.</span> Do not state or imply that you will attack the server or other players using any form of DOS, DDOS, and similar threats even without
              intent of doing so.
            </li>
            <li className="mt-4">
              7. <span className="font-black text-red-400">Avoid direct messaging Staff.</span> Do not message staff in a private message. Use the appropriate chat channels for your concerns (e.g., player reports should be in the reports
              channel, etc).
            </li>
            <li className="mt-4">
              8. <span className="font-black text-red-400">Never impersonate any staff member.</span> Imitating admins, mods and other Mine Community personnel is prohibited. Similarly, imitating broadcast, staff nicknames, etc is likewise
              not allowed.
            </li>
          </ul>
        </motion.div>
      </div>

      <div>
        <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}>
          <h1 className="text-2xl bg-red-400 justify-center items-center text-center md:mx-96 uppercase text-white py-2 mt-24">MineCommunity Survival Series Server Rules</h1>
          <p className="text-lg justify-center items-center text-center mx-4 md:mx-96 md:px-24 text-white">Enlisted below are the rules applicable within the Survival Servers.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}>
          <ul className="list-none gap-2 text-lg items-center text-justify mx-4 md:mx-96 md:px-48 mt-12 text-zinc-300">
            <li className="mt-4">
              1. <span className="font-black text-red-400">Be respectful.</span> This is a game. Enjoy what minecraft has to offer - have fun, and don't get frustrated when things go south. We discourage toxic behavior within our community.
            </li>
            <li className="mt-4">
              2. <span className="font-black text-red-400">Griefing is not allowed.</span> Do not destroy, place or build on others' constructions. Unless granted permission to do so, do not remove, destroy, and add to another player's
              build. This also includes abandoned builds. Claiming unclaimed bases that’s not yours is not allowed, You wouldn’t want others claiming your builds, right?
            </li>
            <li className="mt-4">
              3. <span className="font-black text-red-400">Do not steal.</span> Always ask for permission when using and taking other’s stuff. Whether it's an overpowered dead bush or a measly beacon, don't take any item that doesn’t belong
              to you without asking first. Abandoned areas and builds (including unclaimed areas) and '/trusted' players taking items without due consent are all violations of this rule.
            </li>
            <li className="mt-4">
              4. <span className="font-black text-red-400">Respect other player's territory.</span> Some players like to keep their own areas private. If asked to leave their place, respect their decision. After all, their house, their
              rules.
            </li>
            <li className="mt-4">
              5. <span className="font-black text-red-400">Inappropriate builds are not allowed.</span> Do not incorporate offensive images, figures, symbols, and the likes in your builds. This also includes map designs and banner patterns.
            </li>
            <li className="mt-4">
              6. <span className="font-black text-red-400">Report bugs, exploits, and glitches immediately to mods and admins.</span> This enables us to work through the game-breaking advantages that a player discovers. It is forbidden to
              use, abuse, and exploit such mechanics and unintended features. Stating or implying to exploit bugs or alike are not allowed.
            </li>
            <li className="mt-4">
              7. <span className="font-black text-red-400">No hacked clients, mods, or exploits.</span> Client-based modifications (other than Optifine) or exploits to the game are not allowed (This includes but is not limited to: Forge,
              lightloader, movement hacks, X-ray, Killaura, Maps, Afk clickers/Autoclickers etc.) Some mods are allowed. However, it is best to consult with staff before using the mod. This also includes claiming to have hacks.
            </li>
            <li className="mt-4">
              8. <span className="font-black text-red-400">Duping Items is a serious offense.</span> Do not dupe items using in-game glitches, plug-in bugs, and other exploits. Items don't duplicate themselves y'know ;)
            </li>
            <li className="mt-4">
              9. <span className="font-black text-red-400">Do not attempt to hack the server.</span> This server forbids any player to Dox, DDoS, Bot Attack and other equivalent facets. Violation of this rule constitutes an ip-ban.
            </li>
            <li className="mt-4">
              10. <span className="font-black text-red-400">No alts allowed.</span> No more than 1 account per player is allowed to play on the server. If multiple players are found using the same IP address, make sure that no one from your
              cluster gets ip banned. Bad apples can spoil the entire bunch - in this case your ip address.
            </li>
            <li className="mt-4">
              11. <span className="font-black text-red-400">Do not build farms and other similar contraptions that would lag the server.</span> This includes but is not limited to, (a) zero-tick farms/Quantum-tick farms, (b) massive
              redstone-based mechanisms, (c) hopper-intensive builds, (d) high-entity count farms, (e) etc. Including a killswitch for farms and building compact redstone contraptions is highly encouraged. Basically don't lag the server
              out.
            </li>
            <li className="mt-4">
              12. <span className="font-black text-red-400">Do not beg for free stuff.</span> Asking nicely less once or twice is acceptable. Also, asking staff to restore items upon death nor blatantly asking for items from staff members
              is not allowed.
            </li>
            <li className="mt-4">
              13. <span className="font-black text-red-400">Do not accuse other players without evidence.</span> Insufficient evidence or lack thereof is not tolerated. Similarly, faking evidence and false reports results in an ip ban.
            </li>
            <li className="mt-4">
              14. <span className="font-black text-red-400">Do not ask for staff permissions.</span> If you plan to be a staff member, check if there’s an opening in the discord. Applications within the game shall not be entertained.
            </li>
            <li className="mt-4">
              15. <span className="font-black text-red-400">Additional rules may be added by the staff.</span> Mine Community reserves the right to add, edit, and remove certain rules and enforce them if the need arises.
            </li>
          </ul>
        </motion.div>
        <div>
          <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}>
            <h1 className="text-2xl justify-center items-center text-center md:mx-96 text-white py-2 mt-12 mb-24">
              If you don't know if your Mod, Resource Pack or any client modification is allowed or not, feel free to{" "}
              <span className="text-blue-400 cursor-pointer hover:underline" href="https://discord.com/invite/minecommunity" target="_blank">
                create a ticket in Discord
              </span>{" "}
              so we can clarify it for you. Fail to report a modded client will result in a <span className="text-red-400 font-extrabold uppercase">permanent ban</span>.
            </h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default rules;
