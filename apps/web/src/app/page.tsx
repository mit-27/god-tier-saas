import Background from "@/components/LandingPage/background";
import Guide from "@/components/LandingPage/Guide";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";

export default async function Home() {


  return (
    <Background>
      <div className="min-h-screen">
        <Navbar/>
        <div className="flex flex-col items-center justify-center gap-8 p-4 md:p-8">
          <Hero/>
          <Guide/>

        </div>
      </div>
    </Background> 
  );
}
