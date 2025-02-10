import Agenda from "@/components/agenda";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import HomeSection from "@/components/home";
import Mentors from "@/components/mentors";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";
import Sponsors from "@/components/sponsors";
import Workshops from "@/components/workshops";
import About from "@/components/about";
import BackgroundShapes from "@/components/backGround/shape1";
import BackgroundShapes_two from "@/components/backGround/shape2";
import BackgroundShapes_three from "@/components/backGround/shape3";
import BackgroundShapes_four from "@/components/backGround/shape4";
import BackgroundShapes_five from "@/components/backGround/shape5";
import Navbar_popup from "@/components/registrationForm/navbar_popup";

export default function Home() {
  return (

    <div className="bg-background-Dark h-screen">
    
    <BackgroundShapes />
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="workshops">
        <Workshops />
      </section>
     <BackgroundShapes_two />
      <section id="mentors">
        <Mentors />
      </section>
     
      <section id="agenda">
        <Agenda />
      </section>
      <BackgroundShapes_three/>
      <Partners />
      <BackgroundShapes_four />
      <section id="faq">
        <FAQ />
      </section>
      <BackgroundShapes_five />
      <Sponsors />
      
      <Footer />
    </div>

  );
}