
import CourseDetails from "@/components/Pages/CourseDetails/CourseDetails";
import AllProjects from "@/components/Pages/Projects/AllProjects";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
   <Breadcrumb
        title="Course Details"
         sectionClass="project-section md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Course Details" }]}
      />
      <CourseDetails />
     <AllProjects />
      <Footer />
    </>
  );
}
