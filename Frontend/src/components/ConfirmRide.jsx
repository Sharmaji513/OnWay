import React from 'react'

const ConfirmRide = (props) => {
    console.log(props);
    
  return (
<div className="md:max-w-screen-sm ">

<div onClick={() => {props.setConfirmRidePanel(false)}} className=' w-full p-1  text-center absolute md:relative top-0 ' ><i className="text-2xl text-gray-700 ri-arrow-down-wide-line"></i></div>
<h5 className='text-2xl font-semibold md:px-5 '>Confirm your Ride</h5>

    <div className='w-full p-5 md:h-1/2'> 
        
       <img className='h-20 md:h-20 mx-auto mt-5 mb-10' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />

        <div className="w-full flex items-center mb-10  cursor-pointer ">
            <div><i class="ri-map-pin-fill"></i></div>

            <div className='flex flex-col items-start w-full mx-5 border-b-2 border-zinc-200'>
                <div className="text-lg  font-bold  ">   Pocket 9, Sector 21</div>
                <div className=" text-lg text-gray-400  shadow-sm font-semibold  ">  Rohini, Delhi, 110086 </div>
            </div>
        </div>

        <div className="flex items-center border-b-2 border-zinc-200  mb-10 justify-between cursor-pointer">
            <div><i className="ri-map-pin-user-fill"></i></div>

            <div className='flex flex-col items-start w-full mx-5'>
                <div className="text-lg  font-bold  ">   A1/59-A </div>
                <div className=" text-lg text-gray-400  font-semibold  "> jankapuri Delhi, 110086 </div>
            </div>
        </div>

        <div className="flex items-center   mb-5 justify-between cursor-pointer">
            <div><i className="ri-currency-line"></i></div>

            <div className='flex flex-col items-start border-b-2 border-zinc-200 w-full mx-5'>
                <div className="text-lg  font-bold  "> ₹193.20 </div>
                <div className=" text-lg text-gray-400 border-b-2 font-semibold  ">Cash Cash </div>
            </div>
        </div>

        <button onClick={()=>{ 
            props.setVechicleFound(true)
            props.setConfirmRidePanel(false)

        }}  className='w-full mt-5 bg-green-600  text-white font-semibold p-2 rounded-lg'>Confirm</button>
    </div>




</div>

    
  )
}

export default ConfirmRide