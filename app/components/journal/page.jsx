"use client";

import React, { useState } from "react";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

const Journal = () => {
  const [inputstate, setInputstate] = useState();

  return (
    <div>
      <div>
        <div className="min-h-[93vh] lg:p-10 p-2 bg-[url('https://www.memonotepad.com/img/wood.png')] card shadow-5-strong backdrop-blur-[30px]">
          <div className="min-h-[55vh] w-[60vw] bg-cover bg-no-repeat mx-auto rounded-xl p-2 bg-[url('https://img.freepik.com/premium-vector/paper-line_77417-515.jpg?size=626&ext=jpg')] card shadow-5-strong backdrop-blur-[30px]">
            <div className={`text-center text-4xl mt-[60px] ${silkscreen.className}`}>
              My Journal
            </div>
            <textarea
              type="text"
              onChange={(e) => {
                setInputstate(e.target.value);
              }}
              className="leading-8 font-Caveat p-5 px-28 pt-[32px] text-xl mt-10 ml-10 bg-transparent outline-none rounded-xl w-full min-h-[55vh] h-full"
            />
            {inputstate && (
              <div className="bg-[#06D6A0] text-xl ml-auto cursor-pointer hover:bg-green-700 transition ease-in w-fit text-white py-2 px-4 rounded-lg">
                Submit
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
