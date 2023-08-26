"use client";

import React, { useEffect, useState } from "react";
// libs
import { Inter } from "next/font/google";
import "@/shared/lib/i18next/i18n";
import "@/app/_styles/globals.css";
// components
import { BurgerMenu, Navbar } from "@/widgets/navbar";
import { Providers } from "@/app/providers";
// types
import { theme } from "@/shared/types/types";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const defaultTheme = (typeof window !== "undefined" ? localStorage.getItem("theme") : null) as theme || "light";
  const [theme, setTheme] = useState<theme>(defaultTheme);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en" className={`${theme} w-full h-full`}>
      <Providers>
        <body className={`${inter.className} dark:bg-dark-blue-light w-full h-full`}>
          {isMobile ? <BurgerMenu setTheme={setTheme} theme={theme}/> : <Navbar setTheme={setTheme} theme={theme}/>}
          <div className={"px-8 py-6 lg:px-16"}>{children}</div>
        </body>
      </Providers>
    </html>
  );
}