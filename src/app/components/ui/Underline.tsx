import { cn } from "@/app/utils/cn";
interface UnderlineProps{
  text:string;
  gradiant:string;
}
export default function Underline({text,gradiant}:UnderlineProps) {
  return (
    <div>
      <span className={cn("bg-clip-text text-transparent",gradiant)}>
        {text}
      </span>
      <div className={cn("h-[2px] w-full",gradiant)}></div>
    </div>
  );
}
