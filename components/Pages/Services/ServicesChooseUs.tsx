export default function ServicesChooseUs() {
  return (
    <section className="bg-nu10 lg:pb-20 md:pb-16 pb-[60px]">
      <div className="container">
        <div>
          <div className="text-center md:mb-[60px] sm:mb-10 mb-8">
            <h4
              className="text-nu40 fontMont sm:font-semibold font-medium"
              data-aos="fade-right"
              data-aos-duration="2000">
              Why Choose Us
            </h4>
            <h1
              className="text-nu30 sm:mt-3 mt-2 fontMont sm:font-bold font-semibold"
              data-aos="fade-left"
              data-aos-duration="2000">
              Building Trust, One <br className="max-md:hidden" />
              Project at a Time
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- card 1 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="sm:px-6 px-4 bg-secondary1 rounded-lg border-2 border-nu20 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="sm:py-6 py-4 border-b-2 border-nu20">
                  <span>
                    <i className="sm:px-3 px-2 sm:py-3 py-2 bg-primary sm:text-[28px] text-[20px] text-nu30 ph-bold ph-cpu"></i>
                  </span>
                  <h4 className="text-nu30 sm:pt-6 pt-4 fontMont">
                    Experience and Expertise
                  </h4>
                  <p className="text-nu40 sm:pt-6 pt-4">
                    With over a decade of experience, we deliver high-quality
                    construction solutions tailored to your needs
                  </p>
                </div>
                <div>
                  <div className="sm:py-6 py-4">
                    <h1 className="flex items-center text-nu30 fontMont">
                      300+
                    </h1>
                    <p className="text-nu50">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="sm:px-6 px-4 bg-secondary1 rounded-lg border-2 border-nu20 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="sm:py-6 py-4 border-b-2 border-nu20">
                  <span>
                    <i className="sm:px-3 px-2 sm:py-3 py-2 bg-primary sm:text-[28px] text-[20px] text-nu30 ph-bold ph-database"></i>
                  </span>
                  <h4 className="text-nu30 sm:pt-6 pt-4 fontMont">
                    Affordable Solutions
                  </h4>
                  <p className="text-nu40 sm:pt-6 pt-4">
                    Get premium construction services at competitive prices,
                    customized to your budget.
                  </p>
                </div>
                <div>
                  <div className="sm:py-6 py-4">
                    <h1 className="flex items-center text-nu30 fontMont">
                      98%
                    </h1>
                    <p className="text-nu50">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <div
                className="sm:px-6 px-4 bg-secondary1 rounded-lg border-2 border-nu20 w-full h-full"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className="sm:py-6 py-4 border-b-2 border-nu20">
                  <span>
                    <i className="sm:px-3 px-2 sm:py-3 py-2 bg-primary sm:text-[28px] text-[20px] text-nu30 ph-bold ph-magnet"></i>
                  </span>
                  <h4 className="text-nu30 sm:pt-6 pt-4 fontMont">
                    Client-Centric Approach
                  </h4>
                  <p className="text-nu40 sm:pt-6 pt-4">
                    Your satisfaction is our priority. We collaborate closely to
                    bring your vision to life.
                  </p>
                </div>
                <div>
                  <div className="sm:py-6 py-4">
                    <h1 className="counters flex items-center text-nu30 fontMont">
                      24/7
                    </h1>
                    <p className="text-nu50">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
