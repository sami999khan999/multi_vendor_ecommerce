"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  currentPage = 1,
  totalPages = 7,
  onPageChange,
}: ProductPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination className="my-10">
      <PaginationContent className="gap-2 md:gap-3">
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className="h-10 w-10 md:h-12 md:w-12 border-gray-200 rounded-lg p-0 flex items-center justify-center text-[#1A2138]"
          />
        </PaginationItem>

        {/* Page Numbers */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
              className={cn(
                "h-10 w-10 md:h-12 md:w-12 text-base font-semibold border-gray-200 rounded-lg transition-all",
                currentPage === page
                  ? "bg-[#279e65] text-white border-[#279e65] hover:bg-[#218a58] hover:text-white"
                  : "bg-white text-[#1A2138] hover:bg-gray-50 border"
              )}
            >
              {page.toString().padStart(2, "0")}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className="h-10 w-10 md:h-12 md:w-12 border-gray-200 rounded-lg p-0 flex items-center justify-center text-[#1A2138]"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
