import { useTranslations } from "next-intl";

import {
  TrutnovCentrumImage,
  KrkonoseImage,
  AdrspachImage,
  KuksImage,
  ZooImage,
  DolceImage,
} from "@/public/images/getImages";

const SurrondingsData = () => {
  const tSurr = useTranslations("Surroundings");
  const title = tSurr("title");

  const surrondings = [
    {
      heading: tSurr("trutnovTitle"),
      text: tSurr("trutnovDescription"),
      large_img: TrutnovCentrumImage,
      reverse: false,
      link: "https://www.ictrutnov.cz/je-na-draka",
    },
    {
      heading: tSurr("krkonoseTitle"),
      text: tSurr("krkonoseDescription"),
      large_img: KrkonoseImage,
      reverse: true,
      link: "https://www.krnap.cz",
    },
    {
      heading: tSurr("adrspachTitle"),
      text: tSurr("adrspachDescription"),
      large_img: AdrspachImage,
      reverse: false,
      link: "https://www.adrspasskeskaly.cz",
    },
    {
      heading: tSurr("kuksTitle"),
      text: tSurr("kuksDescription"),
      large_img: KuksImage,
      reverse: true,
      link: "https://www.hospital-kuks.cz",
    },
    {
      heading: tSurr("zooTitle"),
      text: tSurr("zooDescription"),
      large_img: ZooImage,
      reverse: false,
      link: "https://safaripark.cz",
    },
    {
      heading: tSurr("dolceTitle"),
      text: tSurr("dolceDescription"),
      large_img: DolceImage,
      reverse: true,
      link: "https://www.camp-dolce.cz",
    },
  ];

  return { title, surrondings };
};

export default SurrondingsData;
