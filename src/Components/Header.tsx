import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex items-center mt-4 justify-between">
      <div className="flex gap-4 items-center">
        <Image src="/ryu.png" alt="LogoEnzocam" width={30} height={30} />

        <p className="text-xl mt-1 text-gray-300">|</p>
      </div>

      <div className="flex text-2xl gap-4">
        <Link href="https://github.com/Enzo-cam" target="_blank">
          <BsGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/enzo-camera/" target="_blank">
          <BsLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Header;
