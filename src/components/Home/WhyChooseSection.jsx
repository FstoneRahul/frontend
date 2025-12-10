import { motion } from "framer-motion";

export default function WhyChooseSection() {
  return (
    <section className="py-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* IMAGE PLACEHOLDER - Office Team Image */}
      <motion.div
        className="bg-gray-300 h-[300px] w-full mt-10 rounded-md flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Add your image here later */}

        <motion.img
          src="Whychoose.jpg"
          alt=""
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        <p className="text-gray-600"></p>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-semibold font-['Urbanist']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Why choose FSTONE
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Because we believe in building long-term partnerships and delivering maximum value.
        </motion.p>

        <motion.button
          className="mt-6 border border-black px-4 py-2 w-fit hover:bg-black hover:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More →
        </motion.button>
      </motion.div>
    </section>
  );
}
