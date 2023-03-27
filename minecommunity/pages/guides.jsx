import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import GuideItems from "./components/GuideItems";
function guides() {
  return (
    <div>
      <motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:mx-96 mt-12">
          
          <GuideItems title="Rules" bgcolor="bg-red-300" id="map-sprite"/>
          <GuideItems title="Enchants" bgcolor="bg-purple-300" id="enchant-sprite"/>
          <GuideItems title="Eternal Sets" bgcolor="bg-purple-300" id="sets-sprite"/>
          <GuideItems title="Skills" bgcolor="bg-amber-300" id="sword-sprite"/>
          <GuideItems title="Pets" bgcolor="bg-green-300" id="pets-sprite"/>
          <GuideItems title="Hunting Ground" bgcolor="bg-red-300" id="hunt-sprite"/>
          <GuideItems title="Rankup" bgcolor="bg-purple-300" id="rankup-sprite"/>
          <GuideItems title="Relics" bgcolor="bg-purple-300" id="relics-sprite"/>

          <GuideItems title="Others" bgcolor="bg-purple-300" id="others-sprite"/>





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
