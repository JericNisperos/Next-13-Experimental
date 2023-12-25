import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function GuidesBack() {
  return (
    <div className="max-w-6xl mx-auto">
    <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
        <Link  href="/guides">
      <div className="text-white font-extrabold text-2xl mt-8 cursor-pointer hover:bg-white hover:text-black inline-block py-1 px-2 rounded-lg">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Guides{" "}
      </div>
      </Link>
    </motion.div>
    </div>
    
  );
}

export default GuidesBack;
