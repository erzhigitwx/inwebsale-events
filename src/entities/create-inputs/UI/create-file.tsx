import React, { useCallback, useRef, useState } from "react";
import { changeFile } from "@/shared/utils/change-file";
import Image from "next/image";
import { TFunction } from "i18next";

interface CreateFileProps {
  text: string;
  t: TFunction;
  error?: string;
}

const CreateFile: React.FC<CreateFileProps> = ({ text, t, error }) => {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = useCallback(() => {
    if (inputFile.current !== null) {
      inputFile.current.click();
    }
  }, []);

  return (
    <>
      <button
        type={"button"}
        className={"flex flex-row justify-between items-center gap-2 px-6 py-5 bg-blue rounded-xl lg:w-[80%] hover:bg-opacity-60"}
        onClick={handleClick}
      >
        {
          isLoaded &&
          <>
            <p className={"text-white text-center w-full text-xl"}>{t("loaded")}</p>
            <Image src="./assets/images/success.svg" alt="succes" className={"w-8 h-8 bg-white rounded-[50%] p-1"} width={40} height={40}/>
          </>
          ||
          <>
            <p className={"text-white"}>{text}</p>
            <input
              type="file"
              style={{ display: "none" }}
              ref={inputFile}
              onChange={(e) => changeFile(e, setIsLoaded)}
              accept="image/*"
            />
            <Image
              src="./assets/images/upload.svg"
              alt="upload"
              className={"h-8 w-8"}
              width={40}
              height={40}
            />
          </>
        }
      </button>
      {error && <h2 className={"text-red"}>{error}</h2> || null}
    </>
  );
};

export { CreateFile };