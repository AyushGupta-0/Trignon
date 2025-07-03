"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GlassCard from "./GlassCard";
import PrimaryButton from "./PrimaryButton";
import Tilt from "react-parallax-tilt";
const TestimonialsCarousel = dynamic(() => import("./TestimonialsCarousel"), { ssr: false });

export default function HomeContent() {
  return (
    <div className="flex flex-col gap-16 items-center w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto text-center py-16 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">Welcome to Trignon Tutorials</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">Precision Coaching. Nurturing Atmosphere. Holistic Development.<br/>Unlock your potential with expert educators and a supportive community.</p>
        <PrimaryButton href="/courses">Explore Courses</PrimaryButton>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 py-8"
      >
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Why Choose Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Precision Coaching: Elevating Performance Through Personalized Feedback and Goal-driven Strategies.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
              <GlassCard className="flex flex-col gap-2 p-4">
                <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Better Future</div>
                <div className="text-gray-600 dark:text-gray-300 text-base">Education unlocks potential, creating a pathway to a better future.</div>
              </GlassCard>
            </Tilt>
            {/* Feature 2 */}
            <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
              <GlassCard className="flex flex-col gap-2 p-4">
                <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Qualified Teachers</div>
                <div className="text-gray-600 dark:text-gray-300 text-base">Empowering minds, skilled educators shape futures with qualified teaching excellence.</div>
              </GlassCard>
            </Tilt>
            {/* Feature 3 */}
            <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
              <GlassCard className="flex flex-col gap-2 p-4">
                <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Nurturing Atmosphere</div>
                <div className="text-gray-600 dark:text-gray-300 text-base">Educators foster a warm, nurturing environment where students feel supported and valued.</div>
              </GlassCard>
            </Tilt>
            {/* Feature 4 */}
            <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
              <GlassCard className="flex flex-col gap-2 p-4">
                <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">Holistic Development</div>
                <div className="text-gray-600 dark:text-gray-300 text-base">Beyond academics, we nurture emotional well-being and holistic growth.</div>
              </GlassCard>
            </Tilt>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full max-w-xs">
            <GlassCard className="p-2 flex flex-col items-center">
              <img src="/topper.jpg" alt="State Topper" className="rounded-2xl w-full object-cover shadow-lg" />
              <div className="mt-2 text-center text-sm text-gray-400">State Topper 2017-18</div>
            </GlassCard>
          </Tilt>
        </div>
      </motion.section>

      {/* Courses Preview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto"
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Courses</h2>
          <a href="/courses" className="text-primary hover:underline">See all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["VI-VIII", "IX-X", "XI-XII/IIT/NEET", "XI-XII/Commerce"].map((title, i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
              <GlassCard>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Engaging classes, strong foundation, and expert guidance for every stage.</p>
                <PrimaryButton href="/courses" className="mt-2">Learn More</PrimaryButton>
              </GlassCard>
            </Tilt>
          ))}
        </div>
      </motion.section>

      {/* Gallery Preview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-5xl mx-auto"
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
          <a href="/gallery" className="text-primary hover:underline">See all</a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {[1,2,3,4,5,6].map((i) => (
            <Tilt key={i} glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
              <GlassCard className="aspect-square flex items-center justify-center text-gray-400 text-2xl font-bold p-0">
                <span>Img {i}</span>
              </GlassCard>
            </Tilt>
          ))}
        </div>
      </motion.section>

      {/* Contact Us Button */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full max-w-3xl mx-auto text-center"
      >
        <PrimaryButton href="/contact">Contact Us</PrimaryButton>
      </motion.section>

      {/* Testimonials Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">What Our Students Say</h2>
        <TestimonialsCarousel />
      </motion.section>

      {/* Results Preview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Toppers</h2>
          <a href="/results" className="text-primary hover:underline">See all</a>
        </div>
        <GlassCard>
          <ul className="divide-y divide-white/10">
            {[{ name: "Aarav Sharma", marks: 98, year: 2024, school: "St. Xavier's" }, { name: "Priya Singh", marks: 97, year: 2024, school: "Delhi Public School" }, { name: "Rahul Verma", marks: 96, year: 2023, school: "City Montessori" }].map((topper, i) => (
              <li key={i} className="flex items-center justify-between py-3 px-2 hover:bg-white/10 dark:hover:bg-glassDark/80 rounded-xl transition">
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
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.section>
    </div>
  );
} 