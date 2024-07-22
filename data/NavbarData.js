import Image from "next/image";

import { USFlag, CzechFlag } from "@/public/vectors/getIcons";

const NavbarData = () => {
  /*
  const languagesMobile = [
    { code: "cs", name: "CZ", flag: <CzechRIcon className="w-6" /> },
    { code: "en", name: "EN", flag: <USFlagIcon className="w-6" /> },
  ];
  */

  const languagesDesktop = [
    {
      code: "cs",
      name: "CZ",
      icon: CzechFlag,
      flag: (
        <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden">
          <Image className="w-full h-full" src={CzechFlag} alt="US Flag" />
        </div>
      ),
    },
    {
      code: "en",
      name: "EN",
      icon: USFlag,
      flag: (
        <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden">
          <Image className="w-full h-full" src={USFlag} alt="US Flag" />
        </div>
      ),
    },
  ];

  return { languagesDesktop };
};

export default NavbarData;
