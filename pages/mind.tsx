import type { NextPage } from "next";
import { useEffect, useState } from "react";
import CanvasContainer from "../components/CanvasContainer";

const Mind: NextPage = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="fade-in h-full flex flex-col items-center justify-center px-12 xl:px-0">
      <CanvasContainer isMobile={isMobile} />
    </div>
  );
};

export default Mind;
