"use client"

import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
// import { useGlobalAudioPlayer } from 'react-use-audio-player';
import audio1 from "../../assets/musics/audio1.mp3";
import audio2 from "../../assets/musics/audio2.mp3";
import audio3 from "../../assets/musics/audio3.mp3";
import audio4 from "../../assets/musics/audio4.mp3";
import podcast1 from "../../assets/musics/podcast1.m4a";
import podcast2 from "../../assets/musics/podcast2.m4a";
import podcast3 from "../../assets/musics/podcast4.m4a";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

const MorningExercises = () => {
  const [music, setMusic] = useState("audio1");
  const [podcast, setPodcast] = useState("podcast1");
  // const { load } = useGlobalAudioPlayer();
  const handleClick = (e) => {
    setMusic(e.target.id);
  };
  const handlePod = (e) => {
    setPodcast(e.target.id);
  };
  return (
    <div>
      <div className="min-h-screen p-4 bg-[#F8FFE5]">
        <div className={`${silkscreen.className} text-6xl text-[#06D6A0] pb-4 text-center`}>Morning Exercise</div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full bg-[#06D6A0] rounded-2xl m-2 pb-10 text-white p-3">
            <div className="text-5xl text-center font-semibold my-5 text-white">
              Nature Sounds
            </div>
            <img
              className="w-[20vw] h-[20vw] rounded-xl mx-auto"
              src="https://thumbs.dreamstime.com/b/landscape-mountains-mist-forest-sunrise-double-exposure-panoramic-view-guitar-shape-background-vector-illustration-107840809.jpg"
              alt=""
            />
            <div className="mt-5">
              <div id="audio1" className="text-center text-2xl mb-1 cursor-pointer font-semibold" onClick={handleClick}>
                Audio 1
              </div>
              <div id="audio2" className="text-center text-2xl mb-1 cursor-pointer font-semibold" onClick={handleClick}>
                Audio 2
              </div>
              <div id="audio3" className="text-center text-2xl mb-1 cursor-pointer font-semibold" onClick={handleClick}>
                Audio 3
              </div>
              <div id="audio4" className="text-center text-2xl mb-1 cursor-pointer font-semibold" onClick={handleClick}>
                Audio 4
              </div>
              <ReactAudioPlayer
                className="mx-auto mt-[20px]"
                src={
                  music === "audio1"
                    ? audio1
                    : music === "audio2"
                    ? audio2
                    : music === "audio3"
                    ? audio3
                    : audio4
                }
                controls
              />
            </div>
          </div>
          <div className="w-full bg-[#06D6A0] rounded-2xl m-2 pb-10 text-white p-3">
            <div className="text-5xl text-center font-semibold my-5 text-white">
              Podcasts
            </div>
            <img
              className="w-[20vw] h-[20vw] rounded-xl mx-auto"
              src="https://freedesignfile.com/upload/2020/07/Podcast-vector.jpg"
              alt=""
            />
            <div className="mt-5">
              <div id="podcast1" className="text-center text-2xl mb-1 cursor-pointer font-semibold" onClick={handlePod}>
                Podcast 1
              </div>
              <div id="podcast2" className="text-center text-2xl mb-1 cursor-pointer font-semibold" onClick={handlePod}>
                Podcast 2
              </div>
              <div id="podcast3" className="text-center text-2xl mb-10 cursor-pointer font-semibold" onClick={handlePod}>
                Podcast 3
              </div>
              <ReactAudioPlayer
                className="mx-auto mt-[20px]"
                src={
                  podcast === "podcast1"
                    ? podcast1
                    : podcast === "podcast2"
                    ? podcast2
                    : podcast3
                }
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorningExercises;
