import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div  className="md:max-w-screen-sm ">

      <h5 className=' text-center w-[93%] absolute md:relative top-0 ' onClick={() => {
        props.setWaitingForDriver(false)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

      <div className='flex items-center justify-between p-5 w-full'>
        <div className='flex justify-start items-start'>
        <img className='h-20 rounded-full' src="https://avatars.githubusercontent.com/u/66481063?v=4" alt="driver-mag" />
        <img className='h-16 rounded-3xl' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="cdriver-car-img" />
        </div>

        <div className='text-right'>
          <h2 className='text-lg font-medium'>Sachin</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>DL26 AB 1234</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className='flex gap-2 justify-between flex-col items-center mb-10'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20 </h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WaitingForDriver