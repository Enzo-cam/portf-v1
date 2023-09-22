import Link from "next/link";
import { AiFillMail } from "react-icons/ai";

const ContactButton = () => {
  return (
    <Link
      href="mailto:enzo.fcam@gmail.com"
      className="flex gap-4 items-center w-64 justify-center py-2 bg-negro text-white rounded hover:bg-marron transition-colors duration-300"
    >
      <AiFillMail />
      Disponible para hablar
    </Link>
  );
};

export default ContactButton;
