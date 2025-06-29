import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import reactLogo from "../../public/reactjs.png";
const projects = [
  {
    id: 1,
    category: "MERN",
    name: "Real-time Chat App",
    images: [reactLogo, reactLogo, reactLogo],
    description:
      "Full-featured MERN-based chat app with login, JWT auth, socket.io, typing indicator, and online status tracking.",
    videoLink: "#",
    tech: ["MongoDB", "Express", "React", "Node"],
  },
  {
    id: 2,
    category: "React",
    name: "Portfolio Website",
    images: [reactLogo, reactLogo],
    description:
      "Responsive portfolio website built using React.js and TailwindCSS with smooth scroll and section navigation.",
    videoLink: "#",
    tech: ["React", "Tailwind"],
  },
];

const filters = ["All", "MERN", "React", "WordPress"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeFilter);

  return (
    <section name="Portfolio" className="max-w-screen-2xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">My Projects</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Explore featured works and discover what I’ve built using React, MERN,
          and more.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full border font-medium transition-all duration-300 ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        layout
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <motion.div
            layout
            key={project.id}
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-white rounded-xl shadow-lg p-5 border hover:shadow-2xl transition-all group"
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-40 object-contain rounded"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{project.category}</p>
              <p className="text-gray-600 text-sm line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative shadow-2xl animate-fadeIn">
            <button
              className="absolute top-2 right-4 text-gray-400 hover:text-red-500 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              className="rounded-lg mb-5"
            >
              {selectedProject.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Slide ${idx}`}
                    className="w-full h-72 object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <h2 className="text-2xl font-bold mb-1 text-gray-800">
              {selectedProject.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {selectedProject.category}
            </p>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((t, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.videoLink}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded shadow"
              >
                Live Demo
              </a>
              <button
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 text-sm rounded shadow"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
