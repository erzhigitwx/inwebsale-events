import React, { FC, useState } from "react";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { useStore } from "effector-react";
// components
import { Button } from "@/shared/UI";
import { CreateFormRight } from "@/widgets/create-form/UI/create-form-right";
import { CreateFormLeft } from "@/widgets/create-form/UI/create-form-left";
// features(helpers)
import { handleSubmit } from "@/features";
// store
import { $selectedFile } from "@/entities/create-inputs/model/file";
import { $toSave } from "@/entities/create-inputs/model/toggle";
import { $withPin } from "@/entities/create-inputs/model/radio";
import { $eventTitle, $externalButtonLink, $hostName, $pinValue, $placeholderLink, $youtubeLink } from "@/entities/create-inputs/model/inputs";
import { $eventDate, $eventTime } from "@/entities/create-inputs/model/date";
// types
import { ErrorType } from "@/shared/types/types";
import { useSession } from "next-auth/react";
import { SuccessPage } from "@/widgets/success-page";

const CreateForm: FC = () => {
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const file: string | null = useStore($selectedFile);
  const withPin: boolean = useStore($withPin);
  const toSave: boolean = useStore($toSave);
  const eventTitle: string = useStore($eventTitle);
  const hostName: string = useStore($hostName);
  const youtubeLink: string = useStore($youtubeLink);
  const placeholderLink: string = useStore($placeholderLink);
  const externalButton: string = useStore($externalButtonLink);
  const eventTime: string = useStore($eventTime);
  const eventDate: string = useStore($eventDate);
  const pin: string = useStore($pinValue);
  const { data } = useSession();
  const { t }: { t: TFunction } = useTranslation("create");

  if (isSuccess) {
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
    return <SuccessPage/>;
  }

  return (
    <main className={"py-8 dark:prose-darkMode"}>
      <h1 className={"text-center text-black text-2xl font-semibold dark:prose-darkMode"}>{t("creating events")}</h1>
      <form className={"flex flex-col justify-center items-center mt-[40px] gap-10"}
        onSubmit={(e) => handleSubmit({
          e,
          errors,
          setErrors,
          setIsSuccess,
          file,
          withPin,
          toSave,
          pin,
          eventTitle,
          hostName,
          youtubeLink,
          placeholderLink,
          externalButton,
          eventDate,
          eventTime,
          data
        })}
      >
        <div className={"grid grid-cols-1 lg:grid-cols-4 gap-32 lg:gap-32 lg:w-[945px]"}>
          <CreateFormLeft t={t} errors={errors}/>
          <CreateFormRight t={t} errors={errors} withPin={withPin} toSave={toSave} pin={pin}/>
        </div>
        <Button className={"px-16 py-6"} type={"submit"}>{t("Save")}</Button>
      </form>
    </main>
  );
};

export { CreateForm };