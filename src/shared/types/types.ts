import { FirebaseApp } from "firebase/app";
import { Firestore } from "@firebase/firestore";
import { bool } from "yup";

export type theme = "dark" | "light";

export type FirebaseContextType = {
  app: FirebaseApp;
  db: Firestore;
};

export type ErrorType = {
  name: string | undefined;
  error: string;
};

type TimeStampType = {
  nanoseconds: bigint;
  seconds: bigint;
}

export type EventType = {
  createdAt: TimeStampType,
  email: string;
  eventDate: string;
  eventTime: string;
  eventTitle: string;
  externalButton: string;
  file: string;
  hostName: string;
  placeholderLink: string;
  toSave: boolean;
  withPin: boolean;
  youtubeLink: string;
  pin?: string;
}