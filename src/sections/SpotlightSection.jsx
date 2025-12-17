import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SpotlightSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });

  const stats = [
    { number: 5000, text: "Secure Lockers Installed" },
    { number: 12, text: "Branches Across India" },
    { number: 24, text: "7 Surveillance & Monitoring" },
    { number: 99.9, text: "Uptime Reliability (%)" }
  ];

  const Counter = ({ target, delay = 0 }) => {
    const [count, setCount] = React.useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.6 });

    React.useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 30);
        return () => clearInterval(timer);
      }
    }, [isInView, target]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2"
      >
        {count}+
      </motion.div>
    );
  };

  return (
    <>
      {/* Mission Section */}
      <section ref={ref1} className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                Who We Are
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 px-2">
                Anand Lockers provides a secure, modern solution for safeguarding your most precious belongings. We are a reliable alternative to bank lockers, designed with the same level of security, privacy, and trust.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed px-2">
                Our state of the art facilities provide advanced security systems with continuous surveillance, private easy access lockers in various sizes, and high standard protection comparable to bank grade safety. A secure space you can trust because your valuables deserve nothing less.
            </p>
        </motion.div>
    </div>
</section>


      {/* Stats Section */}
      <section ref={ref2} className="py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Counter target={stat.number} delay={index * 0.1} />

                <p className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg mt-1">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-700 text-base sm:text-lg md:text-xl italic max-w-2xl mx-auto">
              “Your trust is our strength — and every number reflects the people who rely on our security.”
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default SpotlightSection;