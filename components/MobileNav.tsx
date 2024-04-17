"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { sidebarLinks } from "@/constants";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="cursor-pointer sm:hidden"
            src="/icons/hamburger.svg"
            alt="hamburger icon"
            width={36}
            height={36}
          />
        </SheetTrigger>

        <SheetContent className="bg-dark-1 border-none" side={"left"}>
          <Link href="/" className="flex items-center gap-1">
            <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />

            <p className="font-extrabold text-[26px] text-white">Gather</p>
          </Link>

          <div className="flex justify-between flex-col h-[calc(100vh-72px)] overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                        />

                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
