import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { Input } from "@/shared/UI";

interface CreateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  error?: string;
}

const CreateInput: FC<CreateInputProps> = ({ value, name, label, onChange, error, ...rest }) => {
  const { t }: { t: TFunction } = useTranslation("create");
  return (
    <div className={"flex flex-col justify-start items-start gap-[9px]"}>
      <label htmlFor={name} className={"prose dark:prose-darkMode"}>{t(label)}</label>
      <Input
        type={"text"}
        value={value}
        onChange={onChange}
        name={name}
        {...rest}
      />
      {error && <h2 className={"text-red"}>{error}</h2> || null}
    </div>
  );
};

export { CreateInput };