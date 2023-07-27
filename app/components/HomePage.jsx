"use client";

import React, { useState } from "react";
import Survey12Q from "./Survey12Q";

const HomePage = () => {
  const [survey12Qs, setSurvey12Qs] = useState(true);
  return <div>{survey12Qs ? <Survey12Q /> : <></>}</div>;
};

export default HomePage;
