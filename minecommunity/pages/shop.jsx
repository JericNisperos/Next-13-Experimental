import React from "react";
import GuideItems from "./components/GuideItems";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import ShopItems from "./components/ShopItems";
function shop() {
  return (
    <div className="min-h-screen">
      <motion.div>
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12">
        <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
        </motion.div>
        <motion.div className="cursor-default" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
          {/* <div class="font-bold uppercase text-gray-500">MineCommunity Shop</div> */}
          <div class="text-5xl font-bold text-white">Server Shop</div>
        </motion.div>
      </div>
      </motion.div>
      <motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:mx-48 mt-12 overflow-hidden">
          <ShopItems title="Ranks" bgcolor="bg-red-400" id="shopranks-sprite" delay={0} alt="rules" />
          <ShopItems title="Keys" bgcolor="bg-purple-400" id="enchant-sprite" delay={0.1} alt="enchants" />
          <ShopItems title="Packages" bgcolor="bg-blue-300" id="sets-sprite" delay={0.2} alt="esets" />
        </div>
      </motion.div>
    </div>
  );
}

export default shop;
