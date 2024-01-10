"use client";
import { useState, useContext } from "react";
import { useTranslations } from "next-intl";

import PriceOfRooms from "./PriceOfRooms";
import NumberOfPeople from "../NumberOfPeople";
import DropdownButton from "../DropdownButton";
import RoomImages from "../RoomImages";
import AmountOfDays from "../AmountOfDays";

import { AppContext } from "@/app/[locale]/providers";

const ResponsiveFloor = () => {
  const t = useTranslations("Accommodation");

  let {
    people: numberOfPeople,
    setPeople: setNumberOfPeople,
    stayType,
    setStayType,
    peopleOptions,
    setPeopleOptions,
  } = useContext(AppContext);

  const [touristPrice, setTouristPrice] = useState(500);
  const [standardPrice, setStandardPrice] = useState(600);

  const [numberOfDays, setNumberOfDays] = useState("1-2");
  const [daysOptions, setDaysOptions] = useState(["1-2", "3"]); // 3 and more days
  const [pricePer, setPricePer] = useState(t("pricePerDayShortTerm"));

  return (
    <div id="choose-room" className="block lg:hidden mb-4 mx-4">
      {/* Heading and Subtext */}
      <div className="mb-4">
        <h2 className="text-2xl text-center font-bold mb-6 mt-4">
          {t("chooseRoomTitle")}
        </h2>
        <p className="text-gray-500 text-center">{t("groundFloor")}</p>
        <p className="mt-1 text-gray-500 text-center">{t("firstFloor")}</p>
      </div>

      <div className="mt-10 flex-col items-center bg-floor rounded">
        <div className="flex justify-between mb-4">
          {/* Element 1 */}

          <NumberOfPeople
            type="mobile"
            stayType={stayType}
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            peopleOptions={peopleOptions}
            setNumberOfDays={setNumberOfDays}
            containerClass={"flex flex-col"}
            pClass={"md:text-2xl text-base font-bold text-indigo-900"}
            divClass={"flex items-center mt-1"}
          />

          {/* Element 2 */}
          <PriceOfRooms
            stayType={stayType}
            touristPrice={touristPrice}
            standardPrice={standardPrice}
            pricePer={pricePer}
          />
        </div>
        {/* If stay type is group disable the image and show amount of days input */}
        {stayType === "group" ? (
          <AmountOfDays
            numberOfDays={numberOfDays}
            setNumberOfDays={setNumberOfDays}
            daysOptions={daysOptions}
            containerClass={"flex flex-col mb-6"}
            pClass={"md:text-2xl text-base font-bold text-indigo-900"}
            divClass={"flex items-center gap-1"}
          />
        ) : (
          <RoomImages
            numberOfPeople={numberOfPeople}
            divClass={
              "h-[250px] min-[500px]:h-[400px] sm:h-[500px] md:h-[600px] relative group"
            }
          />
        )}

        {/* Element 5 */}
        <DropdownButton
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
          peopleOptions={peopleOptions}
          setPeopleOptions={setPeopleOptions}
          stayType={stayType}
          setStayType={setStayType}
          setTouristPrice={setTouristPrice}
          setStandardPrice={setStandardPrice}
          setPricePer={setPricePer}
          numberOfDays={numberOfDays}
          setNumberOfDays={setNumberOfDays}
          divClass={"flex flex-col gap-2 mt-4 w-full"}
          buttonClass={
            "bg-primary-gradient text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold w-full"
          }
        />
      </div>
    </div>
  );
};

export default ResponsiveFloor;
