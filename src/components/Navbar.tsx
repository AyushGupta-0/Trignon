"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

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
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-glassDark/80 dark:bg-glassDark/80 bg-glass/70 backdrop-blur-md shadow-glass sticky top-0 z-50 rounded-b-2xl">
      <div className="font-bold text-xl tracking-tight">
        <Link href="/">Trignon Tutorials</Link>
      </div>
      <div className="flex gap-6 text-base font-medium items-center">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/results">Results</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/signin">Sign In</Link>
        <button
          onClick={() => setDark((d) => !d)}
          className="ml-4 px-3 py-1 rounded-lg bg-glass/40 dark:bg-glassDark/40 backdrop-blur-xs border border-white/10 text-white hover:bg-glass/60 dark:hover:bg-glassDark/60 transition"
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
} 