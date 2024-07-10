import Image from "next/image";
import { CardImage } from "@/public/images/getImages";

import Title from "./Title";
import DatePick from "./DatePick";
import { MotionDiv } from "@/components/Other/MotionComponents";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row container py-6 lg:py-3">
      {/* Left side */}
      <div className=" w-full max-w-[580px] space-y-6 lg:space-y-8">
        <Title />
        <DatePick />
      </div>

      {/* Right side */}
      <MotionDiv
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.75, ease: "easeInOut" }}
        viewport={{ amount: 0 }}
        className="w-full max-w-[609px] p-4"
      >
        <Image
          src={CardImage}
          className="rounded-2xl h-full w-full "
          alt="City Image"
          priority={true}
        />
      </MotionDiv>
    </div>
  );
};

export default Hero;
