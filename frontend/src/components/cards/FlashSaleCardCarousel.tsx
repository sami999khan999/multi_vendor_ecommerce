"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Deal {
  id: number;
  title: string;
  image: string;
  bgColor: string;
  buttonColor: string;
  buttonTextColor: string;
  endDate: Date;
}

interface FlashSaleCardProps {
  deal: Deal;
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
      <div className="rounded-sm bg-background px-3 py-1.5 text-center">
        <span className="text-sm font-medium text-primary-foreground">
          {timeLeft.days} Days
        </span>
      </div>
      <div className="rounded-sm bg-background px-3 py-1.5 text-center">
        <span className="text-sm font-medium text-primary-foreground">
          {timeLeft.hours} Hours
        </span>
      </div>
      <div className="rounded-sm bg-background px-3 py-1.5 text-center">
        <span className="text-sm font-medium text-primary-foreground">
          {timeLeft.minutes} Min
        </span>
      </div>
      <div className="rounded-sm border bg-background px-3 py-1.5 text-center">
        <span className="text-sm font-medium text-primary-foreground">
          {timeLeft.seconds} Sec
        </span>
      </div>
    </div>
  );
}

export function FlashSaleCardCarousel({ deal }: FlashSaleCardProps) {
  return (
    <div
      className={`${deal.bgColor} flex flex-col md:flex-row h-full overflow-hidden rounded-xl p-8 gap-4`}
    >
      {/* Image Section */}
      <div className="relative h-45 w-70 shrink-0 overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-center gap-6 pl-6">
        <h3 className="text-2xl font-semibold text-primary-foreground">
          {deal.title}
        </h3>
        <CountdownTimer endDate={deal.endDate} />
        <Button
          className={`bg-popover hover:bg-primary border border-primary/50 text-primary/70 w-fit rounded-full px-10 py-5 hover:text-background`}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
