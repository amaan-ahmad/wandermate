import React from "react";

export default function Popular() {
  return (
    <>
      <div className="flex flex-row min-w-full justify-between p-4">
        <span className="text-xl font-bold text-gray-800">Popular</span>
        <span className="text-xs text-gray-400"> See all</span>
      </div>
      <div className="flex flex-row w-full p-4 pr-0 justify-evenly flex-nowrap">
        <div className="relative w-5/12 mr-2 h-48 inline-block">
          <img
            src="https://images.unsplash.com/photo-1576424298745-7467a0aa532b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            className="flex w-full h-full rounded-lg"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 rounded-lg"></div>
          <div className="absolute top-0 right-0 text-xs p-2">
            <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
            <span className="text-white font-thin">4.5</span>
          </div>
          <div className="absolute bottom-0 left-0 p-2 flex flex-col">
            <span className="text-white font-bold">City Hotel</span>
            <span className="text-white font-thin text-xs">
              <i
                className="fa fa-map-marker text-blue-400"
                aria-hidden="true"
              ></i>
              CP, New delhi
            </span>
          </div>
        </div>
        <div className="relative w-1/2 h-48 mr-2 inline-block">
          <img
            src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
            className="flex w-full h-full rounded-lg"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 rounded-lg shadow-2xl"></div>
          <div className="absolute top-0 right-0 text-xs p-2">
            <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
            <span className="text-white font-thin">4.5</span>
          </div>
          <div className="absolute bottom-0 left-0 p-2 flex flex-col">
            <span className="text-white font-bold">Lalit Hotel</span>
            <span className="text-white font-thin text-xs">
              <i
                className="fa fa-map-marker text-blue-400"
                aria-hidden="true"
              ></i>
              CP, New delhi
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
