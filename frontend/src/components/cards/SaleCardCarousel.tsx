"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Deal {
  id: number;
  title: string;
  image: string;
  bgColor: string;
  buttonColor: string;
  buttonTextColor: string;
  endDate: Date | string;
}

interface FlashSaleCardProps {
  deal: Deal;
  date?: string;
  isStringDate?: boolean;
}

function CountdownTimer({ endDate }: { endDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - Date.now();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex gap-2">
      <div className="rounded-sm bg-background px-5 py-1.5 text-center">
        <span className="text-sm font-medium text-primary-foreground">
          {timeLeft.days} Days
        </span>
      </div>
      <div className="rounded-sm bg-background px-5 py-1.5 text-center">
        <span className="text-sm font-medium text-primary-foreground">
          {timeLeft.hours} Hours
        </span>
      </div>
      <div className="rounded-sm bg-background px-5 py-1.5 text-center">
        <span className="text-sm font-medium text-primary-foreground">
          {timeLeft.minutes} Min
        </span>
      </div>
      <div className="rounded-sm bg-background px-5 py-1.5 text-center">
        <span className="text-sm font-medium text-primary-foreground">
          {timeLeft.seconds} Sec
        </span>
      </div>
    </div>
  );
}

export function SaleCardCarousel({
  deal,
  date,
  isStringDate = false,
}: FlashSaleCardProps) {
  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  const shouldShowCountdown = date && isValidDate(date);

  return (
    <div
      className={`${deal.bgColor} flex flex-col md:flex-row h-full items-center justify-center overflow-hidden rounded-xl md:p-8 p-4 gap-4`}
    >
      {/* Image Section */}
      <div className="relative h-45 w-full md:w-70 shrink-0 overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-center gap-6 md:pl-6">
        <h3
          className={cn(
            "font-semibold text-primary-foreground",
            shouldShowCountdown ? "text-3xl" : "text-4xl"
          )}
        >
          {deal.title}
        </h3>

        {isStringDate ? (
          <div className="font-medium text-primary-foreground/70">
            {date || "Limited Time Offer"}
          </div>
        ) : (
          <CountdownTimer endDate={new Date(date as string)} />
        )}

        <Button
          className={`bg-popover hover:bg-primary border border-primary/50 text-primary/70 w-fit rounded-full md:px-12 md:py-6 hover:text-background `}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
