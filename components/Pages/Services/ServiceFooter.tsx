import Image from "next/image";
import Link from "next/link";
import logo2 from "@/public/images/logo2.png";
import BuildSomething from "./BuildSomething";

export default function ServiceFooter() {
  return (
    <footer className="z-10 relative">
      {/* <!-- Great Together section start --> */}
      <BuildSomething />
      {/* <!-- Great Together section end --> */}
      <div className="z-30 relative">
        <div className="container">
          <div className="my-[-8rem] md:my-[-7rem] xl:my-[-6.5rem]">
            <div
              className="grid grid-cols-12 gap-6 lg:px-10 md:px-8 sm:px-6 px-4 lg:py-10 md:py-8 sm:py-6 py-4 bg-primary"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2800">
              <div className="lg:col-span-6 col-span-12">
                <div>
                  <p className="sm:text-[18px] text-[16px] text-nu30 sm:mb-4 mb-2">
                    Stay Updated
                  </p>
                  <h3 className="fontMont text-nu30 font-medium">
                    Subscribe to our newsletter for the latest updates.
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-6 col-span-12">
                <form>
                  <div className="flex max-xl:flex-wrap items-center gap-2">
                    <input
                      type="text"
                      className="px-3 py-3 bg-nu10 text-nu30 placeholder:text-nu30 rounded-none"
                      placeholder="Enter Your Email..."
                    />

                    <button className="2xl:w-[42%] lg:w-[52%] sm:w-[40%] w-[100%]">
                      <span className="d-center gap-2 px-4 py-2 btn1">
                        <span className="sm:text-[16px] text-[14px] font-semibold">
                          SUBMIT NOW
                        </span>
                        <span className="pt-1">
                          <i className="ph ph-arrow-circle-right"></i>
                        </span>
                      </span>
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="custom-checkbox flex items-start sm:items-center lg:items-start xl:items-center gap-1 text-nu40 font-normal text-[15px] cursor-pointer">
                      <div className="mt-1">
                        <input
                          type="checkbox"
                          className="peer size-4 rounded-sm border border-nu50 accent-secondary1 checked:appearance-auto sm:mt-0 mt-1"
                        />
                      </div>
                      <span className="checkmark"></span>
                      By continuing, you agree to our Terms of Service and
                      Privacy Policy
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-nu30 xl:py-[200px] py-[160px] xl:pb-[100px] lg:pb-20 md:pb-16 sm:pb-14 pb-12 z-10 relative">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <div className="lg:col-span-3 sm:col-span-6 col-span-12">
              <div>
                <div className="sm:mb-5 mb-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    <Image src={logo2} alt="" />
                    <h3 className="text-nu10 fontMont">Tilon</h3>
                  </Link>
                </div>
                <h5
                  className="text-nu20 fontMont font-normal"
                  data-aos="fade-up"
                  data-aos-duration="1800">
                  Building Dreams, One Brick at a Time.
                </h5>
                <div
                  className="sm:mt-6 mt-4 flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-duration="2200">
                  <Link href="javascript:void(0)" className="btn">
                    <span className="sm:px-2 px-[6px] sm:py-2 py-[6px] flex items-center">
                      <i className="sm:text-[28px] text-[20px] ph ph-facebook-logo"></i>
                    </span>
                  </Link>

                  <Link href="javascript:void(0)" className="btn">
                    <span className="sm:px-2 px-[6px] sm:py-2 py-[6px] flex items-center">
                      <i className="sm:text-[28px] text-[20px] ph ph-linkedin-logo"></i>
                    </span>
                  </Link>

                  <Link href="javascript:void(0)" className="btn">
                    <span className="sm:px-2 px-[6px] sm:py-2 py-[6px] flex items-center">
                      <i className="sm:text-[28px] text-[20px] ph ph-instagram-logo"></i>
                    </span>
                  </Link>

                  <Link href="javascript:void(0)" className="btn">
                    <span className="sm:px-2 px-[6px] sm:py-2 py-[6px] flex items-center">
                      <i className="sm:text-[28px] text-[20px] ph ph-twitter-logo"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-2 sm:col-span-6 col-span-12 sm:mt-0 mt-4">
              <div>
                <h4
                  className="text-nu10 fontMont"
                  data-aos="fade-up"
                  data-aos-duration="1400">
                  Quick Links
                </h4>
                <ul className="sm:mt-6 mt-4">
                  <li data-aos="fade-up" data-aos-duration="1600">
                    <Link
                      href="/"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Home
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    <Link
                      href="about"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      About Us
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <Link
                      href="services"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Services
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2200">
                    <Link
                      href="projects"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Projects
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2400">
                    <Link
                      href="blog"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Blog
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2600">
                    <Link
                      href="contact"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12 md:pt-0 pt-4">
              <div>
                <h4
                  className="text-nu10 fontMont"
                  data-aos="fade-up"
                  data-aos-duration="1400">
                  Our Service
                </h4>
                <ul className="sm:mt-6 mt-4">
                  <li data-aos="fade-up" data-aos-duration="1600">
                    <Link
                      href="services"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Project Management
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    <Link
                      href="services"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      General Contracting
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <Link
                      href="services"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Design & Architecture
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2200">
                    <Link
                      href="services"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Sustainable Construction
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2400">
                    <Link
                      href="services"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Renovation & Remodeling
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2600">
                    <Link
                      href="services"
                      className="text-nu20 hover:text-primary duration-500 text-[18px] font-normal">
                      Design & Architecture
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-3 sm:col-span-6 col-span-12 md:pt-0 pt-4">
              <div>
                <h4
                  className="text-nu10 fontMont"
                  data-aos="fade-up"
                  data-aos-duration="1400">
                  Contact Us
                </h4>
                <ul className="sm:mt-6 mt-4">
                  <li data-aos="fade-up" data-aos-duration="1600">
                    <Link
                      href="tel:+1234567890"
                      className="text-nu20 text-[18px] font-normal flex gap-2">
                      <span className="pt-1">
                        <i className="text-primary ph ph-phone"></i>
                      </span>
                      +123-456-7890
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1800">
                    <Link
                      href="mailto:info@yourcompany.com"
                      className="text-nu20 text-[18px] font-normal flex gap-2">
                      <span className="pt-1">
                        <i className="text-primary ph ph-envelope"></i>
                      </span>
                      info@yourcompany.com
                    </Link>
                  </li>
                  <li
                    className="mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className="text-nu20 text-[18px] font-normal flex gap-2">
                      <span className="pt-1">
                        <i className="text-primary ph ph-paper-plane-tilt"></i>
                      </span>
                      123 Builder St, Construction City, TX
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary sm:py-8 py-6">
        <div className="container">
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center gap-0">
              <p className="text-nu30 font-normal">&copy; 2025</p>
              <Link
                href="https://themeforest.net/user/themeswolf"
                className="pl-1 text-nu30 font-medium hover:underline">
                ThemesWolf
              </Link>
            </div>
            <span className="text-nu30 font-normal">All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
