interface TagProps{
  text:string;
}
export default function Tag({text}:TagProps){
  return (<div className="bg-linear-hero p-0.5 h-fit rounded-full">
    <div className="px-4 py-2 bg-bg w-full h-full rounded-full">
      <span className="font-bold bg-clip-text text-transparent bg-linear-amarillo">{text}</span>
    </div>
  </div>);
}