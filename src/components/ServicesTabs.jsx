import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import webdev from '../assets/webdev.jpg';
import mainframe from '../assets/Mainframe.jpg';
import businessAnalysis from '../assets/BusinessAnalysis.jpg';
import softwareDev from '../assets/SoftwareDev.jpg';
import db12132 from '../assets/12132.jpg';
import network from '../assets/Network.jpg';

import technology1 from '../assets/technology1.jpg';
import consulting from '../assets/consulting.jpg';
import workforce from '../assets/workforce.avif';
import outsourcing from '../assets/outsourcing.jpg';
import resume from '../assets/resume.png';
import mind from '../assets/mind.png';
import handshake from '../assets/handshake.png';
import group from "../assets/group.png"

export default function ServicesTabs() {
  const tabs = [
    "Client Services",
    "IT Staff",
    "Technology Consulting",
    "Business Consulting",
    "Workforce Solutions",
    "Outsourcing Services",
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen pb-12 md:pb-20">
      {/* TAB BAR */}
      <motion.div
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 flex justify-center shadow-lg"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex gap-1 py-3 px-4 overflow-x-auto">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActive(index)}
              className={`px-4 md:px-6 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 whitespace-nowrap
                ${
                  active === index
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-white hover:bg-white/20"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* TAB CONTENT */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-14 px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {active === 0 && <ClientServicesContent />}
            {active === 1 && <ItStaffContent title="IT Staff" />}
            {active === 2 && <TechnologyConsultant title="Technology Consulting" />}
            {active === 3 && <BusinessConsulting title="Business Consulting" />}
            {active === 4 && <WorkforceSolutions title="Workforce Solutions" />}
            {active === 5 && <OutsourceServices title="Outsourcing Services" />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// it staff

function ItStaffCard({ image, text }) {
  return (
    <div className="border border-gray-200 shadow-sm rounded-xl p-4 h-[80px] flex items-center gap-4">
      <img
        src={image}
        className="w-[60px] h-[60px] object-cover rounded-md"
        alt={text}
      />
      <span className="text-gray-700 font-medium text-[16px]">{text}</span>
    </div>
  );
}

function ItStaffContent({ title }) {
  const skills = [
    { image: webdev, text: "Web Development" },
    { image: mainframe, text: "Mainframe Programming" },
    { image: businessAnalysis, text: "Business Analysis" },
    { image: softwareDev, text: "Software Development & Eng." },
    { image: db12132, text: "Database Development" },
    { image: network, text: "Network Engineering" },
    { image: softwareDev, text: "System Analysis" },
    { image: webdev, text: "Help Desk & Technical Support" },
  ];

  return (
    <div className="w-full bg-white text-[#333] py-16 px-6">
      {/* Top Title & Description */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-[#222]">
            {title} <br /> Augmentation
          </h1>

          <p className="mt-6 text-gray-600 text-[16px] leading-relaxed max-w-md">
            FSTONE Technologies uses its expertise, resources, and a database of
            1M+ candidates to quickly connect you with top talent that fits your
            team and goals.
          </p>
        </div>

        {/* RIGHT — DYNAMIC CARDS */}
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <ItStaffCard key={index} image={skill.image} text={skill.text} />
          ))}
        </div>
      </div>

      {/* BOTTOM CTA SECTION */}
      <div className="w-full mt-20">
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
          {/* Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

          {/* Background image - placeholder */}
          {/* <img
            src={itstaffBg}
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          /> */}

          {/* Text + Button */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white max-w-md">
            <h3 className="text-2xl font-semibold leading-relaxed">
              For more information on our IT
              <br />
              Staff Augmentation service
              <br />
              contact us today
            </h3>

            <button className="mt-6 px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
              Let’s Connect →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- CLIENT SERVICES CONTENT ------------------------------- */

function ClientServicesContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* LEFT COLUMN */}
      <div>
        <h1 className="text-5xl font-bold text-[#111] leading-tight">
          Client Services
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed text-[16px]">
          We’re a leader in attracting and retaining top talent, delivering
          comprehensive solutions for diverse workforce needs.
        </p>

        <div className="mt-10">
          <h3 className="text-[#0075D0] text-[18px] font-semibold">
            Talent Advisory Services
          </h3>

          <p className="mt-3 text-gray-600 leading-relaxed">
            With deep talent management expertise, we offer insights and advice
            to help you attract and retain a high-performing workforce.
          </p>
        </div>
      </div>

      {/* MIDDLE COLUMN */}
      <div className="border-l border-gray-300 pl-10">
        <h3 className="text-[#0075D0] text-[18px] font-semibold">
          Staffing & Recruiting Services
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          We offer contract and permanent staffing solutions to secure top
          talent for any business need.
        </p>

        <h3 className="text-[#0075D0] text-[18px] font-semibold mt-10">
          Managed Delivery Services
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          We deliver managed, project-based, and outsourced services in IT,
          engineering, clinical, and sales & marketing — driving measurable
          business results.
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="border-l border-gray-300 pl-10">
        <h3 className="text-[#0075D0] text-[18px] font-semibold">
          Search Services
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          We deliver search and executive placement services to secure the right
          leaders for your business growth.
        </p>

        <h3 className="text-[#0075D0] text-[18px] font-semibold mt-10">
          Workforce Management Services
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          We deliver end-to-end workforce solutions — from RPO and MSP to VMS
          implementation — to optimise your human capital.
        </p>
      </div>
    </div>
  );
}

// technology consultant

function TechnologyConsultant({ title }) {
  return (
    <div className="w-full">
      {/* ======================== */}
      {/* TOP HERO SECTION */}
      {/* ======================== */}
      <div className="relative w-full h-[450px] overflow-hidden">
        {/* Background Image */}
        <img
          src={technology1} // replace with your actual image
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Text */}
        <div className="absolute top-1/2 left-[120px] -translate-y-1/2 text-white max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">{title}</h1>

          <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
            We help you achieve lasting success through a strategic,
            well-designed approach that boosts performance, enhances efficiency,
            reduces costs, and improves flexibility.”
          </p>

          <button className="mt-8 px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition flex items-center gap-2">
            Let's Connect →
          </button>
        </div>
      </div>

      {/* ======================== */}
      {/* BOTTOM IMAGE + TEXT SECTION */}
      {/* ======================== */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <img
          src={db12132} // replace with your image
          alt="Section visual"
          className="w-full h-[450px] object-cover"
        />

        {/* RIGHT TEXT */}
        <div className="bg-white p-10 flex items-center">
          <p className="text-gray-700 text-[16px] leading-relaxed max-w-md">
            Our IT consulting services focus on understanding the current
            situation of your business. We get out of our way to develop the
            performance of your business, and provide you full proof and reliant
            advisory services that will definitely help you transcend your
            success to a notch higher via our innovative IT consulting services.
          </p>
        </div>
      </div>
    </div>
  );
}

// Business consulting

function BusinessConsulting({ title }) {
  return (
    <div className="w-full">
      {/* ======================== */}
      {/* TOP SECTION (White Background) */}
      {/* ======================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F5F5F5] px-20 py-20 items-center gap-10">
        {/* LEFT TEXT SECTION */}
        <div>
          <h1 className="text-5xl font-semibold text-gray-800 leading-tight mb-6">
            {title}
          </h1>

          <p className="text-gray-600 max-w-md leading-relaxed">
            {/* You will replace this text later */}
            We enable business transformation with Enterprise Application
            Services (ERP, CRM, SCM) and Business Process Management (BPM) to
            streamline, automate, and innovate with ease.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center">
          <div className="w-[450px] h-[300px] bg-gray-300 rounded-md overflow-hidden">
            {/* Replace image later */}
            <img
              src={consulting}
              alt="placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ======================== */}
      {/* BLACK SECTION */}
      {/* ======================== */}
      <div className="bg-black text-white px-20 py-24">
        {/* HEADER */}
        <h2 className="text-4xl font-semibold mb-4">Service We Offer</h2>
        <p className="text-gray-300 max-w-md mb-10">
          Explore our services designed to power innovation and efficiency
        </p>

        {/* BUTTON */}
        <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition flex items-center gap-2 mb-16">
          Let’s Connect →
        </button>

        {/* SERVICES GRID (Placeholders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-[#009ADE] text-lg font-medium pt-10">
          {[
            "Infrastructure Security",
            "Workplace Services",
            "Enterprise Computing",
            "Network & Convergence",
            "IT Management Consulting",
          ].map((item, index) => (
            <div
              key={index}
              className="relative inline-block cursor-pointer group"
            >
              {item}

              {/* Animated underline */}
              <span
                className="
        absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[#009ADE] 
        rounded-full transition-all duration-300 group-hover:w-full
      "
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// workforce Solutions

function WorkforceSolutions({ title }) {
  return (
    <div className="w-full mt-[-20px] bg-[#F5F5F5]">
      {/* TOP SECTION - TEXT LEFT, IMAGE AREA RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-20 py-24 items-center gap-10">
        {/* LEFT TEXT BLOCK */}
        <div>
          <h1 className="text-5xl font-semibold text-gray-900 leading-tight mb-6">
            {title}
          </h1>

          <p className="text-gray-600 max-w-md leading-relaxed mb-8">
            {/* You will replace this text later */}
            To help businesses navigate technological challenges, we provide
            strategic workforce solutions. This text will be updated later based
            on your Figma content.
          </p>

          <button className="px-6 py-3 border border-gray-400 rounded-md text-gray-900 hover:bg-black hover:text-white transition flex items-center gap-2">
            Let’s Connect →
          </button>
        </div>

        {/* RIGHT SIDE EMPTY IMAGE AREA */}
        <div className="w-full h-[320px] bg-gray-300 rounded-md      flex items-center justify-center">
          {/* You will insert your Workforce Solutions image here later */}
         <img src={workforce} alt="" />
        </div>
      </div>
    </div>
  );
}

//outsource services
function OutsourceServices({ title }) {
  return (
    <div className="w-full">
      {/* ============================ */}
      {/* HERO SECTION (LEFT TEXT + IMAGE RIGHT) */}
      {/* ============================ */}
      <div className="relative w-full h-[420px] overflow-hidden">
        {/* Background Image Placeholder */}
       <img src={outsourcing} className="w-full" alt="" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* TEXT */}
        <div className="absolute top-20 left-20 text-white max-w-md">
          <h1 className="text-4xl font-semibold mb-4">{title}</h1>

          <p className="text-gray-200 mb-6">
            Placeholder content for this tab section. You will update this
            description based on your service details.
          </p>

          <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition flex items-center gap-2">
            Let’s Connect →
          </button>
        </div>
      </div>

      {/* ============================ */}
      {/* BLACK QUOTE SECTION */}
      {/* ============================ */}
      <div className="bg-black py-16 text-center">
        <p className="text-white text-2xl max-w-3xl mx-auto leading-relaxed">
          Our approach is built on confidentiality and trust, ensuring your
          success is our top priority.
        </p>
      </div>

      {/* ============================ */}
      {/* BLUE SECTION – SERVICES ICONS */}
      {/* ============================ */}
      <div className="bg-[#009ADE] py-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-10">
          FSTONE Candidate Services
        </h2>

        <div className="flex justify-center gap-16 flex-wrap">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img src={resume} className="w-24 h-24 bg-white/30 rounded-full mb-4" alt="" />
            <p className="font-medium">
              Resume
              <br />
              Critique
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img src={mind} className="w-24 h-24 bg-white/30 rounded-full mb-4" alt="" />

            <p className="font-medium">
              Interview
              <br />
              Preparation
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img src={handshake} className="w-24 h-24 bg-white/30 rounded-full mb-4" alt="" />

            <p className="font-medium">
              Offer & Resignation
              <br />
              Assistance
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <img src={group} className="w-24 h-24 bg-white/30 rounded-full mb-4" alt="" />

            <p className="font-medium">
              Post-Interview
              <br />
              Debrief
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ TEMPLATE FOR OTHER TABS ------------------------------ */

function TabUnderConstruction({ title }) {
  return (
    <div className="text-center py-20 text-gray-500">
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      <p>Content for this section will be added later.</p>
    </div>
  );
}
