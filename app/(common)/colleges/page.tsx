"use client";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";

const collegeContent = [
    {
        title: "College Profile",
        description:
            "Create your college Profile and showcase your student strength & academics.",
         icon: "/images/students/hat.svg"
    },
    {
        title: "Student Profiles",
        description:
            "Use our student profile section to update data of all your students.",
          icon: "/images/students/academic-cap.svg"
    },
    {
        title: "Internships & Placements",
        description:
            "Search for Internship & Placement Opportunities for your Students.",
           icon: "/images/students/internships.svg"
    },
    {
        title: "Academic Courses",
        description:
            "Use our platform to conduct your courses. You also get advantage of industry-related courses to enrich the teaching as well as learning experience.",
          icon: "/images/students/academic-cap.svg"
    },
    {
        title: "Research",
        description:
            "Reach out to the industry to involve in relevant cases for research.",
         icon: "/images/students/academic-cap.svg"
    },
    {
        title: "Memberships",
        description:
            "Choose Membership levels to suit your requirements. Each Membership Level will provide you additional benefits.",
       icon: "/images/students/internships.svg"
    },
];


const CornerTopLeft = () => (
    <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-6 h-6 text-yellow-400 rotate-45"
        fill="currentColor"
    >
        <path d="M512 512H0V0h512v512z" />
    </svg>
);

const CornerBottomRight = () => (
    <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-6 h-6 text-yellow-400 rotate-45"
        fill="currentColor"
    >
        <path d="M512 512H0V0h512v512z" />
    </svg>
);

export default function CollegePage() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2 bg-[#fcf4dd] flex items-center justify-center py-16 px-6">
                    <h1 className="text-4xl font-bold text-nu30 uppercase">College</h1>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/colleges/hero-banner-college.jpg"
                        alt="College Banner"
                        width={1000}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 space-y-24">
                    {collegeContent.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } items-center gap-10 mb-60`}
                            data-aos="fade-up"
                        >
                            {/* Image */}
                            <div className="flex justify-center w-full md:w-1/2">
                                <div className="w-64 h-64 rounded-full overflow-hidden shadow-md border-4 border-white">
                                    <Image
                                        src="/images/colleges/college.jpg"
                                        alt={item.title}
                                        width={256}
                                        height={256}
                                        className="full-height-image w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="relative max-w-xl w-full md:w-1/2">
                                <div className="relative p-8 shadow-xl rounded-md bg-white  corner-accent text-center">
                                    <div className="flex flex-col gap-4">
                                        <div className="icon-list colleges-icon">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={50}
                                                height={50}
                                                className="inline-block"
                                            ></Image>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-nu30 sm:pb-6 pb-4 sm:text-[18px] text-[14px] font-medium">{item.description}</p>

                                    </div>
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
