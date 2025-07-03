"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { name: "Aarav Sharma", class: "XII Science", school: "St. Xavier's School", text: "Trignon Tutorials helped me achieve my dream rank! The teachers are amazing." },
  { name: "Priya Singh", class: "XI Commerce", school: "Delhi Public School", text: "The environment is so supportive and the classes are fun and effective." },
  { name: "Rahul Verma", class: "X Science", school: "Modern School", text: "Best coaching for science and commerce. Highly recommend!" },
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
            <p className="text-gray-900 dark:text-white text-lg italic">{t.text}</p>
            <div className="flex flex-col items-center gap-1">
              <span className="text-primary font-semibold">{t.name}</span>
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.class} &mdash; {t.school}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 