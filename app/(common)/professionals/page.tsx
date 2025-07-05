"use client";

import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";

const professionals = [
  {
    title: "Jobs",
    description:
      "Get access to job opportunities most suited for your profile. Post your profile with complete skill details. Create multiple resumes from your profile data.",
    button: "Jobs",
    image: "/images/professionals/professionals.jpg",
    icon: "/images/professionals/Group 13.png",
  },
  {
    title: "Courses",
    description:
      "Choose from a wide variety of self paced / instructor led courses and acquire skills required to get jobs. Role Specific Courses help you save time to learn just what you need.",
    button: "Courses",
    image: "/images/professionals/professionals.jpg",
    icon: "/images/professionals/Group 13.png",
  },
  {
    title: "Skill Mapping",
    description:
      "Get your customised work profile with accurate skill mapping to reflect your competencies in a simple and crisp manner.",
    button: "Skill Mapping",
    image: "/images/professionals/professionals.jpg",
    icon: "/images/professionals/Group 13.png",
  },
  {
    title: "Workshops",
    description:
      "Join online technical workshops, symposiums and gain access to a wealth of information & a chance to interact with Industry Experts.",
    button: "Workshops",
    image: "/images/professionals/professionals.jpg",
    icon: "/images/professionals/Group 13.png",
  },
  {
    title: "Certifications",
    description:
      "Get assessed for your skills and get certified. Role based certifications help in getting best opportunities.",
    button: "Certifications",
    image: "/images/professionals/professionals.jpg",
    icon: "/images/professionals/Group 13.png",
  },
  {
    title: "Memberships",
    description:
      "Choose Membership levels to suit your requirements. Each Membership Level will provide you additional benefits.",
    button: "Memberships",
    image: "/images/professionals/professionals.jpg",
    icon: "/images/professionals/Group 13.png",
  },
];

export default function ProfessionalsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Professionals"
        sectionClass="project-section  md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Professionals" }]}
      />



      <section className="bg-black py-8">

        <div className="container">
          <div className="heading-wrapper">
            <section className="bg-[#fcf4dd] py-4 explore-heading professionals-heading">
              <div className="container mx-auto px-4 space-y-20">
                <h1 className="text-2xl font-bold text-black">Professionals</h1>
              </div>
            </section>
          </div>
        </div>

        <div className="container mx-auto px-4 space-y-12">


          {professionals.map((item, index) => (
            <div
              key={index}
              className={`grid pro-block lg:grid-cols-2 gap-6 items-center border border-[#FFB800] p-4 sm:p-6 ${index % 2 === 0 ? "bg-pro-right" : "bg-pro-left"
                }`}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {/* Text Section - Always first in mobile */}
              <div
                className={`flex flex-col justify-center ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  } gap-3 text-white px-2 sm:px-6 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
              >
                <h2 className="text-xl font-bold flex items-center gap-4">
                  <Image src={item.icon} alt={item.title} width={56} height={56} />
                  <span className="text-3xl font-extrabold">{item.title}</span>
                </h2>
                <p className="text-lg sm:text-xl font-medium leading-relaxed mt-2">
                  {item.description}
                </p>
                <div className="flex">
                  <a href="?add-to-cart=36128" className="mt-auto bg-[#ffc000] hover:bg-[#e6ad00] text-black font-bold px-8 py-2 rounded-lg transition shadow">Learn More</a></div>
              </div>

              {/* Image Section - Always second in mobile */}
              <div
                className={`w-full flex  ${index % 2 === 0 ? "lg:order-2 justify-end mobile-left" : "lg:order-1 justify-start mobile-left"
                  }`}
              >
                <div className="relative w-72 h-44 sm:w-80 sm:h-52 rounded-lg overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}


        </div>
      </section>

      <Footer />
    </>
  );
}
