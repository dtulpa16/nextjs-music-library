import React from "react";
import { neobrutalism } from "@clerk/themes";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen lg:-mt-32 -mt-24 w-11/12 mx-auto">
      <SignUp
        appearance={{
          baseTheme: neobrutalism,
          elements: {
            formButtonPrimary:
              "inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out",
            footerActionLink: "text-black",
          },
        }}
      />
    </div>
  );
}
