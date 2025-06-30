import pp from '/Profile-pic.jpg'



import { motion } from 'framer-motion';


const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-5 items-center justify-between lg:w-10/12 mx-auto px-6 pt-10 md:py-25">
      {/* Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center md:text-left mb-10 md:mb-0"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-gray-100 mb-4"
        >
          MD. Mahmudul Hasan Nayem
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-300 max-w-xl"
        >
          A passionate <span className="text-blue-500 font-semibold">Front-End Developer</span> crafting 
          elegant, interactive, and user-focused web experiences with <span className="text-blue-500 font-semibold">React</span> and modern tools.
        </motion.p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
      >
        <motion.img
          src={pp} // replace with your image path
          alt="Nayem"
          className="w-full h-full object-cover"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
