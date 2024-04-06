"use client";
import Link from "next/link";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import Underline from "./ui/Underline";
import { cn } from "../utils/cn";

const contacts = [
  {
    icon: <FaLinkedin color="white" size={64} title="linkedin link" />,
    gradiantClassName:"bg-linear-verde",
    href:"https://www.linkedin.com/in/pauladanielagareis/",
    startContent:"Podés ver mi portafolio en",
    text:"Linkedin",
    underline:true,
  },
  {
    icon: <FiPaperclip color="white" size={64} title="paper link" />,
    gradiantClassName:"bg-linear-verde",
    href:"https://drive.google.com/file/d/1iI3Nyx4aUWgRM8LLDR5smohcQLWMG-SV/view?usp=drive_link",
    startContent:"Descargar",
    text:"CV",
    underline:false,
  },
  {
    icon: <FaBehanceSquare color="white" title="behance link" size={64} />,
    gradiantClassName:"bg-linear-violet-azul",
    href:"https://www.behance.net/paugareis",
    startContent:"Podés contactarme por",
    text:"Behance",
    underline:true,
  },
];

export default function Footer() {
  return (
    <footer className="w-full font-dmSans px-8 pt-20 lg:px-20 flex flex-col items-center">
      <div className="flex max-lg:flex-col justify-between w-full gap-10 lg:items-start lg:gap-20">
        {contacts.map((props, i) => (
          <ContactBox key={i} {...props} />
        ))}
      </div>
      <div className="mt-20 mb-6 w-full text-paragraph text-center font-bold">
        Diseñado por{" "}
        <Link
          className="bg-clip-text text-transparent bg-linear-violet-azul"
          href="#"
        >
          Paula Gareis
        </Link>{" "}
        y desarrollado por
        <Link
          title="front developer"
          className="bg-clip-text text-transparent bg-linear-verde"
          href="https://sbleit.net/"
        >
          {" "}
          Sbleit
        </Link>
        .
      </div>
    </footer>
  );
}
interface ContactBoxProps {
  icon: React.ReactNode;
  gradiantClassName: string;
  href: string;
  startContent: string;
  text: string;
  underline: boolean;
}
function ContactBox({ icon, gradiantClassName,href,startContent,text,underline }: ContactBoxProps) {
  const properties = {gradiantClassName,href,startContent,text,underline };
  return (
    <div className="flex flex-col p-10 lg:p-20 gap-2 text-paragraph font-bold justify-center items-center text-mb-paragraphText lg:text-paragraphText">
      {icon}
      <div className="text-center max-w-md">
        <GradiantLink {...properties} />
      </div>
    </div>
  );
}

interface GradiantLinkProps{
  startContent?:string;
  endContent?:string;
  gradiantClassName:string;
  href:string;
  text:string;
  underline?:boolean;
}

function GradiantLink({startContent,endContent,gradiantClassName,href,text,underline}:GradiantLinkProps){
  return (
  <>
    {startContent}{" "}
    <Link
      className={cn("bg-clip-text text-transparent",underline ? "":gradiantClassName,underline ? "flex justify-center":"")}
      href={href}
      target="_blank"
    >
      {
        underline ? <Underline text={text} gradiant={gradiantClassName} />:<>{text}</>
      }
    </Link>
    {endContent && ""}{" "}
  </>);
}