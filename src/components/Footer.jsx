import { FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer({ className, style }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!email || !message) {
      alert("Please fill in both email and message");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <footer
      className={`w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 py-12 md:py-20 px-4 md:px-10 border-t border-blue-100 ${className || ""}`}
      style={style}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

        {/* LEFT SECTION */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="FstoneIMG.png"
            alt="Fstone Logo"
            className="w-32 md:w-44 mb-6"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            To succeed in the complex world of technology, you need exceptional
            connections—to the right experts, the right opportunities and the right answers.
          </p>

          <h3 className="text-blue-600 font-semibold mb-3 text-lg">Follow Us on</h3>

          <div className="flex items-center gap-4 md:gap-5 mb-6">
          
            <motion.a
                href="https://www.linkedin.com/company/fstone-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-block"
              >
                <FaLinkedin className="text-2xl md:text-3xl text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
              </motion.a>
                  <motion.a
                href="https://www.twitter.com/fstonetech"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-block"
              >
                <FaTwitter className="text-2xl md:text-3xl text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
              </motion.a>
          </div>

          <a href="mailto:info@fstonetechnologies.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
            <MdEmail className="text-xl md:text-2xl text-blue-600" />
            <span className="text-sm md:text-base">info@fstonetechnologies.com</span>
          </a>
        </motion.div>

        {/* MIDDLE SECTION */}
        <motion.div
          className="flex flex-col mt-5 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-blue-600 font-semibold mb-4 text-lg md:text-xl">Quick Links</h3>

          <ul className="space-y-3 text-gray-700">
            <motion.li
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200 text-sm md:text-base"
              onClick={() => navigate('/services')}
              whileHover={{ x: 5 }}
            >
              Services
            </motion.li>
            <motion.li
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200 text-sm md:text-base"
              onClick={() => navigate('/about')}
              whileHover={{ x: 5 }}
            >
              About Us
            </motion.li>
            <motion.li
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200 text-sm md:text-base"
              onClick={() => navigate('/news')}
              whileHover={{ x: 5 }}
            >
              News & Views
            </motion.li>
            <motion.li
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200 text-sm md:text-base"
              onClick={() => navigate('/careers')}
              whileHover={{ x: 5 }}
            >
              Career with us
            </motion.li>
            <motion.li
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200 text-sm md:text-base"
              onClick={() => navigate('/careers')}
              whileHover={{ x: 5 }}
            >
              Why a career in Recruitment
            </motion.li>
          </ul>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          className="flex flex-col mt-5 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-blue-600 font-semibold mb-4 text-lg md:text-xl">Have a question?</h3>

          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Your message"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
            onClick={handleSend}
            className="w-full md:w-32 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-gray-500 mt-12 md:mt-16 text-sm md:text-lg border-t border-gray-200 pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Copyright 2025 by Fstone Technologies
      </motion.div>
    </footer>
  );
}
