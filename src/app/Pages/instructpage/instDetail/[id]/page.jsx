import { FeatchInstructor } from "@/app/CommonFunction.js/FeatchInstructor";
import Image from "next/image";
import { FaStar, FaRegClock } from "react-icons/fa";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";
import { toast } from "react-toastify";
import ButtonSession from "./ButtonSession";

const page = async ({ params }) => {
  let Data = await FeatchInstructor();

  let { id } = await params;

  Data = Data[id - 1];

  let { name, Expertise, image, Institution, Rating, Inspirational_Quota } =
    Data;

  return (
    <section className="bg-base-200/50 min-h-screen py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
       
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300">
             
              <div className="relative h-[400px] md:h-[480px] w-full bg-base-200 overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain w-full h-full"
                />

              
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-primary shadow-sm backdrop-blur-sm">
                  <MdVerified className="text-blue-500 text-sm" />
                  Verified
                </div>
              </div>

              
              <div className="space-y-6 p-6 sm:p-8">
                <div className="border-b border-base-200 pb-5">
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral tracking-tight">
                    {name}
                  </h1>

                  <p className="mt-2.5 flex items-center gap-2 text-sm sm:text-base text-base-content/70 font-medium">
                    <HiMiniAcademicCap className="text-xl text-primary shrink-0" />
                    {Institution}
                  </p>
                </div>

                {/* Quick metrics wrapper */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 rounded-xl bg-warning/10 px-3.5 py-2 text-warning text-sm font-bold">
                    <FaStar className="text-sm" />
                    <span className="font-semibold text-base-content">
                      {Rating} Rating
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-xl bg-success/10 px-3.5 py-2 text-success text-sm font-semibold">
                    <FaRegClock className="text-sm" />
                    Available for mentoring
                  </div>
                </div>

               
                {Inspirational_Quota && (
                  <div className="rounded-2xl border border-base-200 bg-base-50 p-5 italic text-sm sm:text-base leading-relaxed text-base-content/80">
                    “{Inspirational_Quota}”
                  </div>
                )}
              </div>
            </div>
          </div>

        
          <div className="lg:col-span-1 lg:sticky lg:top-8 space-y-3">
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-neutral tracking-tight">
                Expertise
              </h2>

              <div className="flex flex-wrap gap-2">
                {Expertise.map((res, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-primary/5 border border-primary/10 px-3.5 py-2 text-xs font-semibold text-primary"
                  >
                    {res}
                  </div>
                ))}
              </div>

             
             <ButtonSession name={name}></ButtonSession>
            </div>

            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-neutral tracking-tight">
                Experience
              </h2>
               <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm space-y-5">
              
                <div>
                  <h2 className="text-4xl font-extrabold text-primary leading-none">
                    20+
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-base-content">
                    Years of Experience
                  </p>
                </div>

                
                <div className="border-t border-dashed border-base-300"></div>

              
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 rounded-xl bg-base-200/60 px-4 py-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></div>

                    <p className="text-sm font-medium text-base-content/80">
                      Project Based Learning
                    </p>
                  </li>

                  <li className="flex items-start gap-3 rounded-xl bg-base-200/60 px-4 py-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-success shrink-0"></div>

                    <p className="text-sm font-medium text-base-content/80">
                      Real-time Practical Examples
                    </p>
                  </li>

                  <li className="flex items-start gap-3 rounded-xl bg-base-200/60 px-4 py-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-warning shrink-0"></div>

                    <p className="text-sm font-medium leading-6 text-base-content/80">
                      Complete Degree From International University
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
