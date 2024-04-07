"use client";
import React from "react";
import courseData from "../data/muisc_courses.json";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedSection = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-zinc-900">
      <div className="headings">
        <div className="text-center">
          <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
            Featured Courses
          </h2>
          <p className="capitalize mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>

      <div className="cards mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center px-4">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col overflow-hidden h-full">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black dark:text-neutral-200 ">{course.title}</p>
                  <p className="text-sm text-neutral-600 flex-grow">{course.description}</p>

                  <Link href={`/courses/${course.slug}`} className="mt-4">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 capitalize"
          >
            View all Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
