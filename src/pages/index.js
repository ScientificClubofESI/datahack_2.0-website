import Agenda from "@/components/agenda";
import BackgroundShapes from "@/components/backGround";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import HomeSection from "@/components/home";
import Mentors from "@/components/mentors";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";
import Sponsors from "@/components/sponsors";
import Workshops from "@/components/workshops";
import About from "@/components/about";

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
      <section id="mentors">
        <Mentors />
      </section>
      <section id="agenda">
        <Agenda />
      </section>
      <Partners />
      <BackgroundShapes />
      <section id="faq">
        <FAQ />
      </section>
      <Sponsors />
      <Footer />
    </div>
  );
}