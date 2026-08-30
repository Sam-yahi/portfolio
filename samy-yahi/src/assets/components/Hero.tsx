

import { useEffect, useState } from "react";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "A passionate web developer specializing in building exceptional digital experiences.";

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(fullText.slice(0, index));

      if (index >= fullText.length) {
        window.clearInterval(timer);
      }
    }, 75);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center h-screen gap-6">
        <span className="  font-medium text-green-500 bg-gray-800 px-4 py-2 rounded-full text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 inline-block animate-pulse">

            </div>
          Available for a junior developer position
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Samy Yahi
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 min-h-[3.5rem]">
          <span>{typedText}</span>
          <span className="inline-block w-[2px] h-6 bg-green-500 animate-pulse align-middle ml-1" />
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
            Projects
          </a>
          <a href="#projects" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition duration-300">
            About Me
          </a>
          <a href="#projects" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition duration-300">
            Competences
          </a>
          <a href="#projects" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition duration-300">
            Contact
          </a>
        </div>
        <h5>
          Let's Dive In!
        </h5>
        <span className="animate-bounce text-green-500 text-2xl">↓</span>
      </div>
    </>
  );
};
