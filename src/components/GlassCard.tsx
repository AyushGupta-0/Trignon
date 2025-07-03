import React from "react";

export default function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`
      bg-glassDark/60
      backdrop-blur-md
      rounded-2xl
      dark:shadow-glass
      border border-white/10
      p-6
      ${className}
    `}>
      {children}
    </div>
  );
} 