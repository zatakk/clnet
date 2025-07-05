"use client";

import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";
const services = [
  {
    title: "Content Creation",
    description:
      "Craft engaging and informative digital content such as blogs, videos, infographics, or social media posts to educate and attract your audience. Content creators play a key role in delivering value, building brand presence, and establishing thought leadership in any field.",
    button: "Enroll in Content Creation",
    image: "/images/students/students_09.svg",
    icon: "/images/students/hat.svg"
  },
  {
    title: "Instructor for Courses",
    description:
      "Design and deliver structured learning experiences, whether online or in-person, to help students or professionals develop specific skills. Instructors guide learners through course material, provide mentorship, and assess progress to ensure learning outcomes are met.",
    button: "Enroll in Instructor for Courses",
    image: "/images/students/students_09.svg",
    icon: "/images/students/academic-cap.svg"
  },
  {
    title: "Webinars",
    description:
      "Host live or recorded online sessions to share insights, demonstrate tools, or train audiences on specific topics. Webinars are interactive and scalable, making them ideal for reaching large audiences while fostering engagement and knowledge exchange.",
    button: "Join Webinars",
    image: "/images/students/students_09.svg",
    icon: "/images/students/workshop.svg"
  },
  {
    title: "Career Coach",
    description:
      "Support individuals in identifying their strengths, setting career goals, and navigating transitions such as job changes or skill upgrades. Career coaches provide personalized guidance, resume feedback, interview preparation, and long-term career strategy planning.",
    button: "Get started with Career Coach",
    image: "/images/students/students_09.svg",
    icon: "/images/students/academic-cap.svg"
  },
  {
    title: "Consulting",
    description:
      "Offer expert advice and strategic solutions to individuals or organizations looking to overcome challenges, optimize processes, or innovate. Consultants apply specialized knowledge to deliver tailored recommendations and drive measurable improvements.",
    button: "Enroll in Consulting",
    image: "/images/students/students_09.svg",
    icon: "/images/students/internships.svg"
  },
];


export default function InstructorsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Subject Experts"
        sectionClass="project-section md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Subject Experts" }]}
      />
      <div className="container">
        <div className="heading-wrapper">
          <section className="bg-[#fcf4dd] py-4 explore-heading">
            <div className="container mx-auto px-4 space-y-20">
              <h1 className="text-2xl font-bold text-black">Subject Experts</h1>
            </div>
          </section>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-10 items-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {/* Text Section */}
              <div className={`${index % 2 === 0 ? "order-1" : "order-2"}`}>
                <h2 className="text-xl text-nu30 font-bold flex-col mb-4 flex items-start gap-4">
                  <div className="icon-list">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={50}
                      height={50}
                      className="inline-block"
                    ></Image>
                  </div>

                  {service.title}
                </h2>
                <p className="text-nu30 sm:pb-6 pb-4 sm:text-[18px] text-[14px] font-medium">
                  {service.description}
                </p>
                <button className="btn bg-yellow-400 text-black px-4 py-2 text-sm font-semibold rounded">
                  <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[18px] text-[16px] sm:font-semibold font-medium">{service.button}</span>
                </button>
              </div>
              {/* Image Section */}
              <div className={`flex justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <div className="relative w-72 h-72 relative-container">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="service-image"
                  />
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
