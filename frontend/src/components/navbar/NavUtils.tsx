"use client";

import {
  Search,
  ShoppingCart,
  ChevronDown,
  User,
  Store,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavUtils() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary/5">
      <div className="border-b border-gray-100 container mx-auto  py-3 ">
        <div className="mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <div className="flex items-center justify-center absolute w-[80px] h-[45px] aspect-square">
              <Image src="/logo.png" alt="Logo" fill />
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex mx-8 flex-1 max-w-xl">
            <div className="relative flex w-full">
              <input
                type="text"
                placeholder="Search for a product or brand"
                className="w-full rounded-l-full border border-gray-200 bg-gray-50 py-2.5 pl-5 pr-4 text-sm text-gray-600 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
              />
              <button className="flex items-center justify-center rounded-r-full bg-primary px-4 hover:bg-emerald-600 transition-colors">
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLoginOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-lg border border-gray-100 bg-white py-2 shadow-lg z-50">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative flex w-full">
                <input
                  type="text"
                  placeholder="Search for a product or brand"
                  className="w-full rounded-l-full border border-gray-200 bg-gray-50 py-2.5 pl-5 pr-4 text-sm text-gray-600 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                />
                <button className="flex items-center justify-center rounded-r-full bg-emerald-500 px-4 hover:bg-emerald-600 transition-colors">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Mobile Actions */}
              <div className="space-y-3">
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  <User className="h-5 w-5" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  <User className="h-5 w-5" />
                  <span>Register</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart</span>
                </Link>
                <Link
                  href="/seller"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 transition-colors py-2"
                >
                  <Store className="h-5 w-5" />
                  <span>Become a Seller</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavUtils;
