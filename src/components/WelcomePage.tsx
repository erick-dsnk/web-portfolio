import React from "react";

type WelcomePageProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function WelcomePage(props: WelcomePageProps): JSX.Element {
  const { isVisible, setIsVisible } = props;

  return (
    <div
      className={
        isVisible
          ? "welcome-page-container flex flex-col justify-center items-center welcome-page text-center"
          : "hidden"
      }
    >
      <h1 className="title text-4xl md:text-8xl text-gray-300">
        Welcome to my mind... <br />
        Are you ready to take a trip through it?
      </h1>

      <div
        onClick={() => setIsVisible(!isVisible)}
        className="text-lg md:text-2xl flex flex-col justify-center items-center h-16 w-32 md:h-24 md:w-48 mt-12 border-2 border-gray-300 rounded-lg p-3 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-gray-900"
      >
        Dive in...
      </div>
    </div>
  );
}
