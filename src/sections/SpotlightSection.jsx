import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SpotlightSection = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 })
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 })

  const securityFeatures = [
    { number: 256, text: "Bit Encryption", icon: "🔐", suffix: "-bit" },
    { number: 365, text: "Days Monitoring", icon: "👁️", suffix: "" },
    { number: 15, text: "Minute Response", icon: "⚡", suffix: "" },
    { number: 100, text: "Insurance Coverage", icon: "📄", suffix: "%" }
  ]

  const commitmentCards = [
    {
      icon: "🛡️",
      title: "Unbreakable Security",
      description: "Multi-layered protection system with biometric authentication, motion sensors, and advanced surveillance technology.",
      features: ["Biometric Access", "Motion Detection", "24/7 Monitoring"]
    },
    {
      icon: "💎",
      title: "Premium Materials",
      description: "Military-grade steel lockers with tamper-proof mechanisms and climate control for optimal preservation.",
      features: ["Stainless Steel", "Climate Control", "Fire Resistant"]
    },
    {
      icon: "🚀",
      title: "Smart Technology",
      description: "Digital access systems with mobile app integration and real-time monitoring for complete peace of mind.",
      features: ["Mobile App", "Real-time Alerts", "Digital Access"]
    }
  ]

  const Counter = ({ target, delay = 0, suffix = "" }) => {
    const [count, setCount] = React.useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.5 })

    React.useEffect(() => {
      if (isInView) {
        let start = 0
        const increment = target / 60
        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.ceil(start))
          }
        }, 30)
        
        return () => clearInterval(timer)
      }
    }, [isInView, target])

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-orange-500 mb-3 font-montserrat"
      >
        {count}{suffix}
      </motion.div>
    )
  }

  return (
    <>
      {/* Security Features Section */}
      <section ref={ref1} className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6 font-playfair">
              Advanced Security Systems
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-charcoal max-w-3xl mx-auto font-opensans">
              Cutting-edge technology meets uncompromising protection for your most valued possessions
            </p>
          </motion.div>

          {/* Security Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl mb-4 text-navy-blue">{stat.icon}</div>
                  <Counter target={stat.number} delay={index * 0.1} suffix={stat.suffix} />
                  <div className="text-lg font-semibold text-charcoal font-opensans">
                    {stat.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section ref={ref2} className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6 font-playfair">
              Our Protection Promise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-charcoal max-w-3xl mx-auto font-opensans">
              Every aspect of our service is designed around one principle: your complete peace of mind
            </p>
          </motion.div>

          {/* Commitment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {commitmentCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-navy-blue to-blue-800 p-6 text-center">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white font-playfair">{card.title}</h3>
                </div>
                
                {/* Card Body */}
                <div className="p-6">
                  <p className="text-charcoal leading-relaxed mb-6 font-opensans">
                    {card.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 + 0.3 }}
                        className="flex items-center gap-3 text-sm text-charcoal font-opensans"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 max-w-4xl mx-auto">
              <div className="text-4xl mb-6">🏆</div>
              <p className="text-xl md:text-2xl text-charcoal leading-relaxed italic font-playfair mb-6">
                "We don't just store your valuables; we protect your legacy with the same care we would our own family heirlooms."
              </p>
              <div className="text-lg text-charcoal font-opensans">
                — Anand Lockers Standard
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6 font-playfair">
                Innovative Protection Technology
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mb-6 rounded-full"></div>
              <p className="text-lg text-charcoal leading-relaxed mb-8 font-opensans">
                Our facilities incorporate the latest advancements in security technology, ensuring your belongings are protected by systems that set industry standards.
              </p>
              
              <div className="space-y-4">
                {[
                  "Facial recognition access systems",
                  "AI-powered threat detection",
                  "Redundant power backups",
                  "Encrypted digital audit trails",
                  "Remote monitoring capabilities",
                  "Emergency response protocols"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 text-charcoal font-opensans"
                  >
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">
                      ✓
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: "📱", title: "Mobile Access", desc: "Control via smartphone" },
                { icon: "🔔", title: "Instant Alerts", desc: "Real-time notifications" },
                { icon: "🌐", title: "Cloud Backup", desc: "Secure data storage" },
                { icon: "🛡️", title: "Cyber Security", desc: "Digital protection" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 text-center shadow-lg border border-gray-200"
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h4 className="font-bold text-navy-blue mb-2 font-montserrat">{tech.title}</h4>
                  <p className="text-sm text-charcoal font-opensans">{tech.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SpotlightSection