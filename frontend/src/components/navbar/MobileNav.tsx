"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Store,
  Phone,
  ChevronRight,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories } from "@/constants";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  return (
    <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b bg-white sticky top-0 z-50">
      {/* Mobile Menu Trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Menu className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[350px] p-0 flex flex-col"
        >
          <SheetHeader className="p-4 border-b text-left">
            <SheetTitle>
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={40}
                className="object-contain"
              />
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            {/* Search in Mobile Menu */}
            <div className="p-4">
              <div className="relative flex w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 px-4 text-sm focus:border-emerald-500 outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Utility Links */}
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/login"
                className="flex items-center gap-3 py-3 text-gray-700 hover:text-primary"
              >
                <User className="h-5 w-5" />
                <span className="font-medium text-sm">Account / Login</span>
              </Link>
              <Link
                href="/cart"
                className="flex items-center gap-3 py-3 text-gray-700 hover:text-primary"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="font-medium text-sm">Cart</span>
              </Link>
              <Link
                href="/seller"
                className="flex items-center gap-3 py-3 text-gray-700 hover:text-primary"
              >
                <Store className="h-5 w-5" />
                <span className="font-medium text-sm">Become a Seller</span>
              </Link>
            </div>

            <hr className="my-2" />

            {/* Categories Links */}
            <div className="px-4 py-2">
              <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">
                Categories
              </p>
              <nav className="flex flex-col gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="flex items-center justify-between py-3 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0 hover:text-primary"
                  >
                    {category.name}
                    <ChevronRight className="h-4 w-4 text-gray-300" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Fixed Footer Phone Button */}
          <div className="p-4 bg-gray-50 border-t">
            <Link
              href="tel:01716513084"
              className="flex items-center justify-center gap-2 bg-primary w-full py-3 rounded-sm text-white transition-colors hover:bg-emerald-600"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-bold">01716 513 084</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Center Logo */}
      <Link href="/" className="relative w-[70px] h-[35px]">
        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
      </Link>

      {/* Quick Cart Access */}
      <Link href="/cart" className="relative p-2">
        <ShoppingCart className="h-6 w-6 text-gray-700" />
        <span className="absolute top-0 right-0 bg-primary text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
          0
        </span>
      </Link>
    </div>
  );
};

export default MobileNav;
