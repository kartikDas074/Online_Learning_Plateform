'use client'


import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FaUser, FaEnvelope, FaLink, FaEdit } from 'react-icons/fa';

const Profilepage = () => {
      
   
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

   
    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200/40">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

   
    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200/40">
                <p className="text-error font-bold">You are not logged in!</p>
            </div>
        );
    }

   
    const url = user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";
    const name = user.name || "N/A";
    const email = user.email || "N/A";
    return (
        <section className="min-h-screen bg-base-200/40 py-10 px-4">
            <div className="mx-auto max-w-6xl space-y-8">
                
              
                <h1 className="text-3xl font-extrabold text-neutral tracking-tight pl-2">
                    My Profile
                </h1>

               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    
              
                    <div className="bg-base-100 border border-base-200 p-6 rounded-2xl shadow-sm text-center space-y-5">
                        
                      
                        <div className="relative mx-auto h-32 w-32 rounded-full overflow-hidden border-2 border-base-300 shadow-inner">
                            <Image
                                src={url}
                                alt={name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-neutral tracking-tight">
                                {name}
                            </h2>
                            <p className="text-xs text-base-content/60 font-medium truncate px-2">
                                {email}
                            </p>
                            
                        </div>

                       <button className="btn btn-outline btn-sm w-full rounded-xl normal-case font-semibold gap-2 text-neutral border-base-300 hover:bg-neutral hover:text-white transition-all duration-200">
                            <FaEdit className="text-xs" />
                            Edit Profile
                        </button>
                    </div>

                    
                    <div className="md:col-span-2 bg-base-100 border border-base-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
                        
                        <h3 className="text-lg font-bold text-neutral tracking-tight border-b border-base-200 pb-3">
                            Profile Information
                        </h3>

                        <div className="space-y-5">
                            
                         
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-b border-base-100 pb-3.5">
                                <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral/70 min-w-[120px]">
                                    <FaUser className="text-primary/70 text-xs shrink-0" />
                                    <span>Name</span>
                                </div>
                                <span className="text-sm font-medium text-base-content/80 sm:text-right break-all">
                                    {name}
                                </span>
                            </div>

                          
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-b border-base-100 pb-3.5">
                                <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral/70 min-w-[120px]">
                                    <FaEnvelope className="text-primary/70 text-xs shrink-0" />
                                    <span>Email</span>
                                </div>
                                <span className="text-sm font-medium text-base-content/80 sm:text-right break-all">
                                    {email}
                                </span>
                            </div>

                          
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