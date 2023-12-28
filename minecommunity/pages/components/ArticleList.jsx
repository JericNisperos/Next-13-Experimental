import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import articles from "../api/articles.json";

const ArticleList = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white flex text-2xl font-proxima font-extrabold mt-2">
        <h1 className="flex mx-auto content-center text-center text-xl md:text-1xl">Recent Updates:</h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
        {articles.map((article, index) => (
          <motion.div
            whileHover={{ scale: 0.97 }}
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
            className="overflow-hidden border-4 border-slate-800 bg-slate-800 border-solid border-white-300 p-4 shadow-md rounded-lg"
          >
            <h2 className="text-2xl font-bold text-slate-100">{article.title}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {article.author} - {article.date}
            </p>
            <Image src={article.imagelink} alt="cover" layout="responsive" width={1084} height={610} className="object-cover rounded-lg" />
            <p className="mt-2 text-justify text-gray-100 pb-4">&nbsp;&nbsp;&nbsp;&nbsp;{article.content}</p>
            {/* <a className="text-white text-md border mx-auto border-solid border-white px-4 py-2 justify-center rounded-lg" href="https://discord.gg/dBHZtQcMsW">
              Read More
            </a> */}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ArticleList;
