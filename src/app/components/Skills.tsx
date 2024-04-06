import Tag from "./ui/Tag";

const Tags = [
  "Figma",
  "Design Thinking",
  "Design System",
  "Material Design",
  "UX Design",
  "UI Design",
  "Motion & Interactions",
];
export default function Skills() {
  return (
    <section className="py-10 font-spaceMono flex items-center justify-center flex-col gap-20">
      <p className="text-2xl lg:text-5xl font-bold text-paragraph">Skills</p>
      <div className="flex justify-center items-center gap-8 flex-wrap max-w-3xl">
        {Tags.map((tag, i) => (
          <Tag key={i} text={tag} />
        ))}
      </div>
      <img src="svgs/ArrowDown.svg" alt="arrow down svg" />
    </section>
  );
}
