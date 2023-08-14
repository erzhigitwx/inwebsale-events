import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`bg-blue border border-blue rounded-xl flex flex-row justify-center items-center text-white font-semibold dark:prose-darkMode hover:bg-opacity-60 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };