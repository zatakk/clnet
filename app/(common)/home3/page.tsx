import HeroThree from "@/components/Pages/HomeThree/HeroThree";
import Navbar from "@/components/Shared/Navbar";
import OurTeamThree from "@/components/Pages/HomeThree/OurTeamThree";
import Testimonial from "@/components/Pages/HomeOne/Testimonial";
import ChooseUs from "@/components/Pages/HomeOne/ChooseUs";
import AboutThree from "@/components/Pages/HomeThree/AboutThree";
import OurServicesThree from "@/components/Pages/HomeThree/OurServicesThree";
import RecentProjectsThree from "@/components/Pages/HomeThree/RecentProjectsThree";
import Faq from "@/components/Pages/HomeOne/Faq";
import BlogOne from "@/components/Pages/HomeOne/BlogOne";
import Footer from "@/components/Shared/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroThree />
      <AboutThree />
      <OurServicesThree />
      <OurTeamThree />
      <Testimonial />
      <ChooseUs />
      <RecentProjectsThree />
      <Faq />
      <BlogOne />
      <Footer />
    </>
  );
}
