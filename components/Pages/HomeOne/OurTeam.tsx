"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import teammember1 from "@/public/images/team-member1.png";
import teammember2 from "@/public/images/team-member2.png";
import teammember3 from "@/public/images/team-member3.png";

export default function OurTeam() {
  return (
    <section className="teamMember-section bg-nu10 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
        <div>
          <div className="grid grid-cols-12 gap-6 md:gap-4 items-end">
            <div className="lg:col-span-6 md:col-span-8 col-span-12">
              <h4
                className="text-nu40 sm:mb-3 mb-2 fontMont"
                data-aos="fade-right"
                data-aos-duration="2000">
                Our Team Member
              </h4>
              <h1
                className="text-nu30 fontMont sm:font-bold font-semibold"
                data-aos="fade-right"
                data-aos-duration="2100">
                Meet Our Expert Team
              </h1>
            </div>
            <div className="lg:col-span-6 md:col-span-4 col-span-12 flex md:justify-end items-end">
              <div
                className="text-end"
                data-aos="fade-left"
                data-aos-duration="2200">
                <Link href="team" className="btn">
                  <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                    Join Our Team
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="swiper mySwipery mt-14">
            <Swiper
              className="swiper-wrapper"
              loop
              speed={1000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              centeredSlides={true}
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-nexty",
                prevEl: ".swiper-button-prevy",
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
              <SwiperSlide className="swiper-slide team-area bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="team">
                    <Image
                      className="w-full h-full img"
                      src={teammember1}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[20px] right-[20px]">
                    <ul className="team-icons">
                      <li>
                        <Link href="javascript:void(0)">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:px-6 px-4 sm:py-6 py-4 h-full bg-secondary1">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link href="team">
                        <h4 className="text-nu30 fontMont font-medium">
                          Michael Lee
                        </h4>
                      </Link>
                      <p className="text-nu30 pt-1">Sr. Structural Engineer</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 2 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="team">
                    <Image
                      className="w-full h-full img"
                      src={teammember2}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[20px] right-[20px]">
                    <ul className="team-icons">
                      <li>
                        <Link href="javascript:void(0)">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:px-6 px-4 sm:py-6 py-4 h-full bg-secondary1">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link href="team">
                        <h4 className="text-nu30 fontMont font-medium">
                          Emma Brown
                        </h4>
                      </Link>
                      <p className="text-nu30 pt-1">Jr. Project Manager</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 3 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="team">
                    <Image
                      className="w-full h-full img"
                      src={teammember3}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[20px] right-[20px]">
                    <ul className="team-icons">
                      <li>
                        <Link href="javascript:void(0)">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:px-6 px-4 sm:py-6 py-4 h-full bg-secondary1">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link href="team">
                        <h4 className="text-nu30 fontMont font-medium">
                          John Smith
                        </h4>
                      </Link>
                      <p className="text-nu30 pt-1">Lead Architect</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 4 --> */}
              <SwiperSlide className="swiper-slide team-area bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="team">
                    <Image
                      className="w-full h-full img"
                      src={teammember1}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[20px] right-[20px]">
                    <ul className="team-icons">
                      <li>
                        <Link href="javascript:void(0)">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:px-6 px-4 sm:py-6 py-4 h-full bg-secondary1">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link href="team">
                        <h4 className="text-nu30 fontMont font-medium">
                          Michael Lee
                        </h4>
                      </Link>
                      <p className="text-nu30 pt-1">Sr. Structural Engineer</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 5 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="team">
                    <Image
                      className="w-full h-full img"
                      src={teammember2}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[20px] right-[20px]">
                    <ul className="team-icons">
                      <li>
                        <Link href="javascript:void(0)">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:px-6 px-4 sm:py-6 py-4 h-full bg-secondary1">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link href="team">
                        <h4 className="text-nu30 fontMont font-medium">
                          Emma Brown
                        </h4>
                      </Link>
                      <p className="text-nu30 pt-1">Jr. Project Manager</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <!-- card 6 --> */}
              <SwiperSlide className="swiper-slide bg-nu10 sm:px-4 px-2">
                <div className="img-box relative">
                  <Link href="team">
                    <Image
                      className="w-full h-full img"
                      src={teammember3}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[20px] right-[20px]">
                    <ul className="team-icons">
                      <li>
                        <Link href="javascript:void(0)">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                        </Link>
                      </li>
                      <li className="sm:pt-3 pt-2">
                        <Link
                          href="javascript:void(0)"
                          className="sm:pt-3 pt-2">
                          <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:px-6 px-4 sm:py-6 py-4 h-full bg-secondary1">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link href="team">
                        <h4 className="text-nu30 fontMont font-medium">
                          John Smith
                        </h4>
                      </Link>
                      <p className="text-nu30 pt-1">Lead Architect</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span>
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
              <button
                aria-label="Slide Prev"
                className="swiper-button-prevy btn">
                <span className="px-3 py-2 flex items-center">
                  <i className="sm:text-[26px] text-[18px] ph-bold ph-arrow-left"></i>
                </span>
              </button>
              <button
                aria-label="Slide Next"
                className="swiper-button-nexty btn">
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
