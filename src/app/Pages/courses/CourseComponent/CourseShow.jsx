'use client'
import React, { useState } from 'react';
import PopularCourse from '../../Home/HomeComponent/PopularCourse';
import { FaSearch } from 'react-icons/fa';



export const CourseShow=  ({data}) => {
     const [searchTerm, setSearchTerm] = useState("");

  // search filter
     const filteredCourses = data.filter((course) =>
            course?.title
                 ?.toLowerCase()
                 .includes(searchTerm.toLowerCase())
     );

    return (
        <div>
            <div className="bg-neutral p-5 sm:p-6 rounded-2xl space-y-4 ">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                Smart Filter
              </span>
              <h2 className="text-[30px] md:text-[40px] text-[#FFFFFF] font-bold tracking-tight">
                Find Your Favorite Course
              </h2>
              <p className="text-xs text-[#FFFFFF]  mt-1">
                Discover your ideal path instantly—search tailored materials
                using course name 
              </p>
            </div>

            <div className="relative w-full">
              <input
                type="search"
                name="name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title or category..."
                className="input input-bordered w-full pl-11 rounded-xl bg-base-100 border-base-300 focus:outline-none focus:border-primary text-sm shadow-none"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-base" />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] py-[40px]'>
        {
             filteredCourses.length > 0 ? (
          filteredCourses.map((res) => (
            <PopularCourse
              key={res.id}
              Data={res}
            />
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center py-20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-base-content">
                No Course Found 😢
              </h3>

              <p className="text-sm text-base-content/60 mt-2">
                Try searching with another course name
              </p>
            </div>
          </div>
        )

        }
         </div>
        </div>
    
    );
};

export default CourseShow;