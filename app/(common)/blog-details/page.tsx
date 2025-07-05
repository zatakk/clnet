import BrandsLogoTwo from "@/components/Pages/About/BrandsLogoTwo";
import BlogDetail from "@/components/Pages/BlogDetails/BlogDetail";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Blog Details"
        sectionClass="blog-details-section xl:py-[230px] lg:py-[190px] md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Blog Details" }]}
      />
      <BlogDetail />
      <BrandsLogoTwo />
      <Footer />
    </>
  );
}
