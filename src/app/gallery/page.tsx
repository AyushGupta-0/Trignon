"use client";
import GlassCard from "../../components/GlassCard";
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

export default function GalleryPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-3xl font-bold mb-6"
      >
        Photo Gallery
      </motion.h1>
      <GlassCard>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[1,2,3,4,5,6,7,8].map((i) => (
            <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
              <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full">
                <div className="aspect-square bg-glass/40 rounded-lg flex items-center justify-center text-gray-400 text-2xl font-bold">Img {i}</div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </GlassCard>
    </div>
  );
} 