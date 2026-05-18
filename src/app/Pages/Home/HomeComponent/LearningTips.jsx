import React from 'react';
import { CgNotes } from 'react-icons/cg';
import { FaModx } from 'react-icons/fa';
import { GiAlliedStar } from 'react-icons/gi';
import { MdNotificationAdd } from 'react-icons/md';
import { SiBookstack } from 'react-icons/si';

const LearningTips = () => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Learning Tips</h1>
                <p className="text-xl text-gray-600 mt-2">Unlock your potential with effective learning Strategy</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                    <div className="text-blue-500 mr-4 mt-1">
                        <MdNotificationAdd size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Follow a study Schedule</h2>
                        <p className="text-lg text-gray-600 mt-2">Slow and steady wins the Race. <br />Create a consistent study schedule and stick in it</p>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                    <div className="text-green-500 mr-4 mt-1">
                        <CgNotes size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Take Notes</h2>
                        <p className="text-lg text-gray-600 mt-2">Take a short note on what you are learning. It will help you to remember if you forget and to revise fastly.</p>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                    <div className="text-red-500 mr-4 mt-1">
                        <FaModx size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Practice Regularly</h2>
                        <p className="text-lg text-gray-600 mt-2">Practice makes man perfect. <br />Apply what you learn.</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-sm flex items-center justify-between">
                <div className="text-yellow-500 mr-6">
                    <GiAlliedStar size={32} />
                </div>
                <div className="flex-1">
                    <p className="text-xl text-gray-700 font-medium">Remember, Learning is a journey, Not a race. <br />Enjoy the process and celebrate Little Progress.</p>
                </div>
                <div className="text-indigo-500 ml-6">
                    <SiBookstack size={32} />
                </div>
            </div>
        </div>
    );
};

export default LearningTips;