import Image from "next/image";
import construction1 from "@/public/images/construction1.png";
import construction2 from "@/public/images/construction2.png";
import construction3 from "@/public/images/construction3.png";
import construction4 from "@/public/images/construction4.png";
import construction5 from "@/public/images/construction5.png";
import construction6 from "@/public/images/construction6.png";

export default function BrandsLogoTwo() {
  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-[60px]">
      <div className="container">
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
    </section>
  );
}
