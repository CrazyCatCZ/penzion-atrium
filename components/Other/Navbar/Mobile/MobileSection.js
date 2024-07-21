"use client";
import { useState } from "react";

// Mobile
import MainIcon from "../MainIcon";
import MobileLinks from "./MobileLinks";
import HamburgerMenu from "./HamburgerMenu";
import LanguageSwitcher from "../LanguageSwitcher";

import { AnimatePresence, motion } from "framer-motion";

const MobileSection = ({ tNavbar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MainIcon setIsMenuOpen={setIsMenuOpen} />

      {/* Hamburger menu icon for mobile */}
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen ? (
          <motion.div
            className={`absolute top-[111px] left-0 w-full h-[calc(100vh-111px)] bg-white z-50 lg:hidden flex flex-col gap-16 items-center justify-center`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div className="mx-auto w-full max-w-[302px] flex flex-col gap-3">
              <div className="space-y-4">
                {/* Language Dropdown */}
                <LanguageSwitcher
                  closeMenu={() => setIsMenuOpen(false)}
                  triggerClassName="mb-4 w-full border-0 border-transparent bg-neutral-50 rounded-lg"
                />

                {/* Button 
                <BookNow
                  closeMenu={() => setIsMenuOpen(false)}
                  bookNow={bookNow}
                  buttonClassName="bg-primary-gradient w-full text-base py-3 px-4 gap-2.5 flex items-center justify-center font-bold"
                />
              */}
              </div>
              <MobileLinks setIsMenuOpen={setIsMenuOpen} tNavbar={tNavbar} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MobileSection;
