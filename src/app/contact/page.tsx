"use client";
import GlassCard from "../../components/GlassCard";
import PrimaryButton from "../../components/PrimaryButton";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-3xl font-bold mb-6"
      >
        Contact Us
      </motion.h1>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
        className="mb-8"
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
          <GlassCard>
            <p className="mb-2">Address: B-2534 B-BLOCK, INDIRA NAGAR, OPP. UJALA HOSPITAL, LUCKNOW</p>
            <p className="mb-2">Phone: +91 8090422999, +91 8687832993</p>
            <p>Email: info@trignontutorials.com</p>
          </GlassCard>
        </Tilt>
      </motion.div>
      <GlassCard>
        <form className="flex flex-col gap-4">
          <input className="border rounded px-3 py-2 bg-glass/40 text-gray-900 dark:text-white placeholder-gray-400" placeholder="Your Name" />
          <input className="border rounded px-3 py-2 bg-glass/40 text-gray-900 dark:text-white placeholder-gray-400" placeholder="Your Email" />
          <textarea className="border rounded px-3 py-2 bg-glass/40 text-gray-900 dark:text-white placeholder-gray-400" placeholder="Your Message" rows={4} />
          <PrimaryButton type="submit">Send Message</PrimaryButton>
        </form>
      </GlassCard>
    </div>
  );
} 