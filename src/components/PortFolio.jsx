import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Base Paths
const wordpressBase = "/wordpress/";
const wordpressClienBase = "/wordpress_client/";
const reactBase = "/react/";
const mern_stack = "/mern_stack/";
const node = "/node/";

// Project List with features added
const projects = [
  {
    id: 1,
    category: "MERN",
    name: "Real-time Chat App",
    images: [
      mern_stack + "chatapp-logo.png",
      mern_stack + "chatapp-home.png",
      mern_stack + "chatapp_signup.png",
      mern_stack + "chatapp-dashboard.png",
      mern_stack + "chatapp-update-profile.png",
      mern_stack + "chatapp-typing-online.png",
    ],
    description:
      "A real-time chat app with user authentication, JWT access tokens, socket.io for live messaging, typing indicators, sound notification and online status indicators. Built with MERN stack.",
    videoLink: "https://realtime-chat-app-ma9c.onrender.com/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO"],
    features: [
      "Real-time messaging with Socket.IO",
      "Typing indicator & online status",
      "JWT-based authentication",
      "Sound notifications",
      "User profile update system",
    ],
  },
  {
    id: 15,
    category: "MERN",
    name: "My Blog",
    images: [
      mern_stack + "blog-logo.png",
      mern_stack + "blog-home.png",
      mern_stack + "blog-signup.png",
      mern_stack + "blog-dashboard.png",
      mern_stack + "blog-post-details.png",
      mern_stack + "blog-like-comment.png",
      mern_stack + "blog-update-profile.png",
    ],
    description:
      "A full-featured blogging platform with user authentication, secure JWT access tokens, profile management, post creation and editing, and a real-time like and comment system. Built using the MERN stack with a clean and responsive UI.",
    videoLink: "https://my-blog-0p8p.onrender.com/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    features: [
      "User authentication with JWT",
      "Create, edit, and delete blog posts",
      "Like & comment on posts in real-time",
      "Update profile and avatar",
      "Responsive dashboard UI",
    ],
  },
  {
    id: 2,
    category: "React",
    name: "Portfolio Website",
    images: [reactBase + "portfolio-home.png", reactBase + "portfolio.png"],
    description:
      "A sleek personal portfolio website made with React and Tailwind CSS, featuring animations, smooth scrolling, and filtering options.",
    videoLink: "https://devmaulik.netlify.app/",

    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Project filtering by category",
      "Animated modals with image carousels",
      "Smooth scroll and section navigation",
      "Framer Motion animations",
      "Responsive layout with Tailwind CSS",
    ],
  },
  {
    id: 9,
    category: "React",
    name: "AMC - Annual Maintenance Contract System",
    images: [
      reactBase + "amc_logo.png",
      reactBase + "amc-preview_image.jpg",
      reactBase + "amc_admin_view.png",
      reactBase + "amc_userview.png",
    ],
    description:
      "A React + Laravel-based AMC system for handling user subscriptions, renewal notifications, contract statuses, and client management.",
    videoLink: "https://amc.pushnifty.com/#/session/demo-login/",
    tech: ["React.js", "Laravel", "MySQL", "MatX React - Material UI"],
    features: [
      "User authentication and role-based access (Admin/User)",
      "Contract subscription management",
      "Auto-renewal and expiry alerts",
      "Admin dashboard for customer tracking",
      "Customer panel for viewing service status",
    ],
  },
  {
    id: 15,
    category: "WordPress",
    name: "NiftyHMS",
    images: [
      wordpressClienBase + "hms-logo.png",
      wordpressClienBase + "hms_home.png",
      wordpressClienBase + "hms_dashboard_2.png",
      wordpressClienBase + "hms_patient_details.png",
      wordpressClienBase + "hms-appointment-booking.png",
      wordpressClienBase + "hms-chatboat.png",
      wordpressClienBase + "hms-whatsapp-chat.png",
    ],
    description:
      "Cloud-based WordPress Hospital Management System (HMS) plugin with dedicated access roles for Admin, Doctor, Nurse, and Patient. It supports appointment bookings, patient records, billing, and real-time WhatsApp chatbot integration for patient interaction.",
    videoLink: "https://apps.niftyhms.com/general/",
    tech: ["WordPress", "PHP", "MySQL", "Bootstrap", "WhatsApp Chatbot"],
  },
  {
    id: 3,
    category: "WordPress",
    name: "School Management System",
    images: [
      wordpressBase + "school_logo.png",
      wordpressBase + "school_preview_image.jpg",
      wordpressBase + "school_dashboard.png",
    ],
    description:
      "Complete WordPress school management plugin with separate access for Admin, Teacher, Student, and Parent. Manages admissions, attendance, exams, and communication.",
    videoLink: "https://school.pushnifty.com/school-management-login-page/",
    tech: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Multiple user roles: Admin, Teacher, Student, Parent, Support Staff",
      "Admission and attendance management",
      "Exam management and marks tracking",
      "Parent-teacher communication tools",
      "Responsive UI with role-based dashboards",
      "Hostel and library management modules",
      "Online fee payment system",
      "Email and SMS notifications",
      "Advanced reporting and analytics",
    ],
  },
  {
    id: 4,
    category: "WordPress",
    name: "WPGYM - Gym Management Plugin",
    images: [
      wordpressBase + "gym_logo.png",
      wordpressBase + "gym_preview_image.jpg",
      wordpressBase + "gym_admin_dashboard.png",
      wordpressBase + "gym_front_registration.png",
      wordpressBase + "membership_list_frontend.png",
    ],
    description:
      "WordPress plugin to manage gym memberships, trainers, sessions, and schedules. Includes front-end registration and subscription tracking.",
    videoLink:
      "https://pushnifty.com/mojoomla/extend/wordpress/gym/gym-management-login-page/",
    tech: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Gym membership management with payment integration",
      "Trainer scheduling and assignment",
      "Workout and nutrition plan assignment",
      "Front-end registration form for members",
      "Session planning and attendance tracking",
      "Subscription tracking with renewal reminders",
      "Email and SMS notifications",
      "Online class integration with Zoom",
      "Internal messaging module for member communication",
    ],
  },
  {
    id: 5,
    category: "WordPress",
    name: "Hospital Management System",
    images: [
      wordpressBase + "hospital_logo.png",
      wordpressBase + "hospital_dashboard.png",
    ],
    description:
      "Comprehensive hospital management WordPress plugin supporting roles for Doctors, Nurses, Patients, and Admin with appointment booking, medical records, and staff scheduling.",
    videoLink: "https://pushnifty.com/mojoomla/extend/wordpress/hospital/",
    tech: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Doctor, Nurse, Patient role management",
      "Appointment scheduling",
      "Medical record storage",
      "Admin staff scheduling",
      "Billing and hospital reports",
    ],
  },
  {
    id: 6,
    category: "WordPress",
    name: "WPCRM - CRM for CF7 & WooCommerce",
    images: [
      wordpressBase + "crm_logo.png",
      wordpressBase + "crm_market.png",
      wordpressBase + "crm_dashboard.png",
    ],
    description:
      "A CRM plugin for WordPress that integrates with Contact Form 7 and WooCommerce to manage leads, tasks, quotes, invoices, and customers.",
    videoLink: "https://pushnifty.com/mojoomla/extend/wordpress/wpcrm/login/",
    tech: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "Bootstrap",
      "MySQL",
    ],
    features: [
      "Integration with Contact Form 7 for lead capture",
      "Lead and task management with assignment",
      "Quote and invoice generation with PDF support",
      "WooCommerce customer and order synchronization",
      "Customizable CRM dashboard with filters and widgets",
      "Bulk SMS and WhatsApp notifications for marketing groups",
      "Add events and tasks to calendar for easy scheduling and tracking",
    ],
  },
  {
    id: 7,
    category: "WordPress",
    name: "WooCommerce Warranty & Return System",
    images: [
      wordpressBase + "wrs_logo.png",
      wordpressBase + "wrs_markting.png",
      wordpressBase + "wrs_dashboard.png",
      wordpressBase + "wrs_general_setting.png",
    ],
    description:
      "WooCommerce add-on for managing product warranties and return requests with automation and status tracking.",
    videoLink: "https://pushnifty.com/mojoomla/extend/wordpress/warranty/",
    tech: ["WooCommerce", "WordPress", "PHP", "MySQL"],
    features: [
      "Manage product warranties",
      "Return request automation",
      "Status updates for returns",
      "User & admin notifications",
      "WooCommerce compatible",
    ],
  },
  {
    id: 8,
    category: "WordPress",
    name: "Cart2CRM - WooCommerce & SugarCRM Integration",
    images: [
      wordpressBase + "cart2crm_logo.png",
      wordpressBase + "Cart2CRM_marketing.png",
      wordpressBase + "Cart2CRM__marketing_1.png",
      wordpressBase + "Cart2CRM_sugarcrmonection.png",
      wordpressBase + "Cart2CRM_sugarcrmfieldmapping.png",
    ],
    description:
      "Sync WooCommerce customer and order data to SugarCRM. Provides mapping and syncing settings directly from the WordPress dashboard.",
    videoLink: "https://pushnifty.com/mojoomla/extend/wordpress/cart2crm/",
    tech: ["WordPress", "PHP", "SugarCRM", "SuiteCRM", "WooCommerce", "MySQL"],
    features: [
      "WooCommerce to SugarCRM sync",
      "Field mapping from WP dashboard",
      "Real-time sync configuration",
      "CRM order and customer tracking",
      "Support for SuiteCRM and SugarCRM",
    ],
  },
  {
    id: 10,
    category: "WordPress",
    name: "Material Based Spicy Form",
    images: [
      wordpressBase + "spicy-logo.png",
      wordpressBase + "spicy_login_demo.jpg",
      wordpressBase + "spicy_form.png",
    ],
    description:
      "Spicy form uses latest material design concept and you can create any type of form like contact form, Lead capture form, poll or survey. Your site user will just love to fill the form resulting in higher conversion ratio after all. The admin panel provides form generator and option to customize form display.",
    videoLink: "https://pushnifty.com/mojoomla/extend/wordpress/spicy-form/",
    tech: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Material design responsive form UI",
      "Drag-and-drop form builder",
      "Polls, surveys, and lead forms",
      "Admin panel for customization",
      "Shortcode support for any page",
    ],
  },
  {
    id: 11,
    category: "WordPress",
    name: "Paymaster - Multipurpose Payment Gateway",
    images: [
      wordpressBase + "logo.png",
      wordpressBase + "paymaster_marleting.jpg",
      wordpressBase + "preview-image.png",
    ],
    description: "Paymaster - Multipurpose Payment Gateway",
    videoLink: "#",
    tech: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: ["Multiple payment gateway integration"],
  },
  {
    id: 12,
    category: "WordPress",
    name: "SMSmaster – Multipurpose SMS Gateway for Wordpress",
    images: [
      wordpressBase + "sms_logo.png",
      wordpressBase + "sms_master_marketing.jpg",
      wordpressBase + "smsmaster_setting.png",
    ],
    description: "SMSmaster – Multipurpose SMS Gateway for Wordpress",
    videoLink: "#",
    tech: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Send bulk SMS via gateway",
      "WooCommerce SMS notifications",
      "Gateway settings in admin panel",
    ],
  },
  {
    id: 13,
    category: "WordPress",
    name: "WP Realty - Real Estate Plugin for Wordpress",
    images: [
      wordpressBase + "realty_logo.png",
      wordpressBase + "realty_preview-image.png",
      wordpressBase + "reality_dashboard.png",
      wordpressBase + "realty_edit_property.png",
      wordpressBase + "realt_property_list.png",
      wordpressBase + "realty_property_details.png",
    ],
    description:
      "WP Realty – Real Estate Plugin for Wordpress is ideal way to manage your real estate agency and manage property agents. The plugin has front end for property search, listing and backend for complete Real estate operation management.",
    videoLink: "http://pushnifty.com/mojoomla/extend/wordpress/wp-estate/",
    tech: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Frontend property listing and search functionality",
      "Admin backend property management",
      "Agent profile and contact form integration",
      "Responsive property detail view for all devices",
      "Location and price-based filters for easy search",
      "Membership management for users and agents",
      "Customizable add property form with flexible fields",
      "Secure payment integration for property listings and services",
    ],
  },
  {
    id: 14,
    category: "Node",
    name: "NiftyEWS – Loan Management System",
    images: [node + "NiftyEWS_logo.jpg", node + "ews.png"],
    description: "NiftyEWS – Loan Management System",
    videoLink: "http://ews.niftysol.com:3000/",
    tech: ["Node"],
    features: [
      "Loan customer management",
      "EMI schedule & payment tracking",
      "Loan application approval system",
      "Customer dashboard for payment history",
      "Admin dashboard for tracking all clients",
    ],
  },
];

const filters = ["All", "MERN", "React", "WordPress", "Node"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeFilter);

  return (
    <section name="Portfolio" className="max-w-screen-2xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          My Project <span className="text-green-600">Portfolio</span>
        </h2>
        <p className="text-gray-500 text-lg mt-3">
          Filter by category to explore apps and plugins built using React,
          Node.js, WordPress, and more.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full border font-semibold text-sm transition-all duration-300 shadow-sm backdrop-blur-md hover:scale-105 ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <motion.div
            layout
            key={project.id}
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-48 object-contain rounded-md bg-gray-50"
            />
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {project.name}
              </h3>
              <p className="text-xs font-medium text-blue-500 uppercase mt-1">
                {project.category}
              </p>
              <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl w-full max-w-4xl p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {/* Swiper Image Gallery */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              className="rounded-lg mb-6"
            >
              {selectedProject.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Slide ${idx}`}
                    className="w-full h-80 object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedProject.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedProject.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-red-500 text-3xl font-bold self-start sm:self-auto"
              >
                &times;
              </button>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Features Section */}
            {selectedProject.features &&
              selectedProject.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((t, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={selectedProject.videoLink}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow"
              >
                Live Demo
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-full text-sm font-medium shadow"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
