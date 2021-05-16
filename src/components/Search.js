import React from "react";

export default function Search() {
  return (
    <>
      <div className="flex flex-row min-w-full justify-center p-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full border-2 text-sm border-gray-100 p-2 rounded-lg placeholder-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
        />
        <div className="w-auto p-2 mx-2 rounded-lg bg-gray-200 text-gray-700">
          <i className="fa fa-sliders" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
}
