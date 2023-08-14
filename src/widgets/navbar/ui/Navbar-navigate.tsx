import React, { FC } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const NavbarNavigate: FC = () => {
  const { t }: { t: TFunction } = useTranslation();
  return (
    <ul className={"flex flex-row justify-center items-center gap-[10%]"}>
      <Link href={"/events"}>
        <li className={"text-white hover:text-black"}>{t("events")}</li>
      </Link>
      <Link href={"/contacts"}>
        <li className={"text-white hover:text-black"}>{t("contacts")}</li>
      </Link>
      <Link href={"create"}>
        <li className={"text-white hover:text-black"}>{t("create")}</li>
      </Link>
    </ul>
  );
};

export { NavbarNavigate };