"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={"flex flex-row justify-center items-center h-[80vh] gap-8"}>
      <h1 className={"text-black text-2xl dark:prose-darkMode"}>404 - Page Not Found</h1>
      <h1 className={"text-black text-2xl dark:prose-darkMode flex flex-row items-end gap-2"}>Go <h3 className={"text-blue hover:text-green"} onClick={router.back}>BACK</h3></h1>
    </div>
  );
}