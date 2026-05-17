"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import background from "../../../assets/background.jpg";
import { Form } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLengthValid = password.length >= 8;

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);
   const router = useRouter();
   
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setSelectedImage(null);
    setImagePreview(null);
  };

  const uploadToCloudinary = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_UPLOAD_PRESET
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  return data.secure_url;
};

  const handleSubmit = async (e) => {
     e.preventDefault();

    if (!password || !confirmPassword || !selectedImage) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSpecialChar ||
      !isLengthValid
    ) {
      alert("Password does not meet requirements!");
      return;
    }
    console.log("Form submitted successfully 🚀");
    const image= await uploadToCloudinary(selectedImage);
    // console.log(image);
     
    const form = e.target;

    const formData = new FormData(form);

     const { data, error } = await authClient.signUp.email({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    image: `${image}`,
    callbackURL: "/Authentication/signin",
   });
//    console.log(data);
    if (error) {
      toast.error(error.message || "Signup failed!");
      return;
    }

    toast.success("Account created successfully ");
   
    router.push("/Authentication/signin");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[4px]"></div>

      <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] p-8 md:p-10 flex flex-col justify-center">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Sign Up
          </h1>
          <p className="text-sm text-slate-800/80 mt-2 font-medium">
            Create your account to start your learning journey
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Full Name
          </label>
          <Input
            required
            name="name"
            type="text"
            placeholder="Enter Your name"
            variant="bordered"
            classNames={{
              inputWrapper:
                "bg-white/40 border-white/40 hover:border-white/60 focus-within:!border-white rounded-xl backdrop-blur-sm transition-all shadow-inner h-12",
              input: "text-slate-900 placeholder:text-slate-600/70 text-sm",
            }}
          />

          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Email Address
          </label>
          <Input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            variant="bordered"
            classNames={{
              inputWrapper:
                "bg-white/40 border-white/40 hover:border-white/60 focus-within:!border-white rounded-xl backdrop-blur-sm transition-all shadow-inner h-12",
              input: "text-slate-900 placeholder:text-slate-600/70 text-sm",
            }}
          />

          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Upload a suitable profile picture
          </label>
          <div className="w-full">
            <label
              htmlFor="profile-upload"
              className={`group flex flex-col items-center justify-center w-full border-2 border-dashed rounded-2xl transition-all duration-300 px-4 py-4 ${
                imagePreview
                  ? "border-green-400 bg-green-50/20"
                  : "border-white/40 bg-white/20 hover:bg-white/30 cursor-pointer"
              }`}
            >
              {imagePreview ? (
                <div className="relative flex flex-col items-center justify-center w-full">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 shadow-sm mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold text-green-900 truncate max-w-[200px]">
                    ✓ {selectedImage?.name}
                  </p>
                  <button
                    onClick={handleRemoveImage}
                    className="mt-2 px-2 py-0.5 text-[10px] font-bold text-red-700 bg-red-100/60 hover:bg-red-100 rounded-md transition-colors"
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-2xl mb-1 transition-transform duration-300 group-hover:scale-110">
                    📷
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    Upload profile picture
                  </p>
                  <p className="text-[10px] text-slate-700/80 mt-0.5">
                    PNG, JPG, JPEG (Max 5MB)
                  </p>
                </div>
              )}

              <input
                required
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                disabled={!!imagePreview}
                className="hidden"
              />
            </label>
          </div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Password
          </label>

          <div className="relative w-full">
            <Input
              required
              placeholder="Enter a strong password"
              variant="bordered"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              type={isVisible ? "text" : "password"}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEyeSlash className="text-xl text-slate-700" />
                  ) : (
                    <FaEye className="text-xl text-slate-700" />
                  )}
                </button>
              }
              classNames={{
                inputWrapper:
                  "bg-white/40 border-white/40 hover:border-white/60 focus-within:!border-white rounded-xl backdrop-blur-sm transition-all shadow-inner h-12",
                input: "text-slate-900 placeholder:text-slate-600/70 text-sm",
              }}
            />

            {isPasswordFocused && (
              <div className="absolute z-20 bottom-full left-0 w-full mb-2 p-3 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl flex flex-col gap-1 text-[11px] transition-all">
                <p className="font-semibold text-gray-800 mb-1">
                  Password Requirements:
                </p>
                <span
                  className={
                    hasUppercase ? "text-green-600 font-medium" : "text-red-500"
                  }
                >
                  {hasUppercase ? "✓" : "✗"} One uppercase letter (A-Z)
                </span>
                <span
                  className={
                    hasLowercase ? "text-green-600 font-medium" : "text-red-500"
                  }
                >
                  {hasLowercase ? "✓" : "✗"} One lowercase letter (a-z)
                </span>
                <span
                  className={
                    hasNumber ? "text-green-600 font-medium" : "text-red-500"
                  }
                >
                  {hasNumber ? "✓" : "✗"} One number (0-9)
                </span>
                <span
                  className={
                    hasSpecialChar
                      ? "text-green-600 font-medium"
                      : "text-red-500"
                  }
                >
                  {hasSpecialChar ? "✓" : "✗"} One special character (@, $, !
                  etc.)
                </span>
                <span
                  className={
                    isLengthValid
                      ? "text-green-600 font-medium"
                      : "text-red-500"
                  }
                >
                  {isLengthValid ? "✓" : "✗"} At least 8 characters long
                </span>
              </div>
            )}
          </div>

          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Confirm Password
          </label>
          <Input
            required
            placeholder="Confirm Password"
            variant="bordered"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={isConfirmVisible ? "text" : "password"}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleConfirmVisibility}
              >
                {isConfirmVisible ? (
                  <FaEyeSlash className="text-xl text-slate-700" />
                ) : (
                  <FaEye className="text-xl text-slate-700" />
                )}
              </button>
            }
            classNames={{
              inputWrapper:
                "bg-white/40 border-white/40 hover:border-white/60 focus-within:!border-white rounded-xl backdrop-blur-sm transition-all shadow-inner h-12",
              input: "text-slate-900 placeholder:text-slate-600/70 text-sm",
            }}
          />

          <Button
            type="submit"
            className="w-full font-bold bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-800 mt-2 h-11 transition-all duration-300 active:scale-[0.98]"
          >
            Create Account
          </Button>
        </Form>

        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-white/30"></div>
          <span className="mx-4 text-xs font-bold text-slate-800/70 uppercase tracking-wider">
            Or
          </span>
          <div className="flex-grow border-t border-white/30"></div>
        </div>

        <div className="w-full">
          <Button
            variant="bordered"
            className="w-full h-11 flex items-center justify-center gap-2 font-bold rounded-xl border-white/40 bg-white/40 hover:bg-white/60 text-slate-900 backdrop-blur-sm transition-all shadow-sm"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>
        </div>

        <div className="text-xs font-medium text-center mt-5 text-slate-900/90">
          Already have an account?{" "}
          <Link
            href="/Authentication/signin"
            className="font-bold underline text-indigo-950 hover:text-black"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
