"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { name: "Aarav Sharma", text: "Trignon Tutorials helped me achieve my dream rank! The teachers are amazing.", avatar: "/avatar1.png" },
  { name: "Priya Singh", text: "The environment is so supportive and the classes are fun and effective.", avatar: "/avatar2.png" },
  { name: "Rahul Verma", text: "Best coaching for science and commerce. Highly recommend!", avatar: "/avatar3.png" },
];

export default function TestimonialsCarousel() {
  return (
    <Swiper
      slidesPerView={1}
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="rounded-2xl"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-glass/70 backdrop-blur-md rounded-2xl shadow-glass p-8 flex flex-col items-center gap-4 border border-white/10">
            <Image src={t.avatar} alt={t.name} width={64} height={64} className="rounded-full border-2 border-primary" />
            <p className="text-gray-900 dark:text-white text-lg italic">{t.text}</p>
            <span className="text-primary font-semibold">{t.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 