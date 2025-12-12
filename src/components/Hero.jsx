import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import heroImg from "../assets/HeroImg.jpg";

export default function Hero({ className, style }) {
  return (
    <section className={`w-full bg-gradient-to-br from-white to-blue-50 py-12 md:py-20 px-4 md:px-12 ${className || ''}`} style={style}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-14">

        <motion.div
          className="w-full lg:w-[460px] h-[300px] lg:h-[380px] rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={heroImg} loading="lazy" alt="Hero Image" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
        </motion.div>

        <motion.div
          className="flex flex-col text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We serve Solutions to fit the business needs
          </motion.h1>

          <motion.p
            className="text-gray-600 max-w-2xl mb-8 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            At FSTONE, we strive to deliver value through the combination of right
            people, processes, technologies and program management solutions.
          </motion.p>

          <motion.button
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold
             hover:bg-blue-700 w-fit mx-auto lg:mx-0 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect <FiArrowRight size={18} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
