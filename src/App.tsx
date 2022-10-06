import React, { useEffect, useState } from "react";

import CanvasContainer from "./components/CanvasContainer";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isWelcomePageVisible, setIsWelcomePageVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="app fade-in h-full flex flex-col items-center justify-center px-12 xl:px-0">
      {isWelcomePageVisible ? (
        <WelcomePage
          isVisible={isWelcomePageVisible}
          setIsVisible={setIsWelcomePageVisible}
        />
      ) : (
        <CanvasContainer isMobile={isMobile} />
      )}
    </div>
  );
}

export default App;
