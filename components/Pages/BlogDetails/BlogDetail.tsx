"use client";
import Image from "next/image";
import Link from "next/link";
import revolutionizing from "@/public/images/blog-details-page/revolutionizing.png";
import prefabrication from "@/public/images/blog-details-page/prefabrication.png";
import overcoming from "@/public/images/blog-details-page/overcoming.png";
import playbutton from "@/public/images/blog-details-page/play-button.png";
import home2rounded from "@/public/images/home2-rounded.png";
import comment1 from "@/public/images/blog-details-page/comment1.png";
import comment2 from "@/public/images/blog-details-page/comment2.png";
import React, { useEffect, useState } from "react";
import VideoModal from "@/components/Shared/VideoModal";
import BlogDetailSide from "./BlogDetailSide";

export default function BlogDetail() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";
  }, [showVideo]);
  return (
    <section className="relative !overflow-visible z-10 bg-nu10 md:py-20 sm:py-16 py-12">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="xl:col-span-8 col-span-12">
            <div>
              <div>
                <div
                  className="img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Image className="img" src={revolutionizing} alt="" />
                </div>
                <div
                  className="flex max-lg:flex-wrap items-center gap-2 sm:mt-6 mt-4"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <div className="flex justify-center items-center gap-1 pr-3 border-r-2 border-nu30">
                    <span className="d-center">
                      <i className="text-primary ph ph-user-circle-gear"></i>
                    </span>
                    <span className="text-[14px] text-nu40 font-semibold">
                      By Robert Green
                    </span>
                  </div>
                  <div className="flex items-center gap-1 pr-3 border-r-2 border-nu30">
                    <span className="d-center">
                      <i className="text-primary ph ph-calendar"></i>
                    </span>
                    <span className="text-[14px] text-nu40 font-semibold">
                      Feb 02, 2025
                    </span>
                  </div>

                  <div className="flex items-center gap-1 pr-3 border-r-2 border-nu30">
                    <span className="d-center">
                      <i className="text-primary ph ph-chat"></i>
                    </span>
                    <span className="text-[14px] text-nu40 font-semibold">
                      2 Comments
                    </span>
                  </div>
                  <p className="flex items-center gap-1 pr-3 border-r-2 border-nu30">
                    <span className="d-center">
                      <i className="text-primary ph ph-hourglass-medium"></i>
                    </span>
                    <span className="text-[14px] text-nu40 font-semibold">
                      7 min read
                    </span>
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="d-center">
                      <i className="text-primary ph ph-eye"></i>
                    </span>
                    <span className="text-[14px] text-nu40 font-semibold">
                      5.4k views
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:mt-10 sm:mt-8 mt-6">
                <h1
                  className="text-nu30 fontMont sm:font-bold font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="1400">
                  How Prefabrication is Revolutionizing Construction
                </h1>
                <p
                  className="text-nu50 font-normal mt-2"
                  data-aos="fade-up"
                  data-aos-duration="1500">
                  Discover how prefabrication is transforming the construction
                  industry, reducing costs, speeding up projects, and improving
                  sustainability.
                </p>
                <p
                  className="text-nu50 font-normal mt-2"
                  data-aos="fade-up"
                  data-aos-duration="1600">
                  Traditional construction methods have dominated the industry
                  for decades, but prefabrication is revolutionizing the way we
                  build. By manufacturing components off-site and assembling
                  them on location, this modern approach ensures faster project
                  completion, reduced costs, and minimal material waste. With
                  enhanced precision and efficiency, prefabrication is shaping
                  the future of sustainable and high-quality construction.
                </p>
                <p
                  className="text-nu50 font-normal mt-2"
                  data-aos="fade-up"
                  data-aos-duration="1700">
                  Additionally, it supports sustainable building practices by
                  reducing energy consumption and optimizing resource
                  utilization. As technology advances, prefabrication is
                  becoming the go-to solution for efficient, cost-effective, and
                  eco-friendly construction.
                </p>
              </div>
            </div>
            <div className="md:mt-10 mt-6">
              <h2
                className="text-nu30 fontMont sm:font-bold font-semibold sm:mb-3 mb-2"
                data-aos="fade-up"
                data-aos-duration="1600">
                Why Prefabrication is the Future of Construction
              </h2>
              <p
                className="text-nu50 sm:font-medium font-normal"
                data-aos="fade-up"
                data-aos-duration="1700">
                Faster, cost-effective, and eco-friendly—discover how
                prefabrication is transforming the way we build.
              </p>
              <div className="flex max-lg:flex-wrap items-center gap-6 sm:mt-8 mt-6">
                <ul className="">
                  <li
                    className="flex items-center gap-2"
                    data-aos="fade-up"
                    data-aos-duration="1400">
                    <span className="d-center">
                      <i className="text-primary ph-fill ph-star-four"></i>
                    </span>
                    <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                      Accelerated Project Delivery
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 sm:mt-3 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    <span className="d-center">
                      <i className="text-primary ph-fill ph-star-four"></i>
                    </span>
                    <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                      Optimized Cost Savings
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 sm:mt-3 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1600">
                    <span className="d-center">
                      <i className="text-primary ph-fill ph-star-four"></i>
                    </span>
                    <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                      Superior Precision & Quality
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 sm:mt-3 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1700">
                    <span className="d-center">
                      <i className="text-primary ph-fill ph-star-four"></i>
                    </span>
                    <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                      Eco-Conscious & Sustainable
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 sm:mt-3 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    <span className="d-center">
                      <i className="text-primary ph-fill ph-star-four"></i>
                    </span>
                    <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                      Flexible & Scalable Solutions
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-2 sm:mt-3 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1900">
                    <span className="d-center">
                      <i className="text-primary ph-fill ph-star-four"></i>
                    </span>
                    <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                      Minimal On-Site Disruptions
                    </span>
                  </li>
                </ul>
                <div
                  className="img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Image className="img" src={prefabrication} alt="" />
                </div>
              </div>
              <p
                className="text-nu50 font-medium sm:mt-8 mt-4"
                data-aos="fade-up"
                data-aos-duration="2000">
                The construction industry is evolving with cutting-edge
                technology, innovative materials, and sustainable practices.
                From prefabrication to smart building automation, modern
                construction methods are reshaping efficiency, quality, and
                environmental impact.
              </p>
              <div className="sm:mt-6 mt-4">
                <div
                  className="img-box relative"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Image className="img" src={overcoming} alt="" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
                    <div className="circle-ripple md:block hidden">
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
                    <div className="circle-ripple block md:hidden">
                      <div className="popup-youtube">
                        <Image
                          onClick={() => setShowVideo(true)}
                          className="cursor-pointer"
                          src={home2rounded}
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
            <div className="sm:mt-8 mt-4">
              <h2
                className="text-nu30 fontMont sm:font-bold font-semibold"
                data-aos="fade-up"
                data-aos-duration="2000">
                Overcoming Challenges & Embracing the Future of Prefabrication
              </h2>
              <div className="sm:mt-6 mt-4">
                <div
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-duration="1400">
                  <span className="d-center">
                    <i className="text-nu30 text-[18px] ph-fill ph-square"></i>
                  </span>
                  <span className="text-nu30 sm:font-semibold font-medium sm:text-[18px] text-[16px]">
                    High Initial Investment
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 mt-3"
                  data-aos="fade-up"
                  data-aos-duration="1500">
                  <span className="d-center">
                    <i className="text-nu30 text-[18px] ph-fill ph-square"></i>
                  </span>
                  <span className="text-nu30 sm:font-semibold font-medium sm:text-[18px] text-[16px]">
                    Transportation & Logistics Complexities
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 mt-3"
                  data-aos="fade-up"
                  data-aos-duration="1600">
                  <span className="d-center">
                    <i className="text-nu30 text-[18px] ph-fill ph-square"></i>
                  </span>
                  <span className="text-nu30 sm:font-semibold font-medium sm:text-[18px] text-[16px]">
                    Limited Design Flexibility
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 mt-3"
                  data-aos="fade-up"
                  data-aos-duration="1700">
                  <span className="d-center">
                    <i className="text-nu30 text-[18px] ph-fill ph-square"></i>
                  </span>
                  <span className="text-nu30 sm:font-semibold font-medium sm:text-[18px] text-[16px]">
                    Skilled Workforce Requirement
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 mt-3"
                  data-aos="fade-up"
                  data-aos-duration="1800">
                  <span className="d-center">
                    <i className="text-nu30 text-[18px] ph-fill ph-square"></i>
                  </span>
                  <span className="text-nu30 sm:font-semibold font-medium sm:text-[18px] text-[16px]">
                    Regulatory & Permit Barriers
                  </span>
                </div>
              </div>
              <div className="md:mt-[66px] sm:mt-11 mt-8">
                <div
                  className="bg-nu70 sm:px-6 px-4 sm:py-6 py-4 relative"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2800">
                  <span className="px-2 py-1 mt-1 absolute top-[-1rem] left-[20px] rounded-md bg-primary text-nu30 inline-block">
                    <i className="ph-bold ph-quotes"></i>
                  </span>
                  <h4 className="text-nu30 fontMont font-semibold md:mt-2 mt-4">
                    Prefabrication is not just a trend; it&apos;s the future of
                    efficient and sustainable construction.
                  </h4>
                  <h5 className="text-nu30 fontMont font-normal sm:mt-3 mt-2">
                    — Michael Carter
                  </h5>
                </div>
              </div>
            </div>
            <div className="md:mt-[60px] sm:mt-10 mt-8">
              <div
                className="flex max-xl:flex-wrap items-center gap-3 sm:px-6 px-4 sm:py-8 py-6 border-y-2 border-nu70"
                data-aos="fade-left"
                data-aos-duration="1700">
                <h4 className="text-nu30 fontMont font-semibold">Tags:</h4>

                <span className="text-nu30 font-medium bg-primary px-2 sm:py-2 py-1">
                  #Construction
                </span>
                <span className="text-nu30 font-medium bg-primary px-2 sm:py-2 py-1">
                  #UrbanDesign
                </span>
                <span className="text-nu30 font-medium bg-primary px-2 sm:py-2 py-1">
                  #BuildingDesign
                </span>
                <span className="text-nu30 font-medium bg-primary px-2 sm:py-2 py-1">
                  #ModernConstruction
                </span>
              </div>
              <div className="sm:mt-8 mt-6">
                <div
                  className="flex items-center gap-2"
                  data-aos="fade-left"
                  data-aos-duration="1700">
                  <span className="d-center">
                    <i className="text-nu30 2xl:text-[32px] lg:text-[24px] text-[20px] ph ph-chats-circle"></i>
                  </span>
                  <span className="2xl:text-[32px] lg:text-[24px] text-[20px] fontMont text-nu30 font-bold">
                    Comment (02)
                  </span>
                </div>
                <div className="sm:mt-8 mt-4">
                  <div
                    className="flex max-sm:flex-wrap items-center gap-4 border-[1px] border-nu40 sm:px-6 px-4 sm:py-6 py-4"
                    data-aos="zoom-in"
                    data-aos-duration="2000">
                    <Image
                      className="sm:w-[150px] w-[50px] sm:h-[150px] h-[50px]"
                      src={comment1}
                      alt=""
                    />
                    <div className="gap-3 w-full">
                      <div className="flex justify-between">
                        <div>
                          <span className="text-nu30 sm:font-bold font-semibold sm:text-[20px] text-[18px] pb-1">
                            Sarah Thompson
                          </span>
                          <span className="text-nu50 text-[14px] font-bold pb-1">
                            (Construction Engineer)
                          </span>
                          <span className="text-nu50 text-[14px] font-bold sm:mb-4 mb-3">
                            Jan 22, 2025 11:37 pm
                          </span>
                        </div>
                        <div className="inline-block">
                          <button className="text-nu30 sm:text-[16px] text-[14px] flex d-center sm:gap-2 gap-1 px-2 py-1 bg-primary">
                            <span className="">
                              <i className="sm:text-[20px] text-[18px] ph ph-share-fat"></i>
                            </span>
                            Reply
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-nu50 sm:font-semibold font-medium">
                          Prefabrication is definitely the future of
                          construction! The time savings alone make it a
                          game-changer. Have you seen any new advancements in
                          3D-printed prefab materials?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex max-sm:flex-wrap items-center gap-4 border-[1px] border-nu40 sm:px-6 px-4 sm:py-6 py-4 sm:mt-6 mt-4"
                    data-aos="zoom-in"
                    data-aos-duration="2000">
                    <Image
                      className="sm:w-[150px] w-[50px] sm:h-[150px] h-[50px]"
                      src={comment2}
                      alt=""
                    />
                    <div className="gap-3 w-full">
                      <div className="flex justify-between">
                        <div>
                          <span className="text-nu30 sm:font-bold font-semibold sm:text-[20px] text-[18px] pb-1">
                            Michael Lee
                          </span>
                          <span className="text-nu50 text-[14px] font-bold pb-1">
                            (Architect)
                          </span>
                          <span className="text-nu50 text-[14px] font-bold sm:mb-4 mb-3">
                            Jan 26, 2025 10:56 pm
                          </span>
                        </div>
                        <div className="inline-block">
                          <button className="text-nu30 sm:text-[16px] text-[14px] flex d-center sm:gap-2 gap-1 px-2 py-1 bg-primary">
                            <span className="">
                              <i className="sm:text-[20px] text-[18px] ph ph-share-fat"></i>
                            </span>
                            Reply
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-nu50 sm:font-semibold font-medium">
                          Absolutely! I recently managed a project using
                          3D-printed prefab panels, and it cut construction time
                          by nearly half. The speed and precision are
                          game-changers!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:mt-[60px] sm:mt-10 mt-8">
                <div>
                  <h3
                    className="text-nu30 fontMont sm:font-bold font-semibold"
                    data-aos="fade-right"
                    data-aos-duration="2000">
                    Leave a Comment & Connect!
                  </h3>
                  <p
                    className="text-nu30 font-medium sm:mt-3 mt-2"
                    data-aos="fade-left"
                    data-aos-duration="2000">
                    Engage with us and other readers—your insights make the
                    conversation better!
                  </p>
                </div>
                <div className="bg-nu70 md:px-10 sm:px-8 px-4 md:py-10 sm:py-8 py-4 md:mt-6 mt-4">
                  <form>
                    <input
                      type="text"
                      data-aos="fade-up"
                      data-aos-duration="1400"
                      className="sm:mb-4 mb-3 placeholder:text-nu40 placeholder:font-semibold text-nu30 bg-nu10 border-none outline-none bg-froms sm:px-4 px-2 sm:py-4 py-2 rounded-none"
                      name="name"
                      placeholder="Name*"
                    />

                    <input
                      type="email"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="sm:mb-4 mb-3 placeholder:text-nu40 placeholder:font-semibold text-nu30 bg-nu10 border-none outline-none bg-froms sm:px-4 px-2 sm:py-4 py-2 rounded-none"
                      name="name"
                      placeholder="Email*"
                    />
                    <input
                      type="number"
                      data-aos="fade-up"
                      data-aos-duration="1600"
                      className="sm:mb-4 mb-3 placeholder:text-nu40 placeholder:font-semibold text-nu30 bg-nu10 border-none outline-none bg-froms sm:px-4 px-2 sm:py-4 py-2 rounded-none"
                      name="number"
                      placeholder="Phone*"
                    />
                    <textarea
                      cols={10}
                      rows={6}
                      data-aos="fade-up"
                      data-aos-duration="1700"
                      className="placeholder:text-nu40 bg-nu10 placeholder:font-semibold text-nu30 border-none outline-none bg-froms px-4 py-3 rounded-none"
                      id="message"
                      placeholder="Comment Box"></textarea>
                    <div
                      className="sm:pt-4 pt-3"
                      data-aos="fade-up"
                      data-aos-duration="1800">
                      <div className="text-center inline-block">
                        <button className="btn">
                          <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-bold font-medium">
                            POST COMMENT
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <BlogDetailSide />
        </div>
      </div>
    </section>
  );
}
