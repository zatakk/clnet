"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

export default function OurServicesThree() {
  return (
    <section className="bg-nu70 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
        <div>
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="lg:col-span-6 md:col-span-8 col-span-12">
              <h4
                className="text-nu40 sm:mb-3 mb-2 fontMont sm:font-bold font-semibold"
                data-aos="fade-right"
                data-aos-duration="2000">
                Our Services in Construction
              </h4>
              <h1
                className="text-nu30 fontMont sm:font-bold font-semibold"
                data-aos="fade-right"
                data-aos-duration="2500">
                Building with Precision, Innovation, and Integrity
              </h1>
            </div>
            <div className="lg:col-span-6 md:col-span-4 col-span-12 flex md:justify-end items-end">
              <div
                className="text-end"
                data-aos="fade-left"
                data-aos-duration="2500">
                <Link href="services" className="btn">
                  <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                    Explore All Service
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="swiper mySwiperhom3 mt-14">
            <Swiper
              className="swiper-wrapper"
              loop
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              slidesPerView={1}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-nextx",
                prevEl: ".swiper-button-prevx",
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
                  slidesPerView: 1,
                },
                578: {
                  slidesPerView: 1,
                },
                375: {
                  slidesPerView: 1,
                },
              }}>
              {/* <!-- card 1 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="bg-nu10 lg:px-10 sm:px-6 px-3 lg:py-10 sm:py-6 py-3">
                  <div className="inline-block">
                    <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                      <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-command"></i>
                    </span>
                  </div>
                  <div className="sm:pt-6 pt-4 w-full h-full">
                    <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                      General Contracting
                    </h4>
                    <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                      End-to-end construction management from concept to
                      completion.
                    </p>
                    <div>
                      <Link
                        href="services"
                        className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                        Read More
                        <span className="pt-1">
                          <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 2 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="bg-nu10 lg:px-10 sm:px-6 px-3 lg:py-10 sm:py-6 py-3">
                  <div className="inline-block">
                    <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                      <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-projector-screen-chart"></i>
                    </span>
                  </div>
                  <div className="sm:pt-6 pt-4 w-full h-full">
                    <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                      Project Management
                    </h4>
                    <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                      Efficiently manage every aspect of your project with our
                      experienced team.
                    </p>
                    <div>
                      <Link
                        href="services"
                        className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                        Read More
                        <span className="pt-1">
                          <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 3 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="bg-nu10 lg:px-10 sm:px-6 px-3 lg:py-10 sm:py-6 py-3">
                  <div className="inline-block">
                    <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                      <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-wrench"></i>
                    </span>
                  </div>
                  <div className="sm:pt-6 pt-4 w-full h-full">
                    <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                      Design & Architecture
                    </h4>
                    <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                      Innovative designs that combine aesthetics with function.
                    </p>
                    <div>
                      <Link
                        href="services"
                        className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                        Read More
                        <span className="pt-1">
                          <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 4 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="bg-nu10 lg:px-10 sm:px-6 px-3 lg:py-10 sm:py-6 py-3">
                  <div className="inline-block">
                    <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                      <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-command"></i>
                    </span>
                  </div>
                  <div className="sm:pt-6 pt-4 w-full h-full">
                    <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                      General Contracting
                    </h4>
                    <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                      End-to-end construction management from concept to
                      completion.
                    </p>
                    <div>
                      <Link
                        href="services"
                        className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                        Read More
                        <span className="pt-1">
                          <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 5 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="bg-nu10 lg:px-10 sm:px-6 px-3 lg:py-10 sm:py-6 py-3">
                  <div className="inline-block">
                    <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                      <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-projector-screen-chart"></i>
                    </span>
                  </div>
                  <div className="sm:pt-6 pt-4 w-full h-full">
                    <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                      Project Management
                    </h4>
                    <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                      Efficiently manage every aspect of your project with our
                      experienced team.
                    </p>
                    <div>
                      <Link
                        href="services"
                        className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                        Read More
                        <span className="pt-1">
                          <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 6 --> */}
              <SwiperSlide className="swiper-slide">
                <div className="bg-nu10 lg:px-10 sm:px-6 px-3 lg:py-10 sm:py-6 py-3">
                  <div className="inline-block">
                    <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                      <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-wrench"></i>
                    </span>
                  </div>
                  <div className="sm:pt-6 pt-4 w-full h-full">
                    <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                      Design & Architecture
                    </h4>
                    <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                      Innovative designs that combine aesthetics with function.
                    </p>
                    <div>
                      <Link
                        href="services"
                        className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                        Read More
                        <span className="pt-1">
                          <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                        </span>
                      </Link>
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
              data-aos-duration="2000">
              <button
                aria-label="Slide Prev"
                className="swiper-button-prevx btn">
                <span className="px-3 py-2 flex items-center">
                  <i className="sm:text-[26px] text-[18px] ph-bold ph-arrow-left"></i>
                </span>
              </button>
              <button
                aria-label="Slide Next"
                className="swiper-button-nextx btn">
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
