"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className={"flex flex-row justify-center items-center h-[80vh] gap-4"}>
      <h1 className={"text-black text-2xl"}>404 - Page Not Found</h1>
      <h1 className={"text-black text-2xl"}>Go to <Link href={"/"} className={"text-blue hover:text-green"}>HOME</Link></h1>
    </div>
  );
}