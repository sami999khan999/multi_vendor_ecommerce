import Link from "next/link";
import { CarouselNext, CarouselPrevious } from "../carousel";

export const CarouselButton = ({
  children,
  href = "#",
  linkText = "View All",
}: {
  children?: React.ReactNode;
  href?: string;
  linkText?: string;
}) => {
  return (
    <div className="flex items-center gap-3 sm:gap-6">
      {children || (
        <div className="flex items-center gap-2 sm:gap-5">
          <Link
            href={href}
            className="text-primary hover:underline font-medium text-sm sm:text-base"
          >
            {linkText}
          </Link>
          <div className="flex gap-1.5 sm:gap-2 relative">
            {/* Reduced from h-12 to h-8 on mobile, h-10/12 on desktop */}
            <CarouselPrevious className="static translate-y-0 h-8 w-8 sm:h-10 lg:h-12 sm:w-10 lg:w-12 border-gray-200" />
            <CarouselNext className="static translate-y-0 h-8 w-8 sm:h-10 lg:h-12 sm:w-10 lg:w-12 border-gray-200" />
          </div>
        </div>
      )}
    </div>
  );
};
