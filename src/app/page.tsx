import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyEducation from "./components/MyEducation";
import MyProyects from "./components/MyProyects";
import MyWay from "./components/MyWay";
import MyWorks from "./components/MyWorks";
import Opinions from "./components/Opinions";
import SantanderWork from "./components/SantanderWork";
import Skills from "./components/Skills";

// text -balance
export default function Home() {
  return (
    <div className="size-full bg-bg">
      <div className="sr-only">developed by Sbleit - Github : https://github.com/sbleitz</div>
      <Hero />
      <Skills />
      <MyWay />
      <MyEducation />
      <MyWorks />
      <MyProyects />
      <SantanderWork/>
      <Opinions />
      <Footer />
    </div>
  );
}
