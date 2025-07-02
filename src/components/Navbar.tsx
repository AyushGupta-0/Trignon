"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-glassDark/80 dark:bg-glassDark/80 bg-glass/70 backdrop-blur-md shadow-glass sticky top-0 z-50 rounded-b-2xl">
      <div className="font-bold text-xl tracking-tight">
        <Link href="/">Trignon Tutorials</Link>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-base font-medium items-center">
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
      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="p-2 rounded-lg bg-glass/40 dark:bg-glassDark/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Open menu"
        >
          {/* Hamburger icon */}
          <span className="text-2xl text-black dark:text-white">{menuOpen ? "✕" : "☰"}</span>
        </button>
        <button
          onClick={() => setDark((d) => !d)}
          className="p-2 rounded-lg bg-glass/40 dark:bg-glassDark/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </button>
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