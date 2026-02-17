import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return (
    <input
      className={` 
        w-full 
        px-2.5 py-2 
        rounded-md
        outline-0
        transition-[border]
        duration-300
        border-2
      bg-slate-950
      border-slate-600
        ${className} 
        `}
      {...rest}
    />
  );
};

export default Input;
