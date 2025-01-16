import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div className="md:max-w-screen-sm ">
    
        <h5 className='text-2xl font-semibold md:px-5 '>Looking For Driver...</h5>

        <div className='p-5 '> 
            
        <img className='h-full w-full  mx-auto mb-10 rounded md:h-25 md:w-52' src="https://i.pinimg.com/originals/22/e6/e7/22e6e7c1165a3457177862657f0282d8.gif"  />

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

        
        </div>




</div>
  )
}

export default LookingForDriver