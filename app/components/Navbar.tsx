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
      <h1 className="text-3xl font-bold text-gray-900">Music Library</h1>
      <UserButton afterSignOutUrl="/" />
      {isLoaded && user ? <AddSongButton /> : <AuthDropdownButton />}
    </div>
  );
}
