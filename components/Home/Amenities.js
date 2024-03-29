import { useTranslations } from "next-intl";
import AmenitiesData from "@/data/HomeData";

const Amenities = () => {
  const tHome = useTranslations("Home");
  const { amenities } = AmenitiesData();

  return (
    <div className="container max-w-fit mx-auto mb-16 mt-16 lg:my-16 text-center">
      <h1 className="text-center text-black text-4xl font-bold mb-16">
        {tHome("amenitiesTitle")}
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center place-content-center ">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-full max-w-[140px]"
          >
            <div className="w-20 h-14">{item.icon}</div>
            <p className="text-base  text-center font-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
