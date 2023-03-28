import { useRouter } from 'next/router'
import React from 'react'
import GuidesBack from '../components/GuidesBack';
import { motion } from 'framer-motion';
function ShopMain(context) {

    const router = useRouter();
    const query = router.query;
  return (
    <div className='min-h-screen'>
     <GuidesBack />
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mb-16 mt-12 ">
        <motion.div className="overflow-hidden" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
          <div className={`h-[150px] w-[150px] flex rounded-lg ${query.color}`}>
            <motion.span initial={{ scale: 1.0 }} id={`shop${query.shopid}-sprite`} className="w-[100px] text-center items-center flex mx-auto my-auto"></motion.span>
          </div>
        </motion.div>
        <motion.div className="cursor-default" initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
          <div class="font-bold uppercase text-gray-500">MineCommunity Guide {context.params}</div>
          <div class="text-5xl font-bold text-white capitalize ">{query.shopid}</div>
        </motion.div>
      </div>
      <div>
        {/* <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
          <h1 className="text-2xl bg-blue-300 justify-center items-center text-center md:mx-96 uppercase text-white py-2"></h1>
          <p className="text-lg justify-center items-center text-center mx-4 md:mx-96 md:px-24 text-white"></p>
        </motion.div> */}
        <motion.div initial={{ opacity: 0, y: "10%" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
          <ul className="list-none gap-2 text-lg items-center text-justify mx-4 md:mx-96 md:px-48 mt-12 text-zinc-300">
            <li className="mt-4">
              This page hasn't been created yet. Might want to check back later? I think?
            </li>
            
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default ShopMain