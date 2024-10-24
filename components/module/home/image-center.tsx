"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageCenter({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className={`${className} relative z-[6] h-80 md:h-96 lg:h-full md:col-span-2 lg:col-span-1 bg-primary rounded-xl`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Image
          src="/sunset.jpg"
          alt="jaenudin portfolio"
          className="rounded-xl object-cover"
          fill
        />
      </motion.div>
    </motion.div>
  );
}
