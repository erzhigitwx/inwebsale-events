import React, { FC } from "react";

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerButton: FC<BurgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button className="absolute top-10 left-24 sm:right-10 flex flex-col h-10 justify-between" onClick={onClick}>
      <div className={`absolute w-12 h-1.5 right-2 bg-dark-blue rounded-xl dark:bg-blue bottom-12 ${isOpen ? "-top-2.5 rotate-45" : ""}`}></div>
      <div className={`absolute w-12 h-1.5 right-2 bg-dark-blue rounded-xl dark:bg-blue bottom-9 ${isOpen ? "hidden" : ""}`}></div>
      <div className={`absolute w-12 h-1.5 right-2 bg-dark-blue rounded-xl dark:bg-blue bottom-6 ${isOpen ? "-top-2.5 rotate-[-45deg]" : ""}`}></div>
    </button>
  );
};

export { BurgerButton };