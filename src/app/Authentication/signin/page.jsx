"use client"

import React, { useState, Suspense } from 'react'; // Suspense ইম্পোর্ট করা হয়েছে
import Link from 'next/link';
import { Input, Button } from '@heroui/react'; 
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import background from "../../../assets/background.jpg";
import { Form } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

// ১. মূল সাইন-ইন ফর্মের ভেতরের অংশ আলাদা কম্পোনেন্ট হিসেবে থাকবে
const SigninFormContent = () => {
    const searchParams = useSearchParams();

    const callbackUrl = searchParams.get("callbackUrl") || "/";
    
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleEmailSignIn = async (e) => {
        e.preventDefault();
        let form=e.target;
        let formdata=new FormData(form);

        const { data, error } = await authClient.signIn.email({
            email: formdata.get('email'), // required
            password: formdata.get('password'), // required
            rememberMe: true,
            callbackURL:callbackUrl,
        });
        
        if (error) {
            toast.error(error.message || "Signin failed!");
            return;
        }
    };

    const handleGoogleSignIn = async () => {
      const data = await authClient.signIn.social({
       provider: "google",
      });
    };

    return (
        <div 
            className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${background.src})` }}
        >
          
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[4px]"></div>

           
            <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] p-8 md:p-10 flex flex-col justify-center">
                
                
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Sign In</h1>
                    <p className="text-sm text-slate-800/80 mt-2 font-medium">Welcome back! Please enter your details.</p>
                </div>

             
                <Form onSubmit={handleEmailSignIn} className="flex flex-col gap-5 w-full">

   
                    <div className="w-full">
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                            Email Address
                        </label>

                        <Input
                            required
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="bordered"
                            className="w-full"
                        />
                    </div>

   
                    <div className="w-full">

                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                            Password
                        </label>

                        <div className="relative">

                            <Input
                                required
                                placeholder="Enter your password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={isVisible ? "text" : "password"}
                                variant="bordered"
                                className="w-full"
                            />

                           
                            <button
                                type="button"
                                onClick={toggleVisibility}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-700"
                            >
                                {isVisible ? (
                                    <FaEyeSlash className="text-lg" />
                                ) : (
                                    <FaEye className="text-lg" />
                                )}
                            </button>

                        </div>
                    </div>

    
                    <div className="flex items-center justify-between w-full text-xs font-semibold text-slate-900 mt-1">

                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 cursor-pointer"
                            />

                            Remember me
                        </label>

                        <Link
                            href="/Authentication/forgot-password"
                            className="hover:underline text-indigo-950"
                        >
                            Forgot Password?
                        </Link>
                    </div>

    
                    <Button
                        type="submit"
                        className="w-full font-bold bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-800 mt-2 h-11 transition-all duration-300 active:scale-[0.98]"
                    >
                        Sign In
                    </Button>

                </Form>

               
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-white/30"></div>
                    <span className="mx-4 text-xs font-bold text-slate-800/70 uppercase tracking-wider">Or</span>
                    <div className="flex-grow border-t border-white/30"></div>
                </div>

              
                <div className="w-full">
                    <Button 
                        onClick={handleGoogleSignIn}
                        variant="bordered" 
                        className="w-full h-11 flex items-center justify-center gap-2 font-bold rounded-xl border-white/40 bg-white/40 hover:bg-white/60 text-slate-900 backdrop-blur-sm transition-all shadow-sm"
                    >
                        <FcGoogle className="text-xl" />
                        Continue With Google
                    </Button>
                </div>

               
                <div className="text-xs font-medium text-center mt-6 text-slate-900/90">
                    Don not have an account?{' '}
                    <Link href="/Authentication/signup" className="font-bold underline text-indigo-950 hover:text-black">
                        Sign Up
                    </Link>
                </div>

            </div>
        </div>
    );
};


const Signin = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 text-white font-semibold text-lg">
                Loading Sign In...
            </div>
        }>
            <SigninFormContent />
        </Suspense>
    );
};

export default Signin;