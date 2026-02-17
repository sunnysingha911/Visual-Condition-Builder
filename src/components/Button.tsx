import clsx from "clsx";
import React, { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={twMerge(
        clsx("text-2xl text-white bg-gray-900 outline-none", className),
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
