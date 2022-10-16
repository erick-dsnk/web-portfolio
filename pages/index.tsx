import type { NextPage } from "next";

import CanvasContainer from "../components/CanvasContainer";

const Home: NextPage = () => {
  return (
    <div className="home fade-in h-full flex flex-col items-center justify-center px-12 xl:px-0">
      <CanvasContainer isMobile={true} />
    </div>
  );
};

export default Home;
