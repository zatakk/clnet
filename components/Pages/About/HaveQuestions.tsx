import Link from "next/link";

export default function HaveQuestions() {
  return (
    <section className="questions-section xl:pt-[160px] lg:pt-[130px] md:pt-[100px] sm:pt-20 pt-16 xl:pb-[200px] lg:pb-[160px] md:pb-[130px] sm:pb-[100px] pb-20">
      <div className="container">
        <div>
          <h4
            className="text-nu20 fontMont font-semibold sm:mb-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="1600">
            Have Questions?
          </h4>
          <h1
            className="text-nu10 fontMont font-bold sm:mb-6 mb-4"
            data-aos="fade-up"
            data-aos-duration="1600">
            Let’s Start Building <br className="max-md:hidden" />
            Together
          </h1>
          <p
            className="text-nu20 font-medium"
            data-aos="fade-up"
            data-aos-duration="1800">
            We’re here to bring your vision to life, every step of the way.
            <br />
            Let’s work together to create something exceptional.
          </p>
          <div
            className="md:mt-8 sm:mt-6 mt-4"
            data-aos="fade-up"
            data-aos-duration="2000">
            <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 sm:py-[10px] py-1 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block">
              <Link
                href="#"
                className="sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                Request a Quote
              </Link>
            </div>
            <div className="lg:px-[20px] md:px-4 sm:px-2 px-1 sm:py-[10px] py-1 sm:mt-0 mt-3 custom-btn btn-15 hover:text-nu30 border-2 border-nu20 inline-block ml-2">
              <Link
                href="#"
                className="sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
