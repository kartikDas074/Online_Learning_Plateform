import { FeatchCourse } from '@/app/CommonFunction.js/FeatchAll';
import React from 'react';
import PopularCourse from './PopularCourse';

const Popular = async () => {
    let Data = await FeatchCourse();
    const sortedCourses = [...Data].sort((a, b) => b.rating - a.rating);
    let Course = sortedCourses.slice(0, 3);
    
    return (
        <div className="bg-neutral-300 py-16 px-4 md:px-8 lg:px-16 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Our <span className="text-orange-600">Popular</span> Courses
                    </h1>
                    <div className="w-16 h-1 bg-orange-600 rounded-full mt-4"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {
                        Course.map(res => (
                            <div key={res.id || res._id} className="w-full max-w-sm h-full">
                                <PopularCourse Data={res} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;