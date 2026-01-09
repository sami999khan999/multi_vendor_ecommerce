import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) => {
  return (
    <div>
      <h2
        className={cn(
          "md:text-3xl text-lg font-medium text-foreground line-clamp-1",
          className
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
