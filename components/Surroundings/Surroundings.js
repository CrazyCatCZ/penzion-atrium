import SurroundingElement from "./SurroundingElement";
import SurroundingsData from "@/data/SurroundingsData";

const Surroundings = () => {
  const { title, surrondings } = SurroundingsData();

  return (
    <div className="container py-10 lg:py-10">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 lg:mb-10 text-center">
        {title}
      </h1>
      {surrondings.map((item, index) => (
        <SurroundingElement
          key={index}
          heading={item.heading}
          text={item.text}
          large_img={item.large_img.src}
          small_img={item.small_img.src}
          reverse={item.reverse}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Surroundings;
