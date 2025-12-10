import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [searchTerm, setSearchTerm] = React.useState("");

 const locations = [
  { 
    title: "Gurgaon, India", 
    subtitle: "Corporate Headquarter", 
    image: "gurgaon.jpg",
    address: "Plot 45, Sector 44, Gurgaon, Haryana, India"
  },
  { 
    title: "New Jersey, USA", 
    subtitle: "Corporate Headquarter", 
    image: "NewJersey.jpg",
    address: "707 State Rd, Kendall Park, New Jersey, USA"
  },
  { 
    title: "Bangalore, India", 
    subtitle: "", 
    image: "bangalore.jpg",
    address: "Koramangala, Bangalore, Karnataka, India"
  },
  { 
    title: "Doylestown, PA", 
    subtitle: "", 
    image: "doleystown.jpg",
    address: "Main Street, Doylestown, Pennsylvania, USA"
  },
  { 
    title: "Jaipur, India", 
    subtitle: "", 
    image: "jaipur.jpg",
    address: "Vaishali Nagar, Jaipur, Rajasthan, India"
  }
];

  const filteredLocations = locations.filter((loc) =>
    loc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-[#F2F2F2]">

      {/* ---------------------------- */}
      {/* TOP SECTION */}
      {/* ---------------------------- */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-semibold mb-8">Find our Locations</h1>

        {/* Search bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="flex w-full mb-12"
        >
          <input
            type="text"
            placeholder="Search for locations..."
            className="flex-grow border border-gray-300 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0075D0]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0075D0] text-white px-6 rounded-r-md transition"
          >
            Search
          </motion.button>
        </motion.div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((loc, i) => (
              <motion.div
  key={i}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.35, delay: i * 0.08 }}
  whileHover={{ scale: 1.02 }}
  className="rounded-md overflow-hidden shadow hover:shadow-xl transition cursor-pointer bg-white relative group"
>
  {/* IMAGE */}
  <div className="relative w-full h-[260px] overflow-hidden">
    <motion.img
      src={loc.image}
      alt={loc.title}
      className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

    {/* ADDRESS TEXT */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ opacity: 1, y: 0 }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
    >
      <h4 className="text-white font-semibold text-lg mb-2">{loc.title}</h4>
      <p className="text-gray-200 text-sm">{loc.address}</p>
    </motion.div>
  </div>

  {/* TITLE + SUBTITLE (STATIC BELOW) */}
  <div className="p-3">
    <h3 className="font-semibold text-[15px] text-gray-900">{loc.title}</h3>
    {loc.subtitle && (
      <p className="text-gray-500 text-[13px]">{loc.subtitle}</p>
    )}
  </div>
</motion.div>

            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">No locations found.</p>
          )}
        </div>
      </div>

      {/* ---------------------------- */}
      {/* CONTACT FORM SECTION */}
      {/* ---------------------------- */}
      <div className="w-full bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold mb-12"
          >
            Let’s get in touch
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* FORM FIELD COMPONENT */}
            {[
              { label: "First Name", type: "text" },
              { label: "Last Name", type: "text" },
              { label: "Email Address", type: "email" },
              { label: "Phone Number", type: "text" },
            ].map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <label className="text-sm text-gray-300">{field.label}</label>
                <input
                  type={field.type}
                  className="w-full bg-black border-b border-gray-600 py-3 focus:outline-none focus:border-[#0075D0] transition"
                />
              </motion.div>
            ))}

            {/* Organization */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-sm text-gray-300">Organization</label>
              <input
                type="text"
                className="w-full bg-black border-b border-gray-600 py-3 focus:outline-none focus:border-[#0075D0] transition"
              />
            </motion.div>

            {/* Country */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-sm text-gray-300">Country</label>
              <select className="w-full bg-black border-b border-gray-600 py-3 focus:outline-none focus:border-[#0075D0] transition">
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="text-sm text-gray-300">How can we help you?</label>
              <textarea
                rows="6"
                className="w-full bg-black border border-gray-600 mt-2 p-3 focus:outline-none focus:border-[#0075D0] transition"
              ></textarea>
            </motion.div>

          </div>

          {/* Submit Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0075D0] text-white px-8 py-3 rounded hover:bg-blue-700 transition"
            >
              Submit
            </motion.button>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
