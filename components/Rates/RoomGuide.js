"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/UI/button.jsx";

const RoomGuide = () => {
  const tRates = useTranslations("Rates");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTableSize = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8">
      {isExpanded && (
        <div className="w-full md:w-[50%] flex flex-col items-center m-auto relative">
          <div className="w-full overflow-x-auto shadow-md sm:rounded-lg mb-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    Tourist
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">{tRates("bathroom")}</td>
                  <td className="px-6 py-4">{tRates("shared")}</td>
                  <td className="px-6 py-4">{tRates("private")}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">TV</td>
                  <td className="px-6 py-4">{tRates("shared")}</td>
                  <td className="px-6 py-4">{tRates("private")}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">WC</td>
                  <td className="px-6 py-4">{tRates("shared")}</td>
                  <td className="px-6 py-4">{tRates("private")}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">{tRates("fridge")}</td>
                  <td className="px-6 py-4">{tRates("shared")}</td>
                  <td className="px-6 py-4">{tRates("shared")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Button
        onClick={toggleTableSize}
        className="m-auto bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold"
      >
        {isExpanded ? tRates("close") : tRates("buttonExplanation")}
      </Button>
    </div>
  );
};

export default RoomGuide;
