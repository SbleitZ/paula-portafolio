const educacion = [
  {
    college: "Universidad Nacional del Litoral",
    date: "2021 - 2023",
    description:
      "Comencé a estudiar Gráfica y Animación en la Universidad Nacional del Litoral. \nAprendí herramientas y técnicas de animación digital 2D y 3D.",
  },
  {
    college: "Formación complementaria",
    date: "2021 - 2023",
    description:
      "Realicé cursos sobre Diseño UX/UI en PoloTic Misiones, CoderHouse, EducacionIT, más tutoriales de YouTube que tomaba de forma autodidacta.\n También tomé cursos de programación Frontend en Plataforma 5, aprendiendo HTML, CSS, Bootstrap y bases de JavaScript.",
  },
];
export default function MyEducation() {
  return (
    <section className="px-8 pt-20 pb-10 lg:p-20 flex justify-center lg:items-center flex-col gap-20">
      {educacion.map((props, i) => (
        <EducationBox key={i} {...props} />
      ))}
    </section>
  );
}

interface EducationBoxProps {
  college: string;
  date: string;
  description: string;
}
function EducationBox({ college, date, description }: EducationBoxProps) {
  return (
    <article className="flex flex-col gap-10">
      <div className="font-spaceMono font-extrabold space-y-6 bg-clip-text text-transparent bg-linear">
        <div className="text-mb-primary lg:text-ds-secondary bold ">{college}</div>
        <span className="text-paragraphText">{date}</span>
      </div>
      <p className="font-dmSans text-mb-paragraphText text-paragraph lg:text-paragraphText ">
        {description}
      </p>
    </article>
  );
}
