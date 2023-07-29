"use client";

import React, { useState } from "react";
import Task from "../Task";
import days10 from "../../assets/days10.jpg";
import days25 from "../../assets/days25.jpg";
import days50 from "../../assets/days50.jpg";
import days100 from "../../assets/days100.jpg";
import year1 from "../../assets/year1.jpg";
import Image from "next/image";
import Link from "next/link";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const [currentCoins, setCurrentCoins] = useState(100);
  return (
    <div>
      <div className="bg-gray-200 min-h-screen min-w-screen">
        <div className="flex flex-col md:flex-row pb-5">
          <div className="bg-white md:w-[35vw] text-xl p-5 rounded-xl m-5 mr-0">
            <div
              className={`${silkscreen.className} text-center text-5xl py-5`}
            >
              Profile
            </div>
            <div>
              <div className="font-semibold font-quicksand text-center mt-7">
                Badges Earned
              </div>
              <div className="flex my-2 justify-evenly">
                <Image className="w-[65px] rounded-lg" src={days10} alt="" />
                <Image className="w-[65px] rounded-lg" src={days25} alt="" />
                <Image className="w-[65px] rounded-lg" src={days50} alt="" />
                <Image className="w-[65px] rounded-lg" src={days100} alt="" />
                <Image className="w-[65px] rounded-lg" src={year1} alt="" />
              </div>
              <div>
                <div className="font-semibold font-quicksand mx-auto w-fit my-7 flex">
                  Your ZenCoins:
                  <div className="flex ml-3">
                    {currentCoins}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 fill-yellow-400 stroke-yellow-700 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/components/activities"
                    className="bg-yellow-400 hover:bg-yellow-500 font-quicksand transition ease-in rounded-xl font-semibold py-3 px-6"
                  >
                    Earn more ZenCoins
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-full">
            <div className="bg-white m-5 min-h-[247px] p-3 rounded-xl">
              <div className="font-semibold flex flex-row justify-between text-3xl mb-1">
                <div>Latest tasks</div>
              </div>
              <Task
                currentCoins={currentCoins}
                setCurrentCoins={setCurrentCoins}
              />
            </div>
            <div className="bg-white"></div>
            <div className="flex flex-wrap gap-6 mx-5">
              <div className="bg-white pt-1 pb-3 px-3 rounded-xl min-h-[247px] flex-1">
                <div className="font-semibold text-3xl my-3">
                  Recommended activities
                </div>
                <div className="flex flex-col gap-3 lg:flex-row items-center lg:justify-between">
                  <Link
                    href="/components/breathe"
                    className="w-[240px] h-[240px] cursor-pointer"
                  >
                    <img
                      className="rounded-xl object-cover h-full"
                      src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/09/4-7-8-breathing-1388104915-770x533-1-650x428.jpg"
                      alt=""
                    />
                  </Link>
                  <Link
                    href="/components/yoga"
                    className="w-[240px] h-[240px] cursor-pointer"
                  >
                    <img
                      className="rounded-xl"
                      src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-asian-sportsman-meditating-in-yoga-tree-position-smiling-sportsman-standing-in-yoga-tree-position-young-sporty-man-doing-yoga-on-the-mat-vector-flat-design-illustration-square-layout_H7xj66o8I-_thumb.jpg"
                      alt=""
                    />
                  </Link>
                  <Link
                    href="/components/morningexercises"
                    className="w-[240px] h-[240px] cursor-pointer"
                  >
                    <img
                      className="rounded-xl w-[240px] h-[240px]"
                      src="https://static.vecteezy.com/system/resources/thumbnails/004/209/032/small/woman-with-earphones-listening-music-vector.jpg"
                      alt=""
                    />
                  </Link>
                  <Link
                    href="/components/games"
                    className="w-[240px] h-[240px] cursor-pointer"
                  >
                    <img
                      className="rounded-xl w-[240px] h-[240px]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvZsqMuiAgD5S6gNaYoTovI2pWz5MmZkKVA&usqp=CAU"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <Link
                href="/components/therapist"
                className="bg-white pt-1 pb-3 px-3 rounded-xl"
              >
                <div className="font-semibold text-center text-3xl mt-3 mx-4">
                  Talk to an expert
                </div>
                <img
                  className="w-[240px] h-[240px] cursor-pointer mx-auto"
                  src="https://st3.depositphotos.com/12780408/17069/v/600/depositphotos_170693058-stock-illustration-chairman-of-the-board-cartoon.jpg"
                  alt=""
                />
              </Link>
              <Link
                href="/components/journal"
                className="bg-white w-[300px] pt-1 pb-3 px-3 rounded-xl"
              >
                <div className="font-semibold text-center text-3xl mt-3 mx-2">
                  Journal
                </div>
                <img
                  className="object-contain mx-auto mt-10 cursor-pointer"
                  src="https://st2.depositphotos.com/14746926/46389/v/450/depositphotos_463899526-stock-illustration-vector-illustration-note-book-headline.jpg"
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

export default page;
