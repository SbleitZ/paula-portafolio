interface AvatarProps {
  src: string;
  alt: string;
}
export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="flex items-center justify-center rounded-full w-56 h-56 bg-linear p-2">
      <img className="rotate-[7.57deg] size-48 aspect-video" src={src} alt={alt} />
    </div>
  );
}
