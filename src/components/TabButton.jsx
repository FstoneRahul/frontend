// TabButton.jsx
import { motion } from "framer-motion";

export default function TabButton({ active, onClick, children }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}                 // subtle modern hover
      whileTap={{ scale: 0.97 }}            // quick tap response
      transition={{ duration: 0.15 }}
      className="relative px-4 py-2 md:px-6 md:py-2 font-medium transition-colors"
    >
      {/* Button Text */}
      <span
        className={`${
          active ? "text-white font-semibold" : "text-white/70 hover:text-white"
        } transition-colors duration-150`}
      >
        {children}
      </span>

      {/* Active Underline */}
      {active && (
        <motion.div
          layoutId="aboutTabsUnderline"
          className="absolute left-0 right-0 -bottom-1 h-[3px] bg-white rounded-full"
          transition={{ duration: 0.22, ease: "easeOut" }}
        />
      )}
    </motion.button>
  );
}
