import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonIndicatorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  className?: string;
}

const ButtonIndicator: FC<ButtonIndicatorProps> = ({ children, className }) => {
  return (
    <li
      className={`text-black text-medium text-base h-11 px-3 py-1.5 rounded-xl grid place-items-center list-none ${className}`}
    >
      {children}
    </li>
  );
};

export { ButtonIndicator };