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
    "px-4 py-2 rounded font-semibold bg-gray-900 text-white dark:text-white dark:bg-gray-900 transition inline-block border border-transparent";
  const hover =
    "hover:bg-gray-800 dark:hover:bg-gray-800 hover:text-white";
  const focus =
    "focus:outline-none focus:ring-2 focus:ring-primary/40";
  const active =
    "active:bg-gray-800 dark:active:bg-gray-800 active:text-white";

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${hover} ${focus} ${active} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`${base} ${hover} ${focus} ${active} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 