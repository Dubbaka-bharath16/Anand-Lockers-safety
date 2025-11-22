import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SpotlightSection = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 })
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 })

  const stats = [
    { number: 5000, text: "Lockers Available" },
    { number: 24, text: "Hour Surveillance" },
    { number: 100, text: "Bank-Grade Safety" },
    { number: 99, text: "Customer Satisfaction" }
  ]

  const features = [
    "Advanced security systems with continuous surveillance",
    "Private, easy-access lockers in various sizes",
    "High-standard protection comparable to bank-grade safety",
    "A confidential and hassle-free experience for all customers"
  ]

  const valuables = [
    "Jewelry",
    "Important Documents", 
    "Family Heirlooms",
    "Valuable Assets"
  ]

  const Counter = ({ target, delay = 0 }) => {
    const [count, setCount] = React.useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.5 })

    React.useEffect(() => {
      if (isInView) {
        let start = 0
        const increment = target / 50
        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.ceil(start))
          }
        }, 40)
        
        return () => clearInterval(timer)
      }
    }, [isInView, target])

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-orange-500 mb-3 font-montserrat"
      >
        {count}+
      </motion.div>
    )
  }

  return (
    <>
      {/* Introduction Section */}
      <section ref={ref1} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-navy-blue mb-4 md:mb-6 font-playfair">
                Welcome to Anand Lockers
              </h2>
              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
            </motion.div>

            <motion.div>
              <p className="text-base sm:text-lg md:text-xl text-charcoal leading-relaxed mb-6 md:mb-8 px-2 sm:px-4 font-opensans">
                A secure, modern solution for safeguarding your most precious belongings. With bank lockers becoming increasingly difficult to obtain due to high demand and limited availability, we offer a reliable alternative designed with the same level of security, privacy, and trust.
              </p>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100"
              >
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mt-1 flex-shrink-0">
                  ✓
                </div>
                <p className="text-charcoal leading-relaxed font-opensans">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Protection Section */}
      <section ref={ref2} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-navy-blue mb-4 md:mb-6 font-playfair">
              Our Protection Promise
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal max-w-2xl mx-auto px-2 sm:px-4 font-opensans">
              Whether it's jewelry, important documents, family heirlooms, or valuable assets, Anand Lockers ensures they remain protected with the highest level of care.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <Counter target={stat.number} delay={index * 0.1} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-lg font-semibold text-charcoal font-opensans"
                  >
                    {stat.text}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Valuables Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-navy-blue mb-6 font-playfair">
                What We Protect
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {valuables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    className="flex items-center justify-center p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <span className="text-charcoal font-semibold font-opensans">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-charcoal leading-relaxed font-playfair">
                "A secure space you can trust — because your valuables deserve nothing less."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default SpotlightSection