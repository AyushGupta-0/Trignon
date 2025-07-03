"use client";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import GlassCard from "./GlassCard";
import PrimaryButton from "./PrimaryButton";
import Tilt from "react-parallax-tilt";
const TestimonialsCarousel = dynamic(() => import("./TestimonialsCarousel"), { ssr: false });

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

export default function HomeContent() {
  return (
    <div className="flex flex-col gap-16 items-center w-full">
      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="w-full max-w-4xl mx-auto text-center py-16 px-4"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">Welcome to Trignon Tutorials</motion.h1>
        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">Precision Coaching. Nurturing Atmosphere. Holistic Development.<br/>Unlock your potential with expert educators and a supportive community.</motion.p>
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
          <PrimaryButton href="/courses">Explore Courses</PrimaryButton>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 py-8"
      >
        <div className="flex-1 flex flex-col gap-6">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Why Choose Us</motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-700 dark:text-gray-300 mb-4">Precision Coaching: Elevating Performance Through Personalized Feedback and Goal-driven Strategies.</motion.p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[{
              title: "Better Future",
              desc: "Education unlocks potential, creating a pathway to a better future.",
            }, {
              title: "Qualified Teachers",
              desc: "Empowering minds, skilled educators shape futures with qualified teaching excellence.",
            }, {
              title: "Nurturing Atmosphere",
              desc: "Educators foster a warm, nurturing environment where students feel supported and valued.",
            }, {
              title: "Holistic Development",
              desc: "Beyond academics, we nurture emotional well-being and holistic growth.",
            }].map((f, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
                <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
                  <GlassCard className="flex flex-col gap-2 p-4">
                    <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">{f.title}</div>
                    <div className="text-gray-600 dark:text-gray-300 text-base">{f.desc}</div>
                  </GlassCard>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="flex-1 flex justify-center items-center">
          <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full max-w-xs">
            <GlassCard className="p-2 flex flex-col items-center">
              <img src="/topper.jpg" alt="State Topper" className="rounded-2xl w-full object-cover shadow-lg" />
              <div className="mt-2 text-center text-sm text-gray-400">State Topper 2017-18</div>
            </GlassCard>
          </Tilt>
        </motion.div>
      </motion.section>

      {/* Courses Preview */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-5xl mx-auto"
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-900 dark:text-white">Our Courses</motion.h2>
          <motion.a variants={fadeInUp} href="/courses" className="text-primary hover:underline">See all</motion.a>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {["VI-VIII", "IX-X", "XI-XII/IIT/NEET", "XI-XII/Commerce"].map((title, i) => (
            <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
              <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
                <GlassCard>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Engaging classes, strong foundation, and expert guidance for every stage.</p>
                  <PrimaryButton href="/courses" className="mt-2">Learn More</PrimaryButton>
                </GlassCard>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Gallery Preview */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-5xl mx-auto"
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-900 dark:text-white">Gallery</motion.h2>
          <motion.a variants={fadeInUp} href="/gallery" className="text-primary hover:underline">See all</motion.a>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-3"
        >
          {[1,2,3,4,5,6].map((i) => (
            <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
              <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
                <GlassCard className="aspect-square flex items-center justify-center text-gray-400 text-2xl font-bold p-0">
                  <span>Img {i}</span>
                </GlassCard>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Us Button */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-3xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
          <PrimaryButton href="/contact">Contact Us</PrimaryButton>
        </motion.div>
      </motion.section>

      {/* Testimonials Carousel */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-3xl mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">What Our Students Say</motion.h2>
        <motion.div variants={fadeInUp}>
          <TestimonialsCarousel />
        </motion.div>
      </motion.section>

      {/* Results Preview */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-900 dark:text-white">Our Toppers</motion.h2>
          <motion.a variants={fadeInUp} href="/results" className="text-primary hover:underline">See all</motion.a>
        </div>
        <GlassCard>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="divide-y divide-white/10"
          >
            {[{ name: "Aarav Sharma", marks: 98, year: 2024, school: "St. Xavier's" }, { name: "Priya Singh", marks: 97, year: 2024, school: "Delhi Public School" }, { name: "Rahul Verma", marks: 96, year: 2023, school: "City Montessori" }].map((topper, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex items-center justify-between py-3 px-2 rounded-xl transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-accent">#{i+1}</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-gray-900 dark:text-white">{topper.name}</span>
                    <span className="text-xs text-gray-400">{topper.school}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-mono text-primary">{topper.marks}%</span>
                  <span className="text-xs text-gray-400">{topper.year}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </GlassCard>
      </motion.section>
    </div>
  );
} 