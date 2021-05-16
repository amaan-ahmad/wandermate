import React from "react";

export default function Recommended() {
  return (
    <>
      <div className="flex flex-col min-h-full bg-white md:mx-32 lg:mx-64 xl:mx-96">
        <div className="flex flex-1 p-4">
          <span className="text-xl font-bold text-gray-800"> Recommended </span>
        </div>
        <div className="flex flex-col min-w-full justify-evenly p-4">
          <div className="flex flex-row rounded-lg w-full my-2">
            <img
              src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
              className="w-1/3 rounded-l-lg"
            />
            <div className="flex flex-col bg-gray-50 w-full rounded-r-lg p-2">
              <span className="font-semibold">City Resort</span>
              <div className="flex flex-row text-xs py-1">
                <i
                  className="fa fa-star text-yellow-400 mr-1"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star text-yellow-400 mr-1"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star text-yellow-400 mr-1"
                  aria-hidden="true"
                ></i>
              </div>
              <span className="text-blue-500 font-thin text-sm py-2">
                <i
                  className="fa fa-map-marker text-blue-500"
                  aria-hidden="true"
                ></i>
                New delhi
              </span>
            </div>
          </div>
          <div className="flex flex-row rounded-lg w-full my-2 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
              className="w-1/3 rounded-l-lg"
            />
            <div className="flex flex-col bg-gray-50 w-full rounded-r-lg p-2">
              <span className="font-semibold">Crown Plaze</span>
              <div className="flex flex-row text-xs py-1">
                <i
                  className="fa fa-star text-yellow-400 mr-1"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star text-yellow-400 mr-1"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star text-yellow-400 mr-1"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star text-yellow-400 mr-1"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star text-yellow-400 mr-1"
                  aria-hidden="true"
                ></i>
              </div>
              <span className="text-blue-500 font-thin text-sm py-2">
                <i
                  className="fa fa-map-marker text-blue-500"
                  aria-hidden="true"
                ></i>
                New delhi
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
