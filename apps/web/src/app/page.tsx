import Background from "@/components/LandingPage/background";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";

export default async function Home() {


  return (
    <Background>
      <div className="min-h-screen">
      <Navbar/>
      <Hero/>
      </div>
    </Background> 
  );
}
