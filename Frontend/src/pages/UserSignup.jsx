import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});



  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      firstName,
      lastName,
      email,
      password,
    });

    setFirstName("")
    setLastName("")
    setEmail("");
    setPassword("");
  };
  // console.log(userData);

  
  return (
    <div className="md:max-w-screen-md mx-auto ">
      <div className="p-7 h-screen flex flex-col justify-center items-center md:max-w-screen-sm  mx-auto">
        <img
          className=" h-[25vw] md:h-[5vw] "
          src="https://i.pinimg.com/736x/61/fa/99/61fa998159a7b1840d68335736895198.jpg"
          alt=""
        />
        <h1 className="text-3xl  text-black font-bold mb-4 ">myCab</h1>
        <h1 className="text-[4vw] md:text-[1vw]  text-zinc-700 font-bold mb-12 uppercase">
          Make Your Every <br /> Destnation Closer
        </h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg w-1/2  font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Signup
          </button>
        </form>

        <p className="text-center ">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
    
        <p className="text-[10px] leading-tight mt-10">
          This site is protected by reCAPTCHA and the 
          <span className="underline text-gray-400"> Google Privacy Policy</span> and
          <span className="underline text-gray-400"> Terms of Service apply</span>.
        </p>
        </p>
      </div>
   
    </div>
  );
};

export default UserSignup;
