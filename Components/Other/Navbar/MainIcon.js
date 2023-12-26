import Image from "next/image";
import { Link } from "@/navigation";

import images from "@/public/images/ImageApi.js";
import { MainIcon as MainIconIC } from "@/public/vectors/getIcons";

const MainIcon = ({ setIsMenuOpen }) => {
  return (
    <div className="flex items-center">
      <Link onClick={() => setIsMenuOpen(false)} href="/">
        <MainIconIC className="w-40 h-14" />
      </Link>
    </div>
  );
};

export default MainIcon;
