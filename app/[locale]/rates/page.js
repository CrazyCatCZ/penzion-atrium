import { useTranslations } from "next-intl";
import Table from "@/components/Rates/Table";
import { useMessages, NextIntlClientProvider } from "next-intl";

export default function Page() {
  const messages = useMessages();
  const tRates = useTranslations("Rates");

  return (
    <main className="lg:container container py-8 lg:py-10 ">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 text-center">
        {tRates("title")}
      </h1>

      <NextIntlClientProvider messages={messages}>
        <Table />
      </NextIntlClientProvider>
    </main>
  );
}
