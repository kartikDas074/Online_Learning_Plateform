import { FeatchCourse } from '@/app/CommonFunction.js/FeatchAll';
import Image from 'next/image';
import React from 'react';
import { 
    FaCheck, 
    FaRegClock, 
    FaLayerGroup, 
    FaChartLine, 
    FaStar, 
    FaBookOpen 
} from 'react-icons/fa';
import EnroolButton from '../../CourseComponent/EnroolButton';

const CourseDetail = async ({ params }) => {
    let { cid } = await params;
    let Data = await FeatchCourse();
    Data = Data[cid - 1];
    
    let { 
        title, 
        instructor, 
        duration, 
        level, 
        rating, 
        description, 
        image, 
        category, 
        Learn, 
        Course_curriculam, 
        instructorimage 
    } = Data;

    return (
        <section className="min-h-screen bg-base-200/30 py-8 md:py-12">
            <div className="mx-auto max-w-7xl px-4 space-y-8">
         
                <div className="space-y-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase ">
                        {category}
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral tracking-tight max-w-4xl">
                        {title}
                    </h1>
                </div>

              
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
              
                    <div className="lg:col-span-2 space-y-8">
                        
                      
                        <div className="relative h-[240px] sm:h-[400px] w-full bg-base-200 overflow-hidden rounded-2xl border border-base-200 shadow-sm">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                          <div className="bg-base-100 p-6 sm:p-8 rounded-2xl border border-base-200 shadow-sm space-y-4">
                            <h2 className="text-xl font-bold text-neutral border-b border-base-200 pb-2">
                                About This Course
                            </h2>
                            <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">
                                {description}
                            </p>
                        </div>

                       
                        <div className="bg-base-100 p-6 sm:p-8 rounded-2xl border border-base-200 shadow-sm space-y-4">
                            <h2 className="text-xl font-bold text-neutral ">
                                What You'll Learn
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {Learn.map((res, index) => (
                                    <li key={index} className="flex items-start gap-2.5 text-sm text-base-content/80">
                                        <FaCheck className="text-success shrink-0 mt-1 text-xs" />
                                        <span>{res}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                         <div className="bg-base-100 p-6 sm:p-8 rounded-2xl border border-base-200 shadow-sm space-y-4">
                            <h2 className="text-xl font-bold text-neutral tracking-tight">
                                Course Curriculum
                            </h2>
                            <ul className="divide-y divide-base-200">
                                {Course_curriculam.map((res, index) => (
                                    <li key={index} className="flex items-center gap-3 py-3 text-sm text-base-content/80 first:pt-0 last:pb-0">
                                        <FaBookOpen className="text-primary/70 shrink-0 text-sm" />
                                        <span className="font-medium">{res}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    
                    <div className="space-y-6 lg:sticky lg:top-8">
                        
                     
                        <div className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm space-y-6">
                            
                            <h3 className="text-lg font-bold text-neutral tracking-tight border-b border-base-200 pb-2">
                                Course Overview
                            </h3>

                           
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm border-b border-base-100 pb-2.5">
                                    <div className="flex items-center gap-2 text-base-content/60">
                                        <FaRegClock className="text-base" />
                                        <span>Duration</span>
                                    </div>
                                    <span className="font-semibold text-neutral">{duration}</span>
                                </div>

                                <div className="flex items-center justify-between text-sm border-b border-base-100 pb-2.5">
                                    <div className="flex items-center gap-2 text-base-content/60">
                                        <FaChartLine className="text-base" />
                                        <span>Level</span>
                                    </div>
                                    <span className="font-semibold text-neutral">{level}</span>
                                </div>

                                <div className="flex items-center justify-between text-sm pb-1">
                                    <div className="flex items-center gap-2 text-base-content/60">
                                        <FaLayerGroup className="text-base" />
                                        <span>Category</span>
                                    </div>
                                    <span className="font-semibold text-neutral">{category}</span>
                                </div>
                            </div>

                          
                            <EnroolButton title={title} name={instructor}></EnroolButton>
                        </div>

                     
                        <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-sm flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-base-200 border border-base-300 shrink-0">
                                    <Image
                                        src={instructorimage}
                                        alt={instructor}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="text-xs text-base-content/50 block font-medium">Instructor</span>
                                    <span className="text-sm font-bold text-neutral block leading-tight">{instructor}</span>
                                </div>
                            </div>

                          
                            <div className="flex items-center gap-1 bg-warning/10  px-2.5 py-1 rounded-lg text-xs font-bold shrink-0">
                                <FaStar className="text-[11px]" />
                                <span className="text-base-content">{rating}</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CourseDetail;