import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import GuideItems from "./components/GuideItems";
function guides() {

  
  return (
    <div>
      <motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:mx-96 mt-12 overflow-hidden">
          
          <GuideItems title="Rules" bgcolor="bg-red-400" id="map-sprite" delay={0} alt="rules"/>
          <GuideItems title="Enchants" bgcolor="bg-purple-400" id="enchant-sprite" delay={0.1}  alt="enchants"/>
          <GuideItems title="Eternal Sets" bgcolor="bg-blue-300" id="sets-sprite" delay={0.2}  alt="esets"/>
          <GuideItems title="Skills" bgcolor="bg-amber-300" id="sword-sprite" delay={0.3}  alt="skills"/>
          <GuideItems title="Pets" bgcolor="bg-green-300" id="pets-sprite" delay={0.4}  alt="pets"/>
          <GuideItems title="Hunting Ground" bgcolor="bg-red-300" id="hunt-sprite" delay={0.5}  alt="hunt"/>
          <GuideItems title="Rankup" bgcolor="bg-zinc-300" id="rankup-sprite" delay={0.6}  alt="rankup"/>
          <GuideItems title="Relics" bgcolor="bg-lime-300" id="relics-sprite" delay={0.7}  alt="relics"/>
          <GuideItems title="Others" bgcolor="bg-purple-300" id="others-sprite" delay={0.8}  alt="others"/>
        </div>
      </motion.div>
    </div>
  );
}

export default guides;
