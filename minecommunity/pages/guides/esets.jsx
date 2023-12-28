import React from "react";
import { motion } from "framer-motion";
import GuideItems from "../components/GuideItems";
import GuidesBack from "../components/GuidesBack";

function esets() {

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mx-8">
        <GuidesBack />
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12 ">
          <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
            <div className={`h-[150px] w-[150px] flex rounded-lg bg-blue-400`}>
              <motion.span initial={{ scale: 1.0 }} id="sets-sprite" className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span>
            </div>
          </motion.div>
          <motion.div className="cursor-default" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
            <div class="font-bold uppercase text-gray-500">MineCommunity Guide</div>
            <div class="text-5xl font-bold text-white">Eternal Sets</div>
          </motion.div>
        </div>
        <div>
          <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
            <h1 className="text-2xl bg-blue-400 mx-auto max-w-6xl justify-center items-center text-center uppercase text-white py-2">Enchantment types</h1>
            {/* <p className="max-w-6xl text-lg justify-center items-center text-center mx-auto text-white">
              This applies to the entire Mine Community Network chat and by extension, other Communication Media (in-game items such as books, signs, renamed items, etc)
            </p> */}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
            <ul className="list-none gap-2 text-lg items-center text-justify mx-4 mt-12 text-zinc-300">
              <ul>
                  <li className="mt-4">
                    &nbsp;&nbsp;&nbsp;&nbsp;Custom enchantments are a <span className="font-black text-purple-400">unique feature</span> in our Minecraft server that allows players to add{" "}
                    <span className="font-black text-purple-400">powerful and exclusive</span> enchantments to their weapons and armor. You can equip <span className="font-black text-purple-400">13 max enchantments</span> on each of your tools and armor and can choose from <span className="font-black text-purple-400">450+ different enchantments</span> from the server.
                  </li>
                  <li className="mt-4">
                    &nbsp;&nbsp;&nbsp;&nbsp;To access our custom enchantments, players can visit the <span className="font-black text-purple-400">Enchanter NPC</span> or simply type{" "}
                    <span className="font-black text-purple-400">/e or /enchanter</span> in the chat. This will provide access to <span className="font-black text-purple-400">8 different levels</span> of enchantments tailored specifically for our
                    server.
                  </li>
                  <li className="mt-4">
                    &nbsp;&nbsp;&nbsp;&nbsp;In addition, we offer the <span className="font-black text-purple-400">Tinkerer</span>, which allows players to recycle{" "}
                    <span className="font-black text-purple-400">Magic Dusts into Experience</span>, and the <span className="font-black text-purple-400">Alchemist</span>, where books and dust can be combined to create{" "}
                    <span className="font-black text-purple-400">higher-level enchantments</span>.
                  </li>
                  <li className="mt-4">
                    &nbsp;&nbsp;&nbsp;&nbsp;Furthermore, you can explore the <span className="font-black text-purple-400">/warp aeshop</span> to discover enchantment items and take advantage of our exciting{" "}
                    <span className="font-black text-purple-400">weekly sales</span>.
                  </li>
              </ul>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );


  // (
  //   <>
  //     <GuidesBack />
  //     <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12">
  //       <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
  //         <div className={`h-[150px] w-[150px] flex rounded-lg bg-blue-300`}>
  //           <motion.span initial={{ scale: 1.0 }} id="sets-sprite" className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span>
  //         </div>
  //       </motion.div>
  //       <motion.div className="cursor-default" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
  //         <div class="font-bold uppercase text-gray-500">MineCommunity Guide</div>
  //         <div class="text-5xl font-bold text-white">Eternal Sets</div>
  //       </motion.div>
  //     </div>
  //     <div>
  //       <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
  //         <h1 className="text-2xl bg-blue-300 justify-center items-center text-center md:mx-96 uppercase text-white py-2">Custom Armor Sets</h1>
  //         <p className="text-lg justify-center items-center text-center mx-4 md:mx-96 md:px-24 text-white"></p>
  //       </motion.div>
  //       <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
  //         <ul className="list-none gap-2 text-lg items-center text-justify mx-4 md:mx-96 md:px-48 mt-12 text-zinc-300">
  //           <li className="mt-4">
  //             &nbsp;&nbsp;&nbsp;&nbsp;Custom enchantments are a feature in some Minecraft servers or mods that allow players to add unique and powerful enchantments to their weapons and armor. These enchantments are not available in vanilla
  //             Minecraft and are often specific to the server or mod.
  //           </li>
  //           <li className="mt-4">
  //             &nbsp;&nbsp;&nbsp;&nbsp;To add a custom enchantment to a weapon or armor, players must use an enchanting table or anvil, just like they would with vanilla enchantments. However, instead of choosing from a list of preset
  //             enchantments, they must drag and drop the custom enchantment onto the weapon or armor.
  //           </li>
  //           <li className="mt-4">
  //             &nbsp;&nbsp;&nbsp;&nbsp;The success rate of adding a custom enchantment varies depending on the server or mod. Some servers may have a 100% success rate, while others may have a lower rate that can be increased with certain
  //             items, such as dust or crystals.
  //           </li>
  //           <li className="mt-4">
  //             &nbsp;&nbsp;&nbsp;&nbsp;Dust or crystals can be obtained through gameplay or purchased from other players, and they are used to increase the success rate of adding custom enchantments. The more dust or crystals a player uses,
  //             the higher their chances of successfully adding the enchantment.
  //           </li>
  //           <li className="mt-4">
  //             &nbsp;&nbsp;&nbsp;&nbsp;However, even with high success rates, there is still a chance that the custom enchantment will fail to apply. In these cases, players can use a blackscroll to remove a random enchantment from the
  //             weapon or armor, making room for the custom enchantment to be applied in a future attempt.
  //           </li>
  //           <li className="mt-4">
  //             &nbsp;&nbsp;&nbsp;&nbsp;Overall, custom enchantments are a fun and powerful way for players to enhance their gameplay experience and make their weapons and armor more unique and powerful. However, they can also be costly and
  //             time-consuming to obtain, so players should carefully consider their options before investing in them.
  //           </li>
  //         </ul>
  //       </motion.div>
  //     </div>
  //   </>
  // );
  
}

export default esets;
