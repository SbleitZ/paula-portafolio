import { cn } from "@/app/utils/cn";

interface FloatTextProps {
  className?: string;
  children: string | React.ReactNode;
}
export default function FloatText({
  children,
  className,
}: FloatTextProps) {
  const classes = cn("bg-clip-text text-transparent text-mb-floatText uppercase lg:text-floatText font-nanumPen",
  className);
  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
}
