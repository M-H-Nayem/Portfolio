import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
};

const Navbar = () => {
  let [openContact, setOpenContact] = useState(false);

  let links = (
    <>
      <motion.li
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          type: "spring",
          damping: 25,
          stiffness: 100,
        }}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `relative text-lg font-medium text-black transition-all duration-300 hover:text-blue-500 ${
              isActive ? "text-blue-600" : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
              Home
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute  left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded"
                />
              )}
            </>
          )}
        </NavLink>
      </motion.li>
      {/* <motion.li
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          type: "spring",
          damping: 25,
          stiffness: 100,
          delay: 0.3,
        }}
      >
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            `relative text-lg font-medium text-black transition-all duration-300 hover:text-blue-500 ${
              isActive ? "text-blue-600" : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
             About
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute  left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded"
                />
              )}
            </>
          )}
        </NavLink>
      </motion.li> */}
      <motion.li
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          damping: 25,
          stiffness: 100,
          delay: 0.6,
        }}
      >
        <NavLink
          to={"/project"}
          className={({ isActive }) =>
            `relative text-lg font-medium text-black transition-all duration-300 hover:text-blue-500 ${
              isActive ? "text-blue-600" : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
              Project
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute  left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded"
                />
              )}
            </>
          )}
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          damping: 25,
          stiffness: 100,
          delay: 0.9,
        }}
      >
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `relative text-lg font-medium text-black transition-all duration-300 hover:text-blue-500 ${
              isActive ? "text-blue-600" : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
              Contact
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute  left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded"
                />
              )}
            </>
          )}
        </NavLink>
      </motion.li>
    </>
  );
  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 left-0 w-full bg-white/30 backdrop-blur-lg text-black shadow-lg z-50 "
      >
        <div className="navbar  lg:px-10 pr-3 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.3,
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.4,
              }}
              className="flex justify-center items-center gap-2"
            >
              <p className="text-xl hidden lg:block font-bold  p-[6px] px-3 text-blue-800 bg-gradient-to-r from-gray-400 to-red-300 rounded-xl">
                N
              </p>
              <h1 className=" text-xl font-bold">Nayem</h1>
            </motion.div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <motion.div className="menu menu-horizontal px-1">
              {links}
            </motion.div>
          </div>
          <div className="navbar-end">
            <motion.button
              // initial={{ opacity: 1, scale: 0.9 }}
              animate={{ opacity: [1, 0.5, 1], scale: [0.9, 1.1, 0.9] }}
              transition={{
                duration: 2,
                repeat: Infinity, // animation লুপ করবে অনন্তকাল
                repeatType: "loop",
                // delay: 0.6,
                // duration: 3,
                // type: "spring",
                damping: 15,
                stiffness: 100,
                // repeat:Infinity
              }}
              className="btn text-black hover:text-white border-none bg-gradient-to-l from-gray-700  to-gray-100 rounded-xl font-bold transition-colors duration-600 hover:from-violet-800 hover:to-violet-300 text-xl"
              onClick={() => setOpenContact(true)}
            >
              Hire Me
            </motion.button>
          </div>
        </div>
      </motion.div>
      {openContact && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center z-50"
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
              <h2 className="text-xl font-semibold text-gray-300">
                Get In Touch
              </h2>
              <button
                onClick={() => setOpenContact(false)}
                className="text-gray-500 hover:text-gray-300 focus:outline-none"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault()
              // console.log(e.target);
              let form = e.target
              let formData = new FormData(form)
              let formDataObj = Object.fromEntries(formData.entries())
              console.log(formDataObj);
              setOpenContact(false)
            }}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#303137]"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#303137]"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#303137]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
