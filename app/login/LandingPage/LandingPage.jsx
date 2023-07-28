"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import loginimage from "../../assets/LoginPageImage.jpg";
import logoimage from "../../assets/unwind-logo.png";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

const LandingPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const [loginPage, setLoginPage] = useState(false);

  // SignUp content
  const [logIn, setLogIn] = useState(true);

  // Username
  const usernameRef = useRef();
  const passwordRef = useRef();

  // Error
  //   const [error, setError] = useState(false);
  //   const handleEnter = (e) => {
  //     if (e.key === "Enter") {
  //       if (
  //         usernameArray.includes(usernameRef.current.value) &&
  //         passwordArray.includes(passwordRef.current.value)
  //       ) {
  //         setUsername(usernameRef.current.value);
  //         // setPassword(passwordRef.current.value);
  //         setLoginView(false);
  //       } else {
  //         setError(true);
  //       }
  //     }
  //   };

  return loginPage ? (
    <div>
      {/* LoginPage */}
      <div className="min-h-screen bg-[#F8FFE5] flex flex-col md:flex-row">
        <div className="w-screen p-5 md:p-20 min-h-screen md:w-[50vw] flex flex-col justify-center items-center">
          <Image
            className="shadow-2xl object-cover object-center rounded-xl w-[30vw]"
            src={loginimage}
            alt=""
          />
        </div>
        <div className="w-screen p-5 md:p-20 min-h-screen md:w-[50vw] flex flex-col justify-center items-center">
          <div className="">
            <div className="text-center mx-auto">
              <Image
                src={logoimage}
                className="h-[25px] object-contain mx-auto mb-6 my-auto transition ease-in hover:scale-110"
                alt=""
              />
              <h4
                className={`mt-1 text-6xl font-bold mb-3 pb-1 ${silkscreen.className}`}
              >
                Welcome to Unwind
              </h4>
            </div>
            <form action="http://localhost:5000/login" method="post">
              <p className="text-3xl mt-10 mb-3 text-center">
                Please login to your account
              </p>
              <div className="form-outline my-8 mx-auto w-fit">
                <input
                  type="text"
                  name="username"
                  id="form2Example11"
                  className="form-control drop-shadow-md mx-auto text-2xl md:w-[30vw] p-3 rounded-lg border-2 hover:border-[#06D6A0] text-[#06D6A0] "
                  placeholder="Username"
                  ref={usernameRef}
                  // onChange={(e) => {
                  //   setnameDetails(e.target.value);
                  // }}
                  onClick={() => {
                    navigator.vibrate(50);
                  }}
                />
              </div>

              <div className="form-outline mb-8 mx-auto w-fit">
                <input
                  type="password"
                  name="password"
                  id="form2Example22"
                  className="form-control drop-shadow-md mx-auto text-2xl md:w-[30vw] p-3 rounded-lg border-2 hover:border-[#06D6A0] text-[#06D6A0]"
                  placeholder="Master Password"
                  ref={passwordRef}
                  onKeyDown={(e) => handleEnter(e)}
                  // onChange={(e) => {
                  //   setpasswordDetails(e.target.value);
                  // }}
                  onClick={() => {
                    navigator.vibrate(50);
                  }}
                />
              </div>

              {/* Error */}
              {/* {error && (
                <div className="text-red-600 text-center font-semibold">
                  Error, wrong details!
                </div>
              )} */}

              {logIn ? (
                <div className="text-center pt-1 my-5 pb-1">
                  <div
                    className="block cursor-pointer w-fit text-xl font-semibold drop-shadow-xl fa-lg hover:bg-purple-800 transition ease-in bg-[#06D6A0] px-4 py-2 rounded-lg text-white mx-auto mb-3"
                    // type="submit"
                    onClick={() => {
                      setIsLoggedIn(!isLoggedIn);
                    }}
                  >
                    Log In
                  </div>
                </div>
              ) : (
                <div className="text-center pt-1 my-5 pb-1">
                  <button
                    className="block text-xl font-semibold drop-shadow-xl fa-lg hover:bg-purple-800 transition ease-in bg-[#06D6A0] px-4 py-2 rounded-lg text-white mx-auto mb-3"
                    type="button"
                    onClick={() => {}}
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {logIn && (
                <div className="flex space-x-2 text-xl justify-center items-center pb-4">
                  <p className="my-auto">Don't have an account?</p>
                  <div
                    onClick={() => {
                      setLogIn(false);
                    }}
                    className="hover:underline text-red-500 cursor-pointer"
                  >
                    Create New
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      {/* LandingPage */}
      <div className="min-h-screen bg-[#F8FFE5] flex flex-col md:flex-row">
        <div className="w-screen p-5 md:p-20 min-h-screen md:w-[50vw] flex flex-col justify-center items-center">
          <div className={`${silkscreen.className} text-8xl mb-4`}>UNWIND</div>
          <div className="text-7xl mb-8 text-center font-semibold text-gray-900 font-Noto Serif">
            Improving Mental Health
          </div>
          <button
            onClick={() => setLoginPage(true)}
            className="text-white bg-[#06D6A0] text-2xl hover:bg-gray-700 transition ease-in rounded-full py-3 px-9 font-semibold"
          >
            Get started
          </button>
        </div>
        <div className="w-screen p-5 md:p-20 min-h-screen md:w-[50vw] flex flex-col justify-center items-center">
          <img
            className="shadow-2xl object-cover object-center rounded-xl w-[50vw]"
            alt="hero"
            // src={image}
            src="https://imgs.search.brave.com/8AQMBmc9e8R9nvgvTM-HgO5gSE4XHJtuigq7HZ13_V4/rs:fit:811:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/R1VoVGZ4dElnVnJB/UXhyX0Y2QjVBSGFF/ViZwaWQ9QXBp"
          />
        </div>
      </div>
      <div
        className={`${silkscreen.className} bg-[#06D6A0] text-7xl pt-10 md:pt-20 text-center px-10`}
      >
        Explore Our Features
      </div>
      <div className="min-h-screen bg-[#06D6A0] flex flex-col md:flex-row">
        <div className="w-screen p-5 md:p-20 min-h-screen md:w-[50vw] flex flex-col justify-center items-center">
          <div className={`${silkscreen.className} text-8xl mb-4`}>UNWIND</div>
          <div className="text-7xl mb-8 font-semibold text-gray-900 font-Noto Serif">
            Improving Mental Health
          </div>
          <button className="text-white bg-[#06D6A0] text-xl hover:bg-gray-700 transition ease-in rounded-full py-3 px-9 font-semibold">
            Get started
          </button>
        </div>
        <div className="w-screen p-5 md:p-20 min-h-screen md:w-[50vw] flex flex-col justify-center items-center">
          <img
            className="shadow-2xl object-cover object-center rounded-xl w-[50vw]"
            alt="hero"
            // src={image}
            src="https://imgs.search.brave.com/8AQMBmc9e8R9nvgvTM-HgO5gSE4XHJtuigq7HZ13_V4/rs:fit:811:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/R1VoVGZ4dElnVnJB/UXhyX0Y2QjVBSGFF/ViZwaWQ9QXBp"
          />
        </div>
      </div>
      <div className="min-h-screen bg-[#06D6A0] flex flex-col md:flex-row">
        <div className="w-screen p-5 md:p-20 min-h-screen md:w-[50vw] flex flex-col justify-center items-center">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            //   exit={{
            //     x: "-100%",
            //     opacity: 0,
            //     transition: { duration: 0, delay: 0 },
            //   }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="shadow-2xl p-24 lg:p-40 mb-8 font-semibold text-3xl bg-[#F8FFE5] rounded-full"
          >
            <p className="mb-4"> All around the world,</p>
            <div className="text-7xl">
              280 Million
              <br /> people
            </div>
            <br />
            suffer from depression.
          </motion.div>
        </div>
        <div className="w-screen p-5 md:p-20 min-h-screen md:w-[50vw] flex flex-col justify-center items-center">
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="font-Roboto h-fit px-10 lg:px-20 mb-8 font-semibold text-3xl rounded-full">
              Most people don't reach out for help.
              <br />
              <a className="text-5xl font-quicksand block mt-4 text-[#1B9AAA]">
                We are glad that you did!
              </a>
            </div>
            <img
              className="mx-auto shadow-2xl rounded-xl"
              src="https://imgs.search.brave.com/n3zhhH5MnIeUvp3LqMq59PIYFWwuC5Ve14LTAzrWEbg/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9tZW50YWwtaGVh/bHRoLXByb2JsZW1z/LWZsYXQtdmVjdG9y/LWNvbmNlcHQtdmVj/dG9yLWlkMTE4MTU4/MTc1Mj9rPTYmbT0x/MTgxNTgxNzUyJnM9/MTcwNjY3YSZ3PTAm/aD1JM1VqNkJ3azBa/Tm5lU0l2a25Fa0dh/SkRCZUtnbXdBLWNr/YTQxYjdpdFI0PQ"
              alt=""
            />
          </motion.div>
        </div>
      </div>
      {/* // FAQ */}
      <div
        className={`${silkscreen.className} bg-[#06D6A0] text-7xl pt-10 md:pt-20 text-center px-10`}
      >
        Frequently Asked Questions
      </div>
      <div className="bg-[#06D6A0] flex flex-col md:flex-row">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="w-[screen] p-5 md:p-20 min-h-[90vh] md:w-[50vw] flex flex-col justify-center items-center"
        >
          <div className="text-4xl font-bold">
            Why is mental health important?
          </div>
          <div className="text-2xl mt-5 md:w-[600px]">
            Mental health plays a crucial role in our overall well-being,
            helping us cope with stress, maintain healthy relationships, and
            live our best lives.
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="w-screen p-5 md:p-20 min-h-[90vh] md:w-[50vw] flex flex-col justify-center items-center"
        >
          <div className="text-4xl font-bold">
            How can I improve my mental health?
          </div>
          <div className="text-2xl mt-5 md:w-[600px]">
            By practicing self-care, staying connected with others, engaging in
            physical activity, getting enough sleep, and seeking professional
            help when needed.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
