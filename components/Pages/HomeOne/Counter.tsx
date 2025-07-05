"use client";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <section className="bg-nu70 lg:py-20 md:py-16 py-[60px] lg:mb-20 md:mb-16 mb-[60px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 justify-center bg-secondary1 md:px-10 sm:px-8 px-6 py-10 overflow-hidden">
          {/* <!-- number 1 --> */}
          <div
            className="md:col-span-3 sm:col-span-6 col-span-12"
            data-aos="fade-up"
            data-aos-duration="1400">
            <div>
              <h1 className="counters flex justify-center items-center text-nu30 fontMont display-4">
                <CountUp
                  end={300}
                  duration={5}
                  enableScrollSpy
                  className="odometer px-1"
                  data-counter-value="300"></CountUp>
                <span>+</span>
              </h1>
              <p className="text-nu50 text-center">Completed Projects</p>
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
                  end={15}
                  duration={5}
                  enableScrollSpy
                  className="odometer px-1"
                  data-counter-value="15"></CountUp>
                <span>+</span>
              </h1>
              <p className="text-nu50 text-center">Years of Experience</p>
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
                  end={98}
                  duration={5}
                  enableScrollSpy
                  className="odometer px-1"
                  data-counter-value="98"></CountUp>
                <span>%</span>
              </h1>
              <p className="text-nu50 text-center">Satisfied Clients</p>
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
                  end={15}
                  duration={5}
                  enableScrollSpy
                  className="odometer px-1"
                  data-counter-value="15"></CountUp>
                <span>+</span>
              </h1>
              <p className="text-nu50 text-center">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
