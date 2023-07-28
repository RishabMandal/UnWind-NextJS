"use client";

// import Image from "next/image";
import { useState } from "react";
import LandingPage from "./login/LandingPage/LandingPage";
import HomePage from "./components/HomePage";
import Footer from "./Footer";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <HomePage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <LandingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Footer />
        </>
      )}
    </div>
  );
}
