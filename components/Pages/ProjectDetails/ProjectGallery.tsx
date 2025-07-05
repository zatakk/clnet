import Image from "next/image";
import projectgallery1 from "@/public/images/project-details-page/project-gallery1.png";
import projectgallery2 from "@/public/images/project-details-page/project-gallery2.png";
import projectgallery3 from "@/public/images/project-details-page/project-gallery3.png";
import projectgallery4 from "@/public/images/project-details-page/project-gallery4.png";

export default function ProjectGallery() {
  return (
    <div className="lg:mt-[60px] md:mt-10 mt-8">
      <h1
        className="text-nu30 fontMont sm:font-bold font-semibold text-center"
        data-aos="fade-right"
        data-aos-duration="1700">
        Project Gallery
      </h1>
      <div className="lg:mt-10 md:mt-8 mt-6">
        <div className="grid grid-cols-2 grid-rows-2 lg:gap-6 md:gap-4 gap-2">
          {/* <!-- card 1 --> */}
          <div className="">
            <div
              className="img-box"
              data-aos="zoom-in"
              data-aos-duration="1700">
              <Image
                className="w-full h-full img"
                src={projectgallery1}
                alt=""
              />
            </div>
          </div>
          {/* <!-- card 2 --> */}
          <div className="row-span-2">
            <div
              className="img-box h-full"
              data-aos="zoom-in"
              data-aos-duration="1700">
              <Image
                className="w-full h-full img"
                src={projectgallery2}
                alt=""
              />
            </div>
          </div>
          {/* <!-- card 3 --> */}
          <div className="row-span-2">
            <div
              className="img-box h-full"
              data-aos="zoom-in"
              data-aos-duration="1700">
              <Image
                className="w-full h-full img"
                src={projectgallery3}
                alt=""
              />
            </div>
          </div>
          {/* <!-- card 4 --> */}
          <div className="">
            <div
              className="img-box"
              data-aos="zoom-in"
              data-aos-duration="1700">
              <Image
                className="w-full h-full img"
                src={projectgallery4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
