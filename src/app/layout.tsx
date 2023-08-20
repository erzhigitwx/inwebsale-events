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
    <html lang="en" className={`${theme} w-full h-full`}>
      <Providers>
        <body className={`${inter.className} dark:bg-dark-blue-light w-full h-full`}>
          <Navbar setTheme={setTheme} theme={theme}/>
          <div className={"px-16 py-4"}>{children}</div>
        </body>
      </Providers>
    </html>
  );
}