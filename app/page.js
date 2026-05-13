// app/page.js

"use client";
import { useReactToPrint } from "react-to-print";//its used for the download html and css code
import {
  useRef, useState, useEffect
} from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";

export default function ResumeTemplate() {
  const resumeRef = useRef(null)
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Mohd-Muqeem-Alam-Resume",
  });

  const name = 'Mohd Muqeem Muqeem'
  return (

    <div className="min-h-screen bg-gray-200 py-10 px-4 flex justify-center items-center">
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={handlePrint}
          className="bg-black  text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
        >
          Download Resume
        </button>
      </div>

      <motion.div
        ref={resumeRef}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl bg-white/80 backdrop-blur-lg shadow-[0_10px_60px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-3 border border-white/30"
      >

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-b from-gray-900 to-black text-white p-8 relative overflow-hidden">

          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

          {/* Profile */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center relative z-10"
          >

            <img
              src="data:image/jpeg;base64,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"
              alt="profile"
              className="w-36 h-36 rounded-full mx-auto border-4 border-white shadow-2xl object-cover hover:scale-105 transition duration-500"
            />


            <motion.div className=" text-2xl mt-10">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.15, // letter by letter speed
                    duration: 0.3,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>


            <div className="text-gray-300 mt-2">
              <TypeAnimation
                sequence={[
                  "Full Stack developer",
                  4000,
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                ]}
                wrapper="h1"
                speed={80}
                repeat={Infinity}
                cursor={true}
                className="t font-bold mt-5 tracking-wide  min-h-[80px]"
              />
            </div>


          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-1"
          >

            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
              Contact
            </h2>

            <div className="mt-5 space-y-3 text-sm text-gray-300">
              <a className="py-2 mb-1" href="mailto: mohmuqeemalam@gmail.com?subject=Portfolio%20Contact&body=Hi%20Mohd%20Muqeem%20Alam%2C%20I%20visited%20your%20portfolio" >📧 mohmuqeemaalam@gmail.com</a>
              <a href="tel:+917891892408" className="flex items-center gap-x-1"><span>📱</span> +91 7891892408</a>
               <a href="https://wa.me/917891892408?text=Hi%20I%20want%20to%20connect"
  target="_blank" className="flex items-center gap-x-1"  ><span><RiWhatsappFill className="text-green-900 " size={15} /></span>  Chat on WhatsApp </a>
            
              <p>📍Jaipur Rajasthan, India</p>

              
            </div>

          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >

            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
              Skills
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
                "JavaScript",
                "REST API",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition duration-300 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12"
          >

            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
              Languages
            </h2>

            <div className="mt-5 space-y-3 text-gray-300 text-sm">
              <p>English</p>
              <p>Hindi</p>
            </div>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >

            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
              Social Links
            </h2>

            <div className="mt-5 space-y-3 text-sm text-gray-300">
             <a href="https://github.com/mohdmuqeemalam01" className="flex items-center gap-2"  ><span><FaGithub /></span>
                GitHub</a>
          <a href="https://www.linkedin.com/in/mohammad-muqeem-alam/" className="flex items-center gap-2"  ><span><FaLinkedinIn /></span>
                LinkedIn</a>
              <a href="https://mohdmuqeemalam01.github.io/game/" className="flex items-center gap-2"  ><span><IoLogoGameControllerB /></span>
                Project</a>
            </div>

          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 p-10">

          {/* About */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >

            <h2 className="text-3xl font-bold text-gray-800 border-b pb-3">
              About Me
            </h2>

            <p className="mt-5 text-gray-600 leading-8 text-lg">
              Passionate Full Stack Developer with experience in building
              responsive and modern web applications using React.js,
              Next.js, Node.js, Express.js, and MongoDB.
            </p>

          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >

            <h2 className="text-3xl font-bold text-gray-800 border-b pb-3">
              Experience
            </h2>

            <div className="mt-6 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-500">

              <h3 className="text-2xl font-semibold">
                Frontend Developer Intern
              </h3>

              <p className="text-gray-500 mt-1">
                Sofit Grow Solutin Pvt Ltd | April 2025 - Present
              </p>

              <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
                <li>Built responsive UI using React and Tailwind CSS.</li>
                <li>Integrated REST APIs using Axios.</li>
                <li>Improved website performance and SEO.</li>
              </ul>

            </div>

          </motion.section>

          {/* Projects */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >

            <h2 className="text-3xl font-bold text-gray-800 border-b pb-3">
              Projects
            </h2>

            <div className="grid gap-6 mt-6">

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-500"
              >

                <h3 className="text-2xl font-semibold">
                  Ecommerce Website
                </h3>

                <p className="text-gray-600 mt-3">
                  Built responsive ecommerce frontend using Next.js,
                  Tailwind CSS and REST API integration.
                </p>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-500"
              >

                <h3 className="text-2xl font-semibold">
                  Todo App
                </h3>

                <p className="text-gray-600 mt-3">
                  Developed full stack MERN Todo Application with CRUD features.
                </p>

              </motion.div>

            </div>

          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >

            <h2 className="text-3xl font-bold text-gray-800 border-b pb-3">
              Education
            </h2>

            <div className="mt-6 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-500">

              <h3 className="text-2xl font-semibold">
                Bachelor Degree 
              </h3>

              <p className="text-gray-500 mt-2">
                Arya College of Engineering | Computer Science of Engineering | 2022 - 2026
              </p>

            </div>

          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >

            <h2 className="text-3xl font-bold text-gray-800 border-b pb-3">
              Certifications
            </h2>

            <div className="mt-6 text-gray-600 space-y-3">
              <p>✔ MERN Stack Development</p>
              <p>✔ Responsive Web Design</p>
              <p>✔ JavaScript Programming</p>
            </div>

          </motion.section>

        </div>

      </motion.div>
    </div>
  );
}
