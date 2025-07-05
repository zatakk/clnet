"use client";
import Image from "next/image";
import playbutton from "@/public/images/about-page/play-button.png";
import home2rounded from "@/public/images/home2-rounded.png";
import React, { useEffect, useState } from "react";
import VideoModal from "@/components/Shared/VideoModal";

export default function AboutCounterPopUp() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";
  }, [showVideo]);
  return (
    <section className="pb-10 sm:pb-12">
      <div className="video-odometer h-74 sm:h-94 lg:h-[600px] relative">
        <div className="overflow-hidden">
          {/* <Image
            className="w-full lg:py-20 md:py-16 py-[60px]"
            src={videoodomi}
            alt=""
          /> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
            <div className="circle-ripple md:block hidden">
              <div className="popup-youtube">
                <Image
                  onClick={() => setShowVideo(true)}
                  className="cursor-pointer"
                  src={playbutton}
                  alt=""
                />
                <VideoModal
                  videoUrl="https://www.youtube.com/embed/xQGnaoVwf8I"
                  isOpen={showVideo}
                  onClose={() => setShowVideo(false)}
                />
              </div>
            </div>
            <div className="circle-ripple block md:hidden">
              <div className="popup-youtube">
                <Image
                  onClick={() => setShowVideo(true)}
                  className="cursor-pointer"
                  src={home2rounded}
                  alt=""
                />
                <VideoModal
                  videoUrl="https://www.youtube.com/embed/xQGnaoVwf8I"
                  isOpen={showVideo}
                  onClose={() => setShowVideo(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:-mt-16 lg:-mt-24">
        <div className="container relative">
          <div className="container">
            <div className="grid grid-cols-12 gap-4 justify-center">
              {/* <!-- number 1 --> */}
              <div
                className="md:col-span-3 sm:col-span-6 col-span-12"
                data-aos="fade-up"
                data-aos-duration="1600">
                <div className="hover:bg-primary bg-nu80 duration-500 md:px-10 sm:px-8 px-6 md:py-10 sm:py-8 py-6 w-full h-full">
                  <h1 className="counters flex justify-center items-center text-nu30 fontMont display-4">
                    300+
                  </h1>
                  <p className="text-nu50 text-center font-semibold">
                    Completed Projects
                  </p>
                </div>
              </div>
              {/* <!-- number 2 --> */}
              <div
                className="md:col-span-3 sm:col-span-6 col-span-12"
                data-aos="fade-up"
                data-aos-duration="1800">
                <div className="hover:bg-primary bg-nu80 duration-500 md:px-10 sm:px-8 px-6 md:py-10 sm:py-8 py-6 w-full h-full">
                  <h1 className="counters flex justify-center items-center fontMont text-nu30 display-4">
                    200+
                  </h1>
                  <p className="text-nu50 text-center font-semibold">
                    Skill Team Member
                  </p>
                </div>
              </div>
              {/* <!-- number 3 --> */}
              <div
                className="md:col-span-3 sm:col-span-6 col-span-12"
                data-aos="fade-up"
                data-aos-duration="2000">
                <div className="hover:bg-primary bg-nu80 duration-500 md:px-10 sm:px-8 px-6 md:py-10 sm:py-8 py-6 w-full h-full">
                  <h1 className="counters flex justify-center fontMont items-center text-nu30 display-4">
                    24/7
                  </h1>
                  <p className="text-nu50 text-center font-semibold">
                    Support Available
                  </p>
                </div>
              </div>
              {/* <!-- number 4 --> */}
              <div
                className="md:col-span-3 sm:col-span-6 col-span-12"
                data-aos="fade-up"
                data-aos-duration="2200">
                <div className="hover:bg-primary bg-nu80 duration-500 md:px-10 sm:px-8 px-6 md:py-10 sm:py-8 py-6 w-full h-full">
                  <h1 className="counters flex justify-center fontMont items-center text-nu30 display-4">
                    250+
                  </h1>
                  <p className="text-nu50 text-center font-semibold">
                    Repeat Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- video & odometer end --> */}
    </section>
  );
}
