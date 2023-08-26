import React, { FC, LiHTMLAttributes } from "react";

interface ButtonIndicatorProps extends LiHTMLAttributes<HTMLLIElement> {
  children: string | React.ReactNode;
  className?: string;
}

const ButtonIndicator: FC<ButtonIndicatorProps> = ({ children, className, ...rest }) => {
  return (
    <li
      className={`text-black text-sm lg:text-medium lg:text-base h-11 px-2 py-1 lg:px-3 lg:py-1.5 rounded-xl grid place-items-center list-none dark:prose-darkMode ${className}`}
      {...rest}
    >
      {children}
    </li>
  );
};

export { ButtonIndicator };