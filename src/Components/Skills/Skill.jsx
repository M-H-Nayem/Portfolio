import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  {
    name: 'HTML',
    icon: FaHtml5,
    description: 'Mastery in crafting semantic, accessible, and high-performance HTML structures for robust web applications. I build the foundational skeleton with precision and best practices.',
    bgColor: 'bg-[#FEECEF]', // Light red/pink
    borderColor: 'border-[#FEECEF]',
    iconColor: 'text-[#E34F26]', // HTML5 brand color
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    description: 'Expert in modern CSS, including Flexbox, Grid, and responsive design techniques. I transform raw designs into pixel-perfect, cross-browser compatible, and highly responsive user interfaces.',
    bgColor: 'bg-[#E0F2FE]', // Light blue
    borderColor: 'border-[#E0F2FE]',
    iconColor: 'text-[#1572B6]', // CSS3 brand color
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    description: 'Proficient in ES6+ JavaScript, with a deep understanding of asynchronous operations, DOM manipulation, and modern language features. I write clean, efficient, and maintainable client-side logic.',
    bgColor: 'bg-[#FFFBEB]', // Light yellow
    borderColor: 'border-[#FFFBEB]',
    iconColor: 'text-[#F7DF1E]', // JavaScript brand color
  },
  {
    name: 'React',
    icon: FaReact,
    description: 'Highly skilled in building dynamic and scalable single-page applications with React. I leverage hooks, context API, and component-based architecture to deliver intuitive and performant user experiences.',
    bgColor: 'bg-[#E0F8F7]', // Light cyan/teal
    borderColor: 'border-[#E0F8F7]',
    iconColor: 'text-[#61DAFB]', // React brand color
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    description: 'Experienced in designing, implementing, and managing NoSQL databases with MongoDB. I efficiently handle data modeling, aggregation pipelines, and ensure data integrity for scalable backends.',
    bgColor: 'bg-[#EDFEEF]', // Light green
    borderColor: 'border-[#EDFEEF]',
    iconColor: 'text-[#47A248]', // MongoDB brand color
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    description: 'Adept at integrating Firebase services like Authentication, Firestore, and Storage into applications. I build robust and secure serverless backends for rapid development and deployment.',
    bgColor: 'bg-[#FFF9E6]', // Lighter yellow/orange
    borderColor: 'border-[#FFF9E6]',
    iconColor: 'text-[#FFCA28]', // Firebase brand color
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    description: 'Expert in utility-first CSS with Tailwind CSS. I rapidly build custom designs and responsive layouts by composing low-level utility classes, ensuring highly optimized and maintainable stylesheets.',
    bgColor: 'bg-[#E3FCF9]', // Pale teal
    borderColor: 'border-[#E3FCF9]',
    iconColor: 'text-[#06B6D4]', // Tailwind CSS brand color
  },
  {
    name: 'NodeJS',
    icon: FaNodeJs,
    description: 'Strong proficiency in server-side development with Node.js and Express.js. I build RESTful APIs, manage server logic, and connect applications to databases efficiently for full-stack solutions.',
    bgColor: 'bg-[#EEFCF1]', // Pale green
    borderColor: 'border-[#EEFCF1]',
    iconColor: 'text-[#6DA55F]', // Node.js brand color
  },
];

const Skill = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16  font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-200 mb-12">
          My Skills
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`p-6 rounded-3xl border-2 shadow-sm flex flex-col items-center text-center ${skill.bgColor} ${skill.borderColor}`}
              variants={cardVariants}
              whileHover={{ translateY: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`p-4 rounded-full flex items-center justify-center mb-4 text-5xl ${skill.iconColor}`}>
                {React.createElement(skill.icon)}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{skill.name}</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;