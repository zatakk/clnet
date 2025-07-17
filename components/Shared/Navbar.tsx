"use client";
import logo from "@/public/images/Hard_Hat.png";
import loginImage from "@/public/images/login-button.svg";
import gear from "@/public/images/gear.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/styles/navbar.css";

export default function Navbar() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [isNavbarSub, setIsNavbarSub] = useState(false);
  const [isNavbarSub2, setIsNavbarSub2] = useState(false);
  const [exploreClicked, setExploreClicked] = useState(false);
  const [servicesClicked, setServicesClicked] = useState(false);

  const toggleNavbarSub = () => {
    setIsNavbarSub(!isNavbarSub);
  };

  const toggleNavbar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  const toggleNavbarSub2 = () => {
    setIsNavbarSub2(!isNavbarSub2);
  };

  const toggleExplore = () => {
    setExploreClicked(!exploreClicked);
    setServicesClicked(false); // Close other menu when one is clicked
  };

  const toggleServices = () => {
    setServicesClicked(!servicesClicked);
    setExploreClicked(false); // Close other menu when one is clicked
  };

  const closeAllMenus = () => {
    setIsNavbarExpanded(false);
    setIsNavbarSub(false);
    setIsNavbarSub2(false);
    setExploreClicked(false);
    setServicesClicked(false);
  };

  return (
    <>
      <header className="nav-section bg-secondary1 py-4 z-40 sticky top-0">
        <div className="container relative">
          <nav className="hidden lg:block">
            <div className="flex justify-between items-center gap-4">
              <Link href="/" className="flex items-center gap-1">
                <Image src={logo} alt="Logo" className="logo-image" />
              </Link>
              <ul className="text-nu10 flex items-center gap-8 act-color">
                <li className="menu-item menu-dropdown">
                  <span
                    className="menu-link flex items-center gap-1 cursor-pointer text-nu10 font-normal"
                    data-toggle="submenu"
                    onClick={toggleExplore}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 16.5L14.5 14.5L16.5 7.5L9.5 9.5L7.5 16.5ZM12 13.5C11.5833 13.5 11.2293 13.3543 10.938 13.063C10.6467 12.7717 10.5007 12.4173 10.5 12C10.4993 11.5827 10.6453 11.2287 10.938 10.938C11.2307 10.6473 11.5847 10.5013 12 10.5C12.4153 10.4987 12.7697 10.6447 13.063 10.938C13.3563 11.2313 13.502 11.5853 13.5 12C13.498 12.4147 13.3523 12.769 13.063 13.063C12.7737 13.357 12.4193 13.5027 12 13.5ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.2217 16.105 20.0007 14.2173 20 12C19.9993 9.78267 19.2203 7.895 17.663 6.337C16.1057 4.779 14.218 4 12 4C9.782 4 7.89433 4.77933 6.337 6.338C4.77967 7.89667 4.00067 9.784 4 12C3.99933 14.216 4.77867 16.1037 6.338 17.663C7.89733 19.2223 9.78467 20.0013 12 20Z" fill="white"></path>
                    </svg>
                    Explore
                    <span className="pt-1">
                      <i className="text-[20px] ph-bold ph-caret-down"></i>
                    </span>
                    <i className="bx bx-chevron-down"></i>
                  </span>
                  <ul className={`submenu w-[100px] ${exploreClicked ? 'show' : ''}`}>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/students"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Students
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/courses"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Courses
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/professionals"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Professionals
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/instructors"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Instructors
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/subject-experts"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Subject Experts
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/colleges"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Colleges
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/corporates"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Corporates
                      </Link>
                      
                    </li>
                  </ul>
                </li>

                <li className="menu-item menu-dropdown">
                  <span
                    className="menu-link flex items-center gap-1 cursor-pointer text-nu10 font-normal"
                    data-toggle="submenu"
                    onClick={toggleServices}>
                    <Image src={gear} alt="Gear" className="icon-image" />
                    Services
                    <span className="pt-1">
                      <i className="text-[20px] ph-bold ph-caret-down"></i>
                    </span>
                    <i className="bx bx-chevron-down"></i>
                  </span>
                  <ul className={`submenu w-[100px] ${servicesClicked ? 'show' : ''}`}>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/courses"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Courses
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/webinars"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Webinars
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/blogs"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Blogs
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/events"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Events
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/jobs"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Jobs
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/memberships"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Memberships
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/certifications"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Certifications
                      </Link>
                      
                    </li>
                    <li className="submenu-item nav-link mt-2">
                      <Link
                        href="/assessments"
                        className="submenu-link text-[16px] cursor-pointer font-normal">
                        Assessments
                      </Link>
                      
                    </li>
                  </ul>
                </li>
              </ul>
              <div>
                <Link href="https://www.in.constructionlearning.net/" target="_blank">
                  <Image
                    className="w-full h-full img"
                    src={loginImage}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* <!-- mobile version --> */}
        <div className="nav block lg:hidden">
          <div className="flex justify-between items-center gap-4 px-6">
            <Link href="/" className="flex items-center gap-1">
              <Image className="w-[40px] h-[25px]" src={logo} alt="" />
            </Link>

            {isNavbarExpanded && (
              <ul
                className={`relative pt-10 !pl-6 sm:pl-10 nav-list slide`}>
                <li>
                  <span
                    id="close"
                    onClick={closeAllMenus}
                    className="absolute top-[20px] right-[30px]">
                    <i className="text-nu30 ph-bold ph-x"></i>
                  </span>
                </li>
                <li className="mt-10 dropx">
                  <button
                    className={`dropdown-btn text-nu30 md:text-[24px] text-[20px] font-bold flex justify-center items-center gap-2 ${isNavbarSub ? "active" : ""
                      }`}
                    onClick={toggleNavbarSub}>
                    Explore
                    <span className="pt-2 downs">
                      <i className="ph-bold text-[20px] ph-caret-right"></i>
                    </span>
                  </button>
                  <div className={`pl-6 ${isNavbarSub ? "block" : "hidden"}`}>
                    <Link href="/students" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Students
                      </span>
                    </Link>
                    <Link href="/professionals" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Professionals
                      </span>
                    </Link>
                    <Link href="/instructors" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Instructors
                      </span>
                    </Link>
                    <Link href="/subject-experts" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Subject Experts
                      </span>
                    </Link>
                    <Link href="/colleges" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Colleges
                      </span>
                    </Link>
                    <Link href="/corporates" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Corporates
                      </span>
                    </Link>
                  </div>
                </li>
                <li className="mt-6 dropx">
                  <button
                    className={`dropdown-btn text-nu30 md:text-[24px] text-[20px] font-bold flex justify-center items-center gap-2 ${isNavbarSub2 ? "active" : ""
                      }`}
                    onClick={toggleNavbarSub2}>
                    Services
                    <span className="pt-2 downs">
                      <i className="ph-bold text-[20px] ph-caret-right"></i>
                    </span>
                  </button>
                  <div className={`pl-6 ${isNavbarSub2 ? "block" : "hidden"}`}>
                    <Link href="/courses" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Courses
                      </span>
                    </Link>
                    <Link href="/webinars" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Webinars
                      </span>
                    </Link>
                    <Link href="/#jobs" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Jobs
                      </span>
                    </Link>
                    <Link href="/certifications" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Certifications
                      </span>
                    </Link>
                    <Link href="/assessments" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Assessments
                      </span>
                    </Link>
                    <Link href="/membership-details" className="ml-[6rem]">
                      <span className="text-nu30 md:text-[24px] text-[20px] sm:font-bold font-semibold">
                        Membership
                      </span>
                    </Link>
                  </div>
                </li>
                <li className="mt-3">
                  <Link
                    href="https://www.in.constructionlearning.net/"
                    target="_blank"
                    onClick={closeAllMenus}
                    className="block w-[200px] text-center py-3 bg-white text-nu30 font-medium text-black rounded-lg hover:bg-gray-100 transition-colors border border-black"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}

            <div className="menu-bars" id="toggle" onClick={toggleNavbar}>
              <span>
                <i className="text-nu10 text-[26px] ph-bold ph-list"></i>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
