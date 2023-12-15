"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';



const TextReplacer = ({labels, thisInterval}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % labels.length);
    },thisInterval);

    return () => clearInterval(interval); 
  }, []);

 
  
  const letters = labels[currentTextIndex].split('');


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={labels[currentTextIndex]}
    >
      {letters.map((letter,index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0,y: 20 }} 
          animate={{ opacity: 1,y: 0,transition: { delay: index * 0.1 } }} 
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );


};

export default TextReplacer;
