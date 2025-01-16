import React from 'react'

const VehiclePanel = (props) => {

    // console.log(props);
    
  return (
    <div className="md:max-w-screen-sm ">
       <h5 onClick={() => {props.setVehiclePanel(false)}} className=' w-full  text-center absolute md:relative top-2 mb-5 ' ><i className="text-2xl text-gray-700 ri-arrow-down-wide-line"></i></h5>
       <h5 className='text-2xl font-semibold md:px-5 '>Choose your Vehicle</h5>
        
        <div className='flex flex-col '>
   
        <div onClick={()=> props.setConfirmRidePanel(true)} className='flex justify-between md:justify-evenly active:border  active:border-black items-center mt-5 mb-5 cursor-pointer'>
            <div> <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" /></div>
            <div className='ml-2 w-1/2'>
               <div className='flex '> <h1 className='font-medium text-base mr-2'>myCabGo</h1><span><i className="ri-user-3-fill"></i>4</span></div>
                <p className='text-sm font-medium'>2 min away</p>
                <p className='text-xs text-gray-600 font-noraml '>Affordable, compact rides</p>
            </div>
            <div className='text-lg font-semibold  mr-10'>₹193.60</div>
        </div>

        <div onClick={ ()=>props.setConfirmRidePanel(true)} className='flex justify-between md:justify-evenly active:border   active:border-black items-center mt-5 mb-5 cursor-pointer'>
            <div> <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"  alt="" /></div>
            <div className='ml-2 w-1/2'>
               <div className='flex '> <h1 className='font-medium text-base mr-2'>myAuto</h1><span><i className="ri-user-3-fill"></i>3</span></div>
                <p className='text-sm font-medium'>3 min away</p>
                <p className='text-xs text-gray-600 font-noraml '>Affordable, auto rides</p>
            </div>
            <div className='text-lg font-semibold  mr-10'>₹65.00</div>
        </div>

        <div onClick={ ()=> props.setConfirmRidePanel(true)} className='flex justify-between md:justify-evenly active:border   active:border-black items-center mt-5 mb-8 md:mb-2 cursor-pointer'>
            <div> <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" /></div>
            <div className='ml-2 w-1/2'>
               <div className='flex '> <h1 className='font-medium text-base mr-2'>myBike</h1><span><i className="ri-user-3-fill"></i>1</span></div>
                <p className='text-sm font-medium'>5 min away</p>
                <p className='text-xs text-gray-600 font-noraml '>Affordable, bike rides</p>
            </div>
            <div className='text-lg font-semibold mr-10'>₹40.10</div>
        </div>
        
        </div>
       
        </div>
  )
}

export default VehiclePanel