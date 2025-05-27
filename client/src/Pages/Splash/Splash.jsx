import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets";

const Splash = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-[#FF7F50] h-screen w-full flex flex-col justify-center items-center" // Using the orange color
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white rounded-lg p-2 w-[60px] h-[60px] shadow-lg flex justify-center items-center" // Adjusted size and added flex for centering
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img
            className="w-full h-full object-contain"
            src={logo}
            alt="Food Hub Logo"
          />
        </motion.div>
        <motion.h1
          className="text-white text-2xl font-bold mt-4"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        >
          FOOD HUB
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Splash;
