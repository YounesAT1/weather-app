import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="inline-block h-[40px] w-[40px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}
