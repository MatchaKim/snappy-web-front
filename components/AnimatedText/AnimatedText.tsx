"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface AnimatedTextProps {
  children: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
  const [highlightCount, setHighlightCount] = useState(0);
  const characters = children.split("");

  useEffect(() => {
    if (highlightCount >= characters.length) return;

    const interval = setInterval(() => {
      setHighlightCount((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [highlightCount, characters.length]);

  return (
    <motion.div
      initial={{
        y: 45,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: "easeIn",
        duration: 0.4,
      }}
    >
      <span>
        {characters.map((char, index) => (
          <span
            key={index}
            className={`transition-colors duration-300 ${
              index < highlightCount
                ? "text-2xl font-bold break-words whitespace-nowrap text-black dark:text-white"
                : "inherit text-2xl font-bold break-words whitespace-nowrap text-gray-300 dark:text-gray-600"
            }`}
          >
            {char}
          </span>
        ))}
      </span>
    </motion.div>
  );
};
