import { useTranslations } from "next-intl";

import BookNow from "./BookNow";
import LanguageSwitcher from "./LanguageSwitcher";

// Desktop
import DesktopLinks from "./Desktop/DesktopLinks";

// Mobile
import MobileSection from "./Mobile/MobileSection";

const Navbar = () => {
  const tNavbar = useTranslations("Navbar");

  return (
    <header className="container flex items-center justify-between pb-6 pt-8">
      {/* Left side with icon */}

      <MobileSection
        tNavbar={{
          home: tNavbar("home"),
          rates: tNavbar("rates"),
          accommodation: tNavbar("accommodation"),
          services: tNavbar("services"),
          surroundings: tNavbar("surroundings"),
          gallery: tNavbar("gallery"),
          contact: tNavbar("contact"),
          bookNow: tNavbar("bookNow"),
        }}
      />

      <div className="hidden lg:flex items-center gap-8 ">
        {/*  Links */}
        <DesktopLinks
          tNavbar={{
            home: tNavbar("home"),
            rates: tNavbar("rates"),
            accommodation: tNavbar("accommodation"),
            services: tNavbar("services"),
            surroundings: tNavbar("surroundings"),
            gallery: tNavbar("gallery"),
            contact: tNavbar("contact"),
            bookNow: tNavbar("bookNow"),
          }}
        />

        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <LanguageSwitcher triggerClassName="w-[101px] border-0 border-transparent bg-neutral-50 rounded-lg" />

          {/* Button */}
          <BookNow
            bookNow={tNavbar("bookNow")}
            buttonClassName="bg-primary-gradient text-base py-3 px-4 gap-2.5 hidden lg:flex items-center justify-center font-bold"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
