import React, { useRef, useState } from 'react'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen , setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)



const submitHandler = (e)=>{
  e.preventDefault()
}


useGSAP(function(){

  if(panelOpen){
    gsap.to(panelRef.current , {height: '70%'})
    gsap.to(panelCloseRef.current , {opacity: 1})

  }else{
    gsap.to(panelRef.current , {height: '0%'})
    gsap.to(panelCloseRef.current , {opacity: 0})
  }

},[panelOpen])

// console.log(panelOpen);

  return (
    <div className="md:max-w-screen-sm mx-auto md:overflow-hidden md:border-1 shadow-lg">
      <div className='h-screen w-screen '>
        <h1 className='text-black absolute font-bold text-2xl left-5 top-5 '>myCab</h1>
        <div className='w-screen h-screen md:max-w-screen-sm '>
        <img className='h-full w-full object-cover ' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>


        <div className='flex flex-col  justify-end h-screen w-full absolute top-0 md:max-w-screen-sm mx-auto'>

          <div className=' h-[30%] w-full  bg-white  md:h-[35%] '>

          {panelOpen  &&  <p ref={panelCloseRef} onClick={()=>  setPanelOpen(false)} className='text-3xl text-center'><i className="ri-arrow-down-wide-line"></i></p>}

            <h4 className='text-3xl relative left-5 top-5 font-bold'>Find a trip</h4>
            <div className='relative  mt-10   mx-auto w-[90%]'> 
              <form onSubmit={(e) => {
                submitHandler(e)
              }}>
                <div className='line  absolute  bg-black h-20 w-1 left-5 top-[25%]'></div>
                <input
                onClick={()=> setPanelOpen(true)}
                value={pickup}
                onChange={((e) => setPickup(e.target.value))}
                className='bg-[#eee] px-12 py-4 w-full text-lg mb-5 mt-2' type="text" placeholder='Add a pick-up location' />
                <input 
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className='bg-[#eee] px-12 py-4 w-full text-lg' type="text" placeholder='Enter Your destination' />
              </form>

          </div>
          </div>             

          {panelOpen && <div ref={panelRef} className=' bg-white h-0 p-4 w-full'>
              <LocationSearchPanel/>
          </div>
          }

        
        </div>                

      </div>
    </div>
  )
}

export default Home