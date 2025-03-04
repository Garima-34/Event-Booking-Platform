"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetClose>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <Image
              src="/assets/images/event-logo-1.png"
              alt="logo"
              width={55}
              height={15}
            />
            <Separator className="border border-gray-50" />
            <SheetClose>
              <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
                {headerLinks.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "text-primary-500"
                      } flex-center p-medium-16 whitespace-nowrap`}
                    >
                      <SheetClose asChild key={link.route}>
                        <Link href={link.route}>{link.label}</Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </SheetClose>
          </SheetContent>
        </SheetClose>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
