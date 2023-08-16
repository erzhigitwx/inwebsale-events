import React, { FC, ImgHTMLAttributes } from "react";

interface ModalImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string,
  alt: string;
  className?: string | undefined;
  after?: string | undefined;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void
}

const ModalImage: FC<ModalImageProps> = ({ src, alt, className, after, isOpen, setIsOpen }) => {
  return isOpen &&
    <div className={"fixed top-0 left-0 w-full h-full grid place-items-center dark:bg-white dark:bg-opacity-20 bg-black bg-opacity-70"} onClick={() => setIsOpen(false)}>
      <img src={src} alt={alt} className={`border-blue cursor-pointer ${after}`}/>
    </div>
    ||
    <img src={src} alt={alt} className={`border-blue hover:opacity-80 cursor-pointer ${className}`} onClick={() => setIsOpen(true)}/>;
};

export { ModalImage };