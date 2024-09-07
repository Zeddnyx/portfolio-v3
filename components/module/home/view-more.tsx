"use client";
import { FaArrowsToCircle } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ViewMore() {
  const [isClick, setIsClick] = useState(false);

  return (
    <motion.div
      className={`h-full bg-primary ${
        isClick ? "fixed inset-0 !z-50" : "flex justify-center items-center"
      }`}
      animate={{
        width: isClick ? "100%" : "auto",
        borderRadius: "0",
      }}
      initial={false}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      layout
    >
      {isClick ? (
        <div className="h-full ">
          <FaArrowsToCircle
            className="text-3xl text-background fixed bottom-10 right-10 hover:scale-90 c_transitions cursor-pointer"
            onClick={() => setIsClick(!isClick)}
          />
        </div>
      ) : (
        <button
          onClick={() => setIsClick(!isClick)}
          className="p-3 px-7 rounded-full border-2 border-background text-background font-bold hover:bg-background hover:text-primary transition-colors duration-300"
        >
          View More
        </button>
      )}
    </motion.div>
  );
}
