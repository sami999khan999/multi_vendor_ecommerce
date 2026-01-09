"use client";

import { categories } from "@/constants";
import { Phone } from "lucide-react";
import Link from "next/link";

const CategoryBar = () => {
  return (
    <div className="border-gray-100 border-y">
      <div className="flex items-center justify-between px-2 container mx-auto">
        {/* Category Links */}
        <nav className="flex items-center gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="py-3 text-sm font-medium text-foreground transition-colors hover:text-primary/70 hover:underline line-clamp-1"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Phone Button */}
        <Link
          href="tel:01716513084"
          className="flex items-center gap-2 bg-primary px-7 py-4 text-sm text-white transition-colors hover:bg-emerald-600"
        >
          <Phone className="h-5 w-5" />
          <span className="font-medium">01716 513 084</span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryBar;
