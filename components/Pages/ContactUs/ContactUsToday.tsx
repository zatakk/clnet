import Link from "next/link";

export default function ContactUsToday() {
  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-12">
      <div className="container">
        <div>
          <h1
            className="text-nu30 fontMont sm:font-bold font-semibold text-center sm:mb-10 mb-6"
            data-aos="fade-right"
            data-aos-duration="2000">
            Contact Us Today
          </h1>
          <div className="grid grid-cols-12 bg-nu30 py-6 max-sm:gap-3">
            <div
              className="lg:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="1400">
              <div className="sm:px-6 px-4 sm:py-6 py-4 text-center xl:border-r-2 border-r-0 border-nu40">
                <span className="sm:pb-6 pb-4">
                  <i className="sm:px-2 px-1 sm:py-2 py-1 text-nu30 bg-primary ph ph-phone"></i>
                </span>
                <span className="text-nu10 pb-2 fontMont sm:font-bold font-semibold">
                  Phone Number
                </span>

                <Link
                  href="tel:+1234567890"
                  className="block pb-1 font-medium text-base">
                  +123-456-7890
                </Link>
                <Link
                  href="tel:+1234567890"
                  className="block font-medium text-base">
                  +123-456-7890
                </Link>
              </div>
            </div>
            <div
              className="lg:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="1600">
              <div className="sm:px-6 px-4 sm:py-6 py-4 text-center xl:border-r-2 border-r-0 border-nu40">
                <span className="sm:pb-6 pb-4">
                  <i className="sm:px-2 px-1 sm:py-2 py-1 text-nu30 bg-primary ph ph-envelope-simple"></i>
                </span>
                <span className="text-nu10 pb-2 fontMont sm:font-bold font-semibold">
                  Contact Email
                </span>

                <Link
                  href="mailto:info@yourcompany.com"
                  className="block pb-1 font-medium text-base">
                  info@yourcompany.com
                </Link>
                <Link
                  href="mailto:support@yourcompany.com"
                  className="block font-medium text-base">
                  support@yourcompany.com
                </Link>
              </div>
            </div>
            <div
              className="lg:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="1800">
              <div className="sm:px-6 px-4 sm:py-6 py-4 text-center xl:border-r-2 border-r-0 border-nu40">
                <span className="sm:pb-6 pb-4">
                  <i className="sm:px-2 px-1 sm:py-2 py-1 text-nu30 bg-primary ph ph-paper-plane-tilt"></i>
                </span>
                <span className="text-nu10 pb-2 fontMont sm:font-bold font-semibold">
                  Our Location
                </span>

                <span className="block pb-1 font-medium text-base">
                  123 Builder St,
                </span>
                <span className="block font-medium text-base">
                  Construction City, TX, USA
                </span>
              </div>
            </div>
            <div
              className="lg:col-span-3 sm:col-span-6 col-span-12"
              data-aos="fade-up"
              data-aos-duration="2000">
              <div className="sm:px-6 px-4 sm:py-6 py-4 text-center">
                <span className="sm:pb-6 pb-4">
                  <i className="sm:px-2 px-1 sm:py-2 py-1 text-nu30 bg-primary ph ph-hourglass-medium"></i>
                </span>
                <span className="text-nu10 pb-2 fontMont sm:font-bold font-semibold">
                  Business Hours
                </span>

                <span className="block pb-1 font-medium text-base">
                  Monday – Friday, 9:00 AM – 6:00 PM
                </span>
                <span className="block font-medium text-base">
                  Sunday - Off Day
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
