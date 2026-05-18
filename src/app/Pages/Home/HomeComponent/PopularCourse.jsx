import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularCourse = ({ Data }) => {
    const { image, title, instructorimage, instructor, rating, category } = Data;
    return (
        <div className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm hover:shadow-xl hover:bg-white/60 transition-all duration-300 overflow-hidden flex flex-col h-full group">
            <div className="relative h-52 w-full overflow-hidden bg-gray-50/50">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div className="inline-block px-2.5 py-1 bg-orange-50/60 backdrop-blur-sm text-orange-600 text-xs font-semibold rounded-md mb-3 uppercase tracking-wider">
                        {category}
                    </div>
                    
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2 leading-snug hover:text-orange-600 transition-colors duration-200 min-h-[3.5rem]">
                        {title}
                    </h3>
                    
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                        Master real-world development with expert-led training and hands-on projects.
                    </p>
                    
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-black/5">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100/50 flex-shrink-0">
                            <Image
                                src={instructorimage}
                                alt={instructor}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Instructor</p>
                            <p className="text-sm font-semibold text-gray-800 line-clamp-1">{instructor}</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 bg-amber-50/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                        <span className="text-amber-500 text-sm">⭐</span>
                        <span className="text-sm font-bold text-gray-800">{rating}</span>
                    </div>
                   
                    <button className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl transition-colors duration-200 text-center shadow-md shadow-orange-600/10">
                        View Details
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;