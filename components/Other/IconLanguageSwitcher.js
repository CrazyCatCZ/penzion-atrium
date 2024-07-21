"use client";
import Image from "next/image";
import { useState } from "react";
import { CzechFlag, USFlag } from "@/public/vectors/getIcons";

const IconLanguageSwitcher = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const switchLanguage = (language) => {
    // Implement your language switching logic here
    console.log(`Language switched to: ${language}`);
    // You may want to store the selected language in local storage or cookies
  };

  return (
    <div className="fixed bottom-40 left-4 z-40">
      {expanded && (
        <div className="mb-3 flex flex-col gap-2">
          <div
            className="w-11 h-11 cursor-pointer"
            onClick={() => switchLanguage("en")}
          >
            <Image
              src={USFlag}
              alt="English"
              className="rounded-full border-2 border-indigo-900 w-full h-full"
            />
          </div>
        </div>
      )}
      <div className="w-11 h-11 cursor-pointer" onClick={toggleExpanded}>
        <Image
          className="border-2 border-indigo-900 rounded-full w-full h-full"
          src={CzechFlag}
          alt="Italian"
        />
      </div>
    </div>
  );
};

export default IconLanguageSwitcher;
