import Image from "next/image";
import Link from "next/link";
import latestblognews1 from "@/public/images/latest-blog&news1.png";
import latestblognews2 from "@/public/images/latest-blog&news2.png";
import latestblognews3 from "@/public/images/latest-blog&news3.png";
import construction1 from "@/public/images/construction1.png";
import construction2 from "@/public/images/construction2.png";
import construction3 from "@/public/images/construction3.png";
import construction4 from "@/public/images/construction4.png";
import construction5 from "@/public/images/construction5.png";
import construction6 from "@/public/images/construction6.png";

export default function BlogOne() {
  return (
    <section className="bg-nu10 lg:pt-20 md:pt-16 pt-12 relative z-0">
      <div className="container">
        <div>
          <div className="flex max-lg:flex-wrap justify-between items-end gap-4 mb-14">
            <div>
              <h4
                className="text-nu40 fontMont sm:font-semibold font-medium sm:mb-3 mb-2"
                data-aos="fade-right"
                data-aos-duration="2000">
                Latest Blog & News
              </h4>
              <h1
                className="text-nu30 fontMont sm:font-semibold font-medium"
                data-aos="fade-right"
                data-aos-duration="2200">
                Latest Updates From The Construction World
              </h1>
            </div>
            <div>
              <p
                className="font-fontLato text-nu30"
                data-aos="fade-left"
                data-aos-duration="2000">
                Stay updated with the latest trends, tips, and insights from the
                construction industry.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-6 items-center">
              {/* <!-- card 1 --> */}
              <div className="xl:col-span-4 md:col-span-6 col-span-12">
                <div
                  className="md:px-6 px-3 md:py-6 py-4 bg-secondary1 w-full h-full"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <div className="img-box relative">
                    <Link href="blog">
                      <Image
                        className="w-full h-full img"
                        src={latestblognews1}
                        alt=""
                      />
                    </Link>
                    <div className="absolute bottom-[20px] left-[20px]">
                      <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                        Construction
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-[14px] text-nu50 sm:mt-3 mt-2">
                      <span className="sm:pt-1 pt-[2px]">
                        <i className="text-nu50 sm:text-[20px] text-[18px] ph ph-calendar"></i>
                      </span>
                      Jun 22, 2025
                    </p>
                    <Link href="blog">
                      <h5 className="fontMont text-nu30 mt-2">
                        5 Sustainable Building Materials for 2025
                      </h5>
                    </Link>
                    <p className="text-nu50 mt-2">
                      Discover innovative materials that are reshaping the
                      future of eco-friendly construction.
                    </p>
                    <Link
                      href="blog"
                      className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn">
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
                  className="md:px-6 px-3 md:py-6 py-4 bg-secondary1 w-full h-full"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <div className="img-box relative">
                    <Link href="blog">
                      <Image
                        className="w-full h-full img"
                        src={latestblognews2}
                        alt=""
                      />
                    </Link>
                    <div className="absolute bottom-[20px] left-[20px]">
                      <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                        Construction
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-[14px] text-nu50 sm:mt-3 mt-2">
                      <span className="sm:pt-1 pt-[2px]">
                        <i className="text-nu50 sm:text-[20px] text-[18px] ph ph-calendar"></i>
                      </span>
                      Jan 22, 2025
                    </p>
                    <Link href="blog">
                      <h5 className="fontMont text-nu30 mt-2">
                        10 Tips for Managing Construction Know.
                      </h5>
                    </Link>
                    <p className="text-nu50 mt-2">
                      Streamline your projects with these time-tested strategies
                      for avoiding delays
                    </p>
                    <Link
                      href="blog"
                      className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn">
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
                  className="md:px-6 px-3 md:py-6 py-4 bg-secondary1 w-full h-full"
                  data-aos="zoom-in"
                  data-aos-duration="2000">
                  <div className="img-box relative">
                    <Link href="blog">
                      <Image
                        className="w-full h-full img"
                        src={latestblognews3}
                        alt=""
                      />
                    </Link>
                    <div className="absolute bottom-[20px] left-[20px]">
                      <p className="sm:px-4 px-3 py-1 text-[14px] sm:font-semibold font-medium bg-primary text-nu30">
                        Construction
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-[14px] text-nu50 sm:mt-3 mt-2">
                      <span className="sm:pt-1 pt-[2px]">
                        <i className="text-nu50 sm:text-[20px] text-[18px] ph ph-calendar"></i>
                      </span>
                      Jun 12, 2025
                    </p>
                    <Link href="blog">
                      <h5 className="fontMont text-nu30 mt-2">
                        Building Codes: What You Need to Know.
                      </h5>
                    </Link>
                    <p className="text-nu50 mt-2">
                      A beginner-friendly guide to navigating complex
                      construction regulations.
                    </p>
                    <Link
                      href="blog"
                      className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn">
                      <span className="text-nu30 font-semibold sm:px-5 px-2 sm:py-[10px] py-2 sm:text-[18px] text-[16px]">
                        Take a Look
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mt-[60px] sm:mt-10 mt-8 flex justify-center items-center">
              <Link
                href="blog"
                className="btn"
                data-aos="fade-up"
                data-aos-duration="2500">
                <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 text-nu30 sm:text-[18px] text-[15px] sm:font-semibold font-medium">
                  View All Post
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:py-20 md:py-16 py-[60px]">
          <div className="grid grid-cols-12 gap-4">
            {/* <!-- card 1 --> */}
            <div className="lg:col-span-2 sm:col-span-4 col-span-6">
              <Image
                className="w-full h-full saturate-0 hover:saturate-200 duration-300"
                src={construction1}
                alt=""
              />
            </div>
            {/* <!-- card 2 --> */}
            <div className="lg:col-span-2 sm:col-span-4 col-span-6">
              <Image
                className="w-full h-full saturate-0 hover:saturate-200 duration-300"
                src={construction2}
                alt=""
              />
            </div>
            {/* <!-- card 3 --> */}
            <div className="lg:col-span-2 sm:col-span-4 col-span-6">
              <Image
                className="w-full h-full saturate-0 hover:saturate-200 duration-300"
                src={construction3}
                alt=""
              />
            </div>
            {/* <!-- card 4 --> */}
            <div className="lg:col-span-2 sm:col-span-4 col-span-6">
              <Image
                className="w-full h-full saturate-0 hover:saturate-200 duration-300"
                src={construction4}
                alt=""
              />
            </div>
            {/* <!-- card 5 --> */}
            <div className="lg:col-span-2 sm:col-span-4 col-span-6">
              <Image
                className="w-full h-full saturate-0 hover:saturate-200 duration-300"
                src={construction5}
                alt=""
              />
            </div>
            {/* <!-- card 6 --> */}
            <div className="lg:col-span-2 sm:col-span-4 col-span-6">
              <Image
                className="w-full h-full saturate-0 hover:saturate-200 duration-300"
                src={construction6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
