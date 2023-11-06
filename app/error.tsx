"use client"
import React from "react";

export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden ">
      <div className="px-6 py-4 rounded shadow-lg">
        <div className="mb-2 text-xl font-bold">500 - Server error 😭</div>
      </div>
    </div>
  );
}
