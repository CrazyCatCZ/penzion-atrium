import HomeData from "@/data/HomeData";
import ImageEffect from "@/components/Other/ImageEffect";
import { MotionDiv } from "../Other/MotionComponents";

const ImageGrid = () => {
  const { images } = HomeData();

  return (
    <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 container lg:py-7">
      {images.map((item, index) => (
        <MotionDiv
          key={index}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.15, ease: "easeInOut" }}
        >
          <ImageEffect
            img={item.image.src}
            imgAlt={item.alt}
            divClass={"relative w-full h-full"}
            imgClass={"w-full h-50 rounded"}
            iconClass={"w-7 h-7 sm:w-10 sm:h-10"}
            iconDivClass={
              "absolute bottom-4 right-4 sm:bottom-9 sm:right-9 md:bottom-8 md:right-8 lg:bottom-7 lg:right-7"
            }
          />
        </MotionDiv>
      ))}
    </div>
  );
};

export default ImageGrid;
