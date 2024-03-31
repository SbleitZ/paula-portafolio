import Link from "next/link";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
const contacts = [
  {
    icon:<FaLinkedin color="white" size={64} title="linkedin link"/>,
    html:<>Podés ver mi portafolio en <Link className="bg-clip-text text-transparent bg-linear-verde" href="#">linkedin</Link></>
  },
  {
    icon:<FiPaperclip color="white" size={64} title="paper link"/>,
    html:<>Descargar <Link className="bg-clip-text text-transparent bg-linear-verde" href="#">CV</Link></>
  },
  {
    icon:<FaBehanceSquare color="white" title="behance link" size={64}/>,
    html:<>Podés contactarme por <Link className="bg-clip-text text-transparent bg-linear-violet-azul" href="#">behance</Link></>
  },
];
export default function Footer() {
  return (
    <footer className="w-full font-dmSans px-8 pt-40 lg:px-20 flex flex-col items-center">

      <div className="flex max-lg:flex-col justify-between w-full gap-10 lg:items-start lg:gap-20">
        {
          contacts.map((props,i)=> <ContactBox key={i} {...props} />)
        }
      </div>
      <div className="mt-20 mb-6 w-full text-paragraph text-center font-bold">
        Diseñado por <Link className="bg-clip-text text-transparent bg-linear-violet-azul" href="#">Paula</Link> y desarrollado por
        <Link title="front developer" className="bg-clip-text text-transparent bg-linear-verde" href="https://sbleit.net/"> Sbleit</Link>.
      </div>
    </footer>
  );
}
interface ContactBoxProps{
  icon:React.ReactNode;
  html:React.ReactNode;
}
function ContactBox({icon,html}:ContactBoxProps){
  return (<div className="flex flex-col p-10 lg:p-20 gap-2 text-paragraph font-bold justify-center items-center text-mb-paragraphText lg:text-paragraphText">
    {icon}
    <p className="text-center max-w-md">
      {html}
    </p>
</div>);
}