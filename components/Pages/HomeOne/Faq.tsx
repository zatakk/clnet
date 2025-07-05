"use client";
import { accordionData } from "@/public/dataStor/AllData";
import { useState } from "react";
export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section lg:py-[100px] md:py-20 sm:py-16 py-12">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6 col-span-12 max-lg:order-last">
            <div
              className="bg-nu50 sm:px-8 px-4 sm:py-8 py-4"
              data-aos="fade-up"
              data-aos-duration="2000">
              <form>
                <input
                  type="text"
                  className="sm:mb-4 mb-3 placeholder:text-nu30 bg-nu10 text-nu30 sm:px-4 px-3 sm:py-4 py-[6px] rounded-none"
                  name="name"
                  placeholder="Name*"
                />

                <input
                  type="email"
                  className="sm:mb-4 mb-3 placeholder:text-nu30 bg-nu10 text-nu30 sm:px-4 px-3 sm:py-4 py-[6px] rounded-none"
                  name="name"
                  placeholder="Email*"
                />
                <input
                  type="number"
                  className="sm:mb-4 mb-3 placeholder:text-nu30 bg-nu10 text-nu30 sm:px-4 px-3 sm:py-4 py-[6px] rounded-none"
                  name="name"
                  placeholder="Phone Number*"
                />

                <textarea
                  cols={30}
                  rows={6}
                  className="placeholder:text-nu30 bg-nu10 text-nu30 placeholder:font-semibold rounded-none sm:mb-4 mb-3"
                  placeholder="Message"></textarea>
                <div className="bg-primary hover:bg-secondary1 duration-500 text-center">
                  <button
                    type="submit"
                    className="sm:text-[16px] text-[14px]  !py-2 !sm:py-3 font-semibold text-nu30">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="max-lg:mb-14 max-sm:mb-10">
              <div className="lg:mb-14 sm:mb-10 mb-8">
                <h4
                  className="text-nu20 fontMont sm:mb-4 mb-3"
                  data-aos="fade-up"
                  data-aos-duration="1600">
                  Frequently Asked Questions
                </h4>
                <h1
                  className="text-nu10 fontMont sm:mb-6 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1600">
                  Construction FAQs: <br />
                  Clear and Transparent
                </h1>
              </div>
              <div className="accordion-section">
                {accordionData.map((item, index) => (
                  <div
                    className={`className="accordion-single mb-3 sm:mb-4" ${
                      activeIndex === index ? "active" : ""
                    }`}
                    key={index}>
                    <div
                      className="header-area flex justify-between bg-primary"
                      onClick={() => handleClick(index)}>
                      <button
                        className="accordion-btn text-nu30 d-flex align-items-start position-relative"
                        type="button">
                        {item.title}
                      </button>
                      <div className="">
                        <span
                          className={` ${
                            activeIndex === index ? "hidden btnfrv pt-1" : ""
                          }`}>
                          <i className="text-nu30 px-2 py-2 rounded-md bg-nu10 text-[18px] ph-bold ph-plus"></i>
                        </span>
                        <span
                          className={` ${
                            activeIndex === index ? "btnfadd pt-1" : "hidden"
                          }`}>
                          <i className="text-nu30 px-2 py-2 rounded-md bg-nu10 text-[18px] ph-bold ph-minus"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      className={`bg-nu40 px-[10px] py-[10px] ${
                        activeIndex === index ? "" : "hidden"
                      }`}>
                      <div className="content-body">
                        <p className="text-nu1">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
