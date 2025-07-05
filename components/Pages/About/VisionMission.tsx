import Link from "next/link";

export default function VisionMission() {
  return (
    <section className="bg-nu10 lg:pb-20 md:pb-16 pb-[60px]">
      <div className="container">
        <div>
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="lg:col-span-8 md:col-span-8 col-span-12">
              <h2
                className="text-nu30 fontMont sm:font-bold font-semibold"
                data-aos="fade-right"
                data-aos-duration="2000">
                Building with Purpose, Dreaming with Vision and Mission and
                Value.
              </h2>
            </div>
            <div className="lg:col-span-4 md:col-span-4 col-span-12 flex sm:justify-end justify-start items-end">
              <div
                className="sm:text-end text-start"
                data-aos="fade-left"
                data-aos-duration="2000">
                <Link href="contact" className="btn2">
                  <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 md:mt-[60px] sm:mt-10 mt-8">
            {/* <!-- card 1 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="sm:px-6 px-4 bg-secondary1 rounded-lg border-2 border-nu20 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="sm:py-6 py-4 text-center">
                  <span className="sm:px-[10px] px-2 sm:py-[10px] py-2 bg-nu10 inline-block">
                    <i className="text-nu30 d-center ph-bold ph-eye"></i>
                  </span>
                  <h4 className="text-nu30 sm:mt-6 mt-4 fontMont">
                    Our Vision
                  </h4>
                  <p className="text-nu40 sm:mt-6 mt-4">
                    To transform ideas into extraordinary spaces through
                    innovation, craftsmanship, and a commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="sm:px-6 px-4 bg-secondary1 rounded-lg border-2 border-nu20 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="sm:py-6 py-4 text-center">
                  <span className="sm:px-[10px] px-2 sm:py-[10px] py-2 bg-nu10 inline-block">
                    <i className="text-nu30 d-center ph-bold ph-target"></i>
                  </span>
                  <h4 className="text-nu30 sm:mt-6 mt-4 fontMont">
                    Our Mission
                  </h4>
                  <p className="text-nu40 sm:mt-6 mt-4">
                    To be a leading force in construction, creating sustainable,
                    functional, and inspiring structures that shape communities.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="sm:px-6 px-4 bg-secondary1 rounded-lg border-2 border-nu20 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="sm:py-6 py-4 text-center">
                  <span className="sm:px-[10px] px-2 sm:py-[10px] py-2 bg-nu10 inline-block">
                    <i className="text-nu30 d-center ph-bold ph-handshake"></i>
                  </span>
                  <h4 className="text-nu30 sm:mt-6 mt-4 fontMont">
                    Our Values
                  </h4>
                  <p className="text-nu40 sm:mt-6 mt-4">
                    Built on trust, integrity, and collaboration, we strive to
                    deliver quality and foster lasting relationships with every
                    project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
