import Agenda from "@/components/agenda";
import BackgroundShapes from "@/components/backGround";
import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import HomeSection from "@/components/home";
import Mentors from "@/components/mentors";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";
import RegistrationComplete from "@/components/registrationForm/regisrtationComplete";
import Sponsors from "@/components/sponsors";
import Workshops from "@/components/workshops";


export default function Home() {
  return (
  
  <div className=" bg-background-Dark   h-screen  ">
  <BackgroundShapes/>
    <Navbar/>
    <HomeSection/>
    <FAQ/>
    <Workshops/>
    <Mentors/>
    <Agenda/>
    <Partners/>
    <BackgroundShapes/>
    <Sponsors/>
    <Footer/>
    
    
    
    
      </div>
  );
}


