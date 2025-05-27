import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets";

const containerClasses =
  "bg-[#FF7F50] h-screen w-full flex flex-col justify-center items-center";
const logoGlowClasses =
  "absolute w-[100px] h-[100px] rounded-full bg-white/20 blur-2xl";
const logoBoxClasses =
  "bg-white rounded-2xl p-4 w-[80px] h-[80px] shadow-2xl flex justify-center items-center relative z-10";
const headingClasses =
  "text-white text-3xl md:text-4xl font-extrabold mt-6 tracking-wide drop-shadow-lg";
const subTextClasses = "text-white mt-2 text-sm md:text-base opacity-80";

const fadeVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
};

const glowAnimation = {
  animate: { scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] },
  transition: { duration: 2, repeat: Infinity },
};

const logoBoxMotion = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

const headingMotion = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
};

const subTextMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.9, duration: 0.6 },
};

const SPLASH_HEADING_TEXT = "FOOD HUB";
const SPLASH_SUB_TEXT = "Delivering hot bites, fast & fresh! 🍕";

const Splash = () => {
  return (
    <AnimatePresence>
      <motion.div className={containerClasses} {...fadeVariant}>
        <motion.div className={logoGlowClasses} {...glowAnimation} />

        <motion.div className={logoBoxClasses} {...logoBoxMotion}>
          <img
            className="w-full h-full object-contain"
            src={logo}
            alt="Food Hub Logo"
          />
        </motion.div>

        <motion.h1 className={headingClasses} {...headingMotion}>
          {SPLASH_HEADING_TEXT}
        </motion.h1>

        <motion.p className={subTextClasses} {...subTextMotion}>
          {SPLASH_SUB_TEXT}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Splash;
