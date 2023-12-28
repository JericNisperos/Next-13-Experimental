import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function GuideItems({ title, bgcolor, id, delay, alt }) {
  // const itemVariants = {
  //     hidden: {
  //       opacity: 0,
  //       y: 50
  //     },
  //     visible: (i) => ({
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         delay: i * 0.2, // multiply delay by 0.2 to get the desired delay for each item
  //         duration: 0.5
  //       }
  //     })
  //   }

  return (
    <div>
      {/* <Link href={{ pathname: `/guides/${alt}`, query: { color: bgcolor } }}> */}
      <Link href={{ pathname: `/guides/${alt}` }}>
        <motion.div className="overflow-hidden" whileHover={{ scale: 0.97 }} initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } }}>
          <div className={`h-[250px] w-[250px] flex mx-auto rounded-lg cursor-pointer ${bgcolor}`}>
            <motion.span initial={{ scale: 1.5 }} id={id} className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span>
          </div>
          <div className="text-white text-3xl mx-auto flex justify-center font-extrabold capitalize">{title}</div>
        </motion.div>
      </Link>
    </div>
  );
}

export default GuideItems;
