import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GalleryPreview = () => {
  const processRef = useRef(null)
  const excellenceRef = useRef(null)
  const teamRef = useRef(null)
  const impactRef = useRef(null)

  const isProcessInView = useInView(processRef, { once: true, threshold: 0.3 })
  const isExcellenceInView = useInView(excellenceRef, { once: true, threshold: 0.3 })
  const isTeamInView = useInView(teamRef, { once: true, threshold: 0.3 })
  const isImpactInView = useInView(impactRef, { once: true, threshold: 0.3 })

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

  return (
    <>
      {/* Security Process Section */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-navy-blue text-center mb-12 font-playfair"
            >
              Our Security Process
            </motion.h2>
            
            <div className="process-steps flex flex-col lg:flex-row justify-between relative mt-12">
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-300 z-10 hidden lg:block"></div>
              
              {[
                { icon: "🔒", title: "Initial Consultation", description: "We begin with understanding your security needs and recommending the perfect locker size for your valuables." },
                { icon: "📝", title: "Documentation & Verification", description: "Complete secure registration with identity verification to ensure authorized access only." },
                { icon: "🔑", title: "Biometric Setup", description: "Set up personalized biometric access including fingerprint and retina scanning for maximum security." },
                { icon: "✅", title: "Ready for Use", description: "Your locker is activated with 24/7 surveillance and climate control systems fully operational." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="process-step text-center relative z-20 flex-1 px-4 mb-12 lg:mb-0 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="step-icon w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl text-white transition-all duration-300 group-hover:bg-orange-600 shadow-lg"
                  >
                    {step.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="step-title font-semibold mb-3 text-navy-blue font-montserrat group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="step-description text-sm text-charcoal font-opensans group-hover:text-gray-700 transition-colors duration-300"
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

      {/* Security Excellence Section */}
      <section ref={excellenceRef} className="relative py-24 bg-gradient-to-br from-navy-blue to-blue-900">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isExcellenceInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-playfair"
            >
              Security Excellence
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-200 mb-12 text-center leading-relaxed max-w-4xl mx-auto font-opensans"
            >
              We combine advanced technology with proven security protocols to provide bank-grade protection for your most valuable possessions.
            </motion.p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Advanced Surveillance",
                  description: "24/7 CCTV monitoring with motion detection and AI-powered threat analysis for comprehensive facility security.",
                  icon: "📹"
                },
                {
                  title: "Access Control",
                  description: "Multi-layered biometric authentication including fingerprint and retina scanning for authorized access only.",
                  icon: "👁️"
                },
                {
                  title: "Climate Protection",
                  description: "Climate-controlled vaults maintain optimal temperature and humidity to preserve your valuables in perfect condition.",
                  icon: "🌡️"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white"
                  >
                    {item.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 font-montserrat group-hover:text-blue-100 transition-colors duration-300"
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-blue-200 leading-relaxed font-opensans group-hover:text-blue-100 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Team Section */}
      <section ref={teamRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-center text-navy-blue mb-16 font-playfair"
            >
              Our Security Team
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Security Professionals",
                  description: "Highly trained security personnel with extensive experience in facility protection and emergency response protocols.",
                  icon: "👮"
                },
                {
                  name: "Technical Experts",
                  description: "Certified technicians maintaining advanced security systems, surveillance equipment, and access control technology.",
                  icon: "🔧"
                },
                {
                  name: "Customer Support",
                  description: "Dedicated support team available 24/7 to assist with locker access, inquiries, and emergency situations.",
                  icon: "💁"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-blue to-orange-500"></div>
                    
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg text-2xl text-white"
                      >
                        {member.icon}
                      </motion.div>
                    </div>

                    <motion.h3 
                      className="text-2xl font-bold text-navy-blue mb-4 text-center font-montserrat group-hover:text-orange-500 transition-colors duration-300"
                    >
                      {member.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-charcoal text-center leading-relaxed font-opensans group-hover:text-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {member.description}
                    </motion.p>

                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/20 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={impactRef} className="relative py-24 bg-gradient-to-br from-blue-800 to-navy-blue">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isImpactInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-12 text-white font-playfair"
            >
              Our Impact
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="impact-content max-w-4xl mx-auto mb-16 text-center"
            >
              <p className="text-xl text-blue-200 font-opensans">
                Trusted by thousands of customers to protect their most valuable possessions with uncompromising security and reliable service.
              </p>
            </motion.div>
            
            <div className="impact-cards grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: "🔒", 
                  title: "Secure Storage", 
                  description: "Providing peace of mind to families and businesses with reliable, bank-grade security solutions.",
                  stats: "5000+ Lockers"
                },
                { 
                  icon: "⏰", 
                  title: "24/7 Protection", 
                  description: "Round-the-clock surveillance and monitoring ensuring your valuables are always protected.",
                  stats: "365 Days/Year"
                },
                { 
                  icon: "⭐", 
                  title: "Customer Trust", 
                  description: "Building long-term relationships with customers who trust us with their most precious belongings.",
                  stats: "99% Satisfaction"
                }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="impact-card bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:shadow-2xl group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="impact-icon text-4xl text-orange-400 mb-5"
                  >
                    {impact.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold mb-4 font-montserrat text-white group-hover:text-blue-100 transition-colors duration-300"
                  >
                    {impact.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-blue-200 mb-4 font-opensans group-hover:text-blue-100 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {impact.description}
                  </motion.p>
                  
                  <motion.div 
                    className="text-orange-400 font-bold text-lg font-montserrat group-hover:text-orange-300 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {impact.stats}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default GalleryPreview