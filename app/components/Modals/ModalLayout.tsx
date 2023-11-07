import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        aria-modal="true"
        role="dialog"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full m-4">
          {children}
        </div>
      </div>
    </>
  );
}
