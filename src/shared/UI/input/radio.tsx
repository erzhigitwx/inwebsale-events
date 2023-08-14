import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = ({ className, onChange, isChecked }) => {
  return (
    <input
      type="radio"
      className={`w-6 h-6 ${className}`}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export { Radio };