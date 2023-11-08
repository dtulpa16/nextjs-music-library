import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center transition-opacity duration-150 ease-out"
        aria-modal="true"
        role="dialog"
        style={{ opacity: 0, animation: "fadeIn 200ms ease-out forwards" }}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full m-4 transition-all duration-150 ease-out"
          style={{
            transform: "scale(0.9)",
            opacity: 0,
            animation: "scaleIn 200ms ease-out forwards",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
