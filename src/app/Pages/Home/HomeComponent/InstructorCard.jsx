import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";

const InstructorCard = ({ data }) => {
  const { id,name, image, Institution, rating } = data ;

  return (
    <div className="group rounded-3xl border border-base-300 bg-base-100 p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl max-w-sm w-full">
      
      
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-base-200">
        <Image
          src={image}
          alt={`${name || 'Instructor'}'s image`}
          fill
          
          className="h-60 transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />

      
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary shadow">
          <MdVerified className="text-blue-500" />
          Verified
        </div>
      </div>

      
      <div className="mt-4 space-y-3.5">
      
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-base-content tracking-tight">
            {name}
          </h2>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-base-content/70 truncate">
            <HiOutlineAcademicCap className="text-base text-primary shrink-0" />
            <span className="truncate">{Institution}</span>
          </p>
        </div>

    
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1 rounded-full bg-warning/10 px-2.5 py-0.5 text-xs font-semibold text-warning">
            <FaStar className="text-xs" />
            <span>{rating}</span>
          </div>

          <p className="text-xs font-medium text-base-content/60">
            Top Rated Instructor
          </p>
        </div>
        <Link href={`/Pages/instructpage/instDetail/${id}`}>
        <button className="btn btn-primary w-full btn-sm h-10 rounded-xl text-white font-medium normal-case">
          See Detail
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default InstructorCard;