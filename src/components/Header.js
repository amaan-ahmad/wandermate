import React from "react";

export default function Header() {
  return (
    <>
      <div className="p-4 flex flex-row min-w-screen justify-between">
        <div className="justify-center font-pacifico text-lg">WanderMate</div>
        <span className="text-gray-400 font-light text-xs leading-8">
          <i className="fa fa-map-marker text-blue-500" aria-hidden="true"></i>
          New delhi, India
        </span>
      </div>
    </>
  );
}
