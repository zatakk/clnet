import BrandsLogo from "@/components/Pages/About/BrandsLogo";
import ServiceFooter from "@/components/Pages/Services/ServiceFooter";
import ServicesChooseUs from "@/components/Pages/Services/ServicesChooseUs";
import ServicesOur from "@/components/Pages/Services/Jobs";
import ServicesTestimonial from "@/components/Pages/Services/ServicesTestimonial";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Navbar from "@/components/Shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Our Services"
        sectionClass="service-section xl:py-[230px] lg:py-[190px] md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />
      <ServicesOur />
      <BrandsLogo />
      <ServicesChooseUs />
      <ServicesTestimonial />
      <ServiceFooter />
    </>
  );
}
