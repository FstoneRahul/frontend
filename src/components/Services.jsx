import React, { useState } from 'react';
import AboutSection from './AboutSection';
import ServicesTabs from './ServicesTabs';
import { motion } from 'framer-motion';

export default function Services({ className, style }) {


  return (
  <>

<ServicesTabs />
{/* ============================ */}
{/* FINAL SERVICE OFFERINGS CARDS */}
{/* ============================ */}

<div className="space-y-20 flex flex-col bg-gradient-to-b from-black to-gray-900 items-center min-h-screen py-20">

  {/* FIRST LARGE CARD */}
  <motion.div
    className="relative w-[900px] rounded-lg overflow-hidden shadow-2xl"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >

    {/* Background Image */}
    <img
      src="/Service1.jpg"
      alt="Onboarding Support"
      className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-700"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Text Overlay */}
    <motion.div
      className="absolute bottom-10 left-10 right-10 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-3">
        WE PROVIDE ONBOARDING & RETENTION SUPPORT
      </h3>

      <p className="text-gray-300 max-w-[600px] leading-relaxed mb-4">
        We speed the time to productivity for your placements by facilitating a smooth onboarding program.
        Our support teams stay engaged post-onboarding to drive performance, retention, and long-term success.
      </p>

      <motion.a
        href="#"
        className="text-blue-400 font-medium hover:underline flex items-center gap-1"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Learn more →
      </motion.a>

      <div className="h-[3px] w-[180px] bg-blue-500 mt-3"></div>
    </motion.div>
  </motion.div>


            {/* ============================ */}
{/* TWO SMALL Figma-style CARDS */}
{/* ============================ */}

<motion.div
  className="w-full flex justify-center gap-10 mt-16"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>

  {/* Card 1 */}
  <motion.div
    className="bg-[#1A1A1A] text-white p-10 rounded-md w-[430px] shadow-lg hover:shadow-2xl"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    <div className="h-[3px] w-[50px] bg-[#009ADE] mb-6"></div>

    <h3 className="text-xl font-semibold mb-4 tracking-wide">
      WE STRATEGICALLY SOURCE TALENT
    </h3>

    <p className="text-gray-300 leading-relaxed mb-8">
      We use our extensive candidate network and referral-based sourcing
      to quickly and effectively deliver top talent for your needs.
    </p>

    <motion.button
      className="text-[#009ADE] flex items-center gap-2 font-medium hover:underline"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Learn more <span className="text-lg">→</span>
    </motion.button>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    className="bg-[#1A1A1A] text-white p-10 rounded-md w-[430px] shadow-lg hover:shadow-2xl"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    <div className="h-[3px] w-[50px] bg-[#009ADE] mb-6"></div>

    <h3 className="text-xl font-semibold mb-4 tracking-wide">
      WE TCS CANDIDATE
    </h3>

    <p className="text-gray-300 leading-relaxed mb-8">
      We rigorously screen candidates for technical, business, and cultural fit,
      with optional certification, background, and reference checks as requested.
    </p>

    <motion.button
      className="text-[#009ADE] flex items-center gap-2 font-medium hover:underline"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Learn more <span className="text-lg">→</span>
    </motion.button>
  </motion.div>

</motion.div>



  {/* SECOND LARGE CARD */}
  <motion.div
    className="relative w-[900px] rounded-lg overflow-hidden shadow-2xl"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >

    {/* Background Image */}
    <img
      src="/service2.jpg"
      alt="Customer Insight"
      className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-700"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Text Overlay */}
    <motion.div
      className="absolute bottom-10 left-10 right-10 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-3">
        WE KNOW OUR CUSTOMERS
      </h3>

      <p className="text-gray-300 max-w-[600px] leading-relaxed mb-4">
        We take a holistic approach to understanding your business and culture.
        This enables us to collaboratively match your environment and deliver an employee value proposition
        that attracts top talent.
      </p>

      <motion.a
        href="#"
        className="text-blue-400 font-medium hover:underline flex items-center gap-1"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Learn more →
      </motion.a>

      <div className="h-[3px] w-[180px] bg-blue-500 mt-3"></div>
    </motion.div>
  </motion.div>

</div>




  </>

  );
}

