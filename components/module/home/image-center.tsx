"use client";
import CImage from "@/components/shared/c-image";
import { ImgProfile } from "@/constant";
import { motion } from "framer-motion";

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
        <CImage
          src={ImgProfile}
          alt="jaenudin portfolio"
          className="rounded-xl object-cover"
          fill
        />
      </motion.div>
    </motion.div>
  );
}
