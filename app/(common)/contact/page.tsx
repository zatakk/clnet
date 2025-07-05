import BrandsLogo from "@/components/Pages/About/BrandsLogo";
import ContactFrom from "@/components/Pages/ContactUs/ContactFrom";
import ContactUsToday from "@/components/Pages/ContactUs/ContactUsToday";
import Maps from "@/components/Pages/ContactUs/Maps";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Contact US"
        sectionClass="contact-section xl:py-[230px] lg:py-[190px] md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Contact US" }]}
      />
      <ContactUsToday />
      <ContactFrom />
      <Maps />
      <BrandsLogo />
      <Footer />
    </>
  );
}
