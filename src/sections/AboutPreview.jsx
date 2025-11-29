import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Building, 
  Shield,
  Users,
  FileText,
  Lock,
  Clock
} from 'lucide-react';

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const offerings = [
    {
      icon: Briefcase,
      label: "Individual & Family Lockers",
      title: "Secure Storage for Personal Assets",
      description:
        "Designed for individuals and families seeking a highly secure space for jewellery, legal papers, financial documents, and essential personal assets."
    },
    {
      icon: Building,
      label: "Corporate & Business Lockers",
      title: "Confidential Business Asset Protection",
      description:
        "Ideal for enterprises that require secure storage for confidential files, backup data, digital media, contracts, and sensitive operational material."
    },
    {
      icon: Shield,
      label: "Short-Term & Priority Access",
      title: "Flexible High-Security Storage Plans",
      description:
        "A tailored solution for customers needing temporary protection during travel, renovations, events, or transitional periods with full-time security."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4">
              Locker Solutions at a Glance
            </h2>
            <div className="w-16 h-[3px] bg-blue-800 mx-auto rounded-full" />
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto">
              Explore our flexible and secure locker options designed for every type of customer.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  {/* Moving hover overlay – from bottom-left to full card */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="
                        absolute inset-0
                        bg-blue-800
                        opacity-0
                        translate-x-[-100%] translate-y-[100%]
                        group-hover:opacity-100
                        group-hover:translate-x-0 group-hover:translate-y-0
                        transition-all duration-500 ease-out
                      "
                    />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 px-6 py-7 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div
                        className="
                          w-14 h-14 rounded-full flex items-center justify-center
                          bg-blue-50
                          group-hover:bg-white
                          transition-colors duration-300
                        "
                      >
                        <item.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Label */}
                    <p
                      className="
                        text-xs font-semibold uppercase tracking-wide mb-2
                        text-blue-700
                        group-hover:text-blue-200
                        transition-colors duration-300
                      "
                    >
                      {item.label}
                    </p>

                    {/* Title */}
                    <h3
                      className="
                        text-lg md:text-xl font-bold mb-2
                        text-gray-900
                        group-hover:text-white
                        transition-colors duration-300
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        text-sm md:text-base leading-relaxed
                        text-gray-600
                        group-hover:text-blue-100
                        transition-colors duration-300
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Single View More button */}
          <motion.div variants={itemVariants} className="text-center mt-12 md:mt-16">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all text-base"
              >
                View More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;