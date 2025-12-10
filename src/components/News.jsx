import { motion } from "framer-motion";

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title:
        "FSTONE Technologies is in process of signing Joint Business Relationship with one of the Big 4.",
      date: "March 2018",
      banner: true,
    },
    {
      id: 2,
      title:
        "FSTONE Technologies has had a strong 2017, winning a number of awards, hiring top talent and expanding their national footprint beyond their New Jersey headquarter. Their most recent office opened in Jaipur (India) to support the growing clientele in US & India. What next? Dallas, TX & San Jose, CA to support local clients.",
      date: "January 2018",
    },
    {
      id: 3,
      title:
        "FSTONE Technologies entered in partnership with French based advertising giant. FSTONE will be providing consulting support in USA & India. FSTONE will be hiring staff in New Jersey & India (Gurugram & Jaipur) to support the same.",
      date: "November 2017",
    },
    {
      id: 4,
      title:
        "FSTONE Technologies is awarded 2 years Cyber Security project by one of the financial group in India. FSTONE Team is going to add 15+ resources in Bangalore office to handle & deliver the same.",
      date: "August 2018",
    },
  ];

  return (
    <div className="bg-[#F5FAFF] pb-20">
      {/* PAGE TITLE */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">News & Views</h1>

        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Whether it's out there in headlines or simply sharing our point-of-view,
          there's a lot happening in FSTONE. Take a peek and you'll see there's always
          something to talk about at FSTONE Technologies. We are Growing, we are Hiring,
          we are Expanding.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 space-y-10">
        {newsArticles.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {item.banner ? (
              /* ---------------- DARK BANNER BLOCK ---------------- */
              <motion.div
                className="bg-black relative rounded-none overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src="/NewsPage.jpg"
                  className="w-full h-40 md:h-52 object-cover opacity-80"
                  alt="FSTONE Banner"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />

                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6">
                  <motion.h2
                    className="text-white text-lg md:text-xl font-semibold max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    className="text-blue-300 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {item.date}
                  </motion.p>
                </div>
              </motion.div>
            ) : (
              /* ---------------- SIMPLE WHITE BLOCK ---------------- */
              <motion.div
                className="bg-white shadow-sm p-6 border border-gray-200"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-1 bg-blue-500 w-32 mb-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />

                <p className="text-gray-700 leading-relaxed">{item.title}</p>

                <motion.p
                  className="text-blue-600 font-medium text-sm mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.date}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
