import { useTranslations } from "next-intl";
import Gallery from "@/components/Gallery/Gallery";

const Page = () => {
  const tGallery = useTranslations("Gallery");

  return (
    <main className="lg:container container py-8 lg:py-10 ">
      <h1 className="md:text-5xl text-4xl font-bold mb-16 lg:mb-14 text-center">
        {tGallery("title")}
      </h1>
      <Gallery />
    </main>
  );
};

export default Page;
