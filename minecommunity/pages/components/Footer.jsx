import React from "react";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div>
      <motion.footer initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-blue-400 text-white py-3 flex justify-center mt-24">
        <p className="text-gray-300 text-center text-sm md:text-lg mx-8">
          This site was created by <span className="text-yellow-300 font-extrabold">Cyanice Blitz</span>. We are in no way affiliated with or endorsed by <span className="text-yellow-300 font-extrabold">Mojang, AB.</span>
        </p>
      </motion.footer>
    </div>
  );
}

export default Footer;
