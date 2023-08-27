import React, { FC, useEffect, useState } from "react";
// hooks
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
// components
import Link from "next/link";
import Image from "next/image";
import { BurgerButton } from "@/widgets/navbar/ui/burger-menu/UI/burger-button";
import { ButtonIndicator } from "@/shared/UI";
import { NavbarProfile } from "@/widgets/navbar/ui/Navbar-profile";
import { NavbarNavigate } from "@/widgets/navbar/ui/Navbar-navigate";
// helpers
import { changeTheme } from "@/widgets/navbar/helpers/Change-theme";
import { toggleLanguage } from "@/widgets/navbar/helpers/Change-language";
// types
import { theme } from "@/shared/types/types";

interface BurgerMenuProps {
  theme: theme;
  setTheme: (arg: theme) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ theme, setTheme }) => {
  const [imageSrc, setImageSrc] = useState("./assets/images/light-mode.svg");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, status } = useSession();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (theme === "light") {
      setImageSrc("./assets/images/light-mode.svg");
    } else {
      setImageSrc("./assets/images/dark-mode.svg");
    }
  }, [theme]);

  return isOpen &&
    <header
      className={"fixed z-50 top-0 left-0 right-0 bottom-0 h-[120vh] bg-blue rounded-b-[43px] py-20 dark:bg-dark-blue"}
      onClick={() => setIsOpen(false)}
    >
      <BurgerButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}/>
      <NavbarProfile data={data} status={status}/>
      <div className={"my-40"}><NavbarNavigate/></div>

      <div
        className={"flex flex-col justify-center items-center gap-4"}
        onClick={(e) => e.stopPropagation()}
      >
        <ButtonIndicator className={"bg-blue-light dark:bg-blue p-0.5"} onClick={() => toggleLanguage(i18n)}>{i18n.language}</ButtonIndicator>
        <Image src={imageSrc} alt={"Mode icon"} width={50} height={50} onClick={() => changeTheme(theme, setTheme)}/>
      </div>
    </header>
    ||
    <header className={"flex flex-row-reverse sm:flex-row justify-between items-center bg-blue rounded-b-[43px] h-[74px] py-[10px] px-[65px] dark:bg-dark-blue"}>
      <Link href={"/"}><Image src={"./assets/images/logo.svg"} alt={"logo"} width={164} height={56} className={"w-[164px] h-[56px]"}/></Link>
      <BurgerButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}/>
    </header>;
};


export { BurgerMenu };