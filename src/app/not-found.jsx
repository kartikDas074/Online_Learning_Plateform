import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-100 px-6 select-none">
      <div className="text-center max-w-md border border-gray-800 bg-zinc-950 p-8 rounded-xl shadow-2xl">
        
       
        <div className="text-xs font-mono text-red-500 uppercase tracking-widest mb-4">
          [ Access Denied / Error 404 ]
        </div>
        
        <h1 className="text-7xl font-extrabold tracking-tighter text-zinc-300 font-mono">
          404
        </h1>
        
        
        <h2 className="text-xl font-semibold mt-4 text-zinc-200">
          You have wandered into the wrong zone.
        </h2>
        
    
        <p className="text-zinc-500 mt-3 text-sm leading-relaxed font-mono">
          The path you took does not exist, or you do not have the clearance to view what resides here. Turn back before you lose your way entirely.
        </p>

        <div className="my-6 flex justify-center text-zinc-700">
          <svg 
            className="w-12 h-12" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>

        
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider rounded border border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-100 hover:text-black transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        >
          ← Return to Safety
        </Link>
        
      </div>
    </div>
  );
};

export default NotFound;