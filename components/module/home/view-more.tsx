import { FaArrowsToCircle } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ViewMore({ isClick, setIsClick }: any) {
  useEffect(() => {
    if (isClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isClick]);

  return (
    <motion.div
      className={`h-full bg-primary ${isClick
          ? "!fixed inset-0 !z-[9999]"
          : "flex justify-center items-center"
        }`}
      animate={{
        width: isClick ? "100%" : "auto",
        borderRadius: "0",
      }}
      initial={false}
      transition={{ duration: 0.4, ease: "easeInOut" }}
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
