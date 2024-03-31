export default function SantanderWork() {
  return (
    <div className="w-full px-8 py-20 lg:px-20">
      <img
          className="absolute left-[20%] h-[60%]"
          src="SantanderArrow.svg"
          alt="santander arrow svg"
        />
      <section className="flex justify-between ">
        <div className="font-nanumPen text-mb-floatText bg-linear-AMA-VIO bg-clip-text text-transparent lg:text-floatText max-w-lg">
          Trabajé durante 3 meses en una startup realizando tareas en ux/ui.{" "}
          <br /><br /> Design system, creación de nuevos componentesy análisis
          heurísticos.
        </div>
        
        <div className="self-end font-nanumPen text-mb-floatText bg-linear-AMA-VIO bg-clip-text text-transparent lg:text-floatText max-w-md">
          Disfruto ser pixel perfect. Me encanta buscar la armonía y coherencia
          visual.
        </div>
      </section>
    </div>
  );
}
