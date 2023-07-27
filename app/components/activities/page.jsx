import React from "react";
// import Breathe from "./Breathe";
// import { NavLink } from "react-router-dom";
import yoga from "../../assets/meditation.jpg";
import breathe from "../../assets/breathing.jpg";
import walking from "../../assets/walking.jpg";
import gamesimage from "../../assets/gamesimage.jpg";
import Link from "next/link";
import Image from "next/image";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

const Activities = () => {
  return (
    <div>
      <div>
        <div>
          <div className="min-h-screen bg-[#F8FFE5] p-4">
            <div
              className={`${silkscreen.className} text-6xl text-center font-semibold my-5 text-[#06D6A0]`}
            >
              Select Categories
            </div>
            <div className="flex flex-wrap">
              <Link
                href="/components/breathe"
                className="shadow-2xl  border-2 w-[44vw] hover:bg-purple-200 border-[#06D6A0] text-[#06D6A0] p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-3xl font-semibold">
                  Deep Breathing
                </div>
                <Image
                  className="object-contain w-[30vw] mx-auto rounded-lg mb-5"
                  src={breathe}
                  alt=""
                />
              </Link>
              <Link
                href="/components/yoga"
                className="shadow-2xl  border-2 w-[44vw] hover:bg-purple-200 border-[#06D6A0] text-[#06D6A0] p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-3xl font-semibold">
                  Explore Yoga
                </div>
                <Image
                  className="object-contain w-[30vw] mx-auto rounded-lg mb-5"
                  src={yoga}
                  alt=""
                />
              </Link>
              <Link
                href="/components/morningexercises"
                className="shadow-2xl  border-2 w-[44vw] hover:bg-purple-200 border-[#06D6A0] text-[#06D6A0] p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-3xl font-semibold">
                  Nature Sounds and Podcasts
                </div>
                <img
                  className="object-contain w-[30vw] my-auto mx-auto rounded-lg mb-5"
                  //   src={walking}
                  src="https://static.vecteezy.com/system/resources/previews/002/697/218/non_2x/young-man-using-smartphone-listening-music-character-free-vector.jpg"
                  alt=""
                />
              </Link>
              <Link
                href="/components/games"
                className="shadow-2xl  border-2 w-[44vw] hover:bg-purple-200 border-[#06D6A0] text-[#06D6A0] p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-3xl font-semibold">
                  Relaxing Games
                </div>
                <Image
                  className="object-contain w-[30vw] mx-auto rounded-lg mb-5"
                  src={gamesimage}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
