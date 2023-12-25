import { useState } from "react";
import { motion } from "framer-motion";

const ArticleList = () => {
  const articles = [
    { id: 1, title: "Article 1", excerpt: "This is the excerpt for Article 1" },
    { id: 2, title: "Article 2", excerpt: "This is the excerpt for Article 2" },
    { id: 3, title: "Article 3", excerpt: "This is the excerpt for Article 3" },
    { id: 4, title: "Article 4", excerpt: "This is the excerpt for Article 1" },
    { id: 5, title: "Article 5", excerpt: "This is the excerpt for Article 2" },
    { id: 6, title: "Article 6", excerpt: "This is the excerpt for Article 3" },
    // More articles...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextArticle = () => {
   setCurrentIndex((currentIndex + 3) % Math.ceil(articles.length / 3));
  };
 
  const prevArticle = () => {
   setCurrentIndex((currentIndex - 3 + Math.ceil(articles.length / 3)) % Math.ceil(articles.length / 3));
  };
 
  return (
   <div className="relative">
     <button onClick={prevArticle} className="absolute left-0 ml-4 z-10">Previous</button>
     <button onClick={nextArticle} className="absolute right-0 mr-4 z-10">Next</button>
     <div className="flex overflow-hidden space-x-4 bg-red-400 mx-4">
       {articles.slice(currentIndex * 3, (currentIndex * 3) + 3).map((article, i) => (
         <motion.div
           key={i}
           initial={{ opacity: 0, x: -100 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="w-1/4"
         >
           <h2>{article.title}</h2>
           <p>{article.excerpt}</p>
         </motion.div>
       ))}
     </div>
   </div>
  );
 };

export default ArticleList;
