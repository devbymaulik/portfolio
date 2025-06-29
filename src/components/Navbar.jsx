import React, { useState, useEffect } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  // Disable body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/80 shadow-sm">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={pic}
              className="h-11 w-11 rounded-full object-cover border"
              alt="Maulik"
            />
            <div>
              <h1 className="text-xl font-extrabold text-gray-800">
                Maulik<span className="text-green-500 text-2xl">l</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1 tracking-wide">
                Web Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="group relative cursor-pointer text-gray-700 hover:text-green-600 transition"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                >
                  {text}
                </Link>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setMenuOpen(true)}
            className="md:hidden cursor-pointer"
            aria-label="Open Menu"
          >
            <AiOutlineMenu size={26} />
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-white min-h-screen overflow-hidden flex flex-col items-center justify-center md:hidden"
          >
            {/* Close Button */}
            <div className="absolute top-5 right-5 cursor-pointer">
              <IoCloseSharp size={30} onClick={() => setMenuOpen(false)} />
            </div>

            {/* Nav Items */}
            <ul className="flex flex-col space-y-8 text-xl font-semibold">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
