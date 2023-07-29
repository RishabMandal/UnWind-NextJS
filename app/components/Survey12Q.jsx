import React, { useState } from "react";
// import Carousel from "react-material-ui-carousel";
// import { Navigate } from "react-router-dom";
// import ScoreCalc from "./ScoreCalc";
import Link from "next/link";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

const data = [
  "1. Having little interest or pleasure in doing things?",
  "2. Feeling down, depressed or hopeless?",
  "3. Trouble falling asleep, staying asleep, or sleeping too much?",
  "4. Feeling tired or having little energy?",
  "5. Feeling bad about yourself – or that you are a failure or have let yourself or your family down?",
  "6. Trouble concentrating on things, such as reading the newspaper or watching television?",
  "7. Feeling nervous, anxious or on edge?",
  "8. Not being able to stop or control worrying?",
  "9. Worrying too much about different things?",
  "10. Having trouble relaxing?",
  "11. Becoming easily annoyed or irritable? ",
  "12. Feeling afraid as if something awful might happen?",
];

const Caraousel = () => {
  const [sumDepression, setSumDepression] = useState(0);
  const [sumAnxeity, setSumAnxeity] = useState(0);
  const [quesCount, setQuesCount] = useState(1);
  const [hide, setHide] = useState(false);
  const handleClick = (e) => {
    let a = parseInt(e.target.textContent);

    quesCount >= 6
      ? setSumDepression(sumDepression + a)
      : setSumAnxeity(sumAnxeity + a);
    setQuesCount(quesCount + 1);
    if (quesCount === data.length) {
      setHide(true);
    }
  };
  return !hide ? (
    <>
      {/* <div className="bg-[#F8FFE5]"></div> */}
      <div
        className={`${silkscreen.className} text-center py-10 bg-[#F8FFE5] text-7xl`}
      >
        Daily Survey
      </div>
      <div className="p-5 bg-[#F8FFE5] text-5xl text-center pb-4 font-medium text-gray-900">
        Answer this short Survey to help us know how you feel.
      </div>
      <div className="bg-[#F8FFE5]">
        <div className=" p-4">
          <div className="h-[90vh] max-w-[1300px] text-center mx-auto">
            <div className="bg-[#06D6A0] border-2 flex flex-col justify-center shadow-2xl min-h-[470px] drop-shadow-lg p-5 md:p-10 rounded-xl">
              <div className="text-5xl font-serif font-medium py-3 mb-10">
                Question {quesCount}/{data.length}
              </div>
              <div className="font-serif text-gray-900 text-4xl font-medium mb-5">
                Over last 2 weeks, how often have you been bothered by...
              </div>
              <div className="font-serif text-gray-900 text-3xl font-medium mb-14">
                {data[quesCount - 1]}
              </div>
              <div className="text-white font-bold flex flex-wrap gap-6 justify-center">
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#45bc37] hover:scale-125 text-3xl transition ease-in py-4 px-7 rounded-lg"
                >
                  1
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#ccde0e] hover:scale-125 text-3xl transition ease-in py-4 px-7 rounded-lg"
                >
                  2
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#f7dd00] hover:scale-125 text-3xl transition ease-in py-4 px-7 rounded-lg"
                >
                  3
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#f97402] hover:scale-125 text-3xl transition ease-in py-4 px-7 rounded-lg"
                >
                  4
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#ea0b0b] hover:scale-125 text-3xl transition ease-in py-4 px-7 rounded-lg"
                >
                  5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="text-5xl min-h-[64vh] flex flex-col justify-center text-center font-bold">
        Thanks for your response
        <Link href="/components/profile">
          <div className="bg-green-600 w-fit text-white rounded-xl mx-auto p-5 m-5">
            Proceed
          </div>
        </Link>
      </div>
      {/* <div className="text-center text-xl font-semibold mb-10 mt-10">
        Your score(Depression): {sumDepression}
        <br />
        Your score(Anxeity): {sumAnxeity}
        <br />
        <ScoreCalc sum={sumDepression} />
        <br />
        <ScoreCalc sum={sumAnxeity} />
      </div> */}
      {/* <Navigate to="/profile" replace={true} /> */}
    </>
  );
};

export default Caraousel;
