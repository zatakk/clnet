"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import CountUp from "react-countup";
import Link from "next/link";

export default function HeroThree() {
  return (
    <section className="relative">
      {/* <!-- hero start --> */}
      <div className="swiper mySwiperh">
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
          {/* <!-- hero 1 --> */}
          <SwiperSlide className="swiper-slide hero1">
            <div className="hero2-section xl:py-[400px] lg:py-[340px] md:py-[280px] sm:py-[240px] py-[260px]"></div>
          </SwiperSlide>
          {/* <!-- hero 2 --> */}
          <SwiperSlide className="swiper-slide hero2">
            <div className="hero2-section xl:py-[400px] lg:py-[340px] md:py-[280px] sm:py-[240px] py-[260px]"></div>
          </SwiperSlide>
          {/* <!-- hero 3 --> */}
          <SwiperSlide className="swiper-slide hero3">
            <div className="hero2-section xl:py-[400px] lg:py-[340px] md:py-[280px] sm:py-[240px] py-[260px]"></div>
          </SwiperSlide>
          {/* <!-- hero 4 --> */}
          <SwiperSlide className="swiper-slide hero4">
            <div className="hero2-section xl:py-[400px] lg:py-[340px] md:py-[280px] sm:py-[240px] py-[260px]"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container absolute xl:top-[200px] lg:top-[160px] md:top-[120px] sm:top-[80px] top-[40px] left-1/2 -translate-x-1/2 z-30">
        <div className="relative z-30 text-center sm:pl-8 pl-6 rounded-l-md">
          <h1
            className="display-4 fontMont sm:font-bold font-semibold sm:mb-3 mb-2"
            data-aos="fade-up"
            data-aos-duration="1600">
            We Build the Future <br />
            with Strength & <br />
            Precision
          </h1>
          <p
            className="text-nu20 lg:text-2xl font-normal"
            data-aos="fade-up"
            data-aos-duration="2000">
            Delivering top-notch construction solutions on time and within
            budget.
          </p>
          <div
            className="md:mt-14 sm:mt-10 mt-8"
            data-aos="fade-up"
            data-aos-duration="2400">
            <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 md:py-3 sm:py-2 py-1 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block">
              <Link
                href="contact"
                className="sm:text-[18px] text-[16px] font-medium">
                Request a Quote
              </Link>
            </div>
            <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 md:py-3 sm:py-2 py-1 sm:mt-0 mt-3 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block ml-2">
              <Link
                href="projects"
                className="sm:text-[18px] text-[16px] font-medium">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- hero start --> */}
      {/* <!--odometer start  --> */}
      <div className="z-30 relative">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 justify-center bg-primary md:px-10 sm:px-8 px-6 py-10 lg:-mt-[96px] md:-mt-[90px] sm:-mt-[100px] -mt-[170px]">
            {/* <!-- number 1 --> */}
            <div
              className="md:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="1400">
              <div>
                <h1 className="counters flex justify-center items-center text-nu30 fontMont display-4">
                  <CountUp
                    className="odometer px-1"
                    data-counter-value="500"
                    end={500}
                    duration={5}
                    enableScrollSpy></CountUp>
                  <span>+</span>
                </h1>
                <p className="text-nu50 text-center font-semibold">
                  Completed Projects
                </p>
              </div>
            </div>
            {/* <!-- number 2 --> */}
            <div
              className="md:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="1600">
              <div>
                <h1 className="counters flex justify-center items-center fontMont text-nu30 display-4">
                  <CountUp
                    className="odometer px-1"
                    data-counter-value="15"
                    end={15}
                    duration={5}
                    enableScrollSpy></CountUp>
                  <span>+</span>
                </h1>
                <p className="text-nu50 text-center font-semibold">
                  Years of Experience
                </p>
              </div>
            </div>
            {/* <!-- number 3 --> */}
            <div
              className="md:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="1800">
              <div>
                <h1 className="counters flex justify-center fontMont items-center text-nu30 display-4">
                  <CountUp
                    className="odometer px-1"
                    data-counter-value="98"
                    end={98}
                    duration={5}
                    enableScrollSpy></CountUp>
                  <span>%</span>
                </h1>
                <p className="text-nu50 text-center font-semibold">
                  Satisfied Clients
                </p>
              </div>
            </div>
            {/* <!-- number 4 --> */}
            <div
              className="md:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="2000">
              <div>
                <h1 className="counters flex justify-center fontMont items-center text-nu30 display-4">
                  <CountUp
                    className="odometer px-1"
                    data-counter-value="15"
                    end={15}
                    duration={5}
                    enableScrollSpy></CountUp>
                  <span>+</span>
                </h1>
                <p className="text-nu50 text-center font-semibold">
                  Countries Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--odometer start  --> */}
    </section>
  );
}
