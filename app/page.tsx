import Navbar from "@/components/Shared/Navbar";
import HeroOne from "@/components/Pages/HomeOne/HeroOne";
import ExpoloreRole from "@/components/Pages/HomeOne/ExpoloreRole";
import Webinars from "@/components/Pages/Webinars/Webinars";
import Jobs from "@/components/Pages/HomeOne/Jobs";
import Footer from "@/components/Shared/Footer";
import FeatureSection from "@/components/Pages/HomeOne/FeatureSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroOne />
      <ExpoloreRole />
      <Webinars />
      <Jobs />
    <FeatureSection />
      <Footer />
    </>
  );
}
