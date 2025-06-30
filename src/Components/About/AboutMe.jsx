import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiCloud } from 'react-icons/fi'; // Example icons, adjust as needed

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
      <div className=" text-white py-16 px-4 md:px-8 lg:px-16 font-sans">
          
          <motion.h2
            className="text-5xl font-bold text-center text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            About me
          </motion.h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section: Services */}
        <motion.div
          className="lg:w-1/3 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Website Development */}
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="relative">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-orange-500 hidden md:block"></span>
              <div className="relative z-10 p-3 bg-orange-500 rounded-full flex items-center justify-center">
                <FiMonitor className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold">Website Development</h3>
          </motion.div>

          {/* App Development */}
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="relative">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-orange-500 hidden md:block"></span>
              <div className="relative z-10 p-3 bg-orange-500 rounded-full flex items-center justify-center">
                <FiSmartphone className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold">App Development</h3>
          </motion.div>

          {/* Website Hosting */}
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="relative">
              {/* No line needed below the last item for this style */}
              <div className="relative z-10 p-3 bg-orange-500 rounded-full flex items-center justify-center">
                <FiCloud className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold">Website Hosting</h3>
          </motion.div>
        </motion.div>

        {/* Right Section: About Me & Stats */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I started my software journey from my dmisson journey. Through that, I learned to
            love the process of creating from scratch. Since then, this has led me to
            Wevsite  development as it fulfills my love for learning and building things.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
                  >
                      
            {/* Completed Projects */}
            {/* <motion.div className="flex flex-col items-start" variants={statVariants}>
              <span className="text-5xl font-bold text-orange-500">120 +</span>
              <span className="text-gray-300 text-lg mt-2">Completed Projects</span>
            </motion.div> */}

            {/* Client Satisfaction */}
            {/* <motion.div className="flex flex-col items-start" variants={statVariants}>
              <span className="text-5xl font-bold text-orange-500">95 %</span>
              <span className="text-gray-300 text-lg mt-2">Client satisfaction</span>
            </motion.div> */}

            {/* Years of Experience */}
            {/* <motion.div className="flex flex-col items-start" variants={statVariants}>
              <span className="text-5xl font-bold text-orange-500">10 +</span>
              <span className="text-gray-300 text-lg mt-2">Years of experience</span>
                      </motion.div> */}
                       
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;