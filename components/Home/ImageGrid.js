import HomeData from "@/data/HomeData";
import ImageEffect from "@/components/Other/ImageEffect";
import { MotionDiv } from "../Other/MotionComponents";

const ImageGrid = () => {
  const { images } = HomeData();

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container lg:py-7">
      {images.map((item, index) => (
        <MotionDiv
          key={index}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.15, ease: "easeInOut" }}
        >
          <div className="relative w-full h-40 md:h-48 lg:h-56">
            <ImageEffect
              img={item.image.src}
              imgAlt={item.alt}
              divClass={"relative w-full h-full"}
              imgClass={"object-cover w-full h-full rounded"}
              iconClass={"w-7 h-7 sm:w-10 sm:h-10"}
              iconDivClass={"absolute bottom-4 right-4"}
            />
          </div>
        </MotionDiv>
      ))}
    </div>
  );
};

export default ImageGrid;
