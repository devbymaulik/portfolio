import React from "react";

function About() {
  return (
    <section
      name="About"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 py-20 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          About <span className="text-green-600">Me</span>
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          Who I am, what I do, and why I love it.
        </p>
      </div>

      {/* Content Grid */}
      <div className="space-y-12 text-gray-700 text-base leading-relaxed">
        {/* Introduction */}
        <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow p-6 border border-gray-100">
          <p>
            Hi, I’m <strong className="text-green-600">Maulik Patel</strong> — a
            dedicated and results-driven Web Developer with over{" "}
            <strong>7 years of experience</strong> in{" "}
            <strong>WordPress development</strong> and the{" "}
            <strong>MERN Stack</strong> (MongoDB, Express.js, React.js,
            Node.js). I craft secure, high-performance solutions ranging from
            custom WordPress plugins and themes to full-stack web applications.
            Whether you're a startup, business, or agency, I bring deep
            technical knowledge and a passion for clean, scalable code to every
            project.
          </p>
        </div>

        {/* Education & Certifications */}
        <div>
          <h3 className="text-2xl text-green-600 font-semibold mb-4">
            🎓 Education & Certifications
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-3">
            <li>M.Sc. in Information Technology – HNGU, Patan</li>
            <li>B.Sc. in Information Technology – HNGU, Patan</li>
          </ul>
        </div>

        {/* Skills & Expertise */}
        <div>
          <h3 className="text-2xl text-green-600 font-semibold mb-4">
            🛠 Skills & Expertise
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-3">
            <li>
              <strong>Languages:</strong> JavaScript (ES6+), PHP, HTML5, CSS3,
              MySQL
            </li>
            <li>
              <strong>Frameworks:</strong> React, Node.js, Express.js
            </li>
            <li>
              <strong>CMS:</strong> WordPress (Custom Plugins & Themes,
              WooCommerce)
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, MySQL
            </li>
            <li>
              <strong>Tools:</strong> Git, Postman, Figma, VS Code, cPanel,
              Webpack
            </li>
            <li>
              <strong>Other:</strong> REST API Integration, Performance
              Optimization, Responsive Design, SEO Best Practices
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl text-green-600 font-semibold mb-4">
            💼 Professional Experience
          </h3>
          <ul className="space-y-4 pl-3 list-disc list-inside">
            <li>
              <strong>Senior Web Developer</strong> – Dainfomedia (2017 –
              Present)
              <br />
              Spearheaded the development of scalable web solutions using
              WordPress and the MERN stack. Delivered tailored web experiences
              across industries such as healthcare, education, and eCommerce.
            </li>
            <li>
              <strong>Freelance Developer</strong> – Remote (2017 – 2025)
              <br />
              Built custom websites and full-stack apps for global clients.
              Focused on delivering SEO-friendly, high-performance, and visually
              appealing digital solutions.
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl text-green-600 font-semibold mb-4">
            🏆 Notable Achievements
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-3">
            <li>
              Awarded <strong>Top Performer</strong> at Dainfomedia for
              consistent excellence.
            </li>
            <li>
              Recognized as the <strong>“Best Plugin Developer”</strong> in
              multiple client reviews.
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-2xl text-green-600 font-semibold mb-4">
            🚀 Mission & Values
          </h3>
          <p>
            My mission is to empower businesses with efficient, secure, and
            engaging digital solutions. I thrive on transforming ideas into
            reality through technology — with a commitment to clean code,
            user-centric design, and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
