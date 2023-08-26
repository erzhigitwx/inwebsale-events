"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
// types
import { theme } from "@/shared/types/types";
// helpers
import { changeTheme } from "@/widgets/navbar/helpers/Change-theme";
import { toggleLanguage } from "@/widgets/navbar/helpers/Change-language";
// components
import { NavbarProfile } from "@/widgets/navbar/ui/Navbar-profile";
import { NavbarNavigate } from "@/widgets/navbar/ui/Navbar-navigate";

interface NavbarProps {
  theme: theme;
  setTheme: (arg: theme) => void;
}

const Navbar: FC<NavbarProps> = ({ theme, setTheme }) => {
  const { data, status } = useSession();
  const { i18n } = useTranslation();
  const [imageSrc, setImageSrc] = useState("./assets/images/light-mode.svg");

  useEffect(() => {
    if (theme === "light") {
      setImageSrc("./assets/images/light-mode.svg");
    } else {
      setImageSrc("./assets/images/dark-mode.svg");
    }
  }, [theme]);

  return (
    <header className={"flex flex-row justify-between items-center bg-blue rounded-b-[43px] h-[74px] py-[10px] px-[65px] dark:bg-dark-blue"}>
      <div className={"flex flex-row justify-center items-center gap-[20px]"}>
        <Link href={"/"}><Image src={"./assets/images/logo.svg"} alt={"logo"} width={164} height={56} className={"w-[164px] h-[56px]"}/></Link>
        <div className={"flex flex-row justify-center items-center gap-2"}>
          <button className={"bg-blue-light text-black rounded-xl p-0.5"} onClick={() => toggleLanguage(i18n)}>{i18n.language}</button>
          <Image src={imageSrc} alt={"Mode icon"} width={30} height={30} onClick={() => changeTheme(theme, setTheme)}/>
        </div>
      </div>
      <NavbarNavigate/>

      <NavbarProfile data={data} status={status}/>
    </header>
  );
};

export { Navbar };