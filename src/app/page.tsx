import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyEducation from "./components/MyEducation";
import MyWay from "./components/MyWay";
import MyWorks from "./components/MyWorks";
import Opinions from "./components/Opinions";
import SantanderWork from "./components/SantanderWork";
import Skills from "./components/Skills";

// text -balance
export default function Home() {
  return (
    <div className="size-full bg-bg">
      <Hero />
      <Skills />
      <MyWay />
      <MyEducation />
      <MyWorks />
      
      <SantanderWork/>
      <Opinions />
      <Footer />
    </div>
  );
}
