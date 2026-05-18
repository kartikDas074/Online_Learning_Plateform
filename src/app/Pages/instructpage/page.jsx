import { FeatchInstructor } from '@/app/CommonFunction.js/FeatchInstructor';
import React from 'react';
import InstructorCard from '../Home/HomeComponent/InstructorCard';

const Instructorpage =async () => {
    let Data = await FeatchInstructor();
    return (
        <div className="bg-base-200/40 py-20">
            <div className="mx-auto max-w-2xl text-center">
                    <div className="badge badge-primary badge-outline px-4 py-3 font-medium">
                        Expert Mentors
                    </div>

                    <h1 className="mt-5 text-4xl font-extrabold leading-tight text-base-content md:text-5xl">
                        Meet Our Top{" "}
                        <span className="text-primary">
                            Instructors
                        </span>
                    </h1>

                    <p className="mt-4 text-base leading-7 text-base-content/70">
                        Learn from experienced mentors who are passionate about
                        teaching and helping students build real-world skills,
                        confidence, and successful careers.
                    </p>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                     Data.map((res) => (
                            <InstructorCard
                                key={res.id}
                                data={res}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default Instructorpage;