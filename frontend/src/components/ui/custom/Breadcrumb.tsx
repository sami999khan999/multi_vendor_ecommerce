"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  console.log(pathSegments);

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 mx-auto bg-muted">
      <ol className="flex items-center space-x-2 text-sm container">
        {/* Home Link */}
        <li className="flex items-center">
          <Link
            href="/"
            className="text-primary hover:text-primary/70 transition-colors flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <React.Fragment key={href}>
              <li className="flex items-center text-muted-foreground/50">
                <ChevronRight className="h-5 w-5" />
              </li>
              <li className="flex items-center">
                {isLast ? (
                  <span className="text-muted-foreground truncate max-w-[150px] sm:max-w-none">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-primary hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
