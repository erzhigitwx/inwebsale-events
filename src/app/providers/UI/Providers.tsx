import React, { FC } from "react";
import { SessionProvider } from "next-auth/react";
import { FirebaseProvider } from "@/app/providers/UI/firebase-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <FirebaseProvider>
        {children}
      </FirebaseProvider>
    </SessionProvider>
  );
};

export { Providers };