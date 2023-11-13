"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthDropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const router = useRouter();

  return (
    <div className="relative z-50">
      <button
        onClick={toggleDropdown}
        className="bg-transparent border-none cursor-pointer p-2"
      >
        {/* User Icon */}
        <div className="w-10 h-10 bg-indigo-400 hover:bg-indigo-500 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">👤</span>
        </div>
      </button>
      {isOpen && (
        <div className="w-[100px] absolute top-full right-0 bg-white shadow-md rounded-lg mt-1">
          <button
            onClick={() => router.push("/sign-in")}
            className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
          >
            Sign in
          </button>
          <button
            onClick={() => router.push("/sign-up")}
            className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
          >
            Sign up
          </button>
        </div>
      )}
    </div>
  );
}
