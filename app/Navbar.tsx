"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          className={classNames({
            "text-zinc-950": pathname === link.href,
            "text-zinc-500": pathname !== link.href,
            "hover:text-zinc-800 transition-colors": true,
          })}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
