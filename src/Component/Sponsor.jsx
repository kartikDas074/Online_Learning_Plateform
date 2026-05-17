import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const sponsorsData = [
  { id: 1, title: "Amazon", logo: "/Sponsor/Amazon.webp" },
  { id: 2, title: "AMD", logo: "/Sponsor/Amd.webp" },
  { id: 3, title: "Cisco", logo: "/Sponsor/Cisco.svg.png" },
  { id: 4, title: "DigitalOcean", logo: "/Sponsor/DigitalOcean.png" },
  { id: 5, title: "Google", logo: "/Sponsor/Google.svg.png" },
  { id: 6, title: "HP", logo: "/Sponsor/hp.jpg" },
  { id: 7, title: "IBM", logo: "/Sponsor/ibm.svg.png" },
  { id: 8, title: "Intel", logo: "/Sponsor/Intel.svg.png" },
  { id: 9, title: "Meta", logo: "/Sponsor/Meta.png" },
  { id: 10, title: "Microsoft", logo: "/Sponsor/microsoft.svg.png" },
  { id: 11, title: "MIT", logo: "/Sponsor/mit.svg.png" },
  { id: 12, title: "Nvidia", logo: "/Sponsor/Nvidia.png" },
  { id: 13, title: "Oracle", logo: "/Sponsor/Oracol.png" },
  { id: 14, title: "Red Hat", logo: "/Sponsor/Red-hat.png" },
];

const SponsorMarquee = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-black">
      
    
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

       
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md">
            Trusted Sponsors
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Powered By Industry
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Collaborating with world-class technology companies and institutions
            to deliver premium learning experiences for future developers,
            engineers, and innovators.
          </p>
        </div>

        
        <div className="relative">

        
          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />

         
          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />

          <div className="rounded-3xl border border-gray-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_60px_rgba(99,102,241,0.08)] py-10 overflow-hidden">

            <Marquee
              speed={45}
              pauseOnHover={true}
              gradient={false}
            >
              <div className="flex items-center gap-8 md:gap-12 px-6">

                {sponsorsData.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="group relative flex items-center justify-center min-w-[140px] h-[90px] rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
                  >
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />

                    <div className="relative w-24 h-12 md:w-28 md:h-14 transition-all duration-300">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.title}
                        fill
                        sizes="(max-width: 768px) 96px, 112px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}

              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorMarquee;