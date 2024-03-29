import { useTranslations } from "next-intl";

import Rooms from "./Rooms";
import Meal from "./Meal";
import Others from "./Others";

const BorderedBox = ({ headerText, section }) => {
  return (
    <div
      className={`border h-full w-full lg:max-w-[384px] rounded-lg shadow overflow-hidden`}
    >
      <div className="bg-primary-gradient w-full text-white text-center p-2">
        <h2 className="text-lg font-bold">{headerText}</h2>
      </div>
      <div>{section}</div>
    </div>
  );
};

const Tables = () => {
  const tAcc = useTranslations("Accommodation");

  return (
    <div className="mt-10 container w-full">
      <h1 className="md:text-5xl text-4xl font-bold mb-14 text-center">
        {tAcc("title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-fit place-content-center place-items-center gap-6 lg:gap-8 w-full mx-auto md:[&>*:nth-child(3)]:col-span-2 lg:[&>*:nth-child(3)]:col-span-1">
        <BorderedBox headerText={tAcc("roomTypeTitle")} section={<Rooms />} />
        <BorderedBox
          headerText={tAcc("mealTitle")}
          section={<Meal mealText={tAcc("mealDescription")} />}
        />
        <BorderedBox
          headerText={tAcc("otherServicesTitle")}
          section={<Others />}
        />
      </div>
    </div>
  );
};

export default Tables;
