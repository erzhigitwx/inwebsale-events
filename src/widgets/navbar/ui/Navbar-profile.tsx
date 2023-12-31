import React, { FC } from "react";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useTranslation } from "react-i18next";
// components
import Link from "next/link";
import Image from "next/image";

interface NavbarProfileProps {
  data: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
}

const NavbarProfile: FC<NavbarProfileProps> = ({ data: session, status }) => {
  const { t } = useTranslation();
  return (
    <>
      {status === "loading" ? 
        <p className={"text-white"}>{t("Loading")}...</p>
        : 
        <>
          {session && 
            <div className={"flex flex-row justify-center gap-2"}>
              <Link href={"/profile"} className={"flex flex-row justify-center items-center gap-[8px] hover:bg-white hover:p-2 hover:rounded-2xl hover:bg-opacity-20"}>
                {session.user?.image && <Image src={session.user.image} alt={"avatar"} width={40} height={40} className={"h-[40px] w-[40px] rounded-3xl"}/>}
                <p className={"text-white"}>
                  {session.user?.email}
                </p>
              </Link>
              <Image src={"./assets/images/logout.svg"} alt={"logout"} width={24} height={24} onClick={() => signOut({ callbackUrl: "/" })} className={"w-[24px]"}/>
            </div>
           || <Link href={"/api/auth/signin"} className={"text-white flex justify-center hover:bg-white hover:p-2 hover:rounded-2xl hover:bg-opacity-20"}>{t("registration")}</Link>}
        </>
      }
    </>
  );
};

export { NavbarProfile };