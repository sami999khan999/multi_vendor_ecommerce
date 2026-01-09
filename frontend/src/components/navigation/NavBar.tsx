"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import CategoryBar from "./CategoryBar";
import MobileNav from "./MobileNav";
import NavUtils from "./NavUtils";

const NavBar = () => {
  const isVisible = useScrollDirection();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out bg-white",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="hidden lg:block">
        <NavUtils />
        <CategoryBar />
      </div>

      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default NavBar;
