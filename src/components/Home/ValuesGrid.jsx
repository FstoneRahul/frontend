import { motion } from "framer-motion";

const blocks = [
  { type: "image", src: "grid1.jpg" },
  { type: "text", text: "Act with uncompromising honesty and integrity", bg: "#2E236C" },
  { type: "image", src: "grid2.jpg" },

  { type: "text", text: "Safety our customer with innovative, superior quality of service.", bg: "#2F89FC" },
  { type: "image", src: "grid3.jpg" },
  { type: "text", text: "Value and develop our employees’ talents, initiative and leadership", bg: "#6A5FA6" },

  { type: "image", src: "grid4.jpg" },
  { type: "text", text: "Earn the admiration of all who are associated with ventures unlimited Inc.", bg: "#1E5D79" },
  { type: "image", src: "grid5.jpg" },
];

export default function ValuesGrid() {
  return (
   <section className="px-0 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">

    {blocks.map((block, index) => (
      <motion.div
        key={index}
        className="
          relative h-[260px] w-full overflow-hidden group
          shadow-md transition-all duration-500
          hover:shadow-xl hover:brightness-[1.05]
        "
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        {/* VIGNETTE OVERLAY */}
        <div className="absolute inset-0 pointer-events-none vignette"></div>

        {/* IMAGE BLOCK */}
        {block.type === "image" ? (
          <motion.img
            src={block.src}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          // TEXT BLOCK
          <motion.div
            className="
              w-full h-full flex items-center justify-center
              text-center text-white px-6
              transition-all duration-500 ease-out
              group-hover:scale-[1.02] group-hover:brightness-110
            "
            style={{ backgroundColor: block.bg }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {block.text}
          </motion.div>
        )}

      </motion.div>
    ))}

  </div>
</section>

  );
}
