import Image from "next/image";
import React from "react";
import empty from "@/public/wait.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
};

function Menu() {
  return (
    <div className="flex justify-center items-center">
      <Image src={empty} alt="empty" width={500} height={700} />
    </div>
  );
}

export default Menu;
