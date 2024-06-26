export default function MyWay() {
  return (
    <section className="py-10 px-6 lg:px-10 flex lg:items-center justify-center flex-col gap-20">
      <p className="font-spaceMono text-2xl lg:text-5xl font-bold text-paragraph">
        Mi camino en el diseño
      </p>

      <div className="px-2 font-nanumPen flex lg:items-center justify-center flex-col md:flex-row max-md:gap-24">
        <div className="bg-clip-text text-transparent bg-linear uppercase text-mb-floatText md:text-floatText max-w-64 md:max-w-sm">
          Comencé la carrera EN gráfica y animación digital en el año 2021.
        </div>
        <img className="md:block hidden" src="svgs/MyWay.svg" alt="my way svg" />
        <img className="md:hidden absolute  xs:right-10 right-0" src="svgs/MyWayMobile.svg" alt="my way svg" />
        <div className="md:ml-6 bg-clip-text text-transparent bg-linear uppercase text-mb-floatText md:text-floatText max-w-64 md:max-w-sm">
          En el camino conocí el Diseño UX/UI, el cuál me enamoró por completo.
          Entonces comencé a tomar cursos en instituciones y de forma
          autodidacta.
          <img
            className="relative left-[85%] lg:block hidden"
            src="Heart_Face.png"
            alt="cara enamorada"
          />
        </div>
      </div>
    </section>
  );
}
