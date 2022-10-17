import type { NextPage } from "next";
import { useEffect, useState } from "react";

import CanvasContainer from "../components/CanvasContainer";
import WelcomePage from "../components/WelcomePage";

const Home: NextPage = () => {
  return (
    <div className="fade-in h-full flex flex-col items-center justify-center px-12 xl:px-0">
      <WelcomePage />
    </div>
  );
};

export default Home;
