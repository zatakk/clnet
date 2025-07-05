// import AboutTwo from "@/components/Pages/HomeTwo/AboutTwo";
import AboutOne from "@/components/Pages/HomeOne/AboutOne";
import BlogOne from "@/components/Pages/HomeOne/BlogOne";
import ChooseUs from "@/components/Pages/HomeOne/ChooseUs";
import Faq from "@/components/Pages/HomeOne/Faq";
import OurRecentProjects from "@/components/Pages/HomeOne/ExpoloreRole";
import OurTeam from "@/components/Pages/HomeOne/OurTeam";
import Testimonial from "@/components/Pages/HomeOne/Testimonial";
import HeroTwo from "@/components/Pages/HomeTwo/HeroTwo";
import OurServicesTwo from "@/components/Pages/HomeTwo/OurServicesTwo";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";


export default function page() {
  return (
    <>
        <Navbar />
        <HeroTwo />
        <AboutOne />
        <OurServicesTwo />
        <OurTeam />
        <Testimonial />
        <ChooseUs />
        <OurRecentProjects />
        <Faq />
        <BlogOne />
        <Footer />
    </>
  )
}
