import { motion } from "framer-motion";

export default function AboutSection({ title, content, image, reverse }) {
  return (
    <section
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 lg:gap-20`}
    >
      {/* --- IMAGE --- */}
      {image && (
        <motion.img
          src={image}
          alt={title}
          className="
            w-full
            max-w-[520px]
            h-auto
            object-cover
            rounded-xl
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.015]
          "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* --- TEXT BLOCK --- */}
      <motion.div
        className="flex-1 text-gray-700 leading-relaxed text-[15px] md:text-[16px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
          {title}
        </h2>

        <p className="whitespace-pre-line text-gray-600">{content}</p>
      </motion.div>
    </section>
  );
}
