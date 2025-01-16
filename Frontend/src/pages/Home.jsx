import React, { useRef, useState } from 'react'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen , setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const [vechicleFound, setVechicleFound] = useState(false)
  const vechileFoundRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const waitingForDriverRef = useRef(null)


const submitHandler = (e)=>{
  e.preventDefault()
}

//panel gsap
useGSAP(function(){

  if(panelOpen){
    gsap.to(panelRef.current , {height: '70%'})
    gsap.to(panelCloseRef.current , {opacity: 1})

  }else{
    gsap.to(panelRef.current , {height: '0%'})
    gsap.to(panelCloseRef.current , {opacity: 0})
  }

},[panelOpen])


//vechiclepanel gsap
useGSAP(function(){

  if(vehiclePanel){
    gsap.to(vehiclePanelRef.current ,  {
      transform: 'translateY(0)'
  })

  }else{
    gsap.to(vehiclePanelRef.current , {
      transform: 'translateY(100%)'
  })
  }

},[vehiclePanel])


//confirmRide gsap
useGSAP(function(){

  if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current ,  {
      transform: 'translateY(0)'
  })

  }else{
    gsap.to(confirmRidePanelRef.current , {
      transform: 'translateY(100%)'
  })
  }

},[confirmRidePanel])


//LookingForDriver gsap
useGSAP(function(){

  if(vechicleFound){
    gsap.to(vechileFoundRef.current ,  {
      transform: 'translateY(0)'
  })

  }else{
    gsap.to(vechileFoundRef.current , {
      transform: 'translateY(50%)'
  })
  }

},[vechicleFound])



useGSAP(function () {
  if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [waitingForDriver])

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

          {/* LocationSearchPanel  */}
          {panelOpen && 
          <div ref={panelRef} className='bg-white h-0 p-4 w-full'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
          </div>
          }
         
         {/* VehiclePanel  */}
        {VehiclePanel && <div ref={vehiclePanelRef} className='fixed w-full  bg-white px-3 py-10 pt-12 bottom-0 z-10 '>
          <VehiclePanel  setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
         </div>}

        {confirmRidePanel &&   <div ref={confirmRidePanelRef} className='fixed w-full  bg-white px-3 py-10 pt-12 bottom-0 z-10 '>
          <ConfirmRide  setVechicleFound={setVechicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
         </div>

        }


       {vechicleFound && <div ref={vechileFoundRef} className='fixed w-full  bg-white px-3 py-10 pt-12 bottom-0 z-10 '>
          <LookingForDriver  setConfirmRidePanel={setConfirmRidePanel} setVechicleFound={setVechicleFound}/>
         </div>
         
        }


          <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
                <WaitingForDriver  setWaitingForDriver={setWaitingForDriver} />
          </div>

        
        </div>                

      </div>
    </div>
  )
}

export default Home