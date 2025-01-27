import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import CountUp from "./ReactBitsComponents/CountUp";
function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingComplete(true);
    }, 3000); // 3 seconds for the count-up animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoadingComplete ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="font-bold text-9xl text-pinkCustom font-SquidFont">
            <CountUp
              from={0}
              to={102}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text"
            />
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <HeroSection />
        </motion.div>
      )}
    </>
  );
}

export default App;
