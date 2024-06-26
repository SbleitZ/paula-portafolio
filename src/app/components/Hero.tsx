// 5xl es 48px
// mid es 78px
// 8xl es 96px
// 2xl es 24px
// 3xl es 30px
// lg es 18px

import Avatar from "./ui/Avatar";
import VectorPig from "./ui/VectorPig";

// xs es 12px
export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center p-10 lg:p-20 font-spaceMono text-mb-primary lg:text-8xl font-bold">
      <Avatar src="imagen.png" alt="avatar" />
      <div className="bg-clip-text text-transparent bg-linear-hero text-center space-y-6 mt-10">
        <p className="">¡Hola! Soy Paula.</p>
        <p>Diseñadora UX/UI.</p>
      </div>
      <VectorPig className="mt-10 lg:mt-20 w-full" startColor="#DBA6F4" endColor="#A981FE" />
    </div>
  );
}
