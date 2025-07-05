
"use client"
import ServicesDetails from "@/components/Pages/ServiceDetails/ServicesDetails";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import metro from "@/public/images/project-details-page/metro.png";
import solutions from "@/public/images/project-details-page/solutions.png";

import playbutton from "@/public/images/project-details-page/play-button.png";
import home2about2 from "@/public/images/home2-about2.png";
import home2rounded from "@/public/images/home2-rounded.png";
import home2about1 from "@/public/images/home2-about1.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import VideoModal from "@/components/Shared/VideoModal";
import Image from "next/image";
import Navbar from "@/components/Shared/Navbar";
import CountUp from "react-countup";
import history from "@/public/images/about-page/history.png";
import ProjectGallery from "@/components/Pages/ProjectDetails/ProjectGallery";
export default function page() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Full Time Details"
        sectionClass="service-details-section xl:py-[230px] lg:py-[190px] md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Full Time Details" }]}
      />
      <section className="bg-nu10 lg:py-20 md:py-16 py-12">
      <div className="container">
        <div>
          <div>
            <div data-aos="zoom-in" data-aos-duration="2000">
              <div className="img-box">
                <Image className="img w-full h-full" src={metro} alt="" />
              </div>
              <div className="grid grid-cols-12 gap-4 2xl:text-left text-center bg-secondary1 border-b-[5px] border-primary">
                {/* <!-- card 1 --> */}
                <div className="2xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-6">
                  <div className="sm:px-[19px] px-3 sm:py-6 py-4">
                    <p className="text-nu50 sm:font-medium font-normal mb-1">
                      Client:
                    </p>
                    <p className="text-nu30 sm:text-[18px] text-[16px] sm:font-bold font-semibold">
                      David Harris
                    </p>
                  </div>
                </div>
                {/* <!-- card 2 --> */}
                <div className="2xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-6">
                  <div className="sm:px-[19px] px-3 sm:py-6 py-4">
                    <p className="text-nu50 sm:font-medium font-normal mb-1">
                      Construction Type:
                    </p>
                    <p className="text-nu30 sm:text-[18px] text-[16px] sm:font-bold font-semibold">
                      Commercial Project
                    </p>
                  </div>
                </div>
                {/* <!-- card 3 --> */}
                <div className="2xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-6">
                  <div className="sm:px-[19px] px-3 sm:py-6 py-4">
                    <p className="text-nu50 sm:font-medium font-normal pb-1">
                      Start Date:
                    </p>
                    <p className="text-nu30 sm:text-[18px] text-[16px] sm:font-bold font-semibold">
                      June 25, 2024
                    </p>
                  </div>
                </div>
                {/* <!-- card 4 --> */}
                <div className="2xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-6">
                  <div className="sm:px-[19px] px-3 sm:py-6 py-4">
                    <p className="text-nu50 sm:font-medium font-normal mb-1">
                      End Date:
                    </p>
                    <p className="text-nu30 sm:text-[18px] text-[16px] sm:font-bold font-semibold">
                      Jan 26, 2025
                    </p>
                  </div>
                </div>
                {/* <!-- card 5 --> */}
                <div className="2xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-6">
                  <div className="sm:px-[19px] px-3 sm:py-6 py-4">
                    <p className="text-nu50 sm:font-medium font-normal mb-1">
                      Project Size:
                    </p>
                    <p className="text-nu30 sm:text-[18px] text-[16px] sm:font-bold font-semibold">
                      120,000 sq. ft.
                    </p>
                  </div>
                </div>
                {/* <!-- card 6 --> */}
                <div className="2xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-6">
                  <div className="sm:px-[19px] px-3 sm:py-6 py-4">
                    <p className="text-nu50 sm:font-medium font-normal mb-1">
                      Location:
                    </p>
                    <p className="text-nu30 sm:text-[18px] text-[16px] sm:font-bold font-semibold">
                      New York City, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pt-10 sm:pt-8 pt-6">
              <h1
                className="text-nu30 fontMont sm:font-bold font-semibold"
                data-aos="fade-up"
                data-aos-duration="1400">
                Metro Business Hub
              </h1>
              <p
                className="text-nu50 sm:font-medium font-normal sm:mt-6 mt-4"
                data-aos="fade-up"
                data-aos-duration="1600">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

              </p>
              <p
                className="text-nu50 sm:font-medium font-normal mt-2"
                data-aos="fade-up"
                data-aos-duration="1800">
                Designed with a futuristic approach, the project incorporates
                energy-efficient systems, smart technology, and green building
                materials to create an eco-conscious and highly functional
                workspace. The intelligent design maximizes natural light,
                reduces energy consumption, and enhances the well-being of
                occupants.Metro Business Hub isn’t just a commercial
                complex—it’s a vision for the future of work. By combining
                state-of-the-art amenities with sustainable solutions, this
                project sets a new benchmark for modern business environments,
                offering an ideal setting for companies to thrive and expand.
              </p>
            </div>
          </div>
          <div className="md:mt-10 sm:mt-8 mt-6">
            <h1
              className="text-nu30 fontMont sm:font-bold font-semibold sm:mb-8 mb-4"
              data-aos="fade-up"
              data-aos-duration="1600">
              Project Challenge & Solutions
            </h1>
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="xl:col-span-6 col-span-12 max-xl:mb-6">
                <p
                  className="text-nu30 sm:font-medium font-normal"
                  data-aos="fade-up"
                  data-aos-duration="1600">
                  Challenges are part of every construction project, but
                  overcoming them is where we excel. With a commitment to
                  finding the best solutions, we turn obstacles into
                  opportunities for success.
                </p>
                <div className="grid grid-cols-12 gap-3 lg:gap-6 xl:mt-10 lg:mt-8 mt-6">
                  <div className="lg:col-span-6 col-span-12">
                    <div>
                      <div
                        className="flex items-center gap-3"
                        data-aos="fade-up"
                        data-aos-duration="1600">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Logistics & Transportation Issues
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 sm:mt-3 mt-2"
                        data-aos="fade-up"
                        data-aos-duration="1700">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Harsh Weather Conditions
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 sm:pt-3 pt-2"
                        data-aos="fade-up"
                        data-aos-duration="1800">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Complex Structural Design
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 sm:mt-3 mt-2"
                        data-aos="fade-up"
                        data-aos-duration="1900">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Material Supply Delays
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 sm:mt-3 mt-2"
                        data-aos="fade-up"
                        data-aos-duration="2000">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Safety & Compliance
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <div>
                      <div
                        className="flex items-center gap-3"
                        data-aos="fade-up"
                        data-aos-duration="1600">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Efficient Logistics Plan
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 sm:mt-3 mt-2"
                        data-aos="fade-up"
                        data-aos-duration="1700">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Optimized Space Utilization
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 sm:mt-3 mt-2"
                        data-aos="fade-up"
                        data-aos-duration="1800">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Weather-Resilient Techniques
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 sm:mt-3 mt-2"
                        data-aos="fade-up"
                        data-aos-duration="1900">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Advanced Engineering Solutions
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-3 sm:mt-3 mt-2"
                        data-aos="fade-up"
                        data-aos-duration="2000">
                        <span>
                          <i className="text-nu30 sm:text-[16px] text-[12px] ph-fill ph-square"></i>
                        </span>
                        <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                          Proactive Safety Measures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-6 col-span-12 max-xl:mb-6">
                <div
                  className="img-box relative"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Image className="w-full h-full img" src={solutions} alt="" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
                    <div className="circle-ripple">
                      <div className="popup-youtube">
                        <Image
                          onClick={() => setShowVideo(true)}
                          className="cursor-pointer"
                          src={playbutton}
                          alt=""
                        />
                        <VideoModal
                          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          isOpen={showVideo}
                          onClose={() => setShowVideo(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pt-10 sm:pt-8 pt-6">
              <div
                className="bg-nu70 sm:px-6 px-4 sm:py-6 py-4 border-l-[5px] border-primary"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2800">
                <div className="flex max-sm:flex-wrap justify-between items-center gap-4">
                  <h4 className="text-nu30 fontMont font-medium md:mt-2 mt-4">
                    Metro Business Hub has set a new standard for commercial
                    spaces. The modern design, sustainable solutions, and prime
                    location make it a game-changer for businesses!
                  </h4>
                  <span className="inline-block max-sm:hidden">
                    <i className="px-2 py-2 rounded-md bg-primary text-nu30 ph-bold ph-quotes"></i>
                  </span>
                </div>
                <h5 className="text-nu30 fontMont font-normal mt-6">
                  — Michael Thompson, <br className="block md:hidden" />
                  Project Manager
                </h5>
              </div>
            </div>
          </div>
        </div>




        <section className="bg-nu10 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-4 sm:gap-6">
          <div className="lg:col-span-6 col-span-12">
            <div>
              <h4
                className="text-nu30 fontMont font-semibold sm:mb-3 mb-2"
                data-aos="fade-right"
                data-aos-duration="1600">
                Our History
              </h4>
              <h1
                className="text-nu30 fontMont font-semibold sm:mb-6 mb-4"
                data-aos="fade-right"
                data-aos-duration="1700">
                Our Journey From Foundations to Milestones
              </h1>
              <p
                className="text-nu30 font-medium sm:mb-6 mb-3"
                data-aos="fade-right"
                data-aos-duration="1800">
                The journey started with a simple mission: to create spaces that
                blend functionality with aesthetics. Over the years, experience,
                innovation, and a client-focused approach have fueled growth,
                enabling the completion of projects that leave a lasting
                impression. This journey is built on a foundation of trust,
                collaboration, and a relentless pursuit of excellence.
              </p>
              <p
                className="text-nu30 font-medium"
                data-aos="fade-right"
                data-aos-duration="1900">
                Every project reflects the passion for turning visions into
                reality, ensuring quality at every step. The goal remains to
                continue shaping spaces that inspire and stand the test of time.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-5 col-span-12">
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-duration="2000">
              <Image className="w-full h-full" src={history} alt="" />
              <div className="-mt-[4rem] text-center">
                <div className="border-8 border-nu10 bg-primary rounded-2xl px-6 py-6 inline-block">
                  <h1 className="counters flex justify-center items-center text-nu30">
                    <CountUp
                      className="odometer px-1"
                      data-counter-value="15"
                      end={15}
                      duration={5}
                      enableScrollSpy></CountUp>
                    <span>+</span>
                  </h1>
                  <p className="text-nu30 font-medium text-center">
                    Years Of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





        <ProjectGallery />
      </div>








     







    </section>
      <Footer />
    </>
  );
}
