"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import testimonialData from "../data/testimonials.json";

const TestimonialCards = () => {
  return (
    <div className="h-screen w-full dark:bg-black dark:bg-grid-white/[0.1] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our harmony:Voices of success
      </h2>
      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonialData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
