import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="md:max-w-screen-sm mx-auto">
    <div className="h-screen w-full bg-cover bg-center md:rounded-md  flex justify-between flex-col   mx-auto  bg-[url(https://i.pinimg.com/originals/fb/14/3b/fb143b1e6aba0cd635591f661702fca4.gif)]">
      {/* Header */}
      <h1 className="text-3xl ml-4 md:ml-8 text-white  text-right font-bold mt-2">myCab</h1>

      {/* Content */}
      <div className="bg-white rounded-lg  shadow-lg py-4 px-4 md:py-4 md:px-5 w-full md:w-[90%] md:my-2  mx-auto ">
        <h2 className="text-2xl md:text-[30px] font-semibold text-gray-800">
          Get Started with myCab
        </h2>
        <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 hover:bg-gray-800 transition duration-300">
          Continue
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Start;