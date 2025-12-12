import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import FstoneIMG from '../assets/FstoneIMG.png';
export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "News & Views", path: "/news" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Careers", path: "/careers", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const currentItem = navItems.find((item) => item.path === location.pathname);
    if (currentItem) {
      setActive(currentItem.name);
    }
  }, [location.pathname]);

  return (
    <motion.nav
      className="w-full bg-white h-20 flex items-center px-4 md:px-10 shadow-lg backdrop-blur-sm border-b border-blue-100 relative z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center w-32 md:w-48"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={FstoneIMG}
          loading="lazy"
          alt="Fstone Logo"
          onClick={() => navigate("/")}
          className="h-10 md:h-12 cursor-pointer"
        />
      </motion.div>

      {/* Desktop Menu */}
      <motion.ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-[15px] font-medium text-gray-700 mx-auto">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            onClick={() => {
              setActive(item.name);
              navigate(item.path);
            }}
            className={`cursor-pointer pb-1 transition-all duration-300 flex items-center gap-1
              ${
                active === item.name
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`}
          >
            {item.name}
            {item.hasDropdown }
          </motion.li>
        ))}
      </motion.ul>


      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden ml-auto text-gray-700"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <FiX size={26} color="#1f2937" />
        ) : (
          <FiMenu size={26} color="#1f2937" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-20 left-0 w-full bg-white shadow-lg border-t border-blue-100 md:hidden z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`cursor-pointer px-6 py-3 flex items-center justify-between
                    ${
                      active === item.name
                        ? "bg-blue-50 border-r-4 border-blue-500 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <FiChevronDown size={14} />}
                </motion.li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
