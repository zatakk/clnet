import Image from "next/image";
import Link from "next/link";
import home2recent1 from "@/public/images/home2-recent1.png";
import home2recent2 from "@/public/images/home2-recent2.png";
import home2recent3 from "@/public/images/home2-recent3.png";
import home2recent4 from "@/public/images/home2-recent4.png";
import home2recent5 from "@/public/images/home2-recent5.png";
import home2recent6 from "@/public/images/home2-recent6.png";
import home2recent7 from "@/public/images/home2-recent7.png";

export default function RecentProjectsThree() {
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
                  Our Recent Projects
                </h4>
                <h1
                  className="text-nu30 fontMont sm:font-bold font-semibold"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  Completed Projects That Inspire Confidence.
                </h1>
              </div>
            </div>
            <div className="lg:col-span-1 2xl:col-span-2"></div>
            <div className="lg:col-span-4 col-span-12">
              <div className="">
                <p
                  className="text-nu40 sm:mb-6 mb-4"
                  data-aos="fade-left"
                  data-aos-duration="1600">
                  Take a look at some of the outstanding work we’ve
                  <br className="max-2xl:hidden" />
                  completed for our clients.
                </p>
                <Link
                  href="projects"
                  className="btn"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                    Explore All Projects
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-3 gap-6">
              {/* <!-- card 1 --> */}
              <div className="row-span-2">
                <div
                  className="relative img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Link href="services" className="">
                    <Image
                      className="w-full h-full img"
                      src={home2recent1}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div>
                      <p className="text-nu10 sm:mb-2 mb-1 font-medium">
                        Residential
                      </p>
                      <h4 className="text-nu10 fontMont sm:mb-6 mb-4">
                        Modern Urban Villa
                      </h4>
                      <div className="">
                        <Link href="projects" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            View Project
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card 2 --> */}
              <div className="">
                <div
                  className="relative img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Link href="services">
                    <Image
                      className="w-full h-full img"
                      src={home2recent2}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div>
                      <p className="text-nu10 sm:mb-2 mb-1 font-medium">
                        Luxury Homes
                      </p>
                      <h4 className="text-nu10 fontMont sm:mb-6 mb-4">
                        Oceanview Apartments
                      </h4>
                      <div className="">
                        <Link href="projects" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            View Project
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card 3 --> */}
              <div className="">
                <div
                  className="relative img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Link href="services">
                    <Image
                      className="w-full h-full img"
                      src={home2recent3}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div>
                      <p className="text-nu10 sm:mb-2 mb-1 font-medium">
                        Commercial
                      </p>
                      <h4 className="text-nu10 fontMont sm:mb-6 mb-4">
                        Skyline Office Tower
                      </h4>
                      <div className="">
                        <Link href="projects" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            View Project
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card 4 --> */}
              <div className="">
                <div
                  className="relative img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Link href="services">
                    <Image
                      className="w-full h-full img"
                      src={home2recent4}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div>
                      <p className="text-nu10 sm:mb-2 mb-1 font-medium">
                        Residential
                      </p>
                      <h4 className="text-nu10 fontMont sm:mb-6 mb-4">
                        Greenwood Apartments
                      </h4>
                      <div className="">
                        <Link href="projects" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            View Project
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card 5 --> */}
              <div className="row-span-2">
                <div
                  className="relative img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Link href="services">
                    <Image
                      className="w-full h-full img"
                      src={home2recent5}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div>
                      <p className="text-nu10 sm:mb-2 mb-1 font-medium">
                        Industrial
                      </p>
                      <h4 className="text-nu10 fontMont sm:mb-6 mb-4">
                        Metro Rise Constructions
                      </h4>
                      <div className="">
                        <Link href="projects" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            View Project
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card 6 --> */}
              <div className="">
                <div
                  className="relative img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Link href="services">
                    <Image
                      className="w-full h-full img"
                      src={home2recent6}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div>
                      <p className="text-nu10 sm:mb-2 mb-1 font-medium">
                        Infrastructure
                      </p>
                      <h4 className="text-nu10 fontMont sm:mb-6 mb-4">
                        City Bridge Project
                      </h4>
                      <div className="">
                        <Link href="projects" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            View Project
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card 7 --> */}
              <div className="">
                <div
                  className="relative img-box"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <Link href="services">
                    <Image
                      className="w-full h-full img"
                      src={home2recent7}
                      alt=""
                    />
                  </Link>
                  <div className="absolute bottom-[24px] left-[24px]">
                    <div>
                      <p className="text-nu10 sm:mb-2 mb-1 font-medium">
                        Industrial
                      </p>
                      <h4 className="text-nu10 fontMont sm:mb-6 mb-4">
                        Advanced Facility
                      </h4>
                      <div className="">
                        <Link href="projects" className="btn">
                          <span className="md:px-[20px] sm:px-4 px-2 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                            View Project
                          </span>
                        </Link>
                      </div>
                    </div>
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
