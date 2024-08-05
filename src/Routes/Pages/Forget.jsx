import React, { useState,useRef } from "react";
import { Helmet } from "react-helmet";
import { SiShazam } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {forgetPassword, verfiyOtp} from "../../Redux-toolkit/Login"
import "react-toastify/dist/ReactToastify.css";
const Forget = () => {
  const dispatch = useDispatch()
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [password , setPassword] = useState("")
    const [otp , setOtp] = useState(null)
    const dialogRef = useRef(null);
    const [email , setEmail] = useState("")
    // console.log(dialogRef)

    //     try {
    // // user login

    //     if(user){
    //       // console.log('User signed in:', user);
    //       dispatch(loginUser({accessToken: user.accessToken, email: user.email}))
    //       toast.success('User Logged In', {
    //         position: "top-right",
    //         autoClose: 1000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",

    //         });
    //         navigate("/")
    //       // console.log(data)
    //     }
    //     } catch (error) {
    //       if (error.code === 'auth/email-already-in-use') {
    //                 toast.info('This email is already registered. Please use a different email or log in.', {
    //           position: "top-right",
    //           autoClose: 1000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",

    //           });

    //       }
    //       console.error('Error signing up:', error.code, error.message);

    //     }
  const openDialog = () => {
    setIsDialogOpen(true);
    dispatch(forgetPassword(email))
    // console.log("email")
  // call api to send otp   
    dialogRef.current.showModal();
  };

  const closeDialog = (e) => {
    dispatch(verfiyOtp(otp, password))
    e.preventDefault();
     
  };
  const getPassword= (e)=>{
    setPassword(e.target.value)
  }
  const getEmail = (e)=>{
    setEmail(e.target.value)
  }
  const getOtp = (e)=>{
    setOtp(e.target.value)
    sessionStorage.setItem("otp", otp)
  }
  return (
    <>
      <Helmet>
        <title>Forget</title>
      </Helmet>
      <dialog className="py-20 w-[70%] " ref={dialogRef}>
        <div className="flex justify-center flex-col ">
        <h1 className="flex text-xl font-medium text-slate-950 justify-center" >Verify OTP To Forget Your Password</h1>
        <form>
        <div className="my-4 flex justify-center flex-col ">
                    <input
                      autoFocus
                      placeholder="Enter your email"
                      className="text-black px-2 cursor-not-allowed border-2 border-blue-300 w-[90%] rounded-md py-3 md:w-[60%] mx-auto"
                      type="email"
                      value={email}
                      disabled
                    />
                    
                  </div>
                  <div className="my-4 flex justify-center flex-col ">
                    <input
                      autoFocus
                      placeholder="Enter your otp"
                      className="text-black px-2 cursor-text border-2 border-blue-300 w-[90%] rounded-md py-3 md:w-[60%] mx-auto"
                      type="text"
                      value={otp}
                      onChange={getOtp}
                      required
                    />
                    
                  </div>
                  <div className="my-4 flex justify-center flex-col ">
                    <input
                      autoFocus
                      placeholder="Enter your otp"
                      className="text-black px-2 cursor-text border-2 border-blue-300 w-[90%] rounded-md py-3 md:w-[60%] mx-auto"
                      type="password"
                      value={password}
                      onChange={getPassword}
                      required
                    />
                    
                  </div>
        <button className="py-2 flex justify-center bg-blue-500 mx-auto text-white w-[50%]  " onClick={closeDialog}>Verify OTP</button>
        </form>
        </div>
       
      </dialog>
      <section className="py-20">
        <div className="main ">
          <div className="flex justify-center w-[90%] ,md:w-[80%] mx-auto">
            <div className="my-4">
              <div className="justify-center text-4xl flex">
                <SiShazam /> Shazam
              </div>
              <div className="font-semibold justify-center flex text-2xl">
                <h2>Forget Password ? 🙄😐</h2>
              </div>
              <div className="font-medium justify-center flex text-xl opacity-70">
                <h3>Enter your email to set up new password</h3>
              </div>
              <div className="w-full flex flex-col justify-center ">
                <div>
                  <div className="my-4 flex justify-center flex-col ">
                    <input
                      autoFocus
                      placeholder="Enter your email"
                      className="text-black px-2 border-2 border-blue-300 w-[90%] rounded-md py-3 md:w-[60%] mx-auto"
                      type="email"
                      onChange={getEmail}
                      value={email}
                      required
                    />
                    {!email && (
                      <p className="text-red-500  flex justify-center ">
                        {"Please enter email"}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="justify-center text-5xl flex">🧑‍🤝‍🧑</div>
                    <div className=" md:w-[60%] text-xs md:text-xl mx-auto my-5 ">
                      <p className=" justify-center flex flex-col ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quam vitae velit dolorem perspiciatis, officiis
                        minus porro accusantium rerum repellat tenetur, dolor
                        dolorum deserunt libero voluptatem, quod quia debitis
                        earum nam. Lorem, ipsum dolor sit amet
                        <div className="flex gap-2 md:text-2xl text-xl  ">
                          <p className="flex">Don't have account ? 🤔</p>{" "}
                          <Link className="text-blue-800" to={"/signup"}>
                            Create New Account 😉
                          </Link>
                        </div>
                      </p>
                    </div>
                    <div className="flex w-[60%] mx-auto md:w-[40%] justify-center bg-red-600 rounded-lg ">
                      <button onClick={openDialog} className="py-2 text-2xl text-white font-medium ">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forget;
