import type { NextPage } from "next";
import CanvasContainer from "../components/CanvasContainer";

const Mind: NextPage = () => {
  return (
    <div className="fade-in h-full flex flex-col items-center justify-center px-12 xl:px-0">
      <CanvasContainer />
    </div>
  );
};

export default Mind;
