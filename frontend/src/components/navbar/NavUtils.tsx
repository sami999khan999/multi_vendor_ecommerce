"use client";

import { Search, ShoppingCart, ChevronDown, User, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

function NavUtils() {
  return (
    <nav className="bg-primary/5">
      <div className="border-b border-gray-100 container mx-auto py-3 ">
        <div className="mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="relative w-[80px] h-[45px]">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </Link>

          {/* Search Bar */}
          <div className="flex mx-8 flex-1 max-w-xl">
            <div className="relative flex justify-between w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-5 pr-2 text-sm text-gray-600 placeholder-gray-400 focus:border-emerald-500 focus:outline-none">
              <input type="text" placeholder="Search for a product or brand" />
              <button className="flex items-center justify-center bg-primary hover:bg-emerald-600 transition-colors rounded-full p-2">
                <Search className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* Shadcn Dropdown for Login/Signup */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-emerald-600 transition-colors outline-none">
                <User className="h-5 w-5" />
                <span>Account</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 mt-2">
                <DropdownMenuItem asChild>
                  <Link href="/login" className="cursor-pointer">
                    Sign In
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register" className="cursor-pointer">
                    Register
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    My Profile
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>

            {/* Become a Seller */}
            <Link
              href="/seller"
              className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <Store className="h-5 w-5" />
              <span>Become a Seller</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavUtils;
