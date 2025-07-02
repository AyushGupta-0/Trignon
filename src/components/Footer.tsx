import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-12 py-6 px-4 bg-glass/70 backdrop-blur-md shadow-glass border-t border-white/10 rounded-t-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300 text-sm">
      <div>
        &copy; {new Date().getFullYear()} <Link href="/">Trignon Tutorials</Link>. All rights reserved.
      </div>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/courses" className="hover:underline">Courses</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/results" className="hover:underline">Results</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
      <div className="text-xs text-gray-500 text-center md:text-right">
        B-2534 B-BLOCK, INDIRA NAGAR, OPP. UJALA HOSPITAL, LUCKNOW
      </div>
    </footer>
  );
} 