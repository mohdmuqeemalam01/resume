// app/page.js — Highly Responsive Bento-Grid Portfolio / Resume
"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Unbounded, Manrope } from "next/font/google";
import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FiDownload, FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const display = Unbounded({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

/* ---------- Portfolio Data ---------- */
const DATA = {
  name: "Mohd Muqeem Alam",
  roles: ["Full Stack Developer", "Frontend Developer", "React Developer", "Next.js Developer"],
  photo: "/profile.jpg",
  email: "mohmuqeemalam@gmail.com",
  phone: "+91 7891892408",
  phoneHref: "tel:+917891892408",
  whatsapp: "https://wa.me/917891892408?text=Hi%20Muqeem%2C%20I%20saw%20your%20portfolio",
  location: "Jaipur, Rajasthan, India",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "JavaScript",
    "REST API",
    "Meta Ads",
    "WhatsApp API",
  ],
  languages: ["English", "Hindi"],
  links: [
    { label: "GitHub", href: "https://github.com/mohdmuqeemalam01", Icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-muqeem-alam/", Icon: FaLinkedinIn },
    { label: "Game Project", href: "https://mohdmuqeemalam01.github.io/game/", Icon: IoLogoGameControllerB },
    { label: "Speedy Cars", href: "https://speedycars.in", Icon: FaGlobe },
  ],
  about:
    "Full stack developer who builds fast, responsive web apps with React, Next.js, Node.js, Express, and MongoDB. I focus on clean UI design, accessible architecture, and high performance for optimal user experience.",
  experience: [
    {
      title: "Full Stack Developer",
      org: "Speedy Cars",
      period: "2026 – Present",
      points: [
        "Building the complete Speedy Cars website using Next.js, Node.js, and MySQL.",
        "Designing database schemas and RESTful APIs.",
        "Optimizing frontend pages for maximum performance and SEO.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      org: "Sofit Grow Solution Pvt Ltd",
      period: "Apr 2025 – Apr 2026",
      points: [
        "Built responsive user interfaces using React and Tailwind CSS.",
        "Integrated REST APIs with Axios and optimized component state.",
        "Improved web page performance metrics and search visibility.",
      ],
    },
    {
      title: "Python Developer Intern",
      org: "Learn and Build",
      period: "Jul 2024 – Aug 2024",
      points: [
        "Mastered Python fundamentals and object-oriented programming.",
        "Applied algorithmic concepts to solve complex programming tasks.",
      ],
    },
  ],
  projects: [
    {
      title: "Speedy Cars Website",
      href: "https://speedycars.in",
      text: "Full stack automotive platform built with Next.js, Node.js REST APIs, and MySQL.",
      stack: ["Next.js", "Node.js", "MySQL", "REST API"],
    },
    {
      title: "Ecommerce Storefront",
      text: "Responsive e-commerce frontend connected to dynamic inventory APIs.",
      stack: ["Next.js", "Tailwind CSS", "REST API"],
    },
    {
      title: "Task Management App",
      text: "Full stack MERN application featuring real-time state and complete CRUD options.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
    },
  ],
  education: {
    degree: "B.Tech in Computer Science Engineering",
    school: "Rajasthan Technical University",
    period: "2022 – 2026",
  },
  certifications: ["MERN Stack Development", "Responsive Web Design", "JavaScript Programming", "C++", "Linux", "Python"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  alternateName: "Muqeem",
  url: "https://mohdmuqeemalam.vercel.app",
  image: "https://mohdmuqeemalam.vercel.app/profile.jpg",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://instagram.com/mohm.muqeem.alam",
    "https://github.com/mohdmuqeemalam01",
    "https://linkedin.com/in/mohammad-muqeem-alam",
  ],
};

const PROJECT_TINTS = ["bg-[#EBF5FF]", "bg-[#FFFBEB]", "bg-[#FFF0F0]"];

/* ---------- Framer Motion Variants ---------- */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.02 } } };
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ---------- Card / Tile Component ---------- */
function Tile({ labelledby, className = "", children }) {
  return (
    <motion.section
      variants={item}
      aria-labelledby={labelledby}
      className={`rounded-3xl p-5 sm:p-6 text-[#1E1B4B] shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 print:shadow-none print:border-gray-300 print:break-inside-avoid ${className}`}
    >
      {children}
    </motion.section>
  );
}

