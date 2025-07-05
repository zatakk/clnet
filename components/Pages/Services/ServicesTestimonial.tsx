import Image from "next/image";
import clientsman1 from "@/public/images/services-page/clients-man1.png";
import clientsman2 from "@/public/images/services-page/clients-man2.png";
import clientsman3 from "@/public/images/services-page/clients-man3.png";

export default function ServicesTestimonial() {
  return (
    <section className="bg-nu10 lg:pb-20 md:pb-16 pb-[60px] lg:pt-20 md:pt-16 pt-3">
      <div className="container">
        <div>
          <div className="md:mb-[60px] sm:mb-10 mb-8">
            <h1
              className="text-nu30 fontMont sm:font-bold font-semibold"
              data-aos="fade-right"
              data-aos-duration="2000">
              What Our Clients Say
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- card 1 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-10 sm:px-6 px-3 md:py-12 sm:py-6 py-3 bg-nu70 rounded-lg w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="flex items-center gap-2">
                  <Image src={clientsman1} alt="" />
                  <div>
                    <h5 className="text-nu30 fontMont font-bold mb-1">
                      Sarah Thompson
                    </h5>
                    <p className="text-nu30 font-medium">Property Developer</p>
                  </div>
                </div>
                <div className="sm:mt-4 mt-3">
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                </div>
                <p className="text-nu30 font-medium sm:mt-6 mt-3">
                  Finding a trustworthy contractor can be tough, but this team
                  made the entire process smooth and stress-free. Great
                  experience!
                </p>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-10 sm:px-6 px-3 md:py-12 sm:py-6 py-3 bg-nu70 rounded-lg w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="flex items-center gap-2">
                  <Image src={clientsman2} alt="" />
                  <div>
                    <h5 className="text-nu30 fontMont font-bold mb-1">
                      James Anderson
                    </h5>
                    <p className="text-nu30 font-medium">Property Developer</p>
                  </div>
                </div>
                <div className="sm:mt-4 mt-3">
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                </div>
                <p className="text-nu30 font-medium sm:mt-6 mt-3">
                  Finding a trustworthy contractor can be tough, but this team
                  made the entire process smooth and stress-free. Great
                  experience!
                </p>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="md:px-10 sm:px-6 px-3 md:py-12 sm:py-6 py-3 bg-nu70 rounded-lg w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="flex items-center gap-2">
                  <Image src={clientsman3} alt="" />
                  <div>
                    <h5 className="text-nu30 fontMont font-bold mb-1">
                      Robert Evans
                    </h5>
                    <p className="text-nu30 font-medium">Property Developer</p>
                  </div>
                </div>
                <div className="sm:mt-4 mt-3">
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                  <i className="text-primary ph-fill ph-star"></i>
                </div>
                <p className="text-nu30 font-medium sm:mt-6 mt-3">
                  Finding a trustworthy contractor can be tough, but this team
                  made the entire process smooth and stress-free. Great
                  experience!
                </p>
              </div>
            </div>
          </div>
          {/* <!-- button --> */}
          <div className="flex justify-center gap-2 md:mt-[50px] sm:mt-8 mt-4 bg-nu2">
            <span className="d-center cursor-pointer sm:px-[12px] size-10 bg-primary hover:bg-secondary1 duration-500 text-nu30 hover:text-ft">
              1
            </span>
            <span className="d-center cursor-pointer sm:px-[12px] size-10 bg-primary hover:bg-secondary1 duration-500 text-nu30 hover:text-ft">
              2
            </span>
            <span className="d-center cursor-pointer sm:px-[12px] size-10 bg-primary hover:bg-secondary1 duration-500 text-nu30 hover:text-ft">
              3
            </span>
            <span className="d-center cursor-pointer sm:px-[12px] size-10 bg-primary hover:bg-secondary1 duration-500 text-nu30 hover:text-ft">
              4
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
