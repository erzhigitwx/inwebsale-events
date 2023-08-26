"use client";

import React, { useState } from "react";
// libs
import { Inter } from "next/font/google";
import "@/shared/lib/i18next/i18n";
import "./styles/globals.css";
// components
import { BurgerMenu, Navbar } from "@/widgets/navbar";
import { Providers } from "@/app/providers";
// types
import { theme } from "@/shared/types/types";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const defaultTheme = (typeof window !== "undefined" ? localStorage.getItem("theme") : null) as theme || "light";
  const [theme, setTheme] = useState<theme>(defaultTheme);
  return (
    <html lang="en" className={`${theme} w-full h-full`}>
      <Providers>
        <body className={`${inter.className} dark:bg-dark-blue-light w-full h-full`}>
          {window.innerWidth <= 700 && <BurgerMenu setTheme={setTheme} theme={theme}/> || <Navbar setTheme={setTheme} theme={theme}/>}
          <div className={"px-8 py-6 lg:px-16"}>{children}</div>
        </body>
      </Providers>
    </html>
  );
}