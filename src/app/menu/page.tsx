import Image from "next/image";
import React from "react";
import empty from "@/public/wait.svg";

function Menu() {
  return (
    <div className="flex justify-center items-center">
      <Image src={empty} alt="empty" width={500} height={700} />
    </div>
  );
}

export default Menu;
