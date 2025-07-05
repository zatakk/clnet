import Image from "next/image";
import Link from "next/link";
import latestconstruction1 from "@/public/images/Webinar/webinar_img.jpg";
import latestconstruction2 from "@/public/images/Webinar/webinar_img.jpg";
import latestconstruction3 from "@/public/images/Webinar/webinar_img.jpg";
import latestconstruction4 from "@/public/images/Webinar/webinar_img.jpg";
import latestconstruction5 from "@/public/images/Webinar/webinar_img.jpg";
import latestconstruction6 from "@/public/images/Webinar/webinar_img.jpg";

export default function Webinars() {
  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-12" id="courses-webinars">
      <div className="container">
        <div>
        <div className="grid grid-cols-12 lg:gap-6 items-end mb-14">
            <div className="2xl:col-span-6 lg:col-span-7 col-span-12">
              <div className="mb-2">
                {/* <h4
                  className="text-nu40 lg:mb-3 mb-2 fontMont sm:font-semibold font-medium"
                  data-aos="fade-right"
                  data-aos-duration="1600">
                  Explore Our Courses
                </h4> */}
                <h1
                  className="text-nu30 fontMont sm:font-bold font-semibold"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                Courses & Webinars
                </h1>
              </div>
            </div>
            <div className="lg:col-span-1 2xl:col-span-2"></div>
            <div className="lg:col-span-4 col-span-12">
              <div className="">

                <Link
                  href="courses-webinars"
                  className="btn"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                    Explore
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- card 1 --> */}
            <div className="xl:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-6 sm:px-4 px-2 md:py-6 sm:py-4 py-2 bg-secondary1 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="img-box relative">
                  <Image
                    className="w-full h-full img"
                    src={latestconstruction1}
                    alt=""
                  />
                  <div className="absolute bottom-[20px] left-[20px]">
                    <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                      Construction
                    </p>
                  </div>
                </div>
                <div>
                
                  <h5 className="fontMont text-nu30 mt-2 ">
                    5 Sustainable Building Materials for 2025
                  </h5>
                  <p className="text-nu50 mt-2 font-medium font-medium">
                    Discover innovative materials that are reshaping the future
                    of eco-friendly construction.
                  </p>
                  <Link
                    href="course-details"
                    className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn card-btm">
                    <span className="text-nu30 font-semibold sm:px-5 px-2 sm:py-[10px] py-2 sm:text-[18px] text-[16px]">
                      Take a Look
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div className="xl:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-6 sm:px-4 px-2 md:py-6 sm:py-4 py-2 bg-secondary1 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="img-box relative">
                  <Image
                    className="w-full h-full img"
                    src={latestconstruction2}
                    alt=""
                  />
                  <div className="absolute bottom-[20px] left-[20px] font-medium">
                    <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                      Construction
                    </p>
                  </div>
                </div>
                <div>
                 
                  <h5 className="fontMont text-nu30 mt-2 ">
                    10 Tips for Managing Construction Timelines Effectively
                  </h5>
                  <p className="text-nu50 mt-2 font-medium">
                    Streamline your projects with these time-tested strategies
                    for avoiding delays
                  </p>
                  <Link
                    href="course-details"
                    className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn card-btm">
                    <span className="text-nu30 font-semibold sm:px-5 px-2 sm:py-[10px] py-2 sm:text-[18px] text-[16px]">
                      Take a Look
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div className="xl:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-6 sm:px-4 px-2 md:py-6 sm:py-4 py-2 bg-secondary1 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="img-box relative">
                  <Image
                    className="w-full h-full img"
                    src={latestconstruction3}
                    alt=""
                  />
                  <div className="absolute bottom-[20px] left-[20px]">
                    <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                      Construction
                    </p>
                  </div>
                </div>
                <div>
                 
                  <h5 className="fontMont text-nu30 mt-2 ">
                    5 Sustainable Building Materials for 2025
                  </h5>
                  <p className="text-nu50 mt-2 font-medium">
                    Discover innovative materials that are reshaping the future
                    of eco-friendly construction.
                  </p>
                  <Link
                   href="course-details"
                    className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn card-btm">
                    <span className="text-nu30 font-semibold sm:px-5 px-2 sm:py-[10px] py-2 sm:text-[18px] text-[16px]">
                      Take a Look
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>



          <div className="grid grid-cols-12 gap-6 mt-10">
            {/* <!-- card 1 --> */}
            <div className="xl:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-6 sm:px-4 px-2 md:py-6 sm:py-4 py-2 bg-secondary1 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="img-box relative">
                  <Image
                    className="w-full h-full img"
                    src={latestconstruction1}
                    alt=""
                  />
                  <div className="absolute bottom-[20px] left-[20px]">
                    <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                      Construction
                    </p>
                  </div>
                </div>
                <div>
                
                  <h5 className="fontMont text-nu30 mt-2 ">
                    5 Sustainable Building Materials for 2025
                  </h5>
                  <p className="text-nu50 mt-2 font-medium font-medium">
                    Discover innovative materials that are reshaping the future
                    of eco-friendly construction.
                  </p>
                  <Link
                  href="webinar-details"
                    className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn card-btm">
                    <span className="text-nu30 font-semibold sm:px-5 px-2 sm:py-[10px] py-2 sm:text-[18px] text-[16px]">
                      Take a Look
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div className="xl:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-6 sm:px-4 px-2 md:py-6 sm:py-4 py-2 bg-secondary1 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="img-box relative">
                  <Image
                    className="w-full h-full img"
                    src={latestconstruction2}
                    alt=""
                  />
                  <div className="absolute bottom-[20px] left-[20px] font-medium">
                    <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                      Construction
                    </p>
                  </div>
                </div>
                <div>
                 
                  <h5 className="fontMont text-nu30 mt-2 ">
                    10 Tips for Managing Construction Timelines Effectively
                  </h5>
                  <p className="text-nu50 mt-2 font-medium">
                    Streamline your projects with these time-tested strategies
                    for avoiding delays
                  </p>
                  <Link
                      href="webinar-details"
                    className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn card-btm">
                    <span className="text-nu30 font-semibold sm:px-5 px-2 sm:py-[10px] py-2 sm:text-[18px] text-[16px]">
                      Take a Look
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div className="xl:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-6 sm:px-4 px-2 md:py-6 sm:py-4 py-2 bg-secondary1 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="img-box relative">
                  <Image
                    className="w-full h-full img"
                    src={latestconstruction3}
                    alt=""
                  />
                  <div className="absolute bottom-[20px] left-[20px]">
                    <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                      Construction
                    </p>
                  </div>
                </div>
                <div>
                 
                  <h5 className="fontMont text-nu30 mt-2 ">
                    5 Sustainable Building Materials for 2025
                  </h5>
                  <p className="text-nu50 mt-2 font-medium">
                    Discover innovative materials that are reshaping the future
                    of eco-friendly construction.
                  </p>
                  <Link
                         href="webinar-details"
                    className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn card-btm">
                    <span className="text-nu30 font-semibold sm:px-5 px-2 sm:py-[10px] py-2 sm:text-[18px] text-[16px]">
                      Take a Look
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
