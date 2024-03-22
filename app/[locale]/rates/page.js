import { useTranslations } from "next-intl";
import Table from "@/components/Rates/Table";
import ContactUs from "@/components/Contact/ContactUs";

export default function Page() {
  const tNavbar = useTranslations("Navbar");

  return (
    <main className="lg:container container py-8 lg:py-10 ">
      <h1 className="md:text-5xl text-4xl font-bold mb-16 lg:mb-14 text-center">
        {tNavbar("rates")}
      </h1>
      <Table />
    </main>
  );
}
