import React from "react";
import { ErrorType } from "@/shared/types/types";
import { Session } from "next-auth";

export function getTarget(e: React.FormEvent<HTMLFormElement>) {
  return e.target as typeof e.target & {
    0: { value: string };
    1: { value: string };
    5: { checked: boolean }
    6: { checked: boolean, value: string }
    7: { value: string };
    10: {
      files: {
        0: File
      }
    };
    11: {
      value: string, files: {
        0: File
      }
    };
    12: {
      files: {
        0: File
      }
    };
  };
}

export interface HandleSubmitParams {
  e: React.FormEvent<HTMLFormElement>;
  errors: ErrorType[];
  setErrors: (arg: ErrorType[]) => void;
  setIsSuccess: (arg: boolean) => void;
  pin: string;
  file: string | null;
  withPin: boolean;
  toSave: boolean;
  eventTitle: string;
  hostName: string;
  youtubeLink: string;
  placeholderLink: string;
  externalButton: string;
  eventDate: string;
  eventTime: string;
  data: Session | null;
}