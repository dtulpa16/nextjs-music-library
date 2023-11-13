"use client";
import React from "react";
import AddSongButton from "./AddSongButton";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import AuthDropdownButton from "./AuthDropdownButton";

export default function Navbar() {
  const { user, isLoaded } = useUser();
  return (
    <div className="flex justify-between items-center mb-8 xl:px-72 pb-4">
      <div>
        <h1 className="xl:text-3xl text-2xl font-bold text-gray-900">Music Library</h1>
      </div>
      <div className="flex gap-2 items-center">
        {isLoaded && user ? <AddSongButton /> : <AuthDropdownButton />}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
