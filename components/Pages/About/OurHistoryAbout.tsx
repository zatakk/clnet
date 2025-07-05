"use client";
import CountUp from "react-countup";
import Image from "next/image";
import history from "@/public/images/about-page/history.png";

export default function OurHistoryAbout() {
  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-4 sm:gap-6">
          <div className="lg:col-span-6 col-span-12">
            <div>
              <h4
                className="text-nu30 fontMont font-semibold sm:mb-3 mb-2"
                data-aos="fade-right"
                data-aos-duration="1600">
                Our History
              </h4>
              <h1
                className="text-nu30 fontMont font-semibold sm:mb-6 mb-4"
                data-aos="fade-right"
                data-aos-duration="1700">
                Our Journey From Foundations to Milestones
              </h1>
              <p
                className="text-nu30 font-medium sm:mb-6 mb-3"
                data-aos="fade-right"
                data-aos-duration="1800">
                The journey started with a simple mission: to create spaces that
                blend functionality with aesthetics. Over the years, experience,
                innovation, and a client-focused approach have fueled growth,
                enabling the completion of projects that leave a lasting
                impression. This journey is built on a foundation of trust,
                collaboration, and a relentless pursuit of excellence.
              </p>
              <p
                className="text-nu30 font-medium"
                data-aos="fade-right"
                data-aos-duration="1900">
                Every project reflects the passion for turning visions into
                reality, ensuring quality at every step. The goal remains to
                continue shaping spaces that inspire and stand the test of time.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-5 col-span-12">
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-duration="2000">
              <Image className="w-full h-full" src={history} alt="" />
              <div className="-mt-[4rem] text-center">
                <div className="border-8 border-nu10 bg-primary rounded-2xl px-6 py-6 inline-block">
                  <h1 className="counters flex justify-center items-center text-nu30">
                    <CountUp
                      className="odometer px-1"
                      data-counter-value="15"
                      end={15}
                      duration={5}
                      enableScrollSpy></CountUp>
                    <span>+</span>
                  </h1>
                  <p className="text-nu30 font-medium text-center">
                    Years Of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
