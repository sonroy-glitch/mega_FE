import React,{useState  } from "react";
import googleIcon from "../assets/google.png";
import { GoogleLogin } from "@react-oauth/google";
import {CircleLoader} from 'react-spinners' 
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const SignIn = () => {
  const [loginLoader,setLoginLoader]=useState(false)
  const navigate=useNavigate()
  const handleGoogleLogin = () => {
    
  };
  async function loginGoogle(res) {
    setLoginLoader(true)

    const data = jwtDecode(res.credential);
    console.log(data)
    const response=await axios.post('https://mega-be.vercel.app/signin',{
      email:data.email,
      name:data.name,
      
    })
    console.log(response)
    // let response={status:200}
    localStorage.setItem('user',JSON.stringify({email:data.email,name:data.name}))
    if(response.status==202){
      
      setLoginLoader(false)

      navigate("/store")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
      <div className="w-full max-w-md bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_50px_-10px_rgba(234,179,8,0.1)] p-10 md:p-14 text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        <h1 className="text-xl text-neutral-400 mb-2 tracking-wide">
          Welcome to
        </h1>

        <h1 className="text-4xl md:text-5xl  text-white mb-6 leading-tight">
          MegaHertz <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Robotics
          </span>
        </h1>

        <p className="text-sm text-neutral-500 mb-12 font-mono uppercase tracking-wider">
          Sign in to access store & products
        </p>

        <button
          onClick={handleGoogleLogin}
          className="group w-full flex items-center justify-center gap-4 bg-white text-black rounded-xl py-4 px-6 font-bold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] cursor-pointer"
        >
          {/* <img src={googleIcon} alt="Google" className="h-6 w-6" />  */}
          {
            loginLoader?
            <CircleLoader size={20}/>:
              <GoogleLogin
                onSuccess={(res) => loginGoogle(res)}
                variant="outline"
                type="button"
                className="w-full"
              />
          }
          
        </button>

        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-[10px] text-neutral-600 uppercase tracking-widest">
            By continuing, you agree to our{" "}
            <span className="text-neutral-400 hover:text-yellow-500 cursor-pointer transition-colors">
              Terms
            </span>{" "}
            &{" "}
            <span className="text-neutral-400 hover:text-yellow-500 cursor-pointer transition-colors">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
