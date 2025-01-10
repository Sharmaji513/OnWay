import React from "react";

const LocationSearchPanel = () => {
  const locations = [
    "Block D, Sector 7, Rohini, Delhi, 110085",
    "Pocket 9, Sector 21, Rohini, Delhi, 110086",
    "House No. 123, Pocket 16, Sector 24, Rohini, Delhi, 110085",
    "Flat No. 45, Block A, Sector 14, Rohini, Delhi, 110085",
    "House No. 123, Pocket 16, Sector 24, Rohini, Delhi, 110085",
    "Flat No. 45, Block A, Sector 14, Rohini, Delhi, 110085",
    
  ];
  return (
    // this is sample data
    <div className="p-2  md:max-w-screen-sm flex flex-col mt-5 ">
      {locations.map((item) => (
        <div className="flex items-center justify-between cursor-pointer">
            <div><i class="ri-map-pin-fill"></i></div>
        <div className=" w-full p-5 border-b-2 border-zinc-200 shadow-sm font-semibold  ">{item}    
             
        </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
