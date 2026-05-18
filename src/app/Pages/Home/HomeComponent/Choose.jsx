import Link from 'next/link';
import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaBookOpen } from 'react-icons/fa';
import { MdGroups, MdOutlineLayersClear } from 'react-icons/md';
import { RiTv2Fill } from 'react-icons/ri';
import { SiRocket } from 'react-icons/si';
import { TbCertificate } from 'react-icons/tb';

const Choose = () => {
    return (
        <div className="bg-white py-16 px-4 md:px-8 lg:px-16 w-full font-sans">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="px-4 py-1.5 bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                        Why Choose Us
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Features That <span className="text-[#4F46E5]">Empower</span> Your Learning
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 max-w-2xl mt-3 leading-relaxed">
                        We provide the tools and support you need to learn better, <br className="hidden md:inline"/>
                        faster, and smarter—anytime, anywhere.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    
                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center text-[#4F46E5] text-xl mb-4">
                            <FaBookOpen /> 
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Expert-Led Courses</h2>
                            <div className="w-8 h-[3px] bg-[#4F46E5] rounded-full mb-3"></div>
                            <p className="text-sm text-gray-500 leading-relaxed">Learn from industry experts with structured and up-to-date content.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-[#ECFDF5] rounded-xl flex items-center justify-center text-[#10B981] text-xl mb-4">
                            <RiTv2Fill />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Flexible Learning</h2>
                            <div className="w-8 h-[3px] bg-[#10B981] rounded-full mb-3"></div>
                            <p className="text-sm text-gray-500 leading-relaxed">Study at your own pace with lifetime access to all course materials.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center text-[#F97316] text-xl mb-4">
                            <TbCertificate />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Certificates</h2>
                            <div className="w-8 h-[3px] bg-[#F97316] rounded-full mb-3"></div>
                            <p className="text-sm text-gray-500 leading-relaxed">Earn recognized certificates to boost your skills and career.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-[#FDF2F8] rounded-xl flex items-center justify-center text-[#EC4899] text-xl mb-4">
                            <MdGroups />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Community Support</h2>
                            <div className="w-8 h-[3px] bg-[#EC4899] rounded-full mb-3"></div>
                            <p className="text-sm text-gray-500 leading-relaxed">Join a supportive community of learners and get help when you need it.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-[#F5F3FF] rounded-xl flex items-center justify-center text-[#8B5CF6] text-xl mb-4">
                            <BsGraphUpArrow />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Track Your Progress</h2>
                            <div className="w-8 h-[3px] bg-[#8B5CF6] rounded-full mb-3"></div>
                            <p className="text-sm text-gray-500 leading-relaxed">Monitor your learning journey with detailed progress and insights.</p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-[#3B82F6] text-xl mb-4">
                            <MdOutlineLayersClear/>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Learn Anywhere</h2>
                            <div className="w-8 h-[3px] bg-[#3B82F6] rounded-full mb-3"></div>
                            <p className="text-sm text-gray-500 leading-relaxed">Access your courses on any device, anytime, anywhere.</p>
                        </div>
                    </div>

                </div>

                <div className="bg-[#EEF2FF] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-[#E0E7FF]">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#4F46E5] text-white rounded-xl flex items-center justify-center text-2xl">
                            <SiRocket />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Ready to Start Learning?</h3>
                            <p className="text-sm text-gray-600 max-w-xl mt-1 leading-relaxed">
                                Join thousands of learners and take the next step towards your goals.
                            </p>
                        </div>
                    </div>
                    <Link href={'/Pages/courses'}>
                    <button className=" px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm rounded-xl  flex items-center gap-2 shadow-md shadow-blue-500/10">
                        Explore Courses →
                    </button>
                    </Link>
                    
                </div>

            </div>
        </div>
    );
};

export default Choose;