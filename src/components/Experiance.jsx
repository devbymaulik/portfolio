import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";

function Experience() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { id: 1, logo: html, name: "HTML5" },
        { id: 2, logo: css, name: "CSS3" },
        { id: 3, logo: javascript, name: "JavaScript" },
        {
          id: 4,
          logo: "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",
          name: "React.js",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          id: 5,
          logo: "https://cdn.iconscout.com/icon/free/png-256/express-9-1175170.png",
          name: "Express.js",
        },
        {
          id: 6,
          logo: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
          name: "PHP",
        },
        {
          id: 7,
          logo: "https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png",
          name: "Node.js",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          id: 8,
          logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
          name: "MySQL",
        },
        {
          id: 9,
          logo: "https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png",
          name: "MongoDB",
        },
      ],
    },
    {
      category: "CMS / Platforms",
      items: [
        {
          id: 10,
          logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg",
          name: "WordPress",
        },
      ],
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
          {" "}
          My Experience
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          Over <strong>7+ years</strong> working with diverse technologies
        </p>
      </div>

      <div className="space-y-10">
        {skills.map((group, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-l-4 border-blue-500 pl-3">
              {group.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {group.items.map(({ id, logo, name }) => (
                <div
                  key={id}
                  className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-5 flex flex-col items-center justify-center hover:scale-105 transition duration-300"
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <p className="text-gray-800 font-medium text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
