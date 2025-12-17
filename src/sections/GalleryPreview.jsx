import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  FileText,
  Shield,
  Monitor,
  Lock,
  CheckCircle,
  Camera,
  Fingerprint,
  Thermometer,
  Clock,
  Calendar,
  FileCheck,
  Users,
  Bell,
  Headphones,
  X,
  Check
} from 'lucide-react';

const GalleryPreview = () => {
  const processRef = useRef(null);
  const excellenceRef = useRef(null);
  const compareRef = useRef(null);

  const isProcessInView = useInView(processRef, { once: true, threshold: 0.2 });
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

  return (
    <>
      {/* ===================== SECURITY PROCESS SECTION ===================== */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-blue-800 text-center mb-12 relative"
            >
              Our Security Process
            </motion.h2>

            <div className="process-steps flex flex-col lg:flex-row justify-between relative mt-12">
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-300 z-10 hidden lg:block"></div>

              {[
                {
                  icon: Search,
                  title: "Security Assessment",
                  description: "We conduct a thorough evaluation of your storage needs, risk factors, and security requirements to recommend the perfect locker solution."
                },
                {
                  icon: FileText,
                  title: "Documentation & Verification",
                  description: "Streamlined KYC process with biometric verification and document checks to ensure authorized access and complete transparency."
                },
                {
                  icon: Lock,
                  title: "Locker Activation",
                  description: "Secure locker assignment with dual authentication, sealed activation, and comprehensive orientation on security protocols."
                },
                {
                  icon: Shield,
                  title: "Ongoing Protection",
                  description: "Continuous monitoring, regular security audits, and proactive maintenance to ensure long-term protection of your valuables."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="process-step text-center relative z-20 flex-1 px-4 mb-12 lg:mb-0 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="step-icon w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 text-white transition-all duration-300 group-hover:bg-orange-600"
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>

                  <motion.h3
                    className="step-title font-semibold mb-3 text-blue-800 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="step-description text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== SECURITY EXCELLENCE ===================== */}
      <motion.section
        ref={excellenceRef}
        className="py-20 md:py-24 bg-gradient-to-br from-blue-800 to-blue-900"
        variants={containerVariants}
        initial="hidden"
        animate={isExcellenceInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Security Excellence in Every Branch
            </h2>
            <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-blue-100 mt-6 max-w-2xl mx-auto px-4">
              Anand Lockers combines vault grade infrastructure, digital controls and  standardised
              security protocols
              to maintain a consistent level of protection for all customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Camera,
                title: "Intelligent Surveillance",
                text: "24/7 CCTV coverage with secure recording, blind-spot planning and structured incident review procedures.",
              },
              {
                icon: Fingerprint,
                title: "Layered Access Control",
                text: "Biometric verification, PIN authentication and controlled entry corridors ensure multiple levels of protection.",
              },
              {
                icon: Thermometer,
                title: "Environmental Safeguards",
                text: "Temperature and humidity checks help preserve documents, jewellery and high-value assets over long periods.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center hover:border-orange-400/80 hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg"
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-blue-100 leading-relaxed">
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
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
              Why Choose Anand Lockers Over Banks?
            </h2>
            <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto px-4">
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
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-red-500">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-red-900">
                  Traditional Bank Lockers
                </h3>
              </div>

              <ul className="space-y-3 text-sm md:text-base text-red-900/90">
                <li className="flex gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Long waiting lists; allocation can take months or even years.</span>
                </li>
                <li className="flex gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Access allowed only during branch banking hours and working days.</span>
                </li>
                <li className="flex gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Multiple forms, approvals and counters make documentation slow and complex.</span>
                </li>
                <li className="flex gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Limited locker sizes and very few available units in high-demand branches.</span>
                </li>
                <li className="flex gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Minimal digital communication, tracking or proactive reminders.</span>
                </li>
                <li className="flex gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
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
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-emerald-900">
                  Anand Lockers
                </h3>
              </div>

              <ul className="space-y-3 text-sm md:text-base text-emerald-900/90">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Faster allocation with clear visibility of locker sizes and availability.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Extended access timings with biometric security and controlled entry.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Simplified, guided documentation for individuals, families and businesses.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Locker sizes tailored for jewellery, documents, digital media and business assets.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Structured communication for renewals, visits and important safety updates.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Dedicated security-focused teams, quicker decisions and personalised support.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Additional Features */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12"
          >
            {[
              {
                icon: Clock,
                title: "Extended Access Hours",
                description: "Access your locker beyond traditional banking hours with our flexible timing system."
              },
              {
                icon: FileCheck,
                title: "Digital Documentation",
                description: "Complete your KYC and documentation digitally for faster processing and approval."
              },
              {
                icon: Headphones,
                title: "Dedicated Support",
                description: "Get personalized assistance from our security-focused customer support team."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default GalleryPreview;