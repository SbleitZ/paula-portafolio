import VectorPig from "./ui/VectorPig";

export default function Opinions() {
  return (
    <section className="max-lg:pt-40 flex flex-col justify-center px-8 lg:px-12 w-full">
      <div className="flex justify-evenly items-center">
        <div className="lg:text-balance font-dmSans text-paragraph font-bold leading-10 text-mb-paragraphText lg:text-paragraphText lg:max-w-2xl">
          Si te gustó mi perfil, a continuación te comparto mis redes donde podrás contactarme y ver más sobre mis trabajos. 
        </div>
        <img className="max-lg:hidden" src="Happy_Face.png" alt="cara feliz png" />
      </div>
      <VectorPig className="max-lg:hidden mt-5 lg:mt-10 w-full" startColor="#C0F0FF" endColor="#A9FE81" />

    </section>
  );
}
