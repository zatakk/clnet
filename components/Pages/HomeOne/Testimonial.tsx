"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import testimonialman from "@/public/images/testimonial-man.png";
import testimonialman1 from "@/public/images/testimonial-man1.png";

export default function Testimonial() {
  return (
    <section className="testimonial-section sm:pt-10 pt-8 md:pb-[90px] sm:pb-16 pb-10">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-6 md:col-span-8 col-span-12">
            <div className="md:pb-[40px] sm:pb-10 pb-6">
              <h1
                className="display-2 textColor fontMont"
                data-aos="fade-right"
                data-aos-duration="2000">
                TESTIMONIAL
              </h1>
              <h1
                className="text-nu30 flex items-center fontMont gap-2 md:pt-[60px] sm:pt-10 pt-6"
                data-aos="fade-left"
                data-aos-duration="2000">
                Client
                <span className="text-primary font-semibold xl:text-[48px] md:text-[36px] text-[30px]">
                  Feedback
                </span>
              </h1>
            </div>
            <div className="relative">
              <div className="swiper mySwiperm">
                <Swiper
                  className="swiper-wrapper !pt-10"
                  loop
                  speed={1000}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={0}
                  slidesPerView={1}
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: ".swiper-button-nextm",
                    prevEl: ".swiper-button-prevm",
                  }}
                  breakpoints={{
                    1400: {
                      slidesPerView: 1,
                    },
                    1200: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
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
                  <SwiperSlide>
                    <div className="swiper-slide !relative bg-nu10 sm:border-l-8 border-l-4 border-primary rounded-t-md rounded-b-md md:px-10 sm:px-7 px-4 md:py-10 sm:py-7 py-4">
                      <h2 className="text-nu30 fontMont">
                        What Our Clients Say
                      </h2>
                      <div className="flex items-center gap-4 sm:pt-6 pt-4">
                        <Image src={testimonialman} alt="" />
                        <div>
                          <h4 className="text-nu30 font-medium">John Smith</h4>
                          <p className="text-nu30">Project Manager, DEF Ltd</p>
                        </div>
                      </div>
                      <div className="md:mt-6 mt-4">
                        <i className="text-primary ph-fill ph-star"></i>
                        <i className="text-primary ph-fill ph-star"></i>
                        <i className="text-primary ph-fill ph-star"></i>
                        <i className="text-primary ph-fill ph-star"></i>
                        <i className="text-primary ph-fill ph-star"></i>
                      </div>
                      <p className="text-nu30 md:mt-6 mt-3 whitespace-medium">
                        Working with this team was the best decision we made for
                        our project. Their expertise and communication were
                        top-notch, and they delivered everything on time. The
                        final result was stunning and exactly what we
                        envisioned. Thank you for an amazing experience!
                      </p>
                      <span className="absolute -top-[15px] sm:-top-[30px] sm:left-[20px] left-[10px]">
                        <i className="md:px-3 sm:px-2 px-1 md:py-3 sm:py-2 py-1 text-nu30 bg-primary rounded-md sm:text-[32px] text-[20px] ph-bold ph-quotes"></i>
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide !relative bg-nu10 sm:border-l-8 border-l-4 border-primary rounded-t-md rounded-b-md md:px-10 sm:px-7 px-4 md:py-10 sm:py-7 py-4">
                    <h2 className="text-nu30 fontMont">What Our Clients Say</h2>
                    <div className="flex items-center gap-4 sm:pt-6 pt-4">
                      <Image src={testimonialman1} alt="" />
                      <div>
                        <h4 className="text-nu30 font-medium">
                          Ethan Williams
                        </h4>
                        <p className="text-nu30">Project Manager, DEF Ltd</p>
                      </div>
                    </div>
                    <div className="md:mt-6 mt-4">
                      <i className="text-primary ph-fill ph-star"></i>
                      <i className="text-primary ph-fill ph-star"></i>
                      <i className="text-primary ph-fill ph-star"></i>
                      <i className="text-primary ph-fill ph-star"></i>
                      <i className="text-primary ph-fill ph-star"></i>
                    </div>
                    <p className="text-nu30 md:mt-6 mt-3 whitespace-medium">
                      I was hesitant at first, but they completely won me over.
                      Their professionalism and creativity are unmatched. They
                      didn’t just meet my expectations; they exceeded them! I
                      can’t recommend them enough. Exceptional service! They
                      understood our needs perfectly.
                    </p>

                    <span className="absolute -top-[15px] sm:-top-[30px] sm:left-[20px] left-[10px]">
                      <i className="md:px-3 sm:px-2 px-1 md:py-3 sm:py-2 py-1 text-nu30 bg-primary rounded-md sm:text-[32px] text-[20px] ph-bold ph-quotes"></i>
                    </span>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="md:block hidden">
                <div className="absolute top-1/2 -left-[100px] -translate-y-1/2">
                  <button
                    className="swiper-button-prevm btn"
                    data-aos="fade-right"
                    data-aos-duration="2000">
                    <span className="px-3 py-2 duration-500 flex items-center">
                      <i className="sm:text-[26px] text-[18px] ph-bold ph-arrow-left"></i>
                    </span>
                  </button>
                </div>
                <div className="absolute top-1/2 -right-[100px] -translate-y-1/2">
                  <button
                    className="swiper-button-nextm btn"
                    data-aos="fade-left"
                    data-aos-duration="2000">
                    <span className="px-3 py-2 duration-500 flex items-center">
                      <i className="sm:text-[26px] text-[18px] ph-bold ph-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-8 md:hidden block">
                <div
                  className="flex item-center justify-center gap-8"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <div className="">
                    <button className="swiper-button-prevm btn">
                      <span className="px-3 py-2 duration-500 flex items-center">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-arrow-left"></i>
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <button className="swiper-button-nextm btn">
                      <span className="px-3 py-2 duration-500 flex items-center">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 md:col-span-4"></div>
        </div>
      </div>
    </section>
  );
}
