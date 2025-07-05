"use client";
import Image from "next/image";
import Link from "next/link";
import home2rounded from "@/public/images/home2-rounded.png";
import home2about2 from "@/public/images/home2-about2.png";
import home2about1 from "@/public/images/home2-about1.png";
import React, { useEffect, useState } from "react";
import VideoModal from "@/components/Shared/VideoModal";

export default function AboutThree() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";
  }, [showVideo]);

  return (
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
                          <Image
                            className="cursor-pointer"
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
  );
}
