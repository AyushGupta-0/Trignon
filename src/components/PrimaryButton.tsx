import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function PrimaryButton({ children, className = "", href, type = "button", onClick, disabled }: PrimaryButtonProps) {
  const base =
    "px-4 py-2 rounded font-semibold bg-gray-900 text-white dark:text-white dark:bg-gray-900 transition shadow-glass inline-block";
  const hover =
    "hover:bg-white/20 hover:dark:bg-glassDark/60 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/40";

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${hover} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`${base} ${hover} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 