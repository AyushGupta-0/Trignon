"use client";
import GlassCard from "../../components/GlassCard";
import { motion } from "framer-motion";

const toppers = [
  { name: "Aarav Sharma", marks: 98, year: 2024, school: "St. Xavier's" },
  { name: "Priya Singh", marks: 97, year: 2024, school: "Delhi Public School" },
  { name: "Rahul Verma", marks: 96, year: 2023, school: "City Montessori" },
  { name: "Simran Kaur", marks: 95, year: 2023, school: "La Martiniere" },
  { name: "Aditya Patel", marks: 94, year: 2022, school: "St. Francis" },
];

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

export default function ResultsPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="mb-6 flex items-center justify-between px-2">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-3xl font-bold mb-2"
        >
          Our Toppers
        </motion.h1>
        <motion.a
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          href="/results"
          className="text-primary hover:underline"
        >
          See all
        </motion.a>
      </div>
      <GlassCard>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="divide-y divide-white/10"
        >
          {toppers.map((topper, i) => (
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
    </div>
  );
} 