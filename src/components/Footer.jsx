import { FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer({ className, style }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // --------------------------- SEND FORM ---------------------------
  const handleSend = async () => {
    if (!email || !message) {
      alert("Please fill in both email and message");
      return;
    }

    try {
      // Formspree needs JSON, not FormData
      const response = await fetch("https://formspree.io/f/xdkqpzbg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      console.error("Form error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // --------------------------- MAILTO HANDLER ---------------------------
  const openEmail = () => {
    const address = "info@fstonetechnologies.com";
    const mailto = `mailto:${address}`;

    // Try opening mail client
    window.location.href = mailto;

    // After a delay, if client doesn't open → ask user
    setTimeout(async () => {
      const openGmail = window.confirm(
        "If your mail app did not open, click OK to open Gmail, or Cancel to copy the email."
      );

      if (openGmail) {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${address}`,
          "_blank"
        );
      } else {
        try {
          await navigator.clipboard.writeText(address);
          alert("Email copied: " + address);
        } catch {
          alert("Please send email to: " + address);
        }
      }
    }, 600);
  };

  return (
    <footer className="bg-gray-100 pt-12 pb-8 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <button
            onClick={openEmail}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <MdEmail className="text-xl md:text-2xl text-blue-600" />
            <span className="text-sm md:text-base">
              info@fstonetechnologies.com
            </span>
          </button>

          <p className="text-gray-600 mb-6 mt-4 leading-relaxed text-sm md:text-base">
            To succeed in the complex world of technology, you need exceptional
            connections—to the right experts, opportunities and answers.
          </p>

          <h3 className="text-blue-600 font-semibold mb-3 text-lg">
            Follow Us
          </h3>

          <div className="flex items-center gap-4 md:gap-5 mb-6">
            <motion.a
              href="https://www.linkedin.com/company/fstone-technologies/"
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaLinkedin className="text-2xl md:text-3xl text-gray-600 hover:text-blue-600" />
            </motion.a>

            <motion.a
              href="https://www.twitter.com/fstonetech"
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaTwitter className="text-2xl md:text-3xl text-gray-600 hover:text-blue-600" />
            </motion.a>
          </div>
        </motion.div>

        {/* MIDDLE SECTION */}
        <motion.div
          className="flex flex-col mt-5 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-blue-600 font-semibold mb-4 text-lg">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-700">
            <motion.li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/services")}
              whileHover={{ x: 5 }}
            >
              Services
            </motion.li>

            <motion.li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/about")}
              whileHover={{ x: 5 }}
            >
              About Us
            </motion.li>

            <motion.li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/news")}
              whileHover={{ x: 5 }}
            >
              News & Views
            </motion.li>

            <motion.li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/careers")}
              whileHover={{ x: 5 }}
            >
              Career With Us
            </motion.li>

            <motion.li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/careers")}
              whileHover={{ x: 5 }}
            >
              Why a Career in Recruitment
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
          <h3 className="text-blue-600 font-semibold mb-4 text-lg">
            Have a Question?
          </h3>

          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Your message"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
            onClick={handleSend}
            className="w-full md:w-32 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-gray-500 mt-12 text-sm md:text-lg border-t border-gray-300 pt-6"
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
