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
    <section
      name="Experience"
      className="w-full bg-gradient-to-br from-gray-100 to-white py-20"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            My <span className="text-green-600">Experience</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Over <strong>7+ years</strong> of experience working with web
            technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skills.map((group, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-gray-700 border-l-4 border-blue-500 pl-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.items.map(({ id, logo, name }) => (
                  <div
                    key={id}
                    className="bg-white/50 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md p-5 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <img
                      src={logo}
                      alt={name}
                      className="w-16 h-16 object-contain mb-3"
                    />
                    <p className="text-gray-800 font-medium text-center text-sm">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
