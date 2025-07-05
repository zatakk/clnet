import AboutCounterPopUp from "@/components/Pages/About/AboutCounterPopUp";
import AboutTeam from "@/components/Pages/About/AboutTeam";
import BrandsLogo from "@/components/Pages/About/BrandsLogo";
import DetailAbout from "@/components/Pages/About/DetailAbout";
import HaveQuestions from "@/components/Pages/About/HaveQuestions";
import OurHistoryAbout from "@/components/Pages/About/OurHistoryAbout";
import VisionMission from "@/components/Pages/About/VisionMission";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="About Us"
        sectionClass="about-section xl:py-[230px] lg:py-[190px] md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <DetailAbout />
      <AboutCounterPopUp />
      <OurHistoryAbout />
      <BrandsLogo />
      <VisionMission />
      <HaveQuestions />
      <AboutTeam />
      <Footer />
    </>
  );
}
