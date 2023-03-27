import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function GuideItems({ title, bgcolor, id }) {
  return (
    <motion.div whileHover={{scale: 0.97}}>
      <div className={`h-[250px] w-[250px] flex mx-auto rounded-lg ${bgcolor}`}>
      <motion.a  initial={{scale: 1.5 }} id={id} className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.a>
      </div>
      <div className="text-white text-3xl mx-auto flex justify-center font-extrabold">{title}</div>
    </motion.div>
  );
}

export default GuideItems;
