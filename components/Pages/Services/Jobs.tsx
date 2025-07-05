import Link from "next/link";
export default function Jobs() {
  return (
    <section className="our-service-section bg-nu10 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
        <div>
          <div className="text-center md:mb-[60px] sm:mb-10 mb-8">
            {/* <h4
              className="text-nu40 fontMont sm:font-semibold font-medium sm:mb-3 mb-2"
              data-aos="fade-right"
              data-aos-duration="2000">
              Our Services
            </h4> */}
            <h1
              className="text-nu30 fontMont sm:font-bold font-semibold sm:mb-4 mb-3"
              data-aos="fade-left"
              data-aos-duration="2000">
                 Jobs 
            </h1>
            <p
              className="text-nu50 font-normal"
              data-aos="fade-right"
              data-aos-duration="2000">
              From concept to completion, we deliver quality craftsmanship and
              innovative solutions across every project.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- card 1 --> */}
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className="card border-2 border-nu40 bg-nu70 md:px-10 sm:px-6 px-3 md:py-10 sm:py-6 py-3 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="inline-block">
                  <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                    <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-wave-sawtooth"></i>
                  </span>
                </div>
                <div className="sm:mt-6 mt-4 w-full h-full">
                  <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                    General Contracting
                  </h4>
                  <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                    End-to-end construction management from concept to
                    completion.
                  </p>
                  <div>
                    <Link
                      href="services-details"
                      className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                      Read More
                      <span className="pt-1">
                        <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className="card border-2 border-nu40 bg-nu70 md:px-10 sm:px-6 px-3 md:py-10 sm:py-6 py-3 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="inline-block">
                  <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                    <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-wrench"></i>
                  </span>
                </div>
                <div className="sm:mt-6 mt-4 w-full h-full">
                  <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                    Project Management
                  </h4>
                  <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                    Efficiently manage every aspect of your project with our
                    experienced team.
                  </p>
                  <div>
                    <Link
                      href="services-details"
                      className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                      Read More
                      <span className="pt-1">
                        <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className="card border-2 border-nu40 bg-nu70 md:px-10 sm:px-6 px-3 md:py-10 sm:py-6 py-3 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="inline-block">
                  <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                    <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-lightning"></i>
                  </span>
                </div>
                <div className="sm:mt-6 mt-4 w-full h-full">
                  <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                    Design & Architecture
                  </h4>
                  <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                    Innovative designs that combine aesthetics with function.
                  </p>
                  <div>
                    <Link
                      href="services-details"
                      className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                      Read More
                      <span className="pt-1">
                        <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 4 --> */}
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className="card border-2 border-nu40 bg-nu70 md:px-10 sm:px-6 px-3 md:py-10 sm:py-6 py-3 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="inline-block">
                  <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                    <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-ladder"></i>
                  </span>
                </div>
                <div className="sm:mt-6 mt-4 w-full h-full">
                  <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                    Commercial Construction
                  </h4>
                  <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                    Delivering innovative spaces for businesses to grow and
                    thrive.
                  </p>
                  <div>
                    <Link
                      href="services-details"
                      className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                      Read More
                      <span className="pt-1">
                        <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 5 --> */}
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className="card border-2 border-nu40 bg-nu70 md:px-10 sm:px-6 px-3 md:py-10 sm:py-6 py-3 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="inline-block">
                  <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                    <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-bounding-box"></i>
                  </span>
                </div>
                <div className="sm:mt-6 mt-4 w-full h-full">
                  <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                    Residential Construction
                  </h4>
                  <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                    Providing end-to-end solutions for unique, personalized
                    spaces.
                  </p>
                  <div>
                    <Link
                      href="services-details"
                      className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                      Read More
                      <span className="pt-1">
                        <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 6 --> */}
            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <div
                className="card border-2 border-nu40 bg-nu70 md:px-10 sm:px-6 px-3 md:py-10 sm:py-6 py-3 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="inline-block">
                  <span className="sm:px-4 px-[10px] sm:py-[14px] py-[10px] bg-primary">
                    <i className="text-nu30 d-center sm:text-[28px] text-[24px] ph ph-diamonds-four"></i>
                  </span>
                </div>
                <div className="sm:mt-6 mt-4 w-full h-full">
                  <h4 className="text-nu30 sm:mb-2 mb-1 fontMont">
                    Renovation & Remodeling
                  </h4>
                  <p className="text-nu30 sm:mb-6 mb-4 sm:text-[18px] text-[14px]">
                    Innovative designs that combine aesthetics with function.
                  </p>
                  <div>
                    <Link
                      href="services-details"
                      className="text-nu30 font-bold flex items-center gap-2 hover:text-nu40 duration-500">
                      Read More
                      <span className="pt-1">
                        <i className="sm:text-[20px] text-[16px] ph-bold ph-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
