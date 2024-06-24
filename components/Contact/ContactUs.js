import { useTranslations } from "next-intl";

import Details from "./Details";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import GoogleMaps from "./GoogleMaps";

const ContactUs = () => {
  const tContact = useTranslations("Contact");

  return (
    <div className="mt-10">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 lg:mb-10 text-center">
        {tContact("title")}
      </h1>

      <div className="flex flex-col-reverse gap-8 lg:flex-row justify-center mb-20 items-stretch">
        {/* Left side with Google Map */}
        <div className="flex-1 lg:h-auto w-full mt-6 lg:mt-0 lg:w-4/5 lg:p-4">
          <GoogleMaps className="h-50" />
          <Details />
        </div>
        {/* Right side with contact form */}
        <div className="flex-1 w-full lg:w-1/2 lg:p-4 px-4">
          {/*
          <NextIntlClientProvider messages={messages}>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.75,
                ease: "easeInOut",
              }}
            >
              <Form />
            </MotionDiv>
          </NextIntlClientProvider>
          */}
          <div className="lg:grid grid-cols-2 w-full hidden">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
