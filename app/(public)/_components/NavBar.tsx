"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/Logo.png";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import UserDropDown from "./UserDropDown";
const navgationItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "DashBoard", href: "dashboard" },
];

export default function NavBar() {
  const { data, isPending } = authClient.useSession();
  return (
    <header className="sticky flex items-center top-0 z-50 w-full border-b bg-background/95 backdrop-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8 ">
        <Link href="/" className="flex items-center space-x-2 mr-4">
          <Image src={Logo} alt="Logo" className="size-16" />
          <span className="font-bold text-2xl">NeoLearn</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-2">
            {navgationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4">
            <ThemeToggle />
            {isPending ? null : data ? (
              <UserDropDown
                email={data.user.email}
                name={
                  data?.user.name && data?.user.name.length > 0
                    ? data?.user.name.toUpperCase()
                    : data?.user.email.toUpperCase().split("@")[0]
                }
                image={data.user.image || data?.user.email[0].toUpperCase()}
              />
            ) : (
              <>
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>
                <Link href="/login" className={buttonVariants()}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
