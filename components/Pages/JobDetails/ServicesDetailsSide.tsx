import Link from "next/link";


export default function ServicesDetailsSide() {
  return (
    <div className="xl:col-span-4 col-span-12">
      <div className="sticky top-0">
        <div
          className="bg-nu70 sm:px-6 px-4 sm:py-6 py-4"
          data-aos="fade-up"
          data-aos-duration="1800">
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
          className="bg-nu70 sm:px-6 px-4 sm:py-6 py-4 sm:mt-8 mt-6"
          data-aos="fade-up"
          data-aos-duration="2000">
          <h4 className="text-nu30 fontMont font-bold mb-6">Categories</h4>
          <div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10"
              data-aos="fade-up"
              data-aos-duration="1600">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                Project Management
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
                className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                General Contracting
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="2000">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                Design & Architecture
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="2200">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                Residential Construction
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="2400">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                Commercial Construction
              </Link>
            </div>
            <div
              className="flex items-center gap-3 sm:px-3 px-2 sm:py-3 py-2 bg-nu10 mt-4"
              data-aos="fade-up"
              data-aos-duration="2600">
              <span className="px-1 sm:py-0 py-[2px] bg-primary">
                <i className="text-nu30 text-[18px] ph-bold ph-caret-right"></i>
              </span>
              <Link
                href="javascript:void(0)"
                className="text-nu30 sm:text-[18px] text-[16px] font-semibold">
                Renovation & Remodeling
              </Link>
            </div>
          </div>
        </div>
        <div
          className="working md:pt-[60px] sm:pt-10 pt-8 sm:pb-10 pb-8 text-center sm:mt-8 mt-6"
          data-aos="fade-up"
          data-aos-duration="2200">
          <h4 className="text-nu10 fontMont font-bold sm:mb-6 mb-4">
            Working Hours
          </h4>
          <div className="">
            <div className="flex justify-center items-center gap-3">
              <p className="text-nu10 font-medium">Mon – Fri:</p>
              <p className="text-nu10 font-medium">8 AM – 6 PM</p>
            </div>
            <div className="flex justify-center items-center gap-3 sm:mt-3 mt-2">
              <p className="text-nu10 font-medium">Saturday:</p>
              <p className="text-nu10 font-medium">9 AM – 3 PM</p>
            </div>
            <div className="flex justify-center items-center gap-3 sm:mt-3 mt-2">
              <p className="text-nu10 font-medium">Sunday:</p>
              <p className="text-nu10 font-medium">Closed</p>
            </div>
            <div className="flex justify-center items-center gap-3 sm:mt-3 mt-2">
              <p className="text-nu10 font-medium">Phone:</p>
              <Link href="tel:+12345678900" className="font-medium text-nu10">
                +1 234-567-8900
              </Link>
            </div>
            <div className="flex justify-center items-center gap-3 sm:mt-3 mt-2">
              <p className="text-nu10 font-medium">Email:</p>
              <Link
                href="mailto:info@yourcompany.com"
                className="font-medium text-nu10">
                info@yourcompany.com
              </Link>
            </div>
          </div>
        </div>
        <div
          className="text-center sm:px-5 px-3 sm:py-4 py-2 bg-primary"
          data-aos="fade-up"
          data-aos-duration="2200">
          <button className="text-nu30 font-semibold">Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
}
