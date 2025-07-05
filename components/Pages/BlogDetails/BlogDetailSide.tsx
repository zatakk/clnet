import Image from "next/image";
import Link from "next/link";
import latestpost1 from "@/public/images/blog-details-page/latest-post1.png";
import latestpost2 from "@/public/images/blog-details-page/latest-post2.png";
import latestpost3 from "@/public/images/blog-details-page/latest-post3.png";

export default function BlogDetailSide() {
  return (
    <div className="xl:col-span-4 col-span-12">
      <div className="sticky top-0">
        <div
          className="bg-nu70 sm:px-6 px-4 sm:py-6 py-4"
          data-aos="fade-up"
          data-aos-duration="1600">
          <h4 className="text-nu30 fontMont font-bold sm:mb-4 mb-3">
            Search Here
          </h4>
          <form action="form" className="flex items-center">
            <input
              type="text"
              placeholder="Searching..."
              className="placeholder:text-nu40 placeholder:font-medium text-nu30 rounded-none border-none outline-none bg-nu10"
            />
            <button className="pt-1">
              <i className="px-3 py-3 bg-nu30 text-nu10 ph-bold ph-magnifying-glass-plus"></i>
            </button>
          </form>
        </div>
        <div
          className="bg-nu70 sm:px-6 px-4 sm:py-6 py-4 md:mt-10 sm:mt-8 mt-6"
          data-aos="fade-up"
          data-aos-duration="1700">
          <h4 className="text-nu30 fontMont font-bold mb-6">Categories</h4>
          <div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10"
              data-aos="fade-up"
              data-aos-duration="1400">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                Project Management
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="1500">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                General Contracting
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="1600">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                Design & Architecture
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="1700">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                Residential Construction
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="1800">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                Commercial Construction
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="1900">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] sm:font-semibold font-medium">
                Renovation & Remodeling
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-nu70 sm:px-6 px-3 sm:py-6 py-3 sm:mt-8 mt-6">
          <h4
            className="text-nu30 fontMont font-bold md:pb-8 pb-6"
            data-aos="fade-left"
            data-aos-duration="2000">
            Latest Post
          </h4>
          <div>
            {/* <!-- card 1 --> */}
            <div data-aos="zoom-in" data-aos-duration="2000">
              <div className="img-box">
                <Image className="img w-full h-full" src={latestpost1} alt="" />
              </div>
              <div className="sm:py-6 py-3 border-b-[1px] border-nu40">
                <p className="flex items-center gap-2 text-nu50 text-[14px]">
                  <span className="">
                    <i className="text-[18px] text-nu50 ph ph-calendar"></i>
                  </span>
                  Jan 22, 2025
                </p>
                <span className="sm:text-[20px] text-[18px] fontMont sm:font-bold font-semibold text-nu30 sm:pt-3 pt-2">
                  5 Sustainable Building Materials for 2025
                </span>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div
              className="md:mt-8 mt-6"
              data-aos="zoom-in"
              data-aos-duration="2000">
              <div className="img-box">
                <Image className="img w-full h-full" src={latestpost2} alt="" />
              </div>
              <div className="sm:py-6 py-3 border-b-[1px] border-nu40">
                <p className="flex items-center gap-2 text-nu50 text-[14px]">
                  <span className="">
                    <i className="text-[18px] text-nu50 ph ph-calendar"></i>
                  </span>
                  Jan 15, 2025
                </p>
                <span className="sm:text-[20px] text-[18px] fontMont sm:font-bold font-semibold text-nu30 sm:pt-3 pt-2">
                  Understanding Building Codes: What You Need to Know
                </span>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div
              className="md:mt-8 mt-6"
              data-aos="zoom-in"
              data-aos-duration="2000">
              <div className="img-box">
                <Image className="img w-full h-full" src={latestpost3} alt="" />
              </div>
              <div className="sm:py-6 py-3">
                <p className="flex items-center gap-2 text-nu50 text-[14px]">
                  <span className="">
                    <i className="text-[18px] text-nu50 ph ph-calendar"></i>
                  </span>
                  Jan 25, 2025
                </p>
                <span className="sm:text-[20px] text-[18px] fontMont sm:font-bold font-semibold text-nu30 sm:pt-3 pt-2">
                  10 Tips for Managing Construction Timelines Effectively
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-nu70 sm:px-6 px-3 sm:py-6 py-3 sm:mt-8 mt-6"
          data-aos="fade-up"
          data-aos-duration="1800">
          <h4 className="text-nu30 fontMont font-bold mb-6">Popular Tag</h4>
          <div className="flex flex-wrap gap-3">
            <span className="px-2 py-2 bg-nu10 text-nu30 font-medium">
              #Urban Design
            </span>
            <span className="px-2 py-2 bg-nu10 text-nu30 font-medium">
              #Construction
            </span>
            <span className="px-2 py-2 bg-nu10 text-nu30 font-medium">
              #Architecture
            </span>
            <span className="px-2 py-2 bg-nu10 text-nu30 font-medium">
              #Modern Construction
            </span>
            <span className="px-2 py-2 bg-nu10 text-nu30 font-medium">
              #Civil Engineering
            </span>
            <span className="px-2 py-2 bg-nu10 text-nu30 font-medium">
              #Prefabrication
            </span>
            <span className="px-2 py-2 bg-nu10 text-nu30 font-medium">
              #SiteSafety
            </span>
            <span className="px-2 py-2 bg-nu10 text-nu30 font-medium">
              #Engineering
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
