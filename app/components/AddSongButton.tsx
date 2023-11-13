import Link from "next/link";
import React from "react";

export default function AddSongButton() {
  return (
    <Link
      href={"/?add=true"}
      className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white xl:font-bold font-semibold xl:py-2 py-1 xl:px-6 px-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
    >
      Add Song
    </Link>
  );
}
