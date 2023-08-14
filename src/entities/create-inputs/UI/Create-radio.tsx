import React, { ChangeEvent, FC } from "react";
import { Radio } from "@/shared/UI";

interface CreateRadioProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  text: string | React.ReactNode;
}

const CreateRadio: FC<CreateRadioProps> = ({ onChange, isChecked, text }) => {
  return (
    <div className={"flex flex-row justify-start items-center gap-5"}>
      <Radio onChange={onChange} isChecked={isChecked}/>
      <p className={"prose dark:prose-darkMode"}>{text}</p>
    </div>
  );
};

export { CreateRadio };