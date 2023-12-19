"use client";
import { useState } from "react";

import { Button } from "@/Components/ui/button";
import Dropdown from "@/Components/Other/Dropdown";

import text from "@/public/text.json";
import { BookNowIcon } from "@/assets/icons";

const shortTermPeople = [1, 2, 3, 4, 5, 6, 7, 8];
const mediumTermPeople = [1, 2, 3, 4];
const longTermPeople = [1, 2, 3];

const options = [
  "Short-term stay (1-6 days)",
  "Medium-term stay (1 or more weeks; price per day)",
  "Long-term stay (1 or more months; price per month)",
];

const DropdownButton = ({
  divClass,
  buttonClass,
  setNumberOfPeople,
  setPeopleOptions,
}) => {
  const [dropdownValue, setDropdownValue] = useState(
    "Short-term stay (1-6 days)"
  );

  const onInputClick = (value) => {
    setDropdownValue(value);
    setNumberOfPeople(1);

    if (value == options[0]) {
      setPeopleOptions(shortTermPeople);
    }
    if (value == options[1]) {
      setPeopleOptions(mediumTermPeople);
    }
    if (value == options[2]) {
      setPeopleOptions(longTermPeople);
    }
  };

  return (
    <div className={divClass}>
      <Dropdown
        options={options}
        value={dropdownValue}
        onChange={(value) => onInputClick(value)}
      />
      <Button className={buttonClass}>
        <BookNowIcon className="w-4 h-4" />
        {text.nav_btn}
      </Button>
    </div>
  );
};

export default DropdownButton;