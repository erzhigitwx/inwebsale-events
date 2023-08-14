import React, { FC } from "react";
import { TFunction } from "i18next";
import { useStore } from "effector-react";
// components
import { CreateInput } from "@/entities/create-inputs";
// mock
import { inputDataFn } from "@/entities/create-inputs/mock";
// types
import { ErrorType } from "@/shared/types/types";

interface CreateFormLeftProps {
  t: TFunction;
  errors: ErrorType[];
}

const CreateFormLeft: FC<CreateFormLeftProps> = ({ t, errors }) => {
  const inputData = inputDataFn(t);

  return (
    <div className={"col-span-2 flex flex-col gap-[34px] relative"}>
      {
        inputData.map((input) => {
          const error = errors.find((error: ErrorType) => error?.name === input.name)?.error;
          return (
            <CreateInput
              name={input.name}
              label={input.label}
              placeholder={input.placeholder}
              value={useStore(input.value)}
              onChange={input.onChange}
              key={input.name}
              error={error}
            />
          );
        })
      }
    </div>
  );
};

export { CreateFormLeft };