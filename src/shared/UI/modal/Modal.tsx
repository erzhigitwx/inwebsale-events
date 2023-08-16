import React, { FC } from "react";

interface ModalProps {
  children: React.ReactNode | string;
  setIsOpen: (arg: boolean) => void
}

const Modal: FC<ModalProps> = ({ children, setIsOpen }) => {
  return (
    <div className={"fixed top-0 left-0 w-full h-full grid place-items-center dark:bg-white dark:bg-opacity-20 bg-black bg-opacity-70"} onClick={() => setIsOpen(false)}>
      {children}
    </div>
  );
};

export { Modal };