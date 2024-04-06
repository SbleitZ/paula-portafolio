import { cn } from "@/app/utils/cn";

interface ButtonWorksProps{
  className?:string;
  src:string;
  alt:string;
}
export default function ButtonWorks({className,src,alt}:ButtonWorksProps){
  return (
    <div className={cn("bg-button p-5 rounded-3xl flex items-center justify-center lg:grow",className)}>
      <img src={"svgs/"+src} alt={alt} />
    </div>
  );
}