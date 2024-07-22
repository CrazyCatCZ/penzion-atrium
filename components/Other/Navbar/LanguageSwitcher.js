"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select.jsx";
import NavbarData from "@/data/NavbarData";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";

const LanguageSwitcher = ({ closeMenu, triggerClassName }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();
  const { languagesDesktop } = NavbarData();

  const handleLanguageChange = (value) => {
    console.log(value);
    try {
      closeMenu();
    } catch {
      console.log("menu closed");
    }
    router.push(pathName, { locale: value });
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={locale}>
      <SelectTrigger className={triggerClassName}>
        <SelectValue
          className="w-full flex items-center gap-2 font-bold"
          placeholder="Select Language"
        />
      </SelectTrigger>
      <SelectContent>
        {languagesDesktop.map((language, i) => (
          <SelectItem
            className="flex z-50 items-center pl-2"
            key={i}
            value={language.code}
          >
            <div className="flex items-center font-bold text-neutral-700 gap-2">
              {language.flag}
              {language.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
