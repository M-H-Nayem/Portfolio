import React from 'react';
import { motion } from 'framer-motion';

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
};

const ContactForm = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-[#24252B] rounded-lg shadow-lg p-8 w-full max-w-md"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-300">Get In Touch</h2>
          <button className="text-gray-500 hover:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#303137]" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#303137]" placeholder="Your Email" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2">Message</label>
          <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#303137]" placeholder="How can we help you?"></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send Message
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;