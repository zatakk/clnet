"use client";
import Image from "next/image";
import Link from "next/link";
import about1 from "@/public/images/about1.png";
import about2 from "@/public/images/about2.png";
import CountUp from "react-countup";

export default function AboutOne() {
  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 col-span-12">
            <div>
              <h4
                className="text-nu40 fontMont font-semibold sm:mb-3 mb-2"
                data-aos="fade-right"
                data-aos-duration="2500">
                About Us
              </h4>
              <h1
                className="text-nu30 fontMont sm:font-bold font-semibold sm:mb-6 mb-4"
                data-aos="fade-up"
                data-aos-duration="1500">
                Committed to Excellence <br />
                in Construction
              </h1>
              <p
                className="text-nu30"
                data-aos="fade-up"
                data-aos-duration="1600">
                For over 15 years, we have been delivering top-notch
                construction services that transform dreams into reality. With a
                commitment to innovation, precision, and sustainability, we’ve
                completed 300+ projects globally.
              </p>

              <div className="md:mt-14 sm:mt-8 mt-6">
                <div
                  className="flex max-sm:flex-wrap gap-1 sm:gap-3"
                  data-aos="fade-up"
                  data-aos-duration="1600">
                  <div className="mt-3">
                    <span className="d-center">
                      <i className="ph-bold ph-factory sm:px-[10px] px-2 sm:py-[10px] py-2 bg-primary rounded-md text-nu30 md:text-[26px] text-[18px]"></i>
                    </span>
                  </div>
                  <div>
                    <h5 className="text-nu30">Expert Team of Professionals</h5>
                    <p className="text-nu50">
                      Our team consists of skilled architects, engineers, and
                      builders with decades of experience.
                    </p>
                  </div>
                </div>
                <div
                  className="flex max-sm:flex-wrap gap-1 sm:gap-3 sm:mt-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <div className="mt-3">
                    <span className="d-center">
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
                  className="flex max-sm:flex-wrap gap-1 sm:gap-3 sm:mt-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2500">
                  <div className="mt-3">
                    <span className="d-center">
                      <i className="sm:px-[10px] px-2 sm:py-[10px] py-2 bg-primary rounded-md text-nu30 md:text-[26px] text-[18px] ph-bold ph-medal"></i>
                    </span>
                  </div>
                  <div>
                    <h5 className="text-nu30">Award-Winning Projects</h5>
                    <p className="text-nu50">
                      Our work has been recognized with multiple industry awards
                      for excellence and innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="lg:mt-10 md:mt-8 mt-6"
                data-aos="fade-up"
                data-aos-duration="2500">
                <Link href="about" className="btn2">
                  <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                    Discover About
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative lg:ml-6 max-lg:mt-10 max-sm:mt-8">
              <Image
                className="border-8 border-primary"
                data-aos="fade-up"
                data-aos-duration="2000"
                src={about1}
                alt=""
              />
              <div className="absolute top-[60px] 2xl:right-0 xl:-right-[40px] lg:-right-[100px] md:right-[30px] sm:-right-[100px] -right-[160px]">
                <Image
                  className="border-8 border-nu10 2xl:w-full xl:w-[80%] sm:w-[70%] w-[50%] 2xl:h-full xl:h-[80%] sm:h-[70%] h-[50%]"
                  data-aos="fade-left"
                  data-aos-duration="2500"
                  src={about2}
                  alt=""
                />
              </div>
              <div className="hidden md:block absolute bottom-0 2xl:right-[100px] xl:right-[0px] lg:-right-[10px] md:right-[130px] sm:right-0 right-0">
                <div
                  className="border-8 border-nu10 bg-nu30 px-6 py-6 inline-block w-full 2xl:h-full sm:h-[80%]"
                  data-aos="fade-left"
                  data-aos-duration="2500">
                  <h1 className="counters flex items-center">
                    <CountUp
                      end={15}
                      duration={5}
                      enableScrollSpy
                      className="odometer px-1"
                      data-counter-value="15"></CountUp>
                    <span>+</span>
                  </h1>
                  <p className="font-medium text-nu20">Years Of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
