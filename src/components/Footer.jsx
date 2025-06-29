import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-20">
        {/* Call to Action */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-700 pb-8 gap-4">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Let’s build something <span className="text-red-500">great</span>{" "}
            together!
          </h2>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            spy={true}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition-all cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-sky-400 transition-colors"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <FaLinkedinIn size={22} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8 text-sm space-y-1">
          <p>
            <span className="text-gray-400">Email: </span>
            <a
              href="mailto:maulik.patel.dev@gmail.com"
              className="underline hover:text-white transition"
            >
              maulik.patel.dev@gmail.com
            </a>
          </p>
          <p>
            <span className="text-gray-400">Phone: </span>
            <a
              href="tel:+917567412283"
              className="underline hover:text-white transition"
            >
              +91 7567412283 / 9512610761
            </a>
          </p>
          <p>
            <span className="text-gray-400">Location: </span>Ahmedabad, India
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 tracking-wide">
          &copy; {new Date().getFullYear()} Maulik Patel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
