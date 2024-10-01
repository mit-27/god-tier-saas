import Background from "@/components/LandingPage/Background";
import Features from "@/components/LandingPage/Features";
import Footer from "@/components/LandingPage/Footer";
import Guide from "@/components/LandingPage/Guide";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";
import TechStack from "@/components/LandingPage/TechStack";

export default async function Home() {


  return (
    <Background>
      <div className="">
        <Navbar/>
        <div className="flex flex-col items-center justify-center gap-8 p-4 md:p-8">
          <Hero/>
          <Guide/>
          <Features/>
          <TechStack/>
        </div>
      </div>
      <Footer/>

    </Background> 
  );
}
