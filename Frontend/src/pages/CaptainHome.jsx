import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "transalteY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "transalteY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <h1 className="text-black absolute font-bold text-2xl left-5 top-5 ">
          myCab
        </h1>
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>


    {/* Captain Details  */}
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

    {/* RidePopUp  */}
      {ridePopUpPanel && (
        <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-10 pt-12">
          <RidePopUp setRidePopupPanel={setRidePopupPanel} />
        </div>
      )}


    </div>
  );
};

export default CaptainHome;
