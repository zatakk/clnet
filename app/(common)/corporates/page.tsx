"use client";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";

const corporateContent = [
    {
        title: "Trainings",
        description:
            "Get on demand training content and deliver them online for your employees.",
        icon: "/images/students/hat.svg",
        image: "/images/corporates/corporates.jpg",
    },
    {
        title: "Post Jobs",
        description:
            "Post Jobs and reach out to construction talent all at one place. Choose flexible plans to suit your particular requirements.",
        icon: "/images/professionals/jobs.svg",
        image: "/images/corporates/corporates.jpg",
    },
    {
        title: "Candidate Search",
        description:
            "Seek out best talent from Students and Professionals. Powerful Skill mapping of candidates enables closest match in search.",
        icon: "/images/students/workshop.svg",
        image: "/images/corporates/corporates.jpg",
    },
    {
        title: "Company Profile",
        description:
            "Create your own profile and build your brand on India’s only dedicated construction connect portal.",
        icon: "/images/corporates/company.svg",
      image: "/images/corporates/corporates.jpg",
    },
    {
        title: "B2B",
        description:
            "Highlight your services and post your requirements to create your vendor pipeline. Reach out to business prospects and expand your services.",
        icon: "/images/corporates/b2b.svg",
        image: "/images/corporates/corporates.jpg",
    },
    {
        title: "Memberships",
        description:
            "Choose Membership levels to suit your requirements. Each Membership Level will provide you additional benefits.",
      icon: "/images/students/internships.svg",
        image: "/images/corporates/corporates.jpg",
    },
];

export default function CorporatePage() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2 bg-[#fcf4dd] flex items-center justify-center py-16 px-6">
                    <h1 className="text-4xl font-bold text-nu30 uppercase">Corporate</h1>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/corporates/hero-banner.jpg"
                        alt="Corporate Banner"
                        width={1000}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 space-y-24">
                    {corporateContent.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } items-center gap-10`}
                            data-aos="fade-up"
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={800}
                                    height={500}
                                    className="rounded-md shadow-md w-full h-full object-cover"
                                />
                            </div>

                            {/* Card (overlaid on image) */}
                            <div
                                className={`
        w-full md:w-2/3 md:max-w-xl bg-[#fcf4dd] shadow-lg rounded-md p-8 z-10
        ${index % 2 === 0 ? "md:-ml-20" : "md:-mr-20"}
      `}
                                style={{ marginTop: "-50px" }}
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="icon-list corporate-icon">
                                        <Image src={item.icon} alt={item.title} width={40} height={40} />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
                                    <p className="text-nu30 sm:pb-6 pb-4 sm:text-[18px] text-[14px] font-medium">{item.description}</p>
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
