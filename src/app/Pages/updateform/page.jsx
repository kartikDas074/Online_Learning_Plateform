"use client";

import React, { useEffect, useState } from "react";
import { Button, Input } from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const UpdateProfile = () => {
  const { data: session } = authClient.useSession();


  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);


  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImagePreview(session.user.image || "");
    }
  }, [session]);

  
  useEffect(() => {
    return () => {
      if (
        imagePreview &&
        imagePreview.startsWith("blob:")
      ) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

 
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

   
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files are allowed");
      return;
    }

    
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Max file size is 5MB");
      return;
    }

    if (
      imagePreview &&
      imagePreview.startsWith("blob:")
    ) {
      URL.revokeObjectURL(imagePreview);
    }

    const previewUrl = URL.createObjectURL(file);

    setSelectedImage(file);
    setImagePreview(previewUrl);
  };

 
  const handleRemoveImage = () => {
    if (
      imagePreview &&
      imagePreview.startsWith("blob:")
    ) {
      URL.revokeObjectURL(imagePreview);
    }

    setSelectedImage(null);

    setImagePreview(session?.user?.image || "");
  };

  
  const uploadToCloudinary = async (file) => {
    try {
      const formData = new FormData();

      formData.append("file", file);

      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_UPLOAD_PRESET
      );

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();

      return data.secure_url;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsUpdating(true);

      let imageUrl = session?.user?.image || "";

      // upload new image if selected
      if (selectedImage) {
        toast.info("Uploading image...");

        const uploadedImage = await uploadToCloudinary(
          selectedImage
        );

        if (!uploadedImage) {
          toast.error("Image upload failed");
          return;
        }

        imageUrl = uploadedImage;
      }

      // better auth update
      const result = await authClient.updateUser({
        name,
        image: imageUrl,
      });

      console.log(result);

      toast.success("Profile updated successfully 🎉");

      // refresh session
      await authClient.getSession({
        query: {
          disableCookieCache: true,
        },
      });

      setSelectedImage(null);
    } catch (error) {
      console.error(error);

      toast.error(
        error?.message || "Something went wrong"
      );
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8">

        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Update Profile
          </h1>

          <p className="text-sm text-slate-600 mt-2">
            Update your personal information
          </p>
        </div>

       
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

         
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Full Name
            </label>

            <Input
              required
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your full name"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "bg-white/40 border-white/40 hover:border-white/60 focus-within:!border-blue-500 rounded-xl h-12 backdrop-blur-sm transition-all",

                input:
                  "text-slate-900 placeholder:text-slate-500 text-sm",
              }}
            />
          </div>

         
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Profile Picture
            </label>

            <label
              htmlFor="profile-upload"
              className={`group flex flex-col items-center justify-center w-full border-2 border-dashed rounded-2xl transition-all duration-300 px-4 py-6 cursor-pointer ${
                imagePreview
                  ? "border-green-400 bg-green-50/30"
                  : "border-white/40 bg-white/20 hover:bg-white/30"
              }`}
            >
              {imagePreview ? (
                <div className="flex flex-col items-center">

                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {selectedImage && (
                    <p className="mt-3 text-xs font-semibold text-green-800">
                      ✓ {selectedImage.name}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="mt-3 text-xs px-3 py-1 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 font-semibold transition-all"
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    📷
                  </div>

                  <p className="text-sm font-semibold text-slate-800">
                    Upload Profile Picture
                  </p>

                  <p className="text-xs text-slate-600 mt-1">
                    PNG, JPG, JPEG (MAX 5MB)
                  </p>
                </div>
              )}

              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

         
          <Button
            type="submit"
            isLoading={isUpdating}
            isDisabled={isUpdating}
            className="w-full h-12 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg"
          >
            {isUpdating
              ? "Updating..."
              : "Update Profile"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;