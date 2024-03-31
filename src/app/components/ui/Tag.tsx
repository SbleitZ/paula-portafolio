interface TagProps {
  text: string;
}
export default function Tag({ text }: TagProps) {
  return (
    <div className="mx-2 bg-linear-hero p-1 h-fit rounded-full">
      <div className="px-4 py-2 bg-bg w-full h-full rounded-full">
        <span className="font-bold font-dmSans te lg:text-2xl text-xs bg-clip-text text-transparent bg-linear-amarillo">
          {text}
        </span>
      </div>
    </div>
  );
}
