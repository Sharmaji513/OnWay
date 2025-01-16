import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const UserLogin = () => {
  const [email, setEmail] = useState("Rishikr@xyz.com");
  const [password, setPassword] = useState("Rishi@12345678");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async(e) => {

    
    e.preventDefault();

    try {

      const userData = {
        email: email,
        password: password,
      };
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, userData);
      console.log(response);
  
      if (response.status === 200) {
        const data = response.data;
        dispatch(addUser(data.user));
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
  
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please check your credentials and try again.");
    }
  };
  
 
    
  return (
    <div className="md:max-w-screen-md mx-auto ">
      <div className="p-7 h-screen flex flex-col justify-center items-center">
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            Login
          </button>
        </form>

        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
        <div>
          <Link
            to="/signup"
            className="bg-yellow-400  mt-20 flex items-center justify-center text-black font-semibold mb-5 rounded-lg px-4 py-2 w-full text-sm placeholder:text-base"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
