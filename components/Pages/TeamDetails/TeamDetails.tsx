import Image from "next/image";
import Link from "next/link";
import summaryman from "@/public/images/team-page/summary-man.png";
import LetsDiscuss from "./LetsDiscuss";

export default function TeamDetails() {
  return (
    <section className="professional-section bg-nu10 lg:py-20 md:py-16 py-12">
      <div className="container">
        <div>
          <div className="grid grid-cols-12 sm:gap-6 gap-4 md:px-14 sm:px-10 px-4 md:py-14 sm:py-10 py-4 bg-nu70">
            <div className="xl:col-span-6 col-span-12">
              <div className="">
                <h3
                  className="text-nu30 fontMont sm:font-bold font-semibold mb-2"
                  data-aos="fade-up"
                  data-aos-duration="1300">
                  Michael Smith
                </h3>
                <p
                  className="text-nu50 font-medium sm:mb-6 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1400">
                  Senior Project Manager
                </p>
                <p
                  className="text-nu50 font-medium"
                  data-aos="fade-up"
                  data-aos-duration="1500">
                  With years of hands-on experience in the construction
                  industry, I specialize in delivering high-quality, durable,
                  and innovative building solutions. From residential homes to
                  large-scale commercial developments, my focus is on precision,
                  efficiency, and excellence. I believe in creating spaces that
                  not only meet structural standards but also enhance
                  functionality and aesthetics
                </p>
                <div className="sm:mt-6 mt-4">
                  <div
                    className="flex sm:gap-6 gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1600">
                    <span className="text-nu30 font-bold">Profession:</span>
                    <span className="text-nu50 font-medium">
                      Project Manager
                    </span>
                  </div>
                  <div
                    className="flex sm:gap-6 gap-4 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1700">
                    <span className="text-nu30 font-bold">Phone Number:</span>
                    <Link
                      href="tel:+1234567890"
                      className="text-nu50 font-medium">
                      +123 456 7890
                    </Link>
                  </div>
                  <div
                    className="flex sm:gap-6 gap-4 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    <span className="text-nu30 font-bold">Email:</span>
                    <Link
                      href="mailto:example@email.com"
                      className="text-nu50 font-medium">
                      example@email.com
                    </Link>
                  </div>
                  <div
                    className="flex sm:gap-6 gap-4 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1900">
                    <span className="text-nu30 font-bold">Location:</span>
                    <span className="text-nu50 font-medium">New York, USA</span>
                  </div>
                  <div
                    className="flex sm:gap-6 gap-4 mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <span className="text-nu30 font-bold">Experience:</span>
                    <span className="text-nu50 font-medium">
                      22 Years in the Construction Industry
                    </span>
                  </div>
                </div>
                <div
                  className="sm:mt-6 mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2200">
                  <span className="text-nu30 fontMont sm:font-bold font-semibold sm:text-[20px] text-[18px]">
                    Social Links
                  </span>
                  <div className="pt-4">
                    <Link href="javascript:void(0)" className="">
                      <i className="sm:px-[6px] px-1 sm:py-[6px] py-1 bg-nu10 rounded-md text-nu30 sm:text-[20px] text-[18px] ph ph-twitter-logo"></i>
                    </Link>
                    <Link href="javascript:void(0)" className="pl-2">
                      <i className="sm:px-[6px] px-1 sm:py-[6px] py-1 bg-nu10 rounded-md text-nu30 sm:text-[20px] text-[18px] ph ph-instagram-logo"></i>
                    </Link>
                    <Link href="javascript:void(0)" className="pl-2">
                      <i className="sm:px-[6px] px-1 sm:py-[6px] py-1 bg-nu10 rounded-md text-nu30 sm:text-[20px] text-[18px] ph ph-linkedin-logo"></i>
                    </Link>
                    <Link href="javascript:void(0)" className="pl-2">
                      <i className="sm:px-[6px] px-1 sm:py-[6px] py-1 bg-nu10 rounded-md text-nu30 sm:text-[20px] text-[18px] ph ph-facebook-logo"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
              <div
                className="img-box"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <Image className="w-full h-full img" src={summaryman} alt="" />
              </div>
            </div>
          </div>
          <div className="md:mt-[60px] sm:mt-10 mt-6">
            <h1
              className="text-nu30 fontMont sm:font-bold font-semibold sm:pb-6 pb-3"
              data-aos="fade-up"
              data-aos-duration="1600">
              Professional Summary
            </h1>
            <p
              className="text-nu50 font-medium sm:mb-4 mb-3"
              data-aos="fade-up"
              data-aos-duration="1700">
              With a deep passion for construction and a commitment to
              excellence, I bring years of experience in delivering
              high-quality, durable, and innovative building solutions. From
              concept to completion, I specialize in managing every phase of
              construction, ensuring precision, efficiency, and structural
              integrity. My expertise spans across residential, commercial, and
              industrial projects, where I focus on blending functionality with
              aesthetics. I believe in a client-centric approach, ensuring that
              every project reflects the vision, needs, and aspirations of those
              who entrust me with their spaces. Through strong leadership and
              meticulous planning, I have successfully completed projects that
              stand as a testament to quality craftsmanship and forward-thinking
              design.
            </p>
            <p
              className="text-nu50 font-medium"
              data-aos="fade-up"
              data-aos-duration="1800">
              Driven by innovation and sustainability, I stay ahead of industry
              trends, integrating modern technology and eco-friendly practices
              into every build. My ability to manage resources effectively,
              adhere to safety regulations, and maintain strict timelines
              ensures a seamless construction process. Whether working on a
              small-scale renovation or a large infrastructure development, I
              prioritize collaboration, transparency, and long-term value. With
              an unwavering dedication to excellence, I strive to shape the
              built environment with structures that not only serve their
              purpose but also inspire and endure for generations.
            </p>
          </div>
          <div className="sm:mt-10 mt-6">
            <h1
              className="text-nu30 fontMont sm:font-bold font-semibold"
              data-aos="fade-right"
              data-aos-duration="2000">
              Skills & Expertise
            </h1>
            <div className="grid grid-cols-12 sm:gap-6 gap-4 sm:pt-8 mt-4">
              {/* <!-- card 1 --> */}
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div
                  className="sm:px-6 px-4 sm:py-6 py-4 bg-nu70 w-full h-full"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <h3 className="text-nu30 fontMont sm:font-bold font-semibold">
                    Leadership & Client-Focused Skills
                  </h3>
                  <ul className="sm:mt-6 mt-4">
                    <li className="flex gap-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Team Management & Coordination
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Budgeting & Cost Estimation
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Client Consultation & Communication
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Problem-Solving & Critical Thinking
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Team Motivation & Morale Boosting
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- card 2 --> */}
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div
                  className="sm:px-6 px-4 sm:py-6 py-4 bg-nu70 w-full h-full"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <h3 className="text-nu30 fontMont sm:font-bold font-semibold">
                    Core Construction Skills
                  </h3>
                  <ul className="sm:mt-6 mt-4">
                    <li className="flex gap-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Structural Engineering
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Project Planning & Management
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Site Supervision & Execution
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Building Materials & Techniques
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Safety & Compliance
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- card 3 --> */}
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div
                  className="sm:px-6 px-4 sm:py-6 py-4 bg-nu70 w-full h-full"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <h3 className="text-nu30 fontMont sm:font-bold font-semibold">
                    Technical & Modern Construction Skills
                  </h3>
                  <ul className="sm:mt-6 mt-4">
                    <li className="flex gap-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        AutoCAD & Blueprint Reading
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        3D Modeling & Visualization
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Sustainable & Green Building
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Prefabrication & Modular Construction
                      </span>
                    </li>
                    <li className="flex gap-2 sm:mt-3 mt-2">
                      <span className="">
                        <i className="text-primary sm:text-[20px] text-[18px] ph-fill ph-star-four"></i>
                      </span>
                      <span className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                        Smart Building Technologies
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <LetsDiscuss />
        </div>
      </div>
    </section>
  );
}
