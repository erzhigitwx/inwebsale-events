import React, { FC, useState } from "react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
// components
import { ProfileEvents } from "@/widgets/profile-content/UI/profile-events";
import { ModalImage } from "@/shared/UI";
import Image from "next/image";

const ProfileContent: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t }: { t: TFunction } = useTranslation("profile");
  const { data }: { data: Session | null } = useSession();

  return (
    <div className="grid grid-cols-10 gap-5 mt-6">
      <div className="col-span-2 flex flex-col justify-start gap-14">
        {data?.user?.image &&
          <ModalImage src={data.user.image} alt={"avatar"} className={"w-60 h-60 p-1 border-4 rounded-3xl"} isOpen={isOpen} setIsOpen={setIsOpen} after={"w-[50vh] h-[50vh]"}/>
        }
        <div className={"flex flex-col justify-center gap-4"}>
          <h1 className={"text-3xl dark:text-white"}>{data?.user?.name}</h1>
          <div className={"flex flex-col justify-center items-start gap-1"}>
            <span className={"text-xl underline underline-offset-4 dark:text-white"}>{data?.expires.slice(0, 10)}</span>
            <span className={"flex flex-row justify-center items-center gap-2 text-xl dark:text-white"}>
              {t("authorized")}: <Image src={"./assets/images/success.svg"} alt="success" width={6} height={6} className={"w-8 h-8 rounded-[50%] border-2 border-blue"}/>
            </span>
          </div>
        </div>
      </div>
      <ProfileEvents t={t}/>
    </div>
  );
};

export { ProfileContent };