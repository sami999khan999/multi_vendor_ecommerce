"use client";

import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/constants";

const CategoryBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="border-gray-100 border-y container mx-auto">
      <div className="flex items-center justify-between px-4">
        {/* Category Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="py-3 text-sm font-medium text-foreground transition-colors hover:text-foreground/50"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Category Button & Phone Button */}
        <div className="flex items-center justify-between gap-3 lg:hidden w-full">
          {/* Mobile Categories */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/50 py-3"
          >
            <span>Categories</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Phone Button */}
          <Link
            href="tel:01716513084"
            className="flex items-center gap-2 bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">01716 513 084</span>
            <span className="sm:hidden">Call</span>
          </Link>
        </div>

        {/* Phone Button - Desktop */}
        <Link
          href="tel:01716513084"
          className="hidden lg:flex items-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
        >
          <Phone className="h-4 w-4" />
          <span>01716 513 084</span>
        </Link>
      </div>

      {/* Mobile Categories Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-background">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/50 px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBar;
