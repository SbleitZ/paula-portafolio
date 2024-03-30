export default function MyWay() {
  return (
    <section className="py-10 px-10 flex items-center justify-center flex-col gap-20">
      <p className="text-5xl font-spaceMono font-bold text-paragraph">
        Mi camino en el diseño
      </p>

      <div className="font-nanumPen flex items-center justify-center">
        <div className=" bg-clip-text text-transparent bg-linear text-floatText max-w-sm">
          Comencé la CARRERA EN GRáfiCA y ANIMACIón digital en EL AÑO 2021.
        </div>
        <img src="MyWay.svg" alt="my way svg" />
        <div className="ml-6 bg-clip-text text-transparent bg-linear text-floatText max-w-md">
          En el camino conocí el Diseño UX/UI, el cuál me enamoró por completo.
          Entonces comencé a tomar cursos en instituciones y de forma
          autodidacta.
          <img
            className="relative left-[85%] "
            src="Heart_Face.png"
            alt="cara enamorada"
          />
        </div>
      </div>
    </section>
  );
}
