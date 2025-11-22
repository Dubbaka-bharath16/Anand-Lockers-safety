import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GalleryPreview = () => {
  const flowRef = useRef(null);
  const excellenceRef = useRef(null);
  const compareRef = useRef(null);

  const isFlowInView = useInView(flowRef, { once: true, threshold: 0.2 });
  const isExcellenceInView = useInView(excellenceRef, { once: true, threshold: 0.2 });
  const isCompareInView = useInView(compareRef, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const flowSteps = [
    {
      number: "01",
      title: "Threat Assessment",
      icon: "🔍",
      text: "We analyse the type of valuables, risk exposure and usage pattern before assigning a locker.",
    },
    {
      number: "02",
      title: "Identity Verification",
      icon: "🪪",
      text: "KYC, biometric and document checks ensure only authorised individuals can operate the locker.",
    },
    {
      number: "03",
      title: "Secure Activation",
      icon: "🔐",
      text: "Lockers are sealed, mapped to surveillance, and activated in your presence with full transparency.",
    },
    {
      number: "04",
      title: "24/7 Monitoring",
      icon: "📹",
      text: "Access logs, CCTV and environment checks keep every locker under continuous supervision.",
    },
    {
      number: "05",
      title: "Ongoing Protection",
      icon: "⭐",
      text: "Regular audits, maintenance and policy reviews ensure long-term, consistent security.",
    },
  ];

  return (
    <>
      {/* ===================== SECURITY FLOW CHART ===================== */}
      <motion.section
        ref={flowRef}
        className="py-16 md:py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate={isFlowInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 font-playfair">
              Our Security Workflow
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg font-opensans leading-relaxed">
              Every locker at Anand Lockers passes through a clear, five-step security flow
              designed to make protection systematic, predictable and reliable.
            </p>
          </motion.div>

          {/* Flow line (desktop) */}
          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute left-10 right-10 top-16">
              <div className="h-[2px] bg-amber-200 rounded-full" />
            </div>

            {/* Steps */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circular ring */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 rounded-full border-4 border-amber-400 bg-white shadow-md" />
                    <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-3xl">
                      <span className="text-amber-500">{step.icon}</span>
                    </div>
                  </motion.div>

                  {/* Number */}
                  <div className="text-amber-500 font-bold text-lg sm:text-xl mt-4">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-blue-900 mt-1 font-montserrat">
                    {step.title}
                  </h3>

                  {/* Text */}
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 px-2 font-opensans leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subtle bottom line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={
              isFlowInView ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }
            }
            transition={{ duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-amber-300 via-blue-500 to-blue-800 rounded-full mt-12 mx-auto max-w-5xl"
          />
        </div>
      </motion.section>

      {/* ===================== SECURITY EXCELLENCE ===================== */}
      <motion.section
        ref={excellenceRef}
        className="py-20 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800"
        variants={containerVariants}
        initial="hidden"
        animate={isExcellenceInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
              Security Excellence in Every Branch
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg font-opensans leading-relaxed">
              Anand Lockers combines vault-grade infrastructure, digital controls and a trained
              security team to maintain a consistent level of protection for all customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📹",
                title: "Intelligent Surveillance",
                text: "24/7 CCTV coverage with secure recording, blind-spot planning and structured incident review procedures.",
              },
              {
                icon: "🧬",
                title: "Layered Access Control",
                text: "Biometric verification, PIN authentication and controlled entry corridors ensure multiple levels of protection.",
              },
              {
                icon: "🌡️",
                title: "Environmental Safeguards",
                text: "Temperature and humidity checks help preserve documents, jewellery and high-value assets over long periods.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center hover:border-amber-400/80 hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl text-white">{item.icon}</span>
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-montserrat group-hover:text-amber-100 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-blue-100 font-opensans leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===================== WHY CHOOSE ANAND OVER BANKS ===================== */}
      <motion.section
        ref={compareRef}
        className="py-20 md:py-24 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        animate={isCompareInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-playfair">
              Why Choose Anand Over Banks?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg font-opensans leading-relaxed">
              Traditional bank lockers are built around banking constraints. Anand Lockers is
              designed only for secure storage, giving you better access, clarity and control.
            </p>
          </motion.div>

          {/* Comparison */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {/* Traditional Bank Lockers */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-red-50 border border-red-100 rounded-3xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-red-500 text-lg">
                  ✕
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-red-900 font-montserrat">
                  Traditional Bank Lockers
                </h3>
              </div>

              <ul className="space-y-3 text-sm md:text-base font-opensans text-red-900/90">
                <li className="flex gap-2">
                  <span className="mt-1 text-red-500 text-xs">✕</span>
                  <span>Long waiting lists; allocation can take months or even years.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-red-500 text-xs">✕</span>
                  <span>Access allowed only during branch banking hours and working days.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-red-500 text-xs">✕</span>
                  <span>Multiple forms, approvals and counters make documentation slow and complex.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-red-500 text-xs">✕</span>
                  <span>Limited locker sizes and very few available units in high-demand branches.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-red-500 text-xs">✕</span>
                  <span>Minimal digital communication, tracking or proactive reminders.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-red-500 text-xs">✕</span>
                  <span>Issue resolution depends heavily on bank workload and internal priorities.</span>
                </li>
              </ul>
            </motion.div>

            {/* Anand Lockers */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-lg">
                  ✓
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-emerald-900 font-montserrat">
                  Anand Lockers
                </h3>
              </div>

              <ul className="space-y-3 text-sm md:text-base font-opensans text-emerald-900/90">
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600 text-xs">✓</span>
                  <span>Faster allocation with clear visibility of locker sizes and availability.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600 text-xs">✓</span>
                  <span>Extended access timings with biometric security and controlled entry.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600 text-xs">✓</span>
                  <span>Simplified, guided documentation for individuals, families and businesses.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600 text-xs">✓</span>
                  <span>Locker sizes tailored for jewellery, documents, digital media and business assets.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600 text-xs">✓</span>
                  <span>Structured communication for renewals, visits and important safety updates.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600 text-xs">✓</span>
                  <span>Dedicated security-focused teams, quicker decisions and personalised support.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default GalleryPreview;
