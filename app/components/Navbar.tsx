import React from "react";
import AddSongButton from "./AddSongButton";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-8 xl:px-72">
      <h1 className="text-3xl font-bold text-gray-900">Music Library</h1>
      <UserButton afterSignOutUrl="/"/>
      <AddSongButton />
    </div>
  );
}
