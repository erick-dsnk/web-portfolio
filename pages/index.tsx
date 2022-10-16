import type { NextPage } from "next";
import { useEffect, useState } from "react";

import CanvasContainer from "../components/CanvasContainer";
import WelcomePage from "../components/WelcomePage";

const Home: NextPage = () => {
  const [ isMobile, setIsMobile ] = useState(true);
  const [ isWelcomePageVisible, setIsWelcomePageVisible ] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="home fade-in h-full flex flex-col items-center justify-center px-12 xl:px-0">
      {
        (isWelcomePageVisible) ? (
          <WelcomePage isVisible={isWelcomePageVisible} setIsVisible={setIsWelcomePageVisible} />
        ) : (
          <CanvasContainer isMobile={isMobile} />
        )
      }
    </div>
  );
};

export default Home;
