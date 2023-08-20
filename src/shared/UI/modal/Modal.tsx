import React, { FC } from "react";

interface ModalProps {
  children: React.ReactNode | string;
  setIsOpen: (arg: boolean) => void,
  className: string;
}

const Modal: FC<ModalProps> = ({ children, setIsOpen, className }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full grid place-items-center dark:bg-white bg-black bg-opacity-70 ${className}`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </div>
  );
};

export { Modal };