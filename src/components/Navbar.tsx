"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
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

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // On mount, check for saved theme or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setDark(saved === "dark");
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // When dark changes, update html class and localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-glass/60 dark:bg-glassDark/60 backdrop-blur-md shadow-glass sticky top-0 z-50 rounded-b-2xl border border-white/10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="font-bold text-xl tracking-tight"
      >
        <Link href="/">Trignon Tutorials</Link>
      </motion.div>
      {/* Desktop Nav */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="hidden md:flex gap-6 text-base font-medium items-center"
      >
        {[{ href: "/", label: "Home" }, { href: "/courses", label: "Courses" }, { href: "/gallery", label: "Gallery" }, { href: "/results", label: "Results" }, { href: "/contact", label: "Contact" }, { href: "/dashboard", label: "Dashboard" }, { href: "/signin", label: "Sign In" }].map((item) => (
          <motion.div key={item.href} variants={fadeInUp} whileHover={{ scale: 1.08, color: "#0ea5e9" }}>
            <Link
              href={item.href}
              className={
                `px-2 py-1 rounded transition font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary`
              }
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.15, rotate: 20 }}
          onClick={() => setDark((d) => !d)}
          className="ml-4 px-3 py-1 rounded-lg bg-glass/40 dark:bg-glassDark/40 backdrop-blur-xs border border-white/10 text-white hover:bg-glass/60 dark:hover:bg-glassDark/60 transition"
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </motion.button>
      </motion.div>
      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.15, rotate: 10 }}
          onClick={() => setMenuOpen((open) => !open)}
          className="p-2 rounded-lg bg-glass/40 dark:bg-glassDark/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Open menu"
        >
          {/* Hamburger icon */}
          <span className="text-2xl text-black dark:text-white">{menuOpen ? "✕" : "☰"}</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15, rotate: 20 }}
          onClick={() => setDark((d) => !d)}
          className="p-2 rounded-lg bg-glass/40 dark:bg-glassDark/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </motion.button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-2xl md:hidden flex flex-col" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-4 left-4 right-4 bg-black/80 rounded-2xl shadow-xl p-6 flex flex-col gap-6 text-lg font-medium text-white backdrop-blur-2xl border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/results" onClick={() => setMenuOpen(false)}>Results</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <Link href="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
} 