function TileTitle({ id, children }) {
  return (
    <h2 id={id} className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold tracking-tight text-[#1E1B4B]">
      {children}
    </h2>
  );
}

const focusRing = "rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3DF5]";

export default function ResumeTemplate() {
  const resumeRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [photoFailed, setPhotoFailed] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Mohd-Muqeem-Alam-Resume",
    pageStyle: `
      @page { size: A4; margin: 10mm; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    `,
  });

  const initials = DATA.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] min-h-screen bg-[#F3F4F8] text-[#1E1B4B] px-4 py-6 sm:px-8 sm:py-10 print:bg-white print:p-0`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Top Action Bar */}
      <div className="mx-auto mb-6 flex max-w-6xl justify-between items-center print:hidden">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-600">Available for Opportunities</span>
        </div>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-full bg-[#1E1B4B] px-5 py-2.5 text-xs sm:text-sm font-medium text-white shadow-md transition hover:bg-[#5B3DF5] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3DF5]"
        >
          <FiDownload aria-hidden="true" />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Main Bento Grid Layout */}
      <motion.main
        ref={resumeRef}
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 print:grid-cols-3 print:gap-3"
      >
        {/* HERO TILE (Spans 2 columns on desktop) */}
        <Tile
          labelledby="hero"
          className="flex flex-col justify-between gap-6 bg-[#1E1B4B] !text-white border-none md:col-span-2"
        >
          <div>
            <span className="inline-block rounded-full bg-[#5B3DF5] px-3 py-1 text-[11px] font-semibold text-white mb-4">
              Portfolio & CV
            </span>
            <h1
              id="hero"
              aria-label={DATA.name}
              className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            >
              {DATA.name}
            </h1>

            <div className="mt-2 min-h-[1.75rem] text-base sm:text-lg text-[#B9A9FF] font-medium">
              {reduceMotion ? (
                <p>{DATA.roles[0]}</p>
              ) : (
                <TypeAnimation
                  sequence={DATA.roles.flatMap((r) => [r, 2200])}
                  wrapper="p"
                  speed={60}
                  repeat={Infinity}
                  cursor
                />
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-[#D9D4FF] max-w-2xl">{DATA.about}</p>
        </Tile>

        {/* PROFILE PHOTO TILE */}
        <motion.div
          variants={item}
          className="relative min-h-[260px] md:min-h-full overflow-hidden rounded-3xl bg-[#5B3DF5] shadow-sm border border-slate-200/80"
        >
          {photoFailed ? (
            <div
              className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-5xl font-bold text-white bg-[#5B3DF5]"
              aria-label={DATA.name}
            >
              {initials}
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={DATA.photo}
              alt={`Portrait of ${DATA.name}`}
              onError={() => setPhotoFailed(true)}
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          )}
        </motion.div>

        {/* CONTACT INFO TILE */}
        <Tile labelledby="contact" className="bg-white">
          <TileTitle id="contact">Contact Details</TileTitle>
          <ul className="mt-4 space-y-3 text-xs sm:text-sm font-medium">
            <li>
              <a
                href={`mailto:${DATA.email}`}
                className={`flex items-center gap-3 text-slate-700 hover:text-[#5B3DF5] transition ${focusRing}`}
              >
                <div className="p-2 rounded-xl bg-indigo-50 text-[#5B3DF5] shrink-0">
                  <MdEmail size={18} />
                </div>
                <span className="break-all">{DATA.email}</span>
              </a>
            </li>
            <li>
              <a
                href={DATA.phoneHref}
                className={`flex items-center gap-3 text-slate-700 hover:text-[#5B3DF5] transition ${focusRing}`}
              >
                <div className="p-2 rounded-xl bg-indigo-50 text-[#5B3DF5] shrink-0">
                  <MdPhone size={18} />
                </div>
                <span>{DATA.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 text-slate-700 hover:text-[#5B3DF5] transition ${focusRing}`}
              >
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <RiWhatsappFill size={18} />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <div className="p-2 rounded-xl bg-indigo-50 text-[#5B3DF5] shrink-0">
                <MdLocationOn size={18} />
              </div>
              <span>{DATA.location}</span>
            </li>
          </ul>
        </Tile>

        {/* TECHNICAL SKILLS TILE (Spans 2 columns on desktop) */}
        <Tile labelledby="skills" className="bg-[#E4DEFF] md:col-span-2">
          <TileTitle id="skills">Technical Expertise</TileTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {DATA.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1E1B4B] shadow-sm transition hover:bg-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </Tile>

        {/* EXPERIENCE TILE (Spans 2 columns on desktop) */}
        <Tile labelledby="experience" className="bg-white md:col-span-2">
          <TileTitle id="experience">Work Experience</TileTitle>
          <div className="mt-5 space-y-6">
            {DATA.experience.map((job) => (
              <article key={job.title + job.org} className="relative border-l-2 border-indigo-100 pl-4 sm:pl-5">
                <span
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#5B3DF5]"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold text-[#5B3DF5]">{job.period}</span>
                <h3 className="font-[family-name:var(--font-display)] text-sm sm:text-base font-bold text-[#1E1B4B]">
                  {job.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-2">{job.org}</p>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {job.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#5B3DF5] mt-1">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Tile>

        {/* PROJECTS SECTION */}
        <div className="flex flex-col gap-4" role="group" aria-label="Projects">
          {DATA.projects.map((p, i) => (
            <Tile key={p.title} labelledby={`project-${i}`} className={`${PROJECT_TINTS[i % PROJECT_TINTS.length]} flex flex-col justify-between`}>
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 id={`project-${i}`} className="font-[family-name:var(--font-display)] text-sm sm:text-base font-bold">
                    {p.title}
                  </h3>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title}`}
                      className={`rounded-full bg-[#1E1B4B] p-1.5 text-white transition hover:bg-[#5B3DF5] print:hidden ${focusRing}`}
                    >
                      <FiArrowUpRight size={14} />
                    </a>
                  )}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">{p.text}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-white/80 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </Tile>
          ))}
        </div>

        {/* EDUCATION TILE */}
        <Tile labelledby="education" className="bg-white">
          <TileTitle id="education">Education</TileTitle>
          <div className="mt-3">
            <p className="text-xs sm:text-sm font-bold text-[#1E1B4B]">{DATA.education.degree}</p>
            <p className="text-xs font-medium text-slate-500 mt-0.5">{DATA.education.school}</p>
            <span className="inline-block mt-3 rounded-md bg-indigo-50 px-2 py-1 text-xs font-bold text-[#5B3DF5]">
              {DATA.education.period}
            </span>
          </div>
        </Tile>

        {/* CERTIFICATIONS TILE */}
        <Tile labelledby="certifications" className="bg-[#D3F5E6]">
          <TileTitle id="certifications">Certifications</TileTitle>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm font-semibold text-[#1E1B4B]">
            {DATA.certifications.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-700 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Tile>

        {/* LINKS & LANGUAGES TILE */}
        <Tile labelledby="links" className="bg-white">
          <TileTitle id="links">Connect & Languages</TileTitle>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm font-semibold">
            {DATA.links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 text-slate-700 hover:text-[#5B3DF5] transition ${focusRing}`}
                >
                  <Icon className="text-[#5B3DF5] shrink-0" size={16} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-slate-100 pt-3 text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-[#1E1B4B]">Languages: </span>
            {DATA.languages.join(", ")}
          </div>
        </Tile>
      </motion.main>
    </div>
  );
}