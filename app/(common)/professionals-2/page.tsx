"use client";

import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

import Image from "next/image";

const professionalServices = [
    {
        title: "Jobs",
        description:
            "Get access to job opportunities most suited for your profile. Post your profile with complete skill details. Create multiple resumes from your profile data.",
        button: "Jobs",
        image: "/images/professionals/professionals.jpg",
       icon: "/images/professionals/jobs.svg"
    },
    {
        title: "Courses",
        description:
            "Choose from a wide variety of self paced / instructor led courses and acquire skills required to get jobs. Role Specific Courses help you save time to learn just what you need.",
        button: "Courses",
        image: "/images/professionals/professionals.jpg",
         icon: "/images/students/hat.svg"
    },
    {
        title: "Skill Mapping",
        description:
            "Get your customised work profile with accurate skill mapping to reflect your competencies in a simple and crisp manner.",
        button: "Skill Mapping",
        image: "/images/professionals/professionals.jpg",
        icon: "/images/professionals/science-svgrepo-com.svg"
    },
    {
        title: "Workshops",
        description:
            "Join online technical workshops, symposiums and gain access to a wealth of information & a chance to interact with Industry Experts.",
        button: "Workshops",
        image: "/images/professionals/professionals.jpg",
     icon: "/images/students/workshop.svg"
    },
    {
        title: "Certifications",
        description:
            "Get assessed for your skills and get certified. Role based certifications help in getting best opportunities.",
        button: "Certifications",
        image: "/images/professionals/professionals.jpg",
       icon: "/images/students/academic-cap.svg"
    },
    {
        title: "Memberships",
        description:
            "Choose Membership levels to suit your requirements. Each Membership Level will provide you additional benefits.",
        button: "Memberships",
        image: "/images/professionals/professionals.jpg",
        icon: "/images/students/internships.svg"
    }
];

export default function ProfessionalPage2() {
    return (
        <>
            <Navbar />
            <Breadcrumb
                title="Professioanls"
                sectionClass="project-section professional-section  md:py-[150px] sm:py-[100px] py-20"
                items={[{ label: "Home", href: "/" }, { label: "Professionals" }]}
            />
            <section className="bg-[#fcf4dd] py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-nu30">PROFESSIONAL</h1>
                </div>
            </section>

            <section className="py-12 bg-white pro-section">
                <div className="container mx-auto px-4 space-y-20">
                    {professionalServices.map((service, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-10 items-center"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            {/* Text Block */}
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

                            {/* Image Block */}
                            <div className={`flex justify-center ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                                <div className="relative w-72 h-72 overflow-hidden rounded-[30px]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
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
