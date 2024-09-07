"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageCenter({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={`${className} relative z-[6] h-80 md:h-72 lg:h-full`}
    >
      <Image src="/sunset.jpg" alt="zedd" fill className="rounded-xl" />
    </motion.div>
  );
}
