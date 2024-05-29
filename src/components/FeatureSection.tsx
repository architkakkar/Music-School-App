"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/Background-Gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export function FeatureSection() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="uppercase text-base text-teal-500 font-semibold tracking-wide">
            featured courses
          </h2>
          <p className="mt-2.5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl capitalize">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((featureCourse: Course) => (
            <div className="flex justify-center items-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm px-5 py-6 sm:p-10 bg-white dark:bg-zinc-900 h-full">
                <p className="text-base sm:text-xl text-black mb-2 dark:text-neutral-200">
                  {featureCourse.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {featureCourse.description}
                </p>
                <div className="text-sm text-neutral-500 mt-2">
                  Instructor:{" "}
                  <span className="text-teal-500">
                    {featureCourse.instructor}
                  </span>
                </div>
                <Link href={`/courses/${featureCourse.slug}`}>
                  <button className="rounded-full pl-2.5 pr-2 py-2.5 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 hover:opacity-80">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.7rem] px-2 py-0.5 text-white">
                      $ {featureCourse.price}
                    </span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 text-center">
        <Link href={"/courses"}>
          <button className="border border-white px-6 py-5 rounded-full hover:text-gray-900 hover:bg-white text-sm">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}
