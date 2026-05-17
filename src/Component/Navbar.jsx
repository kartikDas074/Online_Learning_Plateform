import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";
import { Button } from "@heroui/react";
import logo from '../assets/logo.jpg';

const Navbar = () => {
 
  const links = (
    <>
      <li>
        <Navlink href={'/'} className="font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg">
          Home
        </Navlink>
      </li>
      <li>
        <Navlink href={'/Pages/courses'} className="font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg">
          Course List
        </Navlink>
      </li>
      <li>
        <Navlink href={'/Pages/myprofile'} className="font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg">
          Profile
        </Navlink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white/90 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 border-b border-gray-100 shadow-sm">
      

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-gray-100 rounded-xl p-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-gray-100 flex flex-col gap-1"
          >
            {links}
          </ul>
        </div>

        
        <Link href={'/'} className="flex items-center gap-2.5 group transition-transform active:scale-95">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-indigo-100 border border-gray-200">
            <Image 
              src={logo} 
              alt="SkillSphere Logo" 
              height={500}
              width={300}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 bg-clip-text text-transparent">
            Skill<span className="text-blue-600 font-black">Sphere</span>
          </span>
        </Link>
      </div>

    
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-[15px]">
          {links}
        </ul>
      </div>


      <div className="navbar-end gap-3 ">
       
        <Link href={'/Authentication/signin'}>
          <Button 
            variant="light" 
            className="font-semibold text-gray-700 hover:text-blue-600 rounded-xl px-5 hover:bg-blue-50/50"
          >
            Sign In
          </Button>
        </Link>
        
        <Link href={'/Authentication/signup'}>
          <Button 
            color="primary" 
            className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-200 rounded-xl px-5 transition-all duration-300 transform hover:-translate-y-[1px] hidden md:flex"
          >
            Sign Up
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;