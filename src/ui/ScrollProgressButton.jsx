import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import arrowUp from "../assets/arrowUp.json";

const SIZE = 56;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ScrollProgressButton() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setProgress(0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
    
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
    
      const percent = Math.min(
        100,
        Math.max(0, (scrollTop / docHeight) * 100)
      );
    
      setProgress(Math.round(percent));
    };    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (progress < 5) return null;

  return (
    <AnimatePresence>
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-[#0B0B10] border border-[#1f2330]
          flex items-center justify-center cursor-pointer
        "
      >
        {/* SVG Progress Ring */}
        <svg width={SIZE} height={SIZE} className="absolute">
          {/* Background */}
          <circle
            stroke="#1f2330"
            fill="transparent"
            strokeWidth={STROKE}
            r={RADIUS}
            cx={SIZE / 2}
            cy={SIZE / 2}
          />

          {/* Progress */}
          <motion.circle
            stroke="#ffffff"
            fill="transparent"
            strokeWidth={STROKE}
            strokeLinecap="round"
            r={RADIUS}
            cx={SIZE / 2}
            cy={SIZE / 2}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            initial={false}
            animate={{ strokeDashoffset: offset }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </svg>

        {/* Center Content */}
        <div className="relative text-white flex items-center justify-center">
          {progress >= 95 ? (
            <Lottie animationData={arrowUp} loop className="w-10 h-10" />
          ) : (
            <span className="font-semibold text-sm">{progress}%</span>
          )}
        </div>
      </motion.button>
    </AnimatePresence>
  );
}

export default ScrollProgressButton;
