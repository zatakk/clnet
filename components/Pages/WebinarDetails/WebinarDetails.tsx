"use client";
import Image from "next/image";
import metro from "@/public/images/project-details-page/metro.png";
import solutions from "@/public/images/project-details-page/solutions.png";
// import projectgallery1 from "@/public/images/project-details-page/project-gallery1.png";
// import projectgallery2 from "@/public/images/project-details-page/project-gallery2.png";
// import projectgallery3 from "@/public/images/project-details-page/project-gallery3.png";
// import projectgallery4 from "@/public/images/project-details-page/project-gallery4.png";
import playbutton from "@/public/images/project-details-page/play-button.png";

import ProjectGallery from "./ProjectGallery";

import home2about2 from "@/public/images/construction_1.jpg";
import home2rounded from "@/public/images/construction_2.jpg";
import home2about1 from "@/public/images/construction_3.jpg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import VideoModal from "@/components/Shared/VideoModal";
export default function WebinarDetails() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";
  }, [showVideo]);

  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-12">
      <div className="container">
        <div>
          <div>
           
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
                The Metro Business Hub is a modern commercial development
                designed to meet the evolving needs of businesses in a
                fast-paced urban environment. This project blends architectural
                innovation with sustainability, offering a premium workspace
                that fosters growth, productivity, and collaboration.Located in
                the heart of the city, the Metro Business Hub provides seamless
                access to transportation, essential business services, and a
                vibrant commercial district. The development includes premium
                office spaces, high-end retail outlets, and collaborative
                co-working zones, making it the perfect destination for
                startups, multinational corporations, and entrepreneurs a like.
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
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 col-span-12">
            <div>
              <div className="">
                <h4
                  className="text-nu40 fontMont sm:font-semibold font-medium"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  About Us
                </h4>
                <h1
                  className="text-nu30 sm:mt-3 mt-2 fontMont sm:font-bold font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="1600">
                  Committed to Excellence <br />
                  in Construction
                </h1>
                <p
                  className="text-nu30 sm:mt-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1800">
                  For over 15 years, we have been delivering top-notch
                  construction services that transform dreams into reality. With
                  a commitment to innovation, precision, and sustainability,
                  we’ve completed 300+ projects globally.
                </p>
              </div>

              <div className="grid grid-cols-8 md:gap-14 gap-6 items-center">
                <div className="md:col-span-5 col-span-12">
                  <div className="md:mt-14 sm:mt-8 mt-6">
                    <div
                      className="flex max-sm:flex-wrap gap-1 sm:gap-3"
                      data-aos="fade-up"
                      data-aos-duration="1600">
                      <div className="pt-3">
                        <span className="">
                          <i className="sm:px-[10px] px-2 sm:py-[10px] py-2 bg-primary rounded-md text-nu30 md:text-[26px] text-[18px] ph-bold ph-factory"></i>
                        </span>
                      </div>
                      <div>
                        <h5 className="text-nu30">
                          Expert Team of Professionals
                        </h5>
                        <p className="text-nu50">
                          Our team consists of skilled architects, engineers,
                          and builders with decades of experience.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex max-sm:flex-wrap gap-1 sm:gap-3 sm:mt-8 mt-4"
                      data-aos="fade-up"
                      data-aos-duration="1800">
                      <div className="pt-3">
                        <span className="">
                          <i className="sm:px-[10px] px-2 sm:py-[10px] py-2 bg-primary rounded-md text-nu30 md:text-[26px] text-[18px] ph-bold ph-buildings"></i>
                        </span>
                      </div>
                      <div>
                        <h5 className="text-nu30">On-Time Project Delivery</h5>
                        <p className="text-nu50">
                          We ensure every project is completed within the agreed
                          timeline without compromising quality.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex max-sm:flex-wrap gap-1 sm:gap-3 sm:mt-8 mt-4"
                      data-aos="fade-up"
                      data-aos-duration="2000">
                      <div className="pt-3">
                        <span className="">
                          <i className="sm:px-[10px] px-2 sm:py-[10px] py-2 bg-primary rounded-md text-nu30 md:text-[26px] text-[18px] ph-bold ph-medal"></i>
                        </span>
                      </div>
                      <div>
                        <h5 className="text-nu30">Award-Winning Projects</h5>
                        <p className="text-nu50">
                          Our work has been recognized with multiple industry
                          awards for excellence and innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 col-span-12">
                  <div
                    className="relative md:mt-[60px] sm:mt-12 mt-6"
                    data-aos="fade-up"
                    data-aos-duration="1600">
                    <Image className="w-full h-full" src={home2about2} alt="" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
                      <div className="circle-ripple">
                        <div className="popup-youtube">
                          <Image className="cursor-pointer"
                            onClick={() => setShowVideo(true)}
                            src={home2rounded}
                            alt=""
                          />
                          <VideoModal
                            videoUrl="https://www.youtube.com/embed/xQGnaoVwf8I"
                            isOpen={showVideo}
                            onClose={() => setShowVideo(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="sm:mt-10 mt-8 flex justify-center items-center"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    <Link href="about" className="btn2">
                      <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                        Discover About
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div
              className="lg:mt-0 sm:mt-10 mt-8"
              data-aos="fade-left"
              data-aos-duration="2000">
              <Image className="w-full h-full" src={home2about1} alt="" />
            </div>
          </div>
        </div>
      </div>

</section>
     <ProjectGallery />
      </div>


    </section>
  );
}
