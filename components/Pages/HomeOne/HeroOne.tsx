"use client";
import Image from "next/image";
import Link from "next/link";
import heroround from "@/public/images/hero-round.webp";
import herorectangle1 from "@/public/images/hero-rectangle1.png";
import herorectangle2 from "@/public/images/hero-rectangle2.png";
import heroBanner from "@/public/images/homepage-hero-baner.jpg";
import React, { useEffect, useState } from "react";
import VideoModal from "@/components/Shared/VideoModal";

export default function HeroOne() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";
  }, [showVideo]);

  return (
    <section className="hero-section 2xl:py-[130px] xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 pt-12 pb-14 z-10">
      <div className="container">
        <div className="relative hero-area">
          <div className="relative z-30">
            <div
              className="relative inline-block md:mb-6 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1500">
              <Image
                className="box1 animated infinite rotate-full lg:w-full sm:w-[80%] w-[60%] lg:h-full sm:h-[80%] h-[60%]"
                src={heroround}
                alt=""
              />
              <div className="absolute top-1/2 lg:left-1/2 sm:left-[62px] left-[46px] -translate-x-1/2 -translate-y-1/2">
                <span onClick={() => setShowVideo(true)}>
                  <i className="lg:px-2 px-1 lg:py-2 py-1 rounded-full bg-nu10 border-2 border-nu30 text-nu30 sm:text-[32px] text-[20px] ph-fill ph-play cursor-pointer"></i>
                </span>
                <VideoModal
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  isOpen={showVideo}
                  onClose={() => setShowVideo(false)}
                />
              </div>
            </div>
            <h1
              className="display-4 fontMont sm:font-bold font-semibold lg:mb-3 mb-2"
              data-aos="fade-up"
              data-aos-duration="1600">
              CONSTRUCTION LEARNING
            </h1>
            <p
              className="text-nu20 lg:text-2xl font-normal lg:mb-14 sm:mb-10 mb-8"
              data-aos="fade-up"
              data-aos-duration="2000">
              Courses, Careers Connections
            </p>
            <div className="" data-aos="fade-up" data-aos-duration="2500">
              <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 md:py-3 sm:py-2 py-1 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block">
                <Link
                  href="/#courses-webinars"
                  className="sm:text-[18px] text-[16px] font-medium">
                  Courses
                </Link>
              </div>
              <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 md:py-3 sm:py-2 py-1 sm:mt-0 mt-3 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block ml-2">
                <Link
                  href="/#jobs"
                  className="sm:text-[18px] text-[16px] font-medium">
                 Jobs
                </Link>
              </div>
              <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 md:py-3 sm:py-2 py-1 sm:mt-0 mt-3 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block ml-2">
                <Link
                  href="/#courses-webinars"
                  className="sm:text-[18px] text-[16px] font-medium">
                  Webinars
                </Link>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
}
