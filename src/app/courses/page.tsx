"use client";
import GlassCard from "../../components/GlassCard";
import PrimaryButton from "../../components/PrimaryButton";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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

export default function CoursesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-3xl font-bold mb-6"
      >
        Our Courses
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[1,2,3,4].map((i) => (
          <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
            <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
              <GlassCard>
                <h2 className="text-xl font-semibold">Course Title {i}</h2>
                <p className="text-gray-700 dark:text-gray-300">Short description of the course and its benefits. Engaging, effective, and fun for students.</p>
                <PrimaryButton className="mt-2">Learn More</PrimaryButton>
              </GlassCard>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 