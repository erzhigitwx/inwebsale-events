"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import "@/shared/lib/i18next/i18n";
import "./styles/globals.css";
import { theme } from "@/shared/types/types";
import { Providers } from "@/app/providers";
import { Navbar } from "@/widgets/navbar";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const defaultTheme = (typeof window !== "undefined" ? localStorage.getItem("theme") : null) as theme || "light";
  const [theme, setTheme] = useState<theme>(defaultTheme);
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} ${theme}`}>
          <div className={"dark:bg-dark-blue-light w-[100vw] h-[100vh]"}>
            <Navbar setTheme={setTheme} theme={theme}/>
            <div className={"px-[65px]"}>{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}