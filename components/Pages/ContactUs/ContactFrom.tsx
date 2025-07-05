import Image from "next/image";
import greattogether from "@/public/images/services-page/great-together.png";

export default function ContactFrom() {
  return (
    <section className="great-together-section lg:py-20 md:py-16 py-12">
      <div className="container">
        <div className="pb-6">
          <h1
            className="text-nu30 fontMont sm:font-bold font-semibold"
            data-aos="fade-right"
            data-aos-duration="2000">
            Let’s Build Something Great <br className="max-md:hidden" />
            Together!
          </h1>
          <p
            className="text-nu40 font-medium sm:mt-4 mt-3"
            data-aos="fade-left"
            data-aos-duration="2000">
            Tell us about your project, and we’ll provide expert guidance every
            step of the way.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-7 col-span-12">
            <div
              className="bg-nu10"
              data-aos="fade-up"
              data-aos-duration="2000">
              <div className="bg-nu7 md:px-[55px] sm:px-8 px-4 md:py-[60px] sm:py-10 py-4 rounded-2xl">
                <form>
                  <div className="flex max-md:flex-wrap items-center gap-6 sm:mb-6 mb-3">
                    <div className="w-full flex items-center bg-nu70 px-4 sm:py-3 py-1">
                      <span className="pt-2">
                        <i className="text-nu30 ph ph-user-circle-plus"></i>
                      </span>
                      <input
                        type="text"
                        className="placeholder:text-nu40 px-2 py-2 rounded-none text-nu30 !border-none outline-none !bg-nu70"
                        name="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="w-full flex items-center bg-nu70 px-4 sm:py-3 py-1 sm:mt-0 -mt-2">
                      <span className="pt-2">
                        <i className="text-nu30 ph ph-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="placeholder:text-nu40 px-2 py-2 rounded-none text-nu30 !border-none outline-none !bg-nu70"
                        name="name"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="flex max-md:flex-wrap items-center gap-6 sm:mb-6 mb-3">
                    <div className="w-full flex items-center bg-nu70 px-4 sm:py-3 py-1">
                      <span className="pt-2">
                        <i className="text-nu30 ph ph-phone-call"></i>
                      </span>
                      <input
                        type="number"
                        className="placeholder:text-nu40 px-2 py-2 rounded-none text-nu30 !border-none outline-none !bg-nu70"
                        name="name"
                        placeholder="Phone No."
                      />
                    </div>
                    <div className="w-full flex items-center bg-nu70 px-4 sm:py-3 py-1 sm:mt-0 -mt-2">
                      <span className="pt-2">
                        <i className="text-nu30 ph ph-chat"></i>
                      </span>
                      <input
                        type="text"
                        className="placeholder:text-nu40 px-2 py-2 rounded-none text-nu30 !border-none outline-none !bg-nu70"
                        name="name"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-nu70">
                    <span className="pl-4 flex items-center">
                      <i className="text-nu30 ph ph-check"></i>
                    </span>
                    <select className="w-full sm:h-[68px] h-[50px] bg-nu70 !border-none outline-none flex items-center !text-nu30">
                      <option
                        data-display="Select Service"
                        className="!text-nu30">
                        Select Service
                      </option>
                      <option className="!text-nu30" value="1">
                        Some option
                      </option>
                      <option className="!text-nu30" value="2">
                        Another option
                      </option>
                      <option className="!text-nu30" value="3">
                        A disabled option
                      </option>
                      <option className="!text-nu30" value="4">
                        Potato
                      </option>
                    </select>
                  </div>

                  <div className="flex gap-2 bg-nu70 sm:mt-6 mt-3">
                    <span className="pt-[14px] pl-3">
                      <i className="text-nu30 ph ph-pen"></i>
                    </span>
                    <textarea
                      cols={10}
                      rows={5}
                      className="placeholder:text-nu30 px-0 text-nu30 !border-none outline-none !bg-nu70"
                      id="message"
                      placeholder="Message"></textarea>
                  </div>
                  <div className="sm:mt-6 mt-4">
                    <div className="text-center inline-block">
                      <button className="btn2">
                        <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-bold font-medium">
                          Submit Now
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12">
            <div
              className="mt-6 md:mt-10 lg:mt-0"
              data-aos="fade-left"
              data-aos-duration="2000">
              <Image className="w-full h-full" src={greattogether} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
