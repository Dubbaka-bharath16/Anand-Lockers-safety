import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1eLYK1ze52b6O90QzxeQjiKf7EhXEocxXw&s",
      title: "Personal Lockers",
      category: "Individual",
      size: "Small & Medium",
      description: "Perfect for safeguarding jewelry, important documents, family heirlooms, and personal valuables with bank-grade security.",
      details: "Our personal lockers provide individual customers with secure, private storage solutions. Each locker features advanced security systems, 24/7 surveillance, and easy access during extended hours. Ideal for storing precious items that require maximum protection and privacy.",
      features: ["24/7 CCTV Monitoring", "Biometric Access", "Climate Control", "Insurance Options"],
      availability: "Immediate"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Business Lockers",
      category: "Corporate",
      size: "Medium & Large",
      description: "Secure storage for business documents, confidential files, digital media, and valuable corporate assets.",
      details: "Designed for businesses requiring secure document storage and asset protection. Our business lockers offer enhanced security features, dedicated access protocols, and flexible sizing options to accommodate corporate storage needs.",
      features: ["Enhanced Security", "Dedicated Access", "Document Storage", "Business Hours Support"],
      availability: "Immediate"
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      title: "Jewelry Security",
      category: "Specialized",
      size: "Small & Custom",
      description: "Specialized lockers with enhanced protection for precious jewelry, gemstones, and valuable collectibles.",
      details: "Our jewelry lockers feature additional security layers including specialized climate control to preserve precious metals and gemstones. Each unit is individually monitored and includes insurance coordination services for high-value items.",
      features: ["Climate Controlled", "Enhanced Protection", "Insurance Coordination", "Private Viewing"],
      availability: "Available"
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "Document Vaults",
      category: "Secure Storage",
      size: "Various Sizes",
      description: "Climate-controlled vaults for important documents, certificates, and archival materials requiring long-term preservation.",
      details: "Protect your most important documents with our specialized document vaults. Featuring climate control, fire protection, and humidity regulation to ensure your papers, certificates, and archival materials remain in perfect condition for years to come.",
      features: ["Fire Protection", "Climate Control", "Humidity Regulation", "Long-term Storage"],
      availability: "Available"
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "Digital Media Storage",
      category: "Modern Solutions",
      size: "Small & Medium",
      description: "Secure storage for digital devices, hard drives, and electronic media with EMP protection and data security.",
      details: "In today's digital age, protect your electronic assets with our specialized digital media storage. Our lockers provide EMP protection, temperature regulation, and enhanced security measures specifically designed for electronic devices and data storage media.",
      features: ["EMP Protected", "Temperature Regulated", "Data Security", "Electronic Safekeeping"],
      availability: "Immediate"
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Family Heritage Storage",
      category: "Legacy Protection",
      size: "Custom Sizes",
      description: "Preserve your family legacy with secure storage for heirlooms, antiques, and generational treasures.",
      details: "Safeguard your family's history and legacy with our heritage storage solutions. Designed for valuable antiques, family heirlooms, and generational treasures, these lockers provide the ultimate protection and preservation for items of sentimental and historical value.",
      features: ["Legacy Protection", "Custom Sizing", "Preservation Focus", "Multi-generational"],
      availability: "Consultation Required"
    }
  ]

  // Animation variants matching other pages
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.25, ease: "easeIn" } }
  }

  return (
    <>
      {/* HERO SECTION - SIMPLE SOLID COLOR */}
      <section className="relative min-h-[60vh] bg-blue-800 overflow-hidden pt-header">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white py-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-orange-500">Secure</span> Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              Bank-grade security solutions for your most precious belongings.
              No waiting lists, just immediate protection with unmatched convenience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.1 }}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                Our Security Solutions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From personal valuables to business assets, we provide professionally managed
                security solutions designed to offer dependable protection with wider access
                and greater convenience.
              </p>

            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${service.availability === 'Immediate'
                          ? 'bg-green-500 text-white'
                          : service.availability === 'Consultation Required'
                            ? 'bg-orange-500 text-white'
                            : 'bg-blue-600 text-white'
                        }`}>
                        {service.availability}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{service.category}</span>
                      <span>{service.size}</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>

                    <motion.button
                      onClick={() => setSelectedService(service)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition-all duration-300"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION - SIMPLE SOLID COLOR */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Valuables?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Anand Lockers with their most precious belongings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Get Started Button */}
              <motion.div
                className="flex-1 sm:max-w-[220px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="w-full block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </motion.div>

              {/* Learn More Button */}
              <motion.div
                className="flex-1 sm:max-w-[220px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="w-full block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover"
                />
                <motion.button
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  ×
                </motion.button>
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-2xl font-bold mb-4 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedService.title}
                </motion.h3>

                <motion.div
                  className="grid grid-cols-2 gap-4 mb-6 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div>
                    <span className="font-semibold text-blue-800">Category:</span> {selectedService.category}
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">Size:</span> {selectedService.size}
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">Availability:</span> {selectedService.availability}
                  </div>
                </motion.div>

                <motion.div
                  className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-semibold text-blue-800 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  className="text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedService.details}
                </motion.p>

                <Link to="/contact">
                  <motion.button
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(null)}
                  >
                    Book This Service
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Services