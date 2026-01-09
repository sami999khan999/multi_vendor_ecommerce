"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="py-8 md:py-12 px-4 container mx-auto">
      <div className="bg-destructive w-full rounded-2xl py-10 px-6 md:py-16 md:px-10 flex flex-col lg:flex-row gap-10 lg:gap-24 justify-center items-center text-center lg:text-left">
        {/* Image Container - Scaled for mobile */}
        <div className="relative w-48 h-40 md:w-64 md:h-56">
          <Image
            src="/assets/subscribe/subscribe.png"
            alt="Subscribe"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-4 md:space-y-6 w-full max-w-xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-background leading-tight">
            Don't Miss Out on <br className="hidden md:block" /> Special Deals
          </h2>
          <p className="text-lg md:text-2xl text-background/90">
            Sign up for latest updates
          </p>

          {/* Input Group - Responsive Width */}
          <form
            onSubmit={handleSubmit}
            className="bg-background p-1.5 md:p-2 rounded-full flex items-center gap-2 justify-between w-full max-w-md mx-auto lg:mx-0 shadow-lg"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="pl-4 w-full bg-transparent outline-none text-sm md:text-base text-foreground"
              required
            />
            <Button
              type="submit"
              className="rounded-full bg-primary text-background py-4 px-5 md:py-5 md:px-7 text-xs md:text-sm shrink-0"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
