import React from "react";
import { motion } from "framer-motion";
import gurgaonImg from "../assets/gurgaon.jpg";
import newjerseyImg from "../assets/NewJersey.jpg";
import bangaloreImg from "../assets/bangalore.jpg";
import doylestownImg from "../assets/doleystown.jpg";
import jaipurImg from "../assets/jaipur.jpg";

export default function Contact() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    country: "India",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

 const locations = [
  { 
    title: "Gurgaon, India", 
    subtitle: "Corporate Headquarter", 
    image: gurgaonImg,
    address: "Plot 45, Sector 44, Gurgaon, Haryana, India"
  },
  { 
    title: "New Jersey, USA", 
    subtitle: "Corporate Headquarter", 
    image: newjerseyImg,
    address: "707 State Rd, Kendall Park, New Jersey, USA"
  },
  { 
    title: "Bangalore, India", 
    subtitle: "", 
    image: bangaloreImg,
    address: "Koramangala, Bangalore, Karnataka, India"
  },
  { 
    title: "Doylestown, PA", 
    subtitle: "", 
    image: doylestownImg,
    address: "Main Street, Doylestown, Pennsylvania, USA"
  },
  { 
    title: "Jaipur, India", 
    subtitle: "", 
    image: jaipurImg,
    address: "Vaishali Nagar, Jaipur, Rajasthan, India"
  }
];

  const filteredLocations = locations.filter((loc) =>
    loc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Contact form data:', formData);

    if (!formData.email || !formData.message) {
      alert("Please fill in email and message");
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('organization', formData.organization);
    formDataToSend.append('country', formData.country);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/xdkqpzbg', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          organization: "",
          country: "India",
          message: ""
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* FORM FIELD COMPONENT */}
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "text" },
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
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
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
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
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
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full bg-black border-b border-gray-600 py-3 focus:outline-none focus:border-[#0075D0] transition"
              >
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
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-black border border-gray-600 mt-2 p-3 focus:outline-none focus:border-[#0075D0] transition"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="md:col-span-2 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0075D0] text-white px-8 py-3 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </motion.button>
            </motion.div>

          </form>

        </div>
      </div>

    </div>
  );
}
