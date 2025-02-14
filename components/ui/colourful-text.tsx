"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
    const colors = [
      "#f39e2f", // Base orange tone
      "#f3a22f", // Slightly lighter
      "#f3a62f", // More vibrant
      "#f3aa2f", // Even more vibrant
      "#f3ae2f", // Bright orange
      "#f3b22f", // Slightly yellowish
      "#f3b62f", // More yellowish
      "#f3ba2f", // Even more yellowish
      "#f3be2f", // Light orange-yellow
      "#f3c22f", // Bright yellow-orange
    ];
  

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
