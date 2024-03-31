import { cn } from "../utils/cn";
import ButtonWorks from "./ui/ButtonWorks";

const works = [
  {
    college: "InkuA",
    date: "2022 - 2023",
    description:
      "Mientras finalizaba mis estudios, tuve la oportunidad de trabajar en un equipo de diseñadores. La tarea fué rediseñar las interfaces digitales de una ONG de Alemania.",
    buttons:[
      {
        src:"EuropaUnion.svg",
        alt:"europa union icon label",
      }
    ]
  },
  {
    college: "No Country",
    date: "2023",
    description:
      "Dentro de No Country, tuve la oportunidad de trabajar en 2 proyectos de creación de producto. Trabajando de forma interdisciplinaria bajo metodología Scrum.",
    buttons:[
      {
        src:"Nomadas.svg",
        alt:"nomadas icon label"
      },
      {
        src:"Reclutando.svg",
        alt:"reclutando icon label",
      }
    ]
  },
];

export default function MyWorks() {
  return (
    <section className="mx-8 lg:mx-20 py-10">
      <MyWorksIntroduction />
      <div className="flex lg:flex-row flex-col gap-20">

        {
          works.map((props,i)=> <MyWorkBox key={i} {...props} />)
        }
      </div>
      {/* <div className="flex gap-20">
        <ButtonWorks src="EuropaUnion.svg" alt="europa union icon label"/>
        <div className="h-full bg-red-500 w-[1px] "></div>
        <div className="flex gap-10">
          <ButtonWorks src="Nomadas.svg" alt="nomadas icon label" />
          <ButtonWorks src="Reclutando.svg" alt="reclutando icon label" />
        </div>
      </div> */}
    </section>
  );
}

function MyWorksIntroduction() {
  return (
    <article className="flex flex-col lg:flex-row justify-center py-10">
      <div className="text-balance font-nanumPen bg-clip-text text-transparent bg-linear-verde lg:max-w-md text-floatText">
        Realicé emulaciones de trabajo como diseñadora ux/ui COLABORANDO en equipos MULTIDISCIPLINARIOS, para fortalecer mi experiencia laboral.
      </div>
      <img className="mt-6" src="MyWorks.svg" alt="arrow down svg" />
    </article>
  );
}

interface MyWorkBoxProps {
  college: string;
  date: string;
  description: string;
  buttons:{
    src:string;
    alt:string;
  }[]
}
function MyWorkBox({ college, date, description,buttons }: MyWorkBoxProps) {
  return (
    <article className="flex flex-col gap-8">
      <div className="font-spaceMono font-extrabold space-y-6 bg-clip-text text-transparent bg-linear-verde">
        <div className="text-mb-primary lg:text-ds-secondary bold ">
          {college}
        </div>
        <span className="text-paragraphText">{date}</span>
      </div>
      <p className="text-balance font-dmSans text-mb-paragraphText text-paragraph lg:text-paragraphText line-clamp-6 lg:h-64">
        {description}
      </p>
      <div className={cn("h-24 mt-10",buttons.length == 1 ? "":"flex max-lg:flex-col gap-10 ")}>
        {
          buttons.map((props,i)=> <ButtonWorks className="h-full max-lg:w-full" key={i} {...props} />)
        }

      </div>
    </article>
  );
}
