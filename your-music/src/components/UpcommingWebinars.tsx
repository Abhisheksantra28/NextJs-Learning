"use client"
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Mastering Guitar Techniques",
    description:
      "Join us for a comprehensive webinar on mastering various guitar techniques including fingerpicking, chord progressions, and soloing.",
    slug: "mastering-guitar-techniques",
    isFeatured: true,
  },
  {
    title: "Introduction to Music Production",
    description:
      "Learn the basics of music production from industry professionals. This webinar covers recording techniques, mixing, and software tools.",
    slug: "music-production-intro",
    isFeatured: true,
  },
  {
    title: "Songwriting Workshop",
    description:
      "Unlock your creative potential with our songwriting workshop. Explore lyric writing, melody crafting, and song structure.",
    slug: "songwriting-workshop",
    isFeatured: true,
  },
  {
    title: "Advanced Drumming Techniques",
    description:
      "Take your drumming skills to the next level with our advanced techniques webinar. Dive deep into complex rhythms, fills, and improvisation.",
    slug: "advanced-drumming-techniques",
    isFeatured: true,
  },
  {
    title: "Essential Music Theory",
    description:
      "Enhance your understanding of music theory fundamentals such as scales, chords, and harmony. Suitable for beginners and intermediate musicians.",
    slug: "essential-music-theory",
    isFeatured: true,
  },
  {
    title: "Live Performance Mastery",
    description:
      "Learn how to excel in live performances with our expert-led webinar. Topics include stage presence, audience engagement, and overcoming stage fright.",
    slug: "live-performance-mastery",
    isFeatured: true,
  },
];

const UpcommingWebinars = () => {
  return (
    <div className="py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
            Featured webinars
          </h2>
          <p className="capitalize mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
            Enhance your musical journey
          </p>
        </div>

        <div className="mt-10">
        <HoverEffect items={featuredWebinars.map((webinar)=>(
          {
            title:webinar.title,
            description:webinar.description,
            link:webinar.slug
          }
        ))} />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-3 bg-white/20 rounded-2xl hover:bg-slate-200/80 hover:text-black capitalize transition-all text-white"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcommingWebinars;
