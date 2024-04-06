export default function SantanderWork() {
  return (
    <div className="w-full px-8 pt-20 lg:pb-40 lg:px-20 mt-24">
      <img
          className="absolute left-[20%] hidden lg:block "
          src="svgs/SantanderArrow.svg"
          alt="santander arrow svg"
        />
      <section className="flex flex-col lg:justify-between gap-16">
        <div className="max-lg:mt-10 font-nanumPen text-mb-floatText bg-linear-AMA-VIO bg-clip-text text-transparent uppercase lg:text-floatText max-w-lg">
          Trabajé durante 3 meses en una startup realizando tareas en ux/ui.{" "}
          <br /><br /> Design system, creación de nuevos componentesy análisis
          heurísticos.
        </div>
        <img
          className="absolute block lg:hidden"
          src="svgs/mbSantanderArrow.svg"
          alt="santander arrow svg"
        />
        <div className="max-lg:mt-28 self-end font-nanumPen text-mb-floatText bg-linear-AMA-VIO bg-clip-text text-transparent uppercase lg:text-floatText max-w-md">
          Disfruto ser pixel perfect. Me encanta buscar la armonía y coherencia
          visual.
        </div>
      </section>
    </div>
  );
}
