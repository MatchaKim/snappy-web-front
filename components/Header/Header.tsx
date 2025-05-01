"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  return (
    <Navbar fluid rounded className="w-full">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          SNAPPY
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active={pathname === "/"}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/builder" active={pathname === "/builder"}>
          Builder
        </NavbarLink>
        <NavbarLink as={Link} href="/example" active={pathname === "/example"}>
          Examples
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
