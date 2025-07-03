"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <footer className="w-full mt-8 py-6 px-4 md:px-8 bg-glass/60 dark:bg-glassDark/60 backdrop-blur-md shadow-glass rounded-t-2xl border border-white/10 text-gray-500 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
      <div className="text-center md:text-left w-full md:w-auto">
        &copy; {new Date().getFullYear()} <Link href="/">Trignon Tutorials</Link>. All rights reserved.
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center md:justify-center gap-4 w-full md:w-auto"
      >
        {[{ href: "/", label: "Home" }, { href: "/courses", label: "Courses" }, { href: "/gallery", label: "Gallery" }, { href: "/results", label: "Results" }, { href: "/contact", label: "Contact" }].map((item) => (
          <motion.div key={item.href} variants={fadeInUp} whileHover={{ scale: 1.08, color: "#0ea5e9" }}>
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-xs text-gray-500 text-center md:text-right w-full md:w-auto">
        B-2534 B-BLOCK, INDIRA NAGAR, OPP. UJALA HOSPITAL, LUCKNOW
      </div>
    </footer>
  );
} 