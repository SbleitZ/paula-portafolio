import { cn } from "@/app/utils/cn";
import Link from "next/link";

interface ButtonWorksProps{
  className?:string;
  src:string;
  alt:string;
  href:string;
}
export default function ButtonWorks({className,src,alt,href}:ButtonWorksProps){
  return (
    <Link href={href} className={cn("bg-button hover:bg-buttonHover p-5 rounded-3xl flex items-center justify-center lg:grow",className)} target="_blank">
      <img src={"svgs/"+src} alt={alt} />
    </Link>
  );
}