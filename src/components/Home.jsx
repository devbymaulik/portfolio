import React from "react";

import pic from "../../public/photo.avif";

import { FaSquareFacebook, FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress, SiWordpress, SiPhp } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <section
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 md:mt-24 space-y-6 order-2 md:order-1">
            <span className="text-lg text-gray-500">
              Welcome to my portfolio
            </span>

            <div className="text-3xl md:text-5xl font-extrabold text-gray-800">
              <h1 className="mb-2">Hi, I'm a</h1>
              <ReactTyped
                className="text-red-600"
                strings={[
                  "WordPress Developer",
                  "MERN Stack Developer",
                  "Full-Stack Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              I specialize in building responsive, scalable, and SEO-optimized
              websites. With over 7 years of experience, I create custom
              WordPress solutions and full-stack web applications using the MERN
              stack.
            </p>

            <p className="text-gray-700 text-lg">
              Looking for a dependable developer to bring your ideas to life?{" "}
              <span className="text-red-600 font-semibold">Let’s connect!</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="maulik_patel.pdf"
                download
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded shadow-md transition duration-300"
              >
                Download Resume
              </a>

              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium px-6 py-3 rounded shadow-md cursor-pointer transition duration-300"
              >
                Hire Me
              </Link>
            </div>

            {/* Social Links & Skills */}
            <div className="flex flex-col md:flex-row justify-between mt-10 gap-6">
              {/* Social Media */}
              <div className="space-y-3">
                <h2 className="font-semibold text-gray-800 text-center">
                  Available on
                </h2>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://www.facebook.com/share/14DWRpUzJQ6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-600 hover:text-blue-600 transition"
                  >
                    <FaSquareFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-600 hover:text-blue-700 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpRJ92ZAhQO1NaI48CMBiQQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-600 hover:text-red-600 transition"
                  >
                    <IoLogoYoutube />
                  </a>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h2 className="font-semibold text-gray-800 text-center">
                  Tech I Work With
                </h2>
                <div className="flex flex-wrap justify-center gap-5 text-3xl text-gray-700">
                  <SiWordpress className="hover:text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
                  <SiMongodb className="hover:text-green-600 hover:scale-110 transition-transform cursor-pointer" />
                  <SiExpress className="hover:text-gray-700 hover:scale-110 transition-transform cursor-pointer" />
                  <FaReact className="hover:text-blue-400 hover:scale-110 transition-transform cursor-pointer" />
                  <FaNodeJs className="hover:text-green-500 hover:scale-110 transition-transform cursor-pointer" />
                  <SiPhp className="hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 order-1 md:order-2 flex justify-center md:mt-16">
            <img
              src={pic}
              alt="Maulik Patel"
              className="rounded-full w-72 h-72 md:w-[400px] md:h-[400px] object-cover shadow-lg border"
            />
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Home;
