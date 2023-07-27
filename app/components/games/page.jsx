import React from "react";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

const Games = () => {
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
            <div className="flex flex-col md:flex-row">
              <div
                className="border-4 w-full hover:bg-green-100 border-[#06D6A0] text-[#06D6A0] drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-3xl font-semibold">
                  Word Finder
                </div>
                <iframe
                  className="rounded-xl"
                  title="woed-finder"
                  seamless="seamless"
                  allowtransparency="true"
                  allowfullscreen="true"
                  style={{ width: "100%", height: "550px", border: "Opx" }}
                  frameborder="0"
                  src="https://zv1y2i8p.play.gamezop.com/g/r1K-J3TQ5Ar"
                ></iframe>
              </div>
              <div
                // to="/yoga"
                className="border-4 w-full hover:bg-green-100 border-[#06D6A0] text-[#06D6A0] drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-3xl font-semibold">
                  Candy Fiesta
                </div>
                <iframe
                  className="rounded-xl"
                  title="candy"
                  seamless="seamless"
                  allowtransparency="true"
                  allowfullscreen="true"
                  frameborder="0"
                  style={{ width: "100%", height: "550px", border: "Opx" }}
                  src="https://zv1y2i8p.play.gamezop.com/g/r1zG1h6m90H"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div
                // to="/morningexercises"
                className="border-4 w-full hover:bg-green-100 border-[#06D6A0] text-[#06D6A0] drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-3xl font-semibold">
                  Fruit Chop
                </div>
                <iframe
                  className="rounded-xl"
                  title="fruit-ninja"
                  seamless="seamless"
                  allowtransparency="true"
                  allowfullscreen="true"
                  frameborder="0"
                  style={{
                    width: "100%",
                    height: "550px",
                    border: "Opx",
                    background: "#FFFFFF",
                  }}
                  src="https://zv1y2i8p.play.gamezop.com/g/rkWfy2pXq0r"
                ></iframe>
              </div>
              <div
                // to="/games"
                className="border-4 w-full hover:bg-green-100 border-[#06D6A0] text-[#06D6A0] drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-3xl font-semibold">
                  Tower Twist
                </div>
                <iframe
                  className="rounded-xl"
                  title="tower-twist"
                  seamless="seamless"
                  allowtransparency="true"
                  allowfullscreen="true"
                  frameborder="0"
                  style={{ width: "100%", height: "550px", border: "Opx" }}
                  src="https://zv1y2i8p.play.gamezop.com/g/HJT46GkPcy7"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
