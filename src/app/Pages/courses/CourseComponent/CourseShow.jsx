
import React from 'react';
import PopularCourse from '../../Home/HomeComponent/PopularCourse';
import { FaSearch } from 'react-icons/fa';



export const CourseShow=  ({data}) => {
    console.log(data);
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
                using course name or categories.
              </p>
            </div>

            <div className="relative w-full">
              <input
                type="search"
                name="name"
                placeholder="Search by title or category..."
                className="input input-bordered w-full pl-11 rounded-xl bg-base-100 border-base-300 focus:outline-none focus:border-primary text-sm shadow-none"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 text-base" />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] py-[40px]'>
        {
            data.map(res=><PopularCourse key={res.id} Data={res}></PopularCourse>)
        }
     </div>
        </div>
    
    );
};

export default CourseShow;