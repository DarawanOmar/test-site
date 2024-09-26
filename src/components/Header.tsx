"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  { title: "Home", href: "/" },
  { title: "Our Menu", href: "/menu" },
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="p-3 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3 ">
        <Image src={logo} alt="logo" width={160} height={160} />
      </Link>
      <div className="max-w-2xl w-full flex justify-between items-center max-md:hidden max-lg:max-w-xl">
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            <div className="inline-block text-center text-md">
              <span
                className={cn("block duration-500", {
                  "font-semibold text-primary": link.href === pathname,
                })}
              >
                {link.title}
              </span>
              <span
                className={cn(
                  "block w-[39px] border-b-2 border-primary mx-auto font-semibold ",
                  {
                    hidden: link.href !== pathname,
                  }
                )}
              ></span>
            </div>
          </Link>
        ))}
        <h1 className="px-8 py-2 rounded-full border-2 border-primary text-primary bg-transparent font-bold">
          Login
        </h1>
      </div>
      <span className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 50 50"
        >
          <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
        </svg>
      </span>
    </div>
  );
}
