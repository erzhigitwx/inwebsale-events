import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ className, onChange, value, ...rest }) => {
  const baseStyles = "border border-gray-light rounded-lg px-5 py-4 text-black text-lg font-normal w-[100%] placeholder:text-gray-light dark:placeholder:text-gray dark:bg-dark-blue-light dark:text-white";
  const classes = `${baseStyles} ${className}`;

  return (
    <input
      {...rest}
      className={classes}
      value={value}
      onChange={onChange}
    />
  );
};

export { Input };