"use client";
import Image from "next/image";
import residential1 from "@/public/images/services-details-page/residential1.png";
import residential2 from "@/public/images/services-details-page/residential2.png";
import projects1 from "@/public/images/services-details-page/projects1.png";
import projects2 from "@/public/images/services-details-page/projects2.png";
import Link from "next/link";
import { accordionData } from "@/public/dataStor/AllData";
import { useState } from "react";
import ServicesDetailsSide from "./ServicesDetailsSide";

export default function ServicesDetails() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  
  return (
    <section className="construction-faq-section relative !overflow-visible z-10 bg-nu10 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="xl:col-span-8 col-span-12">
            <div>
              <div>
                <div
                  className="img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Image className="img" src={residential1} alt="" />
                </div>
                <div className="md:mt-10 sm:mt-8 mt-4">
                  <h1
                    className="text-nu30 fontMont font-bold"
                    data-aos="fade-up"
                    data-aos-duration="1400">
                    Residential Construction Services
                  </h1>
                  <p
                    className="text-nu50 font-normal md:mt-4 mt-3"
                    data-aos="fade-up"
                    data-aos-duration="1600">
                    We provide high-quality construction solutions with expert
                    craftsmanship, durability, and cost-effective pricing
                  </p>
                  <p
                    className="text-nu50 font-normal mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    We specialize in crafting high-quality, durable homes that
                    reflect your vision and lifestyle. Our team ensures
                    precision at every stage, from architectural planning to the
                    final touches. With a focus on modern designs, sustainable
                    materials, and energy-efficient solutions, we create homes
                    that offer both comfort and long-term value.
                  </p>
                  <p
                    className="text-nu50 font-normal mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    Our residential construction services focus on building
                    high-quality, customized homes that cater to your unique
                    needs and lifestyle. From the first consultation to the
                    final handover, we ensure that every aspect of the
                    construction process meets the highest standards of
                    craftsmanship, durability, and design excellence. Whether
                    you’re looking for a modern townhouse, a spacious family
                    home, or a luxury villa, our team will work closely with you
                    to create a home that perfectly fits your vision and
                    requirements.
                  </p>
                </div>
              </div>
              <div className="md:mt-10 mt-6">
                <h2
                  className="text-nu30 fontMont sm:font-bold font-semibold mb-2"
                  data-aos="fade-up"
                  data-aos-duration="1600">
                  How We Build Your Vision
                </h2>
                <p
                  className="text-nu50 font-medium"
                  data-aos="fade-up"
                  data-aos-duration="1800">
                  A seamless process from consultation to completion, ensuring
                  quality, efficiency, and excellence.
                </p>
                <div className="grid grid-cols-12 gap-6 lg:mt-10 mt-8">
                  <div className="lg:col-span-6 col-span-12">
                    <div
                      className="sm:px-6 px-3 sm:py-6 py-4 bg-nu70 w-full h-full"
                      data-aos="zoom-in"
                      data-aos-duration="2000">
                      <span className="sm:mt-0 mt-2">
                        <i className="text-nu30 bg-primary px-2 py-2 rounded-lg ph ph-bezier-curve"></i>
                      </span>
                      <h4 className="text-nu30 fontMont font-semibold mt-2">
                        Consultation
                      </h4>
                      <p className="text-nu50 font-medium sm:mt-4 mt-3">
                        We discuss your vision, budget, and project scope in
                        detail. Our experts analyze site conditions and provide
                        professional recommendations
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <div
                      className="sm:px-6 px-3 sm:py-6 py-4 bg-nu70 w-full h-full"
                      data-aos="zoom-in"
                      data-aos-duration="2000">
                      <span className="sm:mt-0 mt-2">
                        <i className="text-nu30 bg-primary px-2 py-2 rounded-lg ph ph-bezier-curve"></i>
                      </span>
                      <h4 className="text-nu30 fontMont font-semibold mt-2">
                        Design & Planning
                      </h4>
                      <p className="text-nu50 font-medium sm:mt-4 mt-3">
                        A customized blueprint is created, ensuring structural
                        integrity and aesthetics. We finalize permits,
                        materials, and project timelines.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <div
                      className="sm:px-6 px-3 sm:py-6 py-4 bg-nu70 w-full h-full"
                      data-aos="zoom-in"
                      data-aos-duration="2000">
                      <span className="sm:mt-0 mt-2">
                        <i className="text-nu30 bg-primary px-2 py-2 rounded-lg ph ph-warehouse"></i>
                      </span>
                      <h4 className="text-nu30 fontMont font-semibold mt-2">
                        Construction Phase
                      </h4>
                      <p className="text-nu50 font-medium sm:mt-4 mt-3">
                        Our skilled team executes the project with precision and
                        top-quality materials. Regular updates keep you informed
                        throughout the process.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <div
                      className="sm:px-6 px-3 sm:py-6 py-4 bg-nu70 w-full h-full"
                      data-aos="zoom-in"
                      data-aos-duration="2000">
                      <span className="sm:mt-0 mt-2">
                        <i className="text-nu30 bg-primary px-2 py-2 rounded-lg ph ph-hand-coins"></i>
                      </span>
                      <h4 className="text-nu30 fontMont font-semibold mt-2">
                        Final Inspection
                      </h4>
                      <p className="text-nu50 font-medium sm:mt-4 mt-3">
                        A thorough quality check ensures everything meets safety
                        and design standards. Once approved, we officially hand
                        over your completed project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:pt-10 pt-6">
                <div className="grid grid-cols-8 gap-4 justify-between items-end">
                  <div className="lg:col-span-5 col-span-8">
                    <h2
                      className="text-nu30 fontMont sm:font-bold font-semibold sm:mb-4 mb-3"
                      data-aos="fade-right"
                      data-aos-duration="1600">
                      Completed Projects
                    </h2>
                    <p
                      className="text-nu50 font-medium"
                      data-aos="fade-right"
                      data-aos-duration="1800">
                      Explore our successfully completed projects that showcase
                      our expertise, quality craftsmanship, and commitment to
                      excellence.
                    </p>
                  </div>
                  <div className="lg:col-span-1"></div>
                  <div
                    className="lg:col-span-2 col-span-8"
                    data-aos="fade-left"
                    data-aos-duration="1800">
                    <Link href="projects" className="btn2">
                      <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                        Explore All Projects
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-6 md:mt-8 mt-6">
                  <div className="md:col-span-6 col-span-12">
                    <div
                      className="relative"
                      data-aos="zoom-in"
                      data-aos-duration="2000">
                      <Image className="w-full h-full" src={projects1} alt="" />
                      <div className="absolute bottom-[24px] left-[24px]">
                        <div>
                          <p className="text-nu10 mb-2 font-medium">
                            Infrastructure
                          </p>
                          <h4 className="text-nu10 fontMont mb-4">
                            City Bridge Project
                          </h4>
                          <div className="">
                            <Link href="projects" className="btn">
                              <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                                View Project
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6 col-span-12">
                    <div
                      className="relative"
                      data-aos="zoom-in"
                      data-aos-duration="2000">
                      <Image className="w-full h-full" src={projects2} alt="" />
                      <div className="absolute bottom-[24px] left-[24px]">
                        <div>
                          <p className="text-nu10 mb-2 font-medium">
                            Commercial
                          </p>
                          <h4 className="text-nu10 fontMont mb-4">
                            Skyline Office Tower
                          </h4>
                          <div className="">
                            <Link href="projects" className="btn">
                              <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                                View Project
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:mt-10 mt-6">
                <div>
                  <h2
                    className="text-nu30 fontMont sm:font-bold font-semibold"
                    data-aos="fade-right"
                    data-aos-duration="2000">
                    Features & Benefits
                  </h2>
                  <p
                    className="text-nu50 font-medium sm:mt-4 mt-3"
                    data-aos="fade-left"
                    data-aos-duration="2000">
                    We focus on delivering exceptional value with every
                    project—on time, within budget, and built to last.
                  </p>
                </div>
                <div className="grid grid-cols-12 gap-6 md:mt-8 mt-6">
                  {/* <!-- card 1 --> */}
                  <div className="lg:col-span-6 col-span-12">
                    <div
                      className="bg-secondary1 sm:px-6 px-4 sm:py-6 py-4 relative w-full h-full"
                      data-aos="zoom-in"
                      data-aos-duration="1800">
                      <h4 className="px-[7px] py-1 absolute top-[-1rem] left-[20px] rounded-md bg-nu30 text-primary inline-block">
                        01
                      </h4>
                      <h4 className="text-nu30 fontMont font-bold mt-1">
                        High-Quality Materials
                      </h4>
                      <p className="text-nu50 font-medium sm:mt-4 mt-3">
                        We use premium-grade materials for long-lasting
                        durability.
                      </p>
                    </div>
                  </div>
                  {/* <!-- card 2 --> */}
                  <div className="lg:col-span-6 col-span-12">
                    <div
                      className="bg-secondary1 sm:px-6 px-4 sm:py-6 py-4 relative w-full h-full"
                      data-aos="zoom-in"
                      data-aos-duration="1800">
                      <h4 className="px-[7px] py-1 absolute top-[-1rem] left-[20px] rounded-md bg-nu30 text-primary inline-block">
                        02
                      </h4>
                      <h4 className="text-nu30 fontMont font-bold mt-1">
                        Smart Home Integration
                      </h4>
                      <p className="text-nu50 font-medium sm:mt-4 mt-3">
                        Corporating the latest technology for modern living.
                      </p>
                    </div>
                  </div>
                  {/* <!-- card 3 --> */}
                  <div className="lg:col-span-6 col-span-12">
                    <div
                      className="bg-secondary1 sm:px-6 px-4 sm:py-6 py-4 relative w-full h-full"
                      data-aos="zoom-in"
                      data-aos-duration="1800">
                      <h4 className="px-[7px] py-1 absolute top-[-1rem] left-[20px] rounded-md bg-nu30 text-primary inline-block">
                        03
                      </h4>
                      <h4 className="text-nu30 fontMont font-bold mt-1">
                        Advanced Safety Standards
                      </h4>
                      <p className="text-nu50 font-medium sm:mt-4 mt-3">
                        Strict adherence to safety regulations for secure
                        projects.
                      </p>
                    </div>
                  </div>
                  {/* <!-- card 4 --> */}
                  <div className="lg:col-span-6 col-span-12">
                    <div
                      className="bg-secondary1 sm:px-6 px-4 sm:py-6 py-4 relative w-full h-full"
                      data-aos="zoom-in"
                      data-aos-duration="1800">
                      <h4 className="px-[7px] py-1 absolute top-[-1rem] left-[20px] rounded-md bg-nu30 text-primary inline-block">
                        04
                      </h4>
                      <h4 className="text-nu30 fontMont font-bold mt-1">
                        On-Time & On-Budget
                      </h4>
                      <p className="text-nu50 font-medium sm:mt-4 mt-3">
                        Efficient project management, ensuring timely,
                        cost-effective results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:mt-[60px] mt-8">
                <div
                  className="img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Image className="img" src={residential2} alt="" />
                </div>
                <div className="sm:mt-8 mt-4">
                  <h2
                    className="text-nu30 fontMont sm:font-bold font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="1200">
                    Why Choose Us for Your Construction Needs?
                  </h2>
                  <p
                    className="text-nu50 font-medium sm:mt-4 mt-3"
                    data-aos="fade-up"
                    data-aos-duration="1400">
                    We deliver outstanding results with every project, combining
                    innovation, quality craftsmanship, and attention to
                    detail.Our experienced team ensures that each phase of your
                    construction project is executed seamlessly.Trust us to
                    bring your vision to life, from start to finish.
                  </p>
                  <ul className="sm:mt-6 mt-4 sm:pl-6 pl-4 border-l-4 border-primary">
                    <li
                      className="flex gap-2 text-nu30 sm:text-[18px] text-[16px] font-semibold"
                      data-aos="fade-up"
                      data-aos-duration="1600">
                      <span className="sm:pt-0 pt-[6px]">
                        <i className="text-primary ph-fill ph-star-four"></i>
                      </span>
                      Seamless Construction Experience
                    </li>
                    <li
                      className="flex gap-2 text-nu30 sm:text-[18px] text-[16px] sm:mt-3 mt-2 font-semibold"
                      data-aos="fade-up"
                      data-aos-duration="1800">
                      <span className="sm:pt-0 pt-[6px]">
                        <i className="text-primary ph-fill ph-star-four"></i>
                      </span>
                      Elevate Your Property Value
                    </li>
                    <li
                      className="flex gap-2 text-nu30 sm:text-[18px] text-[16px] sm:mt-3 mt-2 font-semibold"
                      data-aos="fade-up"
                      data-aos-duration="2000">
                      <span className="sm:pt-0 pt-[6px]">
                        <i className="text-primary ph-fill ph-star-four"></i>
                      </span>
                      Designed Around You
                    </li>
                    <li
                      className="flex gap-2 text-nu30 sm:text-[18px] text-[16px] sm:mt-3 mt-2 font-semibold"
                      data-aos="fade-up"
                      data-aos-duration="2200">
                      <span className="sm:pt-0 pt-[6px]">
                        <i className="text-primary ph-fill ph-star-four"></i>
                      </span>
                      Sustainable, Future-Ready Solutions
                    </li>
                    <li
                      className="flex gap-2 text-nu30 sm:text-[18px] text-[16px] sm:mt-3 mt-2 font-semibold"
                      data-aos="fade-up"
                      data-aos-duration="2400">
                      <span className="sm:pt-0 pt-[6px]">
                        <i className="text-primary ph-fill ph-star-four"></i>
                      </span>
                      Built on Trust & Excellence
                    </li>
                    <li
                      className="flex gap-2 text-nu30 sm:text-[18px] text-[16px] sm:mt-3 mt-2 font-semibold"
                      data-aos="fade-up"
                      data-aos-duration="2600">
                      <span className="sm:pt-0 pt-[6px]">
                        <i className="text-primary ph-fill ph-star-four"></i>
                      </span>
                      Affordable, Transparent Pricing
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:mt-16 md:mt-14 mt-10">
                <div>
                  <h2
                    className="text-nu30 fontMont sm:font-bold font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    Your Construction Queries Answered
                  </h2>
                  <p
                    className="text-nu50 font-medium sm:mt-4 mt-3"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    Get the answers to help you make informed decisions for your
                    next project.
                  </p>
                </div>
                <div className="sm:mt-8 mt-4">
                  <div className="accordion-section">
                    {accordionData.map((item, index) => (
                      <div
                        className={`className="accordion-single mb-3 sm:mb-4" ${
                          activeIndex === index ? "active" : ""
                        }`}
                        key={index}>
                        <div
                          className="header-area flex justify-between bg-nu30"
                          onClick={() => handleClick(index)}>
                          <button
                            className="accordion-btn text-nu10 d-flex align-items-start position-relative"
                            type="button">
                            {item.title}
                          </button>
                          <div className="">
                            <span
                              className={` ${
                                activeIndex === index
                                  ? "hidden btnfrv pt-1"
                                  : ""
                              }`}>
                              <i className="text-nu30 px-2 py-2 rounded-md bg-nu10 text-[18px] ph-bold ph-plus"></i>
                            </span>
                            <span
                              className={` ${
                                activeIndex === index
                                  ? "btnfadd pt-1"
                                  : "hidden"
                              }`}>
                              <i className="text-nu30 px-2 py-2 rounded-md bg-nu10 text-[18px] ph-bold ph-minus"></i>
                            </span>
                          </div>
                        </div>
                        <div
                          className={`bg-nu40 px-[10px] py-[10px] ${
                            activeIndex === index ? "" : "hidden"
                          }`}>
                          <div className="content-body">
                            <p className="text-nu1">{item.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ServicesDetailsSide /> */}
          {/* <div className="xl:col-span-4 col-span-12">
            <div className="sticky top-0">
              <div
                className="bg-nu70 sm:px-6 px-4 sm:py-6 py-4"
                data-aos="fade-up"
                data-aos-duration="1800">
                <h4 className="text-nu30 fontMont font-bold sm:mb-4 mb-3">
                  Search Here
                </h4>
                <form action="form" className="flex items-center">
                  <input
                    type="text"
                    placeholder="Searching..."
                    className="placeholder:text-nu40 placeholder:font-medium text-nu30 rounded-none border-none outline-none bg-nu10"
                  />
                  <button className="pt-1">
                    <i className="px-3 py-3 bg-nu30 text-nu10 ph-bold ph-magnifying-glass-plus"></i>
                  </button>
                </form>
              </div>
              <div
                className="bg-nu70 sm:px-6 px-4 sm:py-6 py-4 sm:mt-8 mt-6"
                data-aos="fade-up"
                data-aos-duration="2000">
                <h4 className="text-nu30 fontMont font-bold mb-6">
                  Categories
                </h4>
                <div>
                  <div
                    className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10"
                    data-aos="fade-up"
                    data-aos-duration="1600">
                    <span className="px-1 sm:py-0 py-[2px] bg-primary">
                      <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
                    </span>
                    <Link
                      href="javascript:void(0)"
                      className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                      Project Management
                    </Link>
                  </div>
                  <div
                    className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    <span className="px-1 sm:py-0 py-[2px] bg-primary">
                      <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
                    </span>
                    <Link
                      href="javascript:void(0)"
                      className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                      General Contracting
                    </Link>
                  </div>
                  <div
                    className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <span className="px-1 sm:py-0 py-[2px] bg-primary">
                      <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
                    </span>
                    <Link
                      href="javascript:void(0)"
                      className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                      Design & Architecture
                    </Link>
                  </div>
                  <div
                    className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
                    data-aos="fade-up"
                    data-aos-duration="2200">
                    <span className="px-1 sm:py-0 py-[2px] bg-primary">
                      <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
                    </span>
                    <Link
                      href="javascript:void(0)"
                      className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                      Residential Construction
                    </Link>
                  </div>
                  <div
                    className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
                    data-aos="fade-up"
                    data-aos-duration="2400">
                    <span className="px-1 sm:py-0 py-[2px] bg-primary">
                      <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
                    </span>
                    <Link
                      href="javascript:void(0)"
                      className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                      Commercial Construction
                    </Link>
                  </div>
                  <div
                    className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
                    data-aos="fade-up"
                    data-aos-duration="2600">
                    <span className="px-1 sm:py-0 py-[2px] bg-primary">
                      <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
                    </span>
                    <Link
                      href="javascript:void(0)"
                      className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                      Renovation & Remodeling
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="working md:pt-[60px] sm:pt-10 pt-8 sm:pb-10 pb-8 text-center sm:mt-8 mt-6"
                data-aos="fade-up"
                data-aos-duration="2200">
                <h4 className="text-nu10 fontMont font-bold sm:mb-6 mb-4">
                  Working Hours
                </h4>
                <div className="">
                  <div className="flex justify-center items-center gap-3">
                    <p className="text-nu10 font-medium">Mon – Fri:</p>
                    <p className="text-nu10 font-medium">8 AM – 6 PM</p>
                  </div>
                  <div className="flex justify-center items-center gap-3 sm:mt-3 mt-2">
                    <p className="text-nu10 font-medium">Saturday:</p>
                    <p className="text-nu10 font-medium">9 AM – 3 PM</p>
                  </div>
                  <div className="flex justify-center items-center gap-3 sm:mt-3 mt-2">
                    <p className="text-nu10 font-medium">Sunday:</p>
                    <p className="text-nu10 font-medium">Closed</p>
                  </div>
                  <div className="flex justify-center items-center gap-3 sm:mt-3 mt-2">
                    <p className="text-nu10 font-medium">Phone:</p>
                    <Link
                      href="tel:+12345678900"
                      className="font-medium text-nu10">
                      +1 234-567-8900
                    </Link>
                  </div>
                  <div className="flex justify-center items-center gap-3 sm:mt-3 mt-2">
                    <p className="text-nu10 font-medium">Email:</p>
                    <Link
                      href="mailto:info@yourcompany.com"
                      className="font-medium text-nu10">
                      info@yourcompany.com
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="text-center sm:px-5 px-3 sm:py-4 py-2 bg-primary"
                data-aos="fade-up"
                data-aos-duration="2200">
                <button className="text-nu30 font-semibold">
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
