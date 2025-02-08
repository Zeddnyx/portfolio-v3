"use client";
import { motion } from "framer-motion";

const ends = {
  topLeft: { x: "100%", y: "100%" },
  top: { x: "0%", y: "50%" },
  topRight: { x: "-100%", y: "100%" },
  centerLeft: { x: "100%", y: "0%" },
  centerRight: { x: "-100%", y: "0%" },
  bottomLeft: { x: "100%", y: "-100%" },
  bottomCenter: { x: "0%", y: "-100%" },
  bottomRight: { x: "-100%", y: "-100%" },
} as const;

export interface ICard {
  className?: string;
  delay: number;
  end: keyof typeof ends;
  children: React.ReactNode;
  id?: string;
}

export default function Card({
  className = "",
  delay,
  end,
  children,
  id,
}: ICard) {
  const initial = ends[end];

  return (
    <motion.div
      id={id}
      className={`${className} card`}
      initial={{ scale: 0, x: initial.x, y: initial.y }}
      animate={{ scale: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
