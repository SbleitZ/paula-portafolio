import Hero from "./components/Hero";
import MyEducation from "./components/MyEducation";
import MyWay from "./components/MyWay";
import Skills from "./components/Skills";

// text -balance
export default function Home() {
  return (
    <div className="size-full bg-bg">
      <Hero/>
      <Skills/>
      <MyWay/>
      <MyEducation/>
    </div>
  );
}
