"use client";
import { Link } from "@/navigation";
import { usePathname } from "@/navigation";

const DesktopLinks = ({ tNavbar }) => {
  const {
    home,
    rates,
    accommodation,
    services,
    surroundings,
    gallery,
    contact,
  } = tNavbar;

  const pathname = usePathname();

  const notActiveLinkClass = "text-base font-bold";
  const activeLinkClass = "text-base font-bold text-indigo-900";

  return (
    <nav className="hidden lg:flex gap-6">
      <Link
        className={pathname === "/" ? activeLinkClass : notActiveLinkClass}
        href="/"
      >
        {home}
      </Link>
      <Link
        className={
          pathname === "/rates" || pathname === "/cenik"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/rates"
      >
        {rates}
      </Link>
      <Link
        className={
          pathname === "/accommodation" || pathname === "/ubytovani"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/accommodation"
      >
        {accommodation}
      </Link>
      <Link
        className={
          pathname === "/services" || pathname === "/sluzby"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/services"
      >
        {services}
      </Link>
      <Link
        className={
          pathname === "/surroundings" || pathname === "/okoli"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/surroundings"
      >
        {surroundings}
      </Link>
      <Link
        className={
          pathname === "/gallery" || pathname === "/galerie"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/gallery"
      >
        {gallery}
      </Link>
      <Link
        className={
          pathname === "/contact" || pathname === "/kontakt"
            ? activeLinkClass
            : notActiveLinkClass
        }
        href="/contact"
      >
        {contact}
      </Link>
    </nav>
  );
};

export default DesktopLinks;
