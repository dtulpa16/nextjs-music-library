import Link from "next/link";
import React from "react";

export default function CloseIcon() {
  return (
    <Link
      href={"/"}
      className="absolute top-4 md:right-8 right-4 text-black font-semibold leading-none md:text-3xl text-2xl"
      aria-label="Close"
    >
      &times;
    </Link>
  );
}
