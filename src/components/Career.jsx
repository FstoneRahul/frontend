import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* --------------------------------------------------
   TABS (TOP BAR)
-------------------------------------------------- */
function CareerTabs({ active, setActive }) {
  const tabs = [
    "Why a Career in Recruitment",
    "Career With Us",
    "Current Openings",
  ];

  return (
    <div className="w-full bg-[#0075D0] flex justify-center shadow">
      <div className="flex gap-6 py-4 relative">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActive(index)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 py-2 text-[15px] font-semibold relative tracking-wide"
          >
            <span className="text-white">{tab}</span>

            {active === index && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-white"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------
   SECTION 0: HERO
-------------------------------------------------- */
function CareerHero({ setActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 bg-white py-12"
    >
      <motion.img
        src="girl.jpg"
        className="h-[360px] w-auto mx-auto rounded-md object-cover"
        alt="Career hero"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      />

      <div className="flex flex-col justify-center px-10 mt-6 md:mt-0">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
          Here, we turn<br />possibilities into reality.
        </h1>

        <p className="text-gray-600 max-w-md leading-relaxed mb-6">
          Join a people-focused team committed to your growth.
          At FSTONE, we offer career pathways, continuous learning,
          and leadership opportunities across global teams.
        </p>

        <button
          onClick={() => setActive(1)} // go to "Career With Us"
          className="px-6 py-3 border border-[#0075D0] text-[#0075D0] rounded hover:bg-[#0075D0] hover:text-white transition w-fit"
        >
          Join Us Now →
        </button>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------
   SECTION 0: Recruiter Role
-------------------------------------------------- */
function RecruiterRoleSection() {
  const tiles = [
    {
      title: "Building Relationships",
      desc: "We build long-term connections with candidates and clients, ensuring trust throughout the hiring journey.",
      image: "/recruiter.jpg",
    },
    {
      title: "Business Development",
      desc: "We identify hiring needs, engage with new clients, and expand our recruitment presence across industries.",
      image: "/recruiter2.jpg",
    },
    {
      title: "Strategic Matching",
      desc: "We align talent with the right roles through skills assessment and career alignment.",
      image: "/recruiter3.jpg",
    },
    {
      title: "Client Consultation",
      desc: "We provide strategic hiring guidance, workforce planning, and talent advisory support.",
      image: "/recruiter4.jpg",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <h2 className="text-3xl font-semibold mb-10 px-10">
        What we do:<br />The Recruiter's Role
      </h2>

      {/* FIRST TILE HORIZONTAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="px-10 mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111] rounded-md overflow-hidden shadow-lg group">
          <div className="relative h-[260px] md:h-full overflow-hidden">
            <img
              src={tiles[0].image}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              alt={tiles[0].title}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-3">{tiles[0].title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {tiles[0].desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* REMAINING TILES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {tiles.slice(1).map((tile, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.12 }}
            className="rounded-md overflow-hidden bg-[#111] group shadow-md"
          >
            <div className="w-full h-[200px] relative overflow-hidden">
              <img
                src={tile.image}
                alt={tile.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold mb-2 text-[17px]">
                {tile.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {tile.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------
   SECTION 0: More Than Match
-------------------------------------------------- */
function MoreThanMatch({ setActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white py-20 px-10"
    >
      <h2 className="text-3xl font-semibold mb-6">
        More than just a match!
      </h2>

      <p className="text-gray-200 max-w-xl leading-relaxed mb-10">
        At FSTONE, recruitment is not just hiring—it’s problem solving.
        We understand business challenges, identify future-ready skills,  
        and help candidates find meaningful long-term careers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        <motion.img
          src="Student.jpg"
          alt="Student"
          className="rounded-md"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />

        <div>
          <h3 className="text-xl font-semibold mb-4">
            A day in the life of our consultants:
          </h3>

          <ul className="list-disc ml-6 text-gray-200 space-y-2 text-sm">
            <li>Understanding client requirements & hiring needs</li>
            <li>Sourcing, screening candidates</li>
            <li>Leading end-to-end interview coordination</li>
            <li>Building strong talent pipelines</li>
          </ul>

          <button
            onClick={() => setActive(1)} // also go to "Career With Us"
            className="mt-6 px-6 py-3 border border-[#0075D0] text-[#0075D0] rounded hover:bg-[#0075D0] hover:text-white transition"
          >
            Join Us Now →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------
   SECTION 1: Career With Us
-------------------------------------------------- */
function CareerWithUs({ setActive }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white pb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why join Fstone Technology
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-md mb-6">
            Become part of a high-growth company where your ideas matter.
            Work with global clients, advanced digital tools, and mentors who support
            your personal and professional development.
          </p>

          <ul className="text-gray-600 text-sm space-y-2 mb-6 ml-4 list-disc">
            <li>International opportunities across US, India & Europe</li>
            <li>Leadership and mentorship development programs</li>
            <li>Performance-driven culture with transparent growth</li>
            <li>Modern digital, cloud & consulting-driven projects</li>
          </ul>

          <button
            onClick={() => setActive(2)} // go to "Current Openings"
            className="px-6 py-3 border border-[#0075D0] text-[#0075D0] rounded hover:bg-[#0075D0] hover:text-white transition"
          >
            View Current Openings →
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 border-[3px] border-[#0075D0] rounded-md translate-x-5 translate-y-5"></div>

          <motion.img
            src="/joinus.jpg"
            alt="Career"
            className="w-full h-[350px] object-cover rounded-md relative z-10"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* PREVIEW OPENINGS */}
      <div className="bg-black text-white pt-28 pb-20 px-10 -mt-10">
        <h2 className="text-4xl font-semibold leading-tight mb-10">
          Current <br /> Openings
        </h2>

        <div className="w-full h-[2px] bg-[#0075D0] mb-6"></div>

        {[
          "UX DESIGNER — Kendall Park, NJ",
          "TECHNICAL ACCOUNT SPECIALIST — Kendall Park, NJ",
          "TECHNICAL ACCOUNT MANAGER — Kendall Park, NJ",
        ].map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex justify-between items-center border-b border-[#1d1d1d] pb-4 text-[#009ADE] text-[15px]"
          >
            <span>{job}</span>
            <span className="text-xl text-white">+</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------
   SECTION 2: Current Openings Full Page
-------------------------------------------------- */
function CurrentOpeningsFull() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      id: 1,
      title: "Human Resources Specialist",
      location: "Gurugram, India",
      type: "Full Time",
      exp: "2+ years",
      desc:
        "Handle full-cycle recruiting, onboarding, employee engagement, and HR operations. Must have strong communication and people management skills.",
    },
    {
      id: 2,
      title: "Technical Account Manager",
      location: "New Jersey, USA",
      type: "Full Time",
      exp: "3–5 years",
      desc:
        "Primary point of contact for enterprise clients. Manage delivery updates, project risks, escalations, and customer satisfaction.",
    },
    {
      id: 3,
      title: "Recruitment Consultant",
      location: "Bangalore, India",
      type: "Full Time",
      exp:
        "1–3 years",
      desc:
        "Source, screen, and recommend candidates for technical and business roles. Build long-term candidate pipelines.",
    },
  ];

  const [openJob, setOpenJob] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-10 py-14"
    >
      <div className="space-y-10 max-w-[920px]">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-black text-white p-8 rounded-md relative"
          >
            <h2 className="text-[#009ADE] text-[22px] font-semibold mb-2">
              {job.title}
            </h2>

            <div className="flex items-center gap-4 text-[14px] text-gray-300 mb-4">
              <span>{job.location}</span>
              <span>|</span>
              <span>{job.type}</span>
              <span>|</span>
              <span>Experience: {job.exp}</span>
            </div>

            {openJob === job.id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.35 }}
                className="text-gray-200 text-[14px] leading-relaxed max-w-[750px] mt-4"
              >
                {job.desc}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-6 top-6 bg-[#009ADE] w-[36px] h-[36px] rounded-sm flex items-center justify-center text-white text-2xl font-bold"
              onClick={() =>
                setOpenJob(openJob === job.id ? null : job.id)
              }
            >
              <motion.span
                initial={false}
                animate={{ rotate: openJob === job.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openJob === job.id ? "-" : "+"}
              </motion.span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------
   MAIN COMPONENT
-------------------------------------------------- */
export default function Career() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <CareerTabs active={active} setActive={setActive} />

      {active === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <CareerHero setActive={setActive} />
          <RecruiterRoleSection />
          <MoreThanMatch setActive={setActive} />
        </motion.div>
      )}

      {active === 1 && <CareerWithUs setActive={setActive} />}

      {active === 2 && <CurrentOpeningsFull />}
    </div>
  );
}
