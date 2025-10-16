import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyLumoscale from "@/components/WhyLumoscale";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Tools />
      <Problem />
      <Solution />
      <Services />
      <Process />
      <WhyLumoscale />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
