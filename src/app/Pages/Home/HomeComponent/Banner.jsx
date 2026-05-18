import Link from 'next/link';
import background from '../../../../assets/Baner.png';

const Banner = () => {
    return (
        <div 
            className="min-h-[500px] md:min-h-[600px] flex items-center bg-contain bg-center bg-no-repeat px-6 py-12 md:px-16"
            style={{ backgroundImage: `url(${background.src || background})`,backgroundSize: '100% 100%' }}
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-6 text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                        Upgrade Your  <br />
                        <span className="text-orange-600 inline-flex items-center gap-2 mt-2">
                          Skills  Today 🚀
                        </span>
                    </h1>
                    
                    <p className="text-base md:text-lg text-gray-600 max-w-md font-medium leading-relaxed">
                        Learn from industry experts and advance your career with our online courses.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link href="/Pages/courses">
                            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300 shadow-md shadow-orange-600/20">
                                Explore Courses
                            </button>
                        </Link>
                        <Link href="/Pages/itworks">
                            <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-lg border border-gray-200 transition duration-300 shadow-sm">
                                How It Works
                            </button>
                        </Link>
                    </div>

                   
                </div>

                <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center">
                    <div className="absolute right-4 top-10 md:top-16 bg-white p-4 rounded-xl shadow-lg border border-gray-100 min-w-[140px] transition transform hover:-translate-y-1 duration-300 z-10">
                        <h2 className="text-2xl font-bold text-teal-600">20K+</h2>
                        <p className="text-xs font-semibold text-gray-500 mt-0.5">Students Enrolled</p>
                    </div>

                    <div className="absolute right-2 bottom-12 md:bottom-16 bg-white p-4 rounded-xl shadow-lg border border-gray-100 min-w-[140px] transition transform hover:-translate-y-1 duration-300 z-10">
                        <h2 className="text-2xl font-bold text-orange-600">150+</h2>
                        <p className="text-xs font-semibold text-gray-500 mt-0.5">Expert Courses</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;