"use client";

import { useRouter } from "@/navigation";
import ImageEffect from "@/Components/Other/ImageEffect";

const SurroundingElement = ({
  reverse,
  small_img,
  large_img,
  heading,
  text,
  link,
}) => {
  const router = useRouter();
  const flexDirectionClass = reverse
    ? "flex-col lg:flex-row-reverse"
    : " lg:flex-row flex-col";

  return (
    <div
      className={` flex ${flexDirectionClass} gap-4 lg:gap-12 items-center justify-between py-6 lg:py-4`}
    >
      <ImageEffect
        img={large_img}
        imgAlt={heading}
        divClass={"relative w-full lg:max-w-[660px] lg:h-[310px]"}
        imgClass={"w-full h-full object-cover rounded-[10px]"}
        iconClass={"w-12 h-12"}
      />

      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
          {heading}
        </h2>
        <p className="text-gray-600 text-base">{text}</p>
      </div>
    </div>
  );
};

export default SurroundingElement;
