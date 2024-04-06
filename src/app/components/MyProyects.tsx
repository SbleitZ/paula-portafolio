
export default function MyProyects() {
  return (
    <section className="flex gap-4 flex-col px-8 lg:px-20 w-full max-lg:hidden">
      <div className="flex justify-evenly py-20">
        <img
          className=""
          src="svgs/Vector_3.svg"
          alt="vector 3 svg"
        />
        <div className="self-center max-w-sm">
          <div className="flex flex-col items-end">
            <img src="svgs/Figma.svg" className="w-20 h-20 self-end mr-8" alt="figma icon" />
            <div className="self-center font-nanumPen text-mb-floatText text-wrap bg-linear-violet-azul bg-clip-text text-transparent uppercase lg:text-floatText">
                Wireframes en alta de algunos proyectos
            </div>
          </div>
        </div>

      </div>
        {/* Europa Union */}
        <div className="relative flex gap-12 w-full items-center justify-center">
          <img className="w-[35%] grow-4" src="proyects/Europa_Union/europa_union_1.png" alt="imagen mi proyecto europa union 1" />
          <img className="rounded-md w-[30%] scale-y-125 grow-[1.5]" src="proyects/Europa_Union/europa_union_2.png" alt="imagen mi proyecto europa union 1" />
          <img className="absolute z-10 top-0 right-[10%] " src="svgs/Gradiant_stars.svg" alt="gradiante de estrellas" />

        </div>

        {/* Reclutando */}
        <div className="py-20 relative flex gap-12 w-full items-center">
          <div className="grow">
            <img src="proyects/Reclutando/reclutando_3.png" className="w-full" alt="imagen mi proyecto reclutando 3" />
          </div>
          <div className="flex flex-col gap-10 grow">
            <img src="proyects/Reclutando/reclutando_1.png" alt="imagen mi proyecto reclutando 1" />
            <img src="proyects/Reclutando/reclutando_2.png" alt="imagen mi proyecto reclutando 1" />
          </div>
          <img className="absolute z-10 bottom-0 left-[20%] " src="svgs/Gradiant_stars.svg" alt="gradiante de estrellas" />

        </div>
        <div className="py-20 relative flex gap-12 w-full items-center">
          <div className="flex flex-col gap-10 grow">
            <img src="proyects/Nomadas/nomada_1.png" alt="imagen mi proyecto reclutando 1" />
            <img src="proyects/Nomadas/nomada_2.png" alt="imagen mi proyecto reclutando 1" />
          </div>
          <div className="grow">
            <img src="proyects/Nomadas/nomada_3.png" className="w-full" alt="imagen mi proyecto reclutando 3" />
          </div>
          <img className="absolute z-10 bottom-0 right-0 " src="svgs/Gradiant_stars.svg" alt="gradiante de estrellas" />

        </div>
    </section>
  )
}
