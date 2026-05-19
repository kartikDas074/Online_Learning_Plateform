import Image from 'next/image';
import React from 'react';
import { FaUser, FaEnvelope, FaLink, FaEdit } from 'react-icons/fa';

const Profilepage = () => {
    let url = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop";
    let name = "Sarah Johnson";
    let email = "sarah.johnson@example.com";
    let role = "Front-end Developer";

    return (
        <section className="min-h-screen bg-base-200/40 py-10 px-4">
            <div className="mx-auto max-w-6xl space-y-8">
                
                {/* Header Page Title */}
                <h1 className="text-3xl font-extrabold text-neutral tracking-tight pl-2">
                    My Profile
                </h1>

                {/* Main Dynamic Split Layout Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    
                    {/* Left Column: Compact Profile Card Visual Panel */}
                    <div className="bg-base-100 border border-base-200 p-6 rounded-2xl shadow-sm text-center space-y-5">
                        
                        {/* Profile Rounded Image Avatar */}
                        <div className="relative mx-auto h-32 w-32 rounded-full overflow-hidden border-2 border-base-300 shadow-inner">
                            <Image
                                src={url}
                                alt={name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Text Information Stack */}
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-neutral tracking-tight">
                                {name}
                            </h2>
                            <p className="text-xs text-base-content/60 font-medium truncate px-2">
                                {email}
                            </p>
                            <p className="text-xs text-primary font-semibold tracking-wide pt-1">
                                {role}
                            </p>
                        </div>

                        {/* Interactive Edit Action Button */}
                        <button className="btn btn-outline btn-sm w-full rounded-xl normal-case font-semibold gap-2 text-neutral border-base-300 hover:bg-neutral hover:text-white transition-all duration-200">
                            <FaEdit className="text-xs" />
                            Edit Profile
                        </button>
                    </div>

                    {/* Right Column: Detailed Informative Core Values Sheet (Occupies 2 Columns) */}
                    <div className="md:col-span-2 bg-base-100 border border-base-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
                        
                        <h3 className="text-lg font-bold text-neutral tracking-tight border-b border-base-200 pb-3">
                            Profile Information
                        </h3>

                        <div className="space-y-5">
                            
                            {/* Full Name Row Field */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-b border-base-100 pb-3.5">
                                <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral/70 min-w-[120px]">
                                    <FaUser className="text-primary/70 text-xs shrink-0" />
                                    <span>Name</span>
                                </div>
                                <span className="text-sm font-medium text-base-content/80 sm:text-right break-all">
                                    {name}
                                </span>
                            </div>

                            {/* Electronic Mail Address Row Field */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-b border-base-100 pb-3.5">
                                <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral/70 min-w-[120px]">
                                    <FaEnvelope className="text-primary/70 text-xs shrink-0" />
                                    <span>Email</span>
                                </div>
                                <span className="text-sm font-medium text-base-content/80 sm:text-right break-all">
                                    {email}
                                </span>
                            </div>

                            {/* Dynamic Live Photo URL Target Resource Link Field */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 pb-1">
                                <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral/70 min-w-[120px]">
                                    <FaLink className="text-primary/70 text-xs shrink-0" />
                                    <span>Photo URL</span>
                                </div>
                                <span className="text-xs font-mono text-primary/90 bg-primary/5 px-2.5 py-1.5 rounded-lg max-w-full sm:max-w-md truncate sm:text-right border border-primary/10">
                                    {url}
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Profilepage;