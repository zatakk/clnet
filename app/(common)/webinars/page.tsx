
import AllProjects from "@/components/Pages/Projects/AllProjects";
import WebinarDetails from "@/components/Pages/WebinarDetails/WebinarDetails";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
   <Breadcrumb
        title="Webinars"
        sectionClass="project-section md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Webinar Details" }]}
      />
      <WebinarDetails />  
      <AllProjects />
      <Footer />
    </>
  );
}
