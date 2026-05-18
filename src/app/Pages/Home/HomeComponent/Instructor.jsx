import { FeatchInstructor } from '@/app/CommonFunction.js/FeatchInstructor';
import React from 'react';
import InstructorCard from './InstructorCard';
import Link from 'next/link';

const Instructor = async () => {
    let Data = await FeatchInstructor();

    const sortedInstructor = [...Data].sort(
        (a, b) => b.rating - a.rating
    );

    let Instructor = sortedInstructor.slice(0, 3);

    return (
        <section className="bg-base-200/40 py-20">
            <div className="mx-auto max-w-7xl px-4">

               
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
                        Instructor.map((res) => (
                            <InstructorCard
                                key={res.id}
                                data={res}
                            />
                        ))
                    }
                </div>

               <Link href={'/Pages/instructpage'}>
               <div className="mt-12 flex justify-center">
                    <button className="btn btn-primary rounded-xl px-8">
                        View All Instructors
                    </button>
                </div>
               </Link>
                
            </div>
        </section>
    );
};

export default Instructor;