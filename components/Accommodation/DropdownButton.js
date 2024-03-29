"use client";
import { useEffect, useContext } from "react";

import { useTranslations } from "next-intl";

import Dropdown from "@/components/Other/Dropdown";
import { AppContext } from "@/app/[locale]/providers";

import { calculatePrice } from "@/utils/calculatePrice";

const shortTermPeople = [1, 2, 3, 4, 5, 6, 7, 8];
const mediumTermPeople = [1, 2, 3, 4];
const longTermPeople = [1, 2, 3];
const groupPeople = ["10-19", "20+"];

const DropdownButton = ({
  divClass,
  numberOfPeople,
  setNumberOfPeople,
  peopleOptions,
  setPeopleOptions,
  numberOfDays,
  setNumberOfDays,
  stayType,
  setStayType,
  setTouristPrice,
  setStandardPrice,
  setPricePer,
}) => {
  let { stay: dropdownValue, setStay: setDropdownValue } =
    useContext(AppContext);

  const tAcc = useTranslations("Accommodation");
  const options = [
    tAcc("shortTermStay"),
    tAcc("mediumTermStay"),
    tAcc("longTermStay"),
    tAcc("groupStay"),
  ];

  useEffect(() => {
    // Calculate the final price
    if (stayType !== undefined && numberOfPeople !== undefined) {
      setTouristPrice(
        calculatePrice(stayType, numberOfPeople, "TOURIST", numberOfDays)
      );
      setStandardPrice(
        calculatePrice(stayType, numberOfPeople, "STANDARD", numberOfDays)
      );
    }
  }, [
    peopleOptions,
    numberOfPeople,
    stayType,
    setStayType,
    setTouristPrice,
    setStandardPrice,
    numberOfDays,
  ]);

  const onInputClick = (value) => {
    setDropdownValue(value);
    setNumberOfPeople(1);

    if (value == options[0]) {
      setStayType("short");
      setPricePer(tAcc("pricePerDayShortTerm"));
      setPeopleOptions(shortTermPeople);
    }
    if (value == options[1]) {
      setStayType("medium");
      setPricePer(tAcc("pricePerDayMediumTerm"));
      setPeopleOptions(mediumTermPeople);
    }
    if (value == options[2]) {
      setStayType("long");
      setPricePer(tAcc("pricePerMonthLongTerm"));
      setPeopleOptions(longTermPeople);
    }
    if (value == options[3]) {
      setNumberOfDays("1");
      setNumberOfPeople("10-19");
      setStayType("group");
      setPricePer(tAcc("pricePerPerson"));
      setPeopleOptions(groupPeople);
    }
  };

  return (
    <div className={divClass}>
      <Dropdown
        options={options}
        value={
          dropdownValue === undefined ? tAcc("shortTermStay") : dropdownValue
        }
        onChange={(value) => onInputClick(value)}
        divClass={"relative"}
      />
    </div>
  );
};

export default DropdownButton;
