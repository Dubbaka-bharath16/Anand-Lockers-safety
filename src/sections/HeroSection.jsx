// HeroSection.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const lockerFeatures = [
  {
    title: "Bank-Grade Security",
    description: "Military-level protection with biometric access and 24/7 surveillance",
    icon: "🔒",
    image: "/images/security-system.jpg",
  },
  {
    title: "Climate Controlled",
    description: "Optimal temperature & humidity control for your valuables",
    icon: "🌡️",
    image: "/images/locker-facility.jpg",
  },
  {
    title: "24/7 Access",
    description: "Access your locker anytime with extended hours",
    icon: "🕒",
    image: "/images/interior.jpg",
  },
];

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentFeature((prev) => (prev + 1) % lockerFeatures.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const current = lockerFeatures[currentFeature];

  return (
    <section className="bg-gradient-to-br from-navy-blue to-blue-900 text-white overflow-hidden pt-20 md:pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Only large screens get tall hero; mobile behaves naturally */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:min-h-[80vh] gap-6 lg:gap-12">
          
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 mt-2">
                Premium
                <span className="block text-orange-300">Locker Solutions</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Bank-level security meets modern convenience. Protect your valuables
                with state-of-the-art locker facilities designed for your peace of mind.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    Book Your Locker
                  </motion.button>
                </Link>

                <Link to="/gallery">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white hover:bg-white hover:text-navy-blue text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    View Facilities
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-orange-300">
                    5000+
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    Lockers Installed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-orange-300">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    Security Monitoring
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-orange-300">
                    99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    Uptime Record
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT FEATURE CARD */}
          <div className="lg:w-1/2 relative w-full max-w-md mx-auto mt-[-20px] sm:mt-[-10px] md:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Icon */}
                  <div className="text-5xl sm:text-6xl mb-5">{current.icon}</div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-3">
                    {current.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-100 text-sm sm:text-lg mb-5">
                    {current.description}
                  </p>

                  {/* Dots Navigation */}
                  <div className="flex justify-center gap-2">
                    {lockerFeatures.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeature(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentFeature
                            ? "bg-orange-500 scale-110"
                            : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-lg shadow-lg text-xs sm:text-sm"
            >
              🔒 Secure
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg text-xs sm:text-sm"
            >
              ⏰ 24/7 Access
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
