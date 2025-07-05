import BrandsLogoTwo from "@/components/Pages/About/BrandsLogoTwo";
import HaveQuestions from "@/components/Pages/About/HaveQuestions";
import AllProjects from "@/components/Pages/Projects/AllProjects";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Courses & Webinars"
        sectionClass="project-section md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Courses & Webinars" }]}
      />
      <AllProjects />
      <HaveQuestions />
      <Footer />
    </>
  );
}
