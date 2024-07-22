"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { useLocale } from "next-intl";
import NavbarData from "@/data/NavbarData";
import { useRouter, usePathname } from "@/navigation";

const IconLanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const [hidden, setHidden] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { languagesDesktop } = NavbarData();

  const currentLanguage = languagesDesktop.filter(
    (language) => language.code === locale
  );
  const otherLanguages = languagesDesktop.filter(
    (language) => language.code !== locale
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const switchLanguage = (language) => {
    router.push(pathName, { locale: language });
  };

  return (
    <div
      className={`fixed bottom-40 left-4 z-40 transition-opacity duration-300 ${
        hidden ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      {expanded && (
        <>
          {otherLanguages.map((language, i) => (
            <div key={i} className="mb-3 flex flex-col gap-2">
              <div
                className="w-11 h-11 cursor-pointer"
                onClick={() => switchLanguage(language.code)}
              >
                <Image
                  src={language.icon}
                  alt={language.name}
                  className="rounded-full border-2 border-indigo-900 w-full h-full"
                />
              </div>
            </div>
          ))}
        </>
      )}
      <div className="w-11 h-11 cursor-pointer" onClick={toggleExpanded}>
        <Image
          className="border-2 border-indigo-900 rounded-full w-full h-full"
          src={currentLanguage[0].icon}
          alt={currentLanguage[0].name}
        />
      </div>
    </div>
  );
};

export default IconLanguageSwitcher;
