import React, { createContext, FC } from "react";
import { app, db } from "@/firebase";
import { FirebaseContextType } from "@/shared/types/types";

interface FirebaseProviderProps {
  children: React.ReactNode;
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);
const FirebaseProvider: FC<FirebaseProviderProps> = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        app,
        db
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider };