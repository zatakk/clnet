"use client";
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroTwo() {
  return (
    <section>
      {/* <!-- hero start --> */}
      <div className="hero1-section 2xl:pt-[160px] xl:pt-[130px] lg:pt-[100px] md:pt-20 sm:pt-16 pt-12 2xl:pb-[220px] xl:pb-[190px] lg:pb-[180px] md:pb-[180px] sm:pb-[190px] pb-[260px]">
        <div className="container">
          <div className="relative z-30 border-l-8 border-primary sm:pl-8 pl-6 rounded-l-md">
            <h1
              className="display-4 fontMont sm:font-bold font-semibold sm:mb-3 mb-2"
              data-aos="fade-up"
              data-aos-duration="1600">
              We Build the Future <br />
              with Strength & <br />
              Precision
            </h1>
            <p
              className="text-nu20 lg:text-2xl font-normal lg:mb-14 sm:mb-10 mb-8"
              data-aos="fade-up"
              data-aos-duration="1800">
              Delivering top-notch construction solutions on time and within
              budget.
            </p>
            <div className="" data-aos="fade-up" data-aos-duration="2000">
              <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 md:py-3 sm:py-2 py-1 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block">
                <Link
                  href="contact"
                  className="sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                  Request a Quote
                </Link>
              </div>
              <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 md:py-3 sm:py-2 py-1 sm:mt-0 mt-3 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block ml-2">
                <Link
                  href="projects"
                  className="sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- hero start --> */}
      {/* <!--odometer start  --> */}
      <div>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 justify-center bg-nu10 md:px-10 sm:px-8 px-6 py-10 lg:-mt-[96px] md:-mt-[90px] sm:-mt-[100px] -mt-[170px] border-b-8 border-primary">
            {/* <!-- number 1 --> */}
            <div
              className="md:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="1200">
              <div>
                <h1 className="counters flex justify-center items-center text-nu30 fontMont display-4">
                  <CountUp
                    end={500}
                    duration={5}
                    enableScrollSpy
                    className="odometer px-1"
                    data-counter-value="500"></CountUp>
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
              data-aos-duration="1400">
              <div>
                <h1 className="counters flex justify-center items-center fontMont text-nu30 display-4">
                  <CountUp
                    end={15}
                    duration={5}
                    enableScrollSpy
                    className="odometer px-1"
                    data-counter-value="15"></CountUp>
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
              data-aos-duration="1600">
              <div>
                <h1 className="counters flex justify-center fontMont items-center text-nu30 display-4">
                  <CountUp
                    end={98}
                    duration={5}
                    enableScrollSpy
                    className="odometer px-1"
                    data-counter-value="98"></CountUp>
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
              data-aos-duration="1800">
              <div>
                <h1 className="counters flex justify-center fontMont items-center text-nu30 display-4">
                  <CountUp
                    end={15}
                    duration={5}
                    enableScrollSpy
                    className="odometer px-1"
                    data-counter-value="15"></CountUp>
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
