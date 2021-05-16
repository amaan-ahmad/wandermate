import React from "react";

export default function Navigation() {
  return (
    <>
      <div className="flex flex-row min-w-full justify-evenly p-4">
        <div className="flex-col flex-1 w-12 p-2 mx-2 rounded-lg bg-red-100 text-red-600 text-center">
          <i className="fa fa-plane" aria-hidden="true"></i>
          <br />
          <span className="text-xs"> Flights </span>
        </div>
        <div className="flex-col flex-1 w-12 p-2 mx-2 rounded-lg bg-blue-100 text-blue-600 text-center shadow-xl">
          <i className="fa fa-bed" aria-hidden="true"></i>
          <br />
          <span className="text-xs"> Hotels </span>
        </div>
        <div className="flex-col flex-1 w-12 p-2 mx-2 rounded-lg bg-purple-100 text-purple-600 text-center">
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          <br />
          <span className="text-xs flex-1"> Snacks </span>
        </div>
        <div className="flex-col flex-1 w-12 p-2 mx-2 rounded-lg bg-yellow-100 text-yellow-600 text-center">
          <i className="fa fa-globe" aria-hidden="true"></i>
          <br />
          <span className="text-xs"> Travel </span>
        </div>
      </div>
    </>
  );
}
