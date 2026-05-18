import { FeatchCourse } from "@/app/CommonFunction.js/FeatchAll";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import CourseShow from "./CourseComponent/CourseShow";

const Coursepage = async () => {
  let Courses = await FeatchCourse();

  return (
    <div className="min-h-screen bg-base-200/30 py-12 md:py-16">
      <div className="mx-auto w-full px-4 space-y-12 bg-ne">
        <div className="flex flex-col gap-8 bg-base-100 p-6 sm:p-10 rounded-3xl">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <FaBookOpen className="text-sm" />
              Knowledge Base
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral tracking-tight">
              Explore Our Courses
            </h1>
            <p className="text-sm sm:text-base text-base-content/70 leading-relaxed max-w-xl">
              Unlock your potential with our expert-led programs designed to
              bridge the gap between theory and practical skill. Master top-tier
              frameworks, industry best practices, and secure a global
              competitive edge.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 bg-base-100 p-6 sm:p-8 rounded-3xl border border-base-200/60 shadow-sm text-center">
            {/* Total Courses */}
            <div className="space-y-1 p-2 rounded-2xl hover:bg-base-200/40 transition-colors duration-200">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                40+
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-neutral/80">
                Total Courses
              </p>
            </div>

            {/* Development Course */}
            <div className="space-y-1 p-2 rounded-2xl hover:bg-base-200/40 transition-colors duration-200">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral tracking-tight">
                8+
              </h2>
              <p className="text-xs sm:text-sm font-medium text-base-content/70">
                Development
              </p>
            </div>

            {/* AI & ML Course */}
            <div className="space-y-1 p-2 rounded-2xl hover:bg-base-200/40 transition-colors duration-200">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral tracking-tight">
                6+
              </h2>
              <p className="text-xs sm:text-sm font-medium text-base-content/70">
                AI & ML
              </p>
            </div>

            {/* English Course */}
            <div className="space-y-1 p-2 rounded-2xl hover:bg-base-200/40 transition-colors duration-200">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral tracking-tight">
                3+
              </h2>
              <p className="text-xs sm:text-sm font-medium text-base-content/70">
                English
              </p>
            </div>

            {/* Math Course */}
            <div className="space-y-1 p-2 rounded-2xl hover:bg-base-200/40 transition-colors duration-200">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral tracking-tight">
                3+
              </h2>
              <p className="text-xs sm:text-sm font-medium text-base-content/70">
                Math
              </p>
            </div>

            {/* Robotics */}
            <div className="space-y-1 p-2 rounded-2xl hover:bg-base-200/40 transition-colors duration-200">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral tracking-tight">
                4+
              </h2>
              <p className="text-xs sm:text-sm font-medium text-base-content/70">
                Robotics
              </p>
            </div>

            {/* Others Course */}
            <div className="space-y-1 p-2 rounded-2xl hover:bg-base-200/40 transition-colors duration-200">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral tracking-tight">
                4+
              </h2>
              <p className="text-xs sm:text-sm font-medium text-base-content/70">
                Others
              </p>
            </div>
          </div>
      <div className="mx-auto max-w-[90vw] md:max-w-[85vw] w-full px-4 space-y-12 bg-ne">
        <CourseShow data={Courses}></CourseShow>
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default Coursepage;
