"use client";
import React, { FC } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
  const { data }: { data: Session | null } = useSession();

  return (
    <main>
      {data?.user?.name}
    </main>
  );
};

export default Home;