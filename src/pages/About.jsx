import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAnimation } from '../hooks/useAnimation';

const About = () => {
  useAnimation();
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });

  const securityFeatures = [
    {
      icon: '🔒',
      title: 'Advanced Security Systems',
      description: 'State-of-the-art surveillance and access control systems ensuring continuous protection and monitoring of your valuables.',
      accent: 'text-blue-600'
    },
    {
      icon: '📦',
      title: 'Multiple Size Options',
      description: 'Private, easy-access lockers available in various sizes to accommodate everything from documents to family heirlooms.',
      accent: 'text-amber-600'
    },
    {
      icon: '🏦',
      title: 'Bank-Grade Safety',
      description: 'High-standard protection comparable to traditional bank lockers with enhanced accessibility and convenience.',
      accent: 'text-green-600'
    }
  ];

  const leadershipTeam = [
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Anand Sharma',
      role: 'Founder & Security Director',
      bio: 'Visionary security expert dedicated to providing reliable protection solutions for valuable assets.'
    },
    {
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Priya Patel',
      role: 'Operations Manager',
      bio: 'Experienced professional with exceptional talent for ensuring seamless customer experiences and facility management.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Rahul Verma',
      role: 'Security Systems Director',
      bio: 'Master security specialist known for implementing cutting-edge protection technologies and protocols.'
    }
  ];

  const companyPrinciples = [
    {
      icon: '🛡️',
      title: 'Uncompromising Security',
      description: 'Every security measure we implement is designed to provide maximum protection while maintaining ease of access for our valued customers.',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: '🤝',
      title: 'Customer Trust',
      description: 'We build relationships based on transparency, reliability, and the highest ethical standards in asset protection.',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      iconColor: 'text-amber-600'
    },
    {
      icon: '⚡',
      title: 'Modern Solutions',
      description: 'Embracing the latest security technologies to provide a hassle-free, confidential experience that meets modern needs.',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600'
    },
    {
      icon: '🔑',
      title: 'Easy Access',
      description: 'Providing convenient access to your valuables while maintaining the highest security standards you expect and deserve.',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600'
    }
  ];

  const lockerServices = [
    {
      category: 'For Personal Valuables',
      items: [
        'Secure storage for jewelry and precious metals',
        'Protection for important documents and certificates',
        'Safe keeping for family heirlooms and collectibles'
      ],
      icon: '💎',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      category: 'For Business Assets',
      items: [
        'Confidential document storage solutions',
        'Secure backup media and data protection',
        'Valuable business equipment and assets'
      ],
      icon: '🏢',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      category: 'Specialized Storage',
      items: [
        'Seasonal item protection',
        'Travel document and currency security',
        'Emergency backup storage solutions'
      ],
      icon: '🌟',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
  };

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
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden mt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 md:mb-10"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 shadow-2xl mx-2">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-300 mb-4 md:mb-5 font-sans leading-tight">
                  Anand Lockers
                </div>
                
                <div className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5">
                  "Your Trusted Secure Space"
                </div>
                
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-green-400 mx-auto rounded-full mb-4 md:mb-5"></div>
                
                <div className="text-sm sm:text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                  Premium security solutions protecting your most valuable possessions with bank-grade safety standards
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-100"
            >
              Your <span className="text-amber-300">Secure Solution</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed px-2 sm:px-4">
                With bank lockers becoming increasingly difficult to obtain, we provide a reliable alternative 
                designed with the same level of security, privacy, and trust you expect from traditional banking institutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8 md:mt-12"
            >
              <Link to='/services'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-amber-600 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  View Our Services
                </motion.button>
              </Link>
              <Link to='/contact'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  Book a Locker
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center w-full lg:justify-start order-2 lg:order-1"
              >
                <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 bg-white transform transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02] group-hover:ring-2 group-hover:ring-amber-200">
                    <img
                      src="./images/ceo.png"
                      alt="Founder & Security Director"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute left-4 md:left-6 bottom-4 md:bottom-6 transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full shadow-lg text-xs md:text-sm font-semibold text-gray-700 border border-gray-100 group-hover:border-amber-200 group-hover:shadow-xl transition-all duration-300">
                        <div className="text-xs text-gray-500 group-hover:text-amber-500 transition-colors">Founder & Security Director</div>
                        <div className="uppercase text-xs tracking-wide group-hover:text-blue-600 transition-colors">ANAND LOCKERS</div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-6 group"
                  >
                    <div className="bg-gradient-to-r from-blue-50/50 to-amber-50/50 rounded-xl p-4 md:p-6 border-l-4 border-amber-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-amber-600 mx-2 sm:mx-0">
                      <p className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        "We provide peace of mind through secure, modern locker solutions. In today's world where 
                        bank lockers are increasingly scarce, we offer a reliable alternative that combines 
                        bank-grade security with unparalleled convenience and accessibility."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8 order-1 lg:order-2 w-full"
              >
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 text-center lg:text-left">Anand</h2>
                  <p className="text-base sm:text-lg md:text-xl text-amber-500 font-semibold mt-1 text-center lg:text-left">Founder & Security Director</p>

                  <div className="mt-4 md:mt-6 text-gray-700 space-y-4 w-full p-3">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      A visionary security expert with an unwavering commitment to protection excellence, 
                      Anand founded Anand Lockers to address the growing need for reliable, accessible 
                      secure storage solutions in today's challenging banking environment.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      With extensive experience in security systems and asset protection, he has built
                      a legacy of trust and reliability, ensuring that every customer's valuables
                      receive the highest level of care and protection they deserve.
                    </p>
                    
                    <div className="bg-blue-50 rounded-lg p-4 md:p-6 mt-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 text-base sm:text-lg md:text-xl mb-2">About Anand Lockers</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        Under Anand's leadership, Anand Lockers has emerged as a trusted name in secure storage, 
                        transforming how people protect their valuable possessions. With state-of-the-art facilities 
                        and bank-grade security standards, we provide complete peace of mind for all your storage needs.
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-8 w-full"
                  >
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto lg:mx-0">
                      <EnhancedStatCard title="24/7" subtitle="Security" delay={0} />
                      <EnhancedStatCard title="100%" subtitle="Reliability" delay={0.1} />
                      <EnhancedStatCard title="5+" subtitle="Years" delay={0.2} />
                      <EnhancedStatCard title="1000+" subtitle="Customers" delay={0.3} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section ref={ref1} className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
                Our Security Features
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
                Advanced protection solutions designed for your peace of mind
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 ${feature.accent} group-hover:${feature.accent.replace('text-', 'text-')}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Principles */}
     <section className="py-12 md:py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
        Our Core Principles
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
        The foundational values that guide our security services and customer
        relationships.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
      {companyPrinciples.map((principle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="
            relative bg-white p-6 md:p-8 rounded-2xl 
            border border-slate-100 shadow-sm 
            hover:shadow-xl transition-all duration-300
            flex items-start gap-4 md:gap-6
          "
        >
          {/* Left colored strip */}
          <div className="absolute left-0 top-0 h-full w-1.5 bg-amber-400 rounded-l-2xl" />

          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-amber-100 flex items-center justify-center">
              <div className="text-2xl md:text-3xl text-amber-500">
                {principle.icon}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-2 md:mb-3">
              {principle.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              {principle.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Mission & Vision */}
      <section ref={ref2} className="py-12 md:py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div variants={itemVariants} className="text-center md:text-left">
                <motion.div
                  variants={cardVariants}
                  className="inline-flex items-center justify-center md:justify-start gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <span>🎯</span> Our Purpose
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Company Mission</h2>
                <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                  To provide secure, accessible locker solutions that offer peace of mind and reliable protection 
                  for valuable possessions in an era of limited banking options.
                </p>
                <div className="space-y-4">
                  {['Ensure maximum security for all stored items', 'Provide convenient access with strict protocols', 'Maintain transparent and trustworthy operations'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center md:text-left">
                <motion.div
                  variants={cardVariants}
                  className="inline-flex items-center justify-center md:justify-start gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <span>🔭</span> Future Vision
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Company Vision</h2>
                <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                  To become the most trusted secure storage provider, setting new standards in asset protection 
                  while expanding accessibility across communities.
                </p>
                <div className="space-y-4">
                  {['Expand secure facility locations nationwide', 'Innovate with smart security technologies', 'Build long-term customer trust and relationships'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locker Services */}
      
      {/* Leadership Team */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
              Our Leadership Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
              The experts ensuring your complete security and satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-amber-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-4 text-sm md:text-base">{member.role}</p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Secure Your Valuables?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
              Discover how Anand Lockers' commitment to security excellence and customer trust 
              can provide the peace of mind you deserve for your precious possessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to='/services'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
                >
                  Explore Locker Sizes
                </motion.button>
              </Link>
              <Link to='/contact'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
                >
                  Get Started Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* Enhanced Stat Card Component */
function EnhancedStatCard({ title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -4, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:ring-2 hover:ring-amber-200 hover:shadow-xl transition-all duration-300">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-110">
          {title}
        </div>
        <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-600 transition-colors duration-300">
          {subtitle}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
}