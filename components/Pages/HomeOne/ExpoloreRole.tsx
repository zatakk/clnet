"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import courseImage from "@/public/images/Student-1.webp";

export default function OurRecentProjects() {
  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
        <div>
          <div className="grid grid-cols-12 lg:gap-6 items-end mb-14">
            <div className="2xl:col-span-6 lg:col-span-7 col-span-12">
              <div className="mb-2">
                <h4
                  className="text-nu40 lg:mb-3 mb-2 fontMont sm:font-semibold font-medium"
                  data-aos="fade-right"
                  data-aos-duration="1600">
                  Explore Your Role
                </h4>
                <h1
                  className="text-nu30 fontMont sm:font-bold font-semibold"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  Explore Your Role
                </h1>
              </div>
            </div>
            <div className="lg:col-span-1 2xl:col-span-2"></div>
            <div className="lg:col-span-4 col-span-12">
              {/* <div className="">

                <Link
                  href="projects"
                  className="btn"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                    Explore
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="swiper mySwiperz">
            <Swiper
              className="swiper-wrapper"
              loop
              speed={1000}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-nextz",
                prevEl: ".swiper-button-prevz",
              }}
              breakpoints={{
                1400: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                578: {
                  slidesPerView: 1,
                },
                375: {
                  slidesPerView: 1,
                },
              }}>
              {/* <!-- card 1 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative w-full">
                  <Link href="students">
                    <Image
                      className="w-full h-full img"
                      src={courseImage}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div className="info-box">
                      <Link href="students">
                        <h4 className="text-nu10 fontMont sm:font-bold font-semibold">
                          Students
                        </h4>
                      </Link>
                      <p className="text-nu10 mt-2 font-medium">Open for all 1st year to final year Diploma and Engineering Students interested to pursue a Rewarding Career in Construction.</p>
                      <div className="sm:mt-6 mt-4">
                        <Link href="students" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            Learn More
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 2 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="instructors">
                    <Image
                      className="w-full h-full img"
                      src={courseImage}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div className="info-box">
                      <Link href="instructors">
                        <h4 className="text-nu10 fontMont sm:font-bold font-semibold">
                          Instructor
                        </h4>
                      </Link>
                      <p className="text-nu10 mt-2 font-medium">Subject Matter Experts with passion for sharing their industry knowledge & experience </p>
                      <div className="sm:mt-6 mt-4">
                        <Link href="instructors" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            Learn More
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 3 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="professionals">
                    <Image
                      className="w-full h-full img"
                      src={courseImage}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div className="info-box">
                      <Link href="professionals">
                        <h4 className="text-nu10 fontMont">
                          Professionals
                        </h4>
                      </Link>
                      <p className="text-nu10 mt-2 font-medium">On Demand Portal for Construction Professionals with role based learning & proactive networking</p>
                      <div className="sm:mt-6 mt-4">
                        <Link href="professionals" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            Learn More
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 4 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative w-full">
                  <Link href="colleges">
                    <Image
                      className="w-full h-full img"
                      src={courseImage}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div className="info-box">
                      <Link href="colleges">
                        <h4 className="text-nu10 fontMont sm:font-bold font-semibold">
                          Colleges
                        </h4>
                      </Link>
                      <p className="text-nu10 mt-2 font-medium">The only portal dedicated to handle Academic Requirements of Educational Institutions & interface with Industry for internships / placements.</p>
                      <div className="sm:mt-6 mt-4">
                        <Link href="colleges" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            Learn More
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 5 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="subject-experts">
                    <Image
                      className="w-full h-full img"
                      src={courseImage}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div className="info-box">
                      <Link href="subject-experts">
                        <h4 className="text-nu10 fontMont sm:font-bold font-semibold">
                          Contractors
                        </h4>
                      </Link>
                      <p className="text-nu10 mt-2 font-medium">Providing an easy business connect interface for contractors to market & promote their services </p>
                      <div className="sm:mt-6 mt-4">
                        <Link href="subject-experts" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            Learn More
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 6 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="subject-experts">
                    <Image
                      className="w-full h-full img"
                      src={courseImage}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div className="info-box">
                      <Link href="subject-experts">
                        <h4 className="text-nu10 fontMont">
                          Suppliers
                        </h4>
                      </Link>
                      <p className="text-nu10 mt-2 font-medium">An focused e-commerce application for Construction Suppliers to easily reach out to the larger Construction Market</p>
                      <div className="sm:mt-6 mt-4">
                        <Link href="subject-experts" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            Learn More
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="corporates">
                    <Image
                      className="w-full h-full img"
                      src={courseImage}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div className="info-box">
                      <Link href="corporates">
                        <h4 className="text-nu10 fontMont">
                          Corporate
                        </h4>
                      </Link>
                      <p className="text-nu10 mt-2 font-medium">The One Stop Shop for the small medium & large Corporates to handle all their Construction Talent Management Requirements.</p>
                      <div className="sm:mt-6 mt-4">
                        <Link href="corporates" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            Learn More
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:mt-[60px] sm:mt-10 mt-8">
            <div
              className="flex justify-center items-center gap-4"
              data-aos="fade-up"
              data-aos-duration="2500">
              <button className="swiper-button-prevz btn">
                <span className="px-3 py-2 flex items-center">
                  <i className="sm:text-[26px] text-[18px] ph-bold ph-arrow-left"></i>
                </span>
              </button>
              <button className="swiper-button-nextz btn">
                <span className="px-3 py-2 flex items-center">
                  <i className="sm:text-[26px] text-[18px] ph-bold ph-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
