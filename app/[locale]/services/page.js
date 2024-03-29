import SkiComponent from "@/components/Services/Ski/Ski";
import Sports from "@/components/Services/Sports/Sports";
import MealsComponent from "@/components/Services/Meals/Meals";
import { MotionH1, MotionDiv } from "@/components/Other/MotionComponents";

import { useTranslations } from "next-intl";

const Page = () => {
  const tServices = useTranslations("Services");

  return (
    <main className="container py-8 lg:py-10">
      <h1 className="md:text-5xl text-4xl font-bold mb-16 lg:mb-14 text-center">
        {tServices("title")}
      </h1>
      <div className="space-y-12">
        <MealsComponent />
        <Sports />
        <SkiComponent />
      </div>
    </main>
  );
};
export default Page;
