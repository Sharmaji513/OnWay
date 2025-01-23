import React from 'react'
const CaptainDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-between p-5'>
                    <div className='flex items-center justify-start gap-3'>
                        <img className='h-12 w-12 rounded-full object-cover' src="https://media.istockphoto.com/id/1413761196/photo/happy-mature-man-driving-car.jpg?s=612x612&w=0&k=20&c=cHortB6t2CuIicx-UzOiq2jyfXufja9vETTN9dmThG4=" alt="" />
                        <h4 className='text-lg font-medium'>Aditiya Bhojane</h4>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>₹295.20</h4>
                        <p className='text-sm text-gray-600'>Earned</p>
                    </div>
                </div>
                <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>HOURS ONLINE</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                        <h5 className='text-lg font-medium'>30 KM</h5>
                        <p className='text-sm text-gray-600'>TOTAL DISTANCE</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                        <h5 className='text-lg font-medium'>₹5000.75</h5>
                        <p className='text-sm text-gray-600'>TOTAL EARNINGS</p>
                    </div>
                </div>
    </div>
  )
}
export default CaptainDetails