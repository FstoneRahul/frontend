import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    { img: "dtcc.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", size: "h-[50px]" },
    { img: "tata.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", size: "h-[90px]" },
    { img: "infosys.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", size: "h-[90px]" },
  ];

  return (
    <section className="py-20 px-10 bg-transparent ">
      <motion.h2
        className="text-3xl font-semibold font-['Urbanist'] mb-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Partners we are with
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">

        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >

            {/* Logo Box */}
            <motion.div
              className="h-[120px] w-[300px] flex items-center justify-center overflow-hidden rounded-md transition-all duration-500 transform hover:scale-105 hover:shadow-md bg-white"
              whileHover={{ scale: 1.05, rotateY: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={partner.img}
                alt="partner logo"
                className={`${partner.size} w-auto object-contain`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Text */}
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
            >
              Strategic partnerships drive innovation and growth. We collaborate with industry leaders to deliver exceptional value to our clients.
            </motion.p>
            <motion.button
              className="mt-3 text-blue-600 hover:underline"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Learn more →
            </motion.button>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
