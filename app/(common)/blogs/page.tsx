import AllBlogs from "@/components/Pages/BlogsListing/BlogsListing";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";


export default function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Latest Blog"
        sectionClass="blog-section xl:py-[230px] lg:py-[190px] md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Latest Blogs" }]}
      />
      <AllBlogs />
      <Footer />
    </>
  );
}