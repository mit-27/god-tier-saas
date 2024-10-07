import Background from "@/components/landing-page/background";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Guide from "@/components/landing-page/guide";
import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";
import TechStack from "@/components/landing-page/tech-stack";

export default async function Home() {


  return (
    <Background>
      <div className="w-full">
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
