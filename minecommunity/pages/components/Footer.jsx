import React from "react";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div  className="max-w-[1446px] mx-auto">
      <motion.footer initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-blue-500 text-white py-3 flex justify-center mt-24">
        <p className="text-gray-800 text-center text-sm md:text-lg mx-8">
          This site was created by <span className="text-white font-extrabold">Cyanice Blitz</span>. We are in no way affiliated with or endorsed by <span className="text-white font-extrabold">Mojang, AB.</span>
        </p>
      </motion.footer>
    </div>
  );
}

export default Footer;
