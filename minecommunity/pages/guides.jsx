import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import GuideItems from "./components/GuideItems";
function guides() {

  
  return (
    <div>
      <motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:mx-96 mt-12 overflow-hidden">
          
          <GuideItems title="Rules" bgcolor="bg-red-300" id="map-sprite" delay={0}/>
          <GuideItems title="Enchants" bgcolor="bg-purple-300" id="enchant-sprite" delay={0.1}/>
          <GuideItems title="Eternal Sets" bgcolor="bg-purple-300" id="sets-sprite" delay={0.2}/>
          <GuideItems title="Skills" bgcolor="bg-amber-300" id="sword-sprite" delay={0.3}/>
          <GuideItems title="Pets" bgcolor="bg-green-300" id="pets-sprite" delay={0.4}/>
          <GuideItems title="Hunting Ground" bgcolor="bg-red-300" id="hunt-sprite" delay={0.5}/>
          <GuideItems title="Rankup" bgcolor="bg-purple-300" id="rankup-sprite" delay={0.6}/>
          <GuideItems title="Relics" bgcolor="bg-purple-300" id="relics-sprite" delay={0.7}/>

          <GuideItems title="Others" bgcolor="bg-purple-300" id="others-sprite" delay={0.8}/>





          {/* <GuideItems title="Tutorials" imagesrc="https://i.imgur.com/LykJjtd.png" bgcolor="bg-red-300" alt="tutorials"/>
          <GuideItems title="Enchantments" imagesrc="https://i.imgur.com/LykJjtd.png" bgcolor="bg-red-300" alt="enchantments"/>
          <GuideItems title="Skills" imagesrc="https://i.imgur.com/LykJjtd.png" bgcolor="bg-red-300" alt="skills"/>
          <GuideItems title="Pets" imagesrc="https://i.imgur.com/LykJjtd.png" bgcolor="bg-red-300" alt="pets"/>
          <GuideItems title="Hunting Ground" imagesrc="https://i.imgur.com/LykJjtd.png" bgcolor="bg-red-300" alt="hunting-ground"/>
          <GuideItems title="Rankup" imagesrc="https://i.imgur.com/LykJjtd.png" bgcolor="bg-red-300" alt="rankup"/>
          <GuideItems title="Relics" imagesrc="https://i.imgur.com/LykJjtd.png" bgcolor="bg-red-300" alt="relics  "/> */}
        </div>
      </motion.div>
    </div>
  );
}

export default guides;
