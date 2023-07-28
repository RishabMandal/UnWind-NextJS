"use client";

import React, { useContext } from "react";
// import { usernameContext, passwordContext } from "../../App";
import logoimage from "../assets/unwind-logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = ({ setLoginView }) => {
  // const { username, setUsername } = useContext(usernameContext);
  return (
    <div className="z-20 sticky top-0 bg-[#fff4e1]">
      <div className="flex justify-between px-4 py-6">
        <Link className="font-bold" href="/">
          <Image
            src={logoimage}
            className="h-[25px] my-auto object-contain w-fit transition ease-in hover:scale-110"
            alt=""
          />
        </Link>
        <div>
          <Link
            href="/components/profile"
            className="mx-4 hover:scale-110 transition ease-in hover:text-[#06D6A0] text-2xl duration-200 font-semibold"
          >
            Profile
            {/* Hello, <a className="duration-200 font-semibold">{username ? username : "User"}</a> */}
          </Link>
          <Link
            href="/components/community"
            className="mx-4 hover:scale-110 transition ease-in hover:text-[#06D6A0] text-2xl duration-200 font-semibold"
          >
            Community
          </Link>
          <Link
            href="/components/therapist"
            className="mx-4 hover:scale-110 transition ease-in hover:text-[#06D6A0] text-2xl duration-200 font-semibold"
          >
            Get Help
          </Link>
          <Link
            href="/components/activities"
            className="mx-4 hover:scale-110 transition ease-in hover:text-[#06D6A0] text-2xl duration-200 font-semibold"
          >
            Activities
          </Link>
          <Link
            href="/components/about"
            className="mx-4 hover:scale-110 transition ease-in hover:text-[#06D6A0] text-2xl duration-200 font-semibold"
          >
            About Us
          </Link>
        </div>
        <div>
          <Link
            href="/components/contact"
            className="mx-2 hover:text-[#06D6A0] text-2xl duration-200 font-semibold"
            >
            Contact Us
          </Link>
          <Link
            href="/"
            // onClick={() => {
            //   window.location.reload();
            // }}
            className="mx-2 text-white text-2xl font-semibold py-1 px-3 rounded-lg bg-[#06D6A0] hover:bg-green-500 duration-200"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
