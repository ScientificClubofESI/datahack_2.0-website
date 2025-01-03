import About from "@/components/about";
import Agenda from "@/components/agenda";
import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import HomeSection from "@/components/home";
import Mentors from "@/components/mentors";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";
import RegistrationForm from "@/components/registrationForm";
import RegistrationComplete from "@/components/registrationForm/regisrtationComplete";
import Sponsors from "@/components/sponsors";
import Workshops from "@/components/workshops";


export default function Home() {
  return (
  
  <div className=" bg-background-Dark   h-screen  ">
    <Navbar/>
    <HomeSection/>
    <About/>
    <FAQ/>
    <Mentors/>
    <Agenda/>
    <Partners/>
    <Sponsors/>
    <RegistrationComplete/>
    <RegistrationForm/>
  </div>
  );
}
