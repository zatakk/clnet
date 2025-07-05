import Image from "next/image";
import Link from "next/link";
import teammember1 from "@/public/images/courses/course_img.jpg";
import teammember2 from "@/public/images/courses/course_img.jpg";
import teammember3 from "@/public/images/courses/course_img.jpg";
import teammember4 from "@/public/images/courses/course_img.jpg";
import teammember5 from "@/public/images/courses/course_img.jpg"; 
import teammember6 from "@/public/images/courses/course_img.jpg";
import React from "react";
export default function Course() {
  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-12">
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
                 Our Courses
                </h1>
              </div>
            </div>
            <div className="lg:col-span-1 2xl:col-span-2"></div>
            <div className="lg:col-span-4 col-span-12">
              <div className="">

                <Link
                  href="all-courses"
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


      <div className="container">
        <div className="grid grid-cols-12 sm:gap-6 gap-4">
          {/* <!-- card 1 --> */}
          <div className="xl:col-span-4 md:col-span-6 col-span-12">
            <div
              className="bg-nu10 sm:px-4 px-2 sm:py-4 py-2"
              data-aos="zoom-in"
              data-aos-duration="2000">
              <div className="img-box relative">
                <Link href="project-details">
                  <Image
                    className="w-full h-full img"
                    src={teammember1}
                    alt=""
                  />
                </Link>
                <div className="absolute top-[20px] right-[20px]">
                  <ul className="team-icons">
                    <li>
                      <Link href="javascript:void(0)">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="absolute bottom-[20px] left-[20px] right-[20px] sm:px-6 px-4 sm:py-3 py-2 bg-nu80">
                  <div className="flex justify-between items-center">
                    <div className="inline-block">
                      <Link href="project-details">
                        <h4 className="text-nu30 fontMont font-medium">
                        Project Management
                        </h4>
                      </Link>
                      {/* <p className="text-nu30">Sr. Structural Engineer</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- card 2 --> */}
          <div className="xl:col-span-4 md:col-span-6 col-span-12">
            <div
              className="bg-nu10 sm:px-4 px-2 sm:py-4 py-2"
              data-aos="zoom-in"
              data-aos-duration="2000">
              <div className="img-box relative">
                <Link href="project-details">
                  <Image
                    className="w-full h-full img"
                    src={teammember2}
                    alt=""
                  />
                </Link>
                <div className="absolute top-[20px] right-[20px]">
                  <ul className="team-icons">
                    <li>
                      <Link href="javascript:void(0)">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="absolute bottom-[20px] left-[20px] right-[20px] sm:px-6 px-4 sm:py-3 py-2 bg-nu80">
                  <div className="flex justify-between items-center">
                    <div className="inline-block">
                      <Link href="project-details">
                        <h4 className="text-nu30 fontMont font-medium">
                        Construction Management
                        </h4>
                      </Link>
                      {/* <p className="text-nu30">Jr. Project Manager</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- card 3 --> */}
          <div className="xl:col-span-4 md:col-span-6 col-span-12">
            <div
              className="bg-nu10 sm:px-4 px-2 sm:py-4 py-2"
              data-aos="zoom-in"
              data-aos-duration="2000">
              <div className="img-box relative">
                <Link href="project-details">
                  <Image
                    className="w-full h-full img"
                    src={teammember3}
                    alt=""
                  />
                </Link>
                <div className="absolute top-[20px] right-[20px]">
                  <ul className="team-icons">
                    <li>
                      <Link href="javascript:void(0)">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="absolute bottom-[20px] left-[20px] right-[20px] sm:px-6 px-4 sm:py-3 py-2 bg-nu80">
                  <div className="flex justify-between items-center">
                    <div className="inline-block">
                      <Link href="project-details">
                        <h4 className="text-nu30 fontMont font-medium">
                        Contract Management

                        </h4>
                      </Link>
                      {/* <p className="text-nu30">Lead Architect</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- card 4 --> */}
          <div className="xl:col-span-4 md:col-span-6 col-span-12">
            <div
              className="bg-nu10 sm:px-4 px-2 sm:py-4 py-2"
              data-aos="zoom-in"
              data-aos-duration="2000">
              <div className="img-box relative">
                <Link href="project-details">
                  <Image
                    className="w-full h-full img"
                    src={teammember4}
                    alt=""
                  />
                </Link>
                <div className="absolute top-[20px] right-[20px]">
                  <ul className="team-icons">
                    <li>
                      <Link href="javascript:void(0)">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="absolute bottom-[20px] left-[20px] right-[20px] sm:px-6 px-4 sm:py-3 py-2 bg-nu80">
                  <div className="flex justify-between items-center">
                    <div className="inline-block">
                      <Link href="project-details">
                        <h4 className="text-nu30 fontMont font-medium">
                        Quantity Survey
                        </h4>
                      </Link>
                      {/* <p className="text-nu30">Managing Director</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- card 5 --> */}
          <div className="xl:col-span-4 md:col-span-6 col-span-12">
            <div
              className="bg-nu10 sm:px-4 px-2 sm:py-4 py-2"
              data-aos="zoom-in"
              data-aos-duration="2000">
              <div className="img-box relative">
                <Link href="project-details">
                  <Image
                    className="w-full h-full img"
                    src={teammember5}
                    alt=""
                  />
                </Link>
                <div className="absolute top-[20px] right-[20px]">
                  <ul className="team-icons">
                    <li>
                      <Link href="javascript:void(0)">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="absolute bottom-[20px] left-[20px] right-[20px] sm:px-6 px-4 sm:py-3 py-2 bg-nu80">
                  <div className="flex justify-between items-center">
                    <div className="inline-block">
                      <Link href="project-details">
                        <h4 className="text-nu30 fontMont font-medium">
                        Project Controls

                        </h4>
                      </Link>
                      {/* <p className="text-nu30">Lead Architect</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- card 6 --> */}
          <div className="xl:col-span-4 md:col-span-6 col-span-12">
            <div
              className="bg-nu10 sm:px-4 px-2 sm:py-4 py-2"
              data-aos="zoom-in"
              data-aos-duration="2000">
              <div className="img-box relative">
                <Link href="project-details">
                  <Image
                    className="w-full h-full img"
                    src={teammember6}
                    alt=""
                  />
                </Link>
                <div className="absolute top-[20px] right-[20px]">
                  <ul className="team-icons">
                    <li>
                      <Link href="javascript:void(0)">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-twitter-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-instagram-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-linkedin-logo"></i>
                      </Link>
                    </li>
                    <li className="sm:pt-3 pt-2">
                      <Link href="javascript:void(0)" className="sm:pt-3 pt-2">
                        <i className="text-nu30 px-1 py-1 bg-nu10 rounded-md ph-bold ph-facebook-logo"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="absolute bottom-[20px] left-[20px] right-[20px] sm:px-6 px-4 sm:py-3 py-2 bg-nu80">
                  <div className="flex justify-between items-center">
                    <div className="inline-block">
                      <Link href="project-details">
                        <h4 className="text-nu30 fontMont font-medium">
                        Estimation & Tendering 

                        </h4>
                      </Link>
                      {/* <p className="text-nu30">Chief Executive Officer</p>
                    </div>
                    <div className="btn">
                      <span className="show-btn px-3 py-2 flex items-center cursor-pointer">
                        <i className="sm:text-[26px] text-[18px] ph-bold ph-share-network"></i>
                      </span> */}
                    </div>
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
