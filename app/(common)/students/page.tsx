"use client";

import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";

const services = [
  {
    title: "Fresher Courses",
    description:
      "Courses that help your transition from a student to an intern. It introduces you to tools, professional practices, knowledge and skills that the market expects out of a junior engineer. Without building unnecessary pressure or pace, the sessions provide a solid foundation for your journey in the construction industry.",
    button: "Enroll  in Courses",
    image: "/images/students/students_09.svg",
    icon: "/images/students/hat.svg"
  },
  {
    title: "Academic Courses",
    description:
      "Complement your engineering education with our range of academic courses, designed to supplement your university curriculum. Whether it’s core subjects or design or professional software, you’re taught by academic and industry experts. From recorded to live-led classes, use these offerings to gain flexible learning or meet the objectives your academic schedule doesn’t cover.",
    button: "Advance your Academic Studies ",
    image: "/images/students/students_09.svg",
    icon: "/images/students/academic-cap.svg"
  },
  {
    title: "Workshops",
    description:
      "Dive into a world of learning and growth at our inspiring workshops. Discover valuable insights, hone your skills and expand your professional network with hands-on industry experts. Don’t miss this opportunity to learn from the best and stay ahead of the curve.",
    button: "Join Workshops",
    image: "/images/students/students_09.svg",
    icon: "/images/students/workshop.svg"
  },
  {
    title: "Certifications",
    description:
      "Stand out from the crowd and enhance your credibility with our industry-recognized certifications. Whether you’re looking to learn a certified program, improve a domain skill, or explore project management, having a certification makes your resume look professional and robust. Join our certification programs today by showcasing your verified qualifications proudly.",
    button: "Get Certified",
    image: "/images/students/students_09.svg",
    icon: "/images/students/academic-cap.svg"
  },
  {
    title: "Internships and Career Guidance",
    description:
      "Navigate the complexities of the job market and career guidance with our experts who can direct your pathway. Whether you’re unsure what internship to apply to, need support for technical rounds or personal brand support, we’re behind you. Our domain job coaches help in identifying trends, new directions, job prospects and related real-world scenarios with the assistance of our global alumni network.",
    button: "Explore Careers",
    image: "/images/students/students_09.svg",
    icon: "/images/students/internships.svg"
  },
];

export default function StudentsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Student Details"
        sectionClass="project-section md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Students" }]}
      />
      <div className="container">
        <div className="heading-wrapper">
          <section className="bg-[#fcf4dd] py-4 explore-heading">
            <div className="container mx-auto px-4 space-y-20">
              <h1 className="text-2xl font-bold text-black">Students</h1>
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
              <div className={`${index % 2 === 0 ? "order-1 centred-block" : "order-2 centred-block"}`}>
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
