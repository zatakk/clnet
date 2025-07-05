

export default function LetsDiscuss() {
  return (
    <div className="md:mt-16 sm:mt-10 mt-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-2"></div>
        <div className="lg:col-span-8 col-span-12">
          <div>
            <h5
              className="text-nu40 fontMont sm:font-bold font-semibold sm:mb-4 mb-3"
              data-aos="fade-right"
              data-aos-duration="2000">
              Contact Me
            </h5>
            <h1
              className="text-nu30 fontMont sm:font-bold font-semibold"
              data-aos="fade-left"
              data-aos-duration="2000">
              Let’s Discuss Your Construction Needs
            </h1>
            <div
              className="bg-nu10 sm:mt-8 mt-4"
              data-aos="fade-up"
              data-aos-duration="2000">
              <form>
                <input
                  type="text"
                  className="sm:mb-4 mb-3 placeholder:text-nu40 sm:placeholder:font-semibold text-nu30 bg-nu70 border-none outline-none bg-froms sm:px-4 px-2 sm:py-4 py-2 rounded-none !bg-nu70"
                  name="name"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="sm:mb-4 mb-3 placeholder:text-nu40 sm:placeholder:font-semibold text-nu30 bg-nu70 border-none outline-none bg-froms sm:px-4 px-2 sm:py-4 py-2 rounded-none !bg-nu70"
                  name="name"
                  placeholder="Email"
                />
                <input
                  type="number"
                  className="sm:mb-4 mb-3 placeholder:text-nu40 sm:placeholder:font-semibold text-nu30 bg-nu70 border-none outline-none bg-froms sm:px-4 px-2 sm:py-4 py-2 rounded-none !bg-nu70"
                  name="number"
                  placeholder="Phone Number"
                />
                <select className="w-full sm:h-[58px] h-[44px] bg-nu70 border-none outline-none flex items-center !bg-nu70 !text-nu30 p-3">
                  <option data-display="Select Subject" className="!text-nu30">
                    Select Subject
                  </option>
                  <option value="1">Some option</option>
                  <option value="2">Another option</option>
                  <option value="3">A disabled option</option>
                  <option value="4">Potato</option>
                </select>
                <textarea
                  cols={10}
                  rows={6}
                  className="placeholder:text-nu40 sm:mt-4 mt-3 bg-nu70 placeholder:font-semibold text-nu30 border-none outline-none bg-froms px-4 py-3 rounded-none !bg-nu70"
                  id="message"
                  placeholder="Message"></textarea>
                <div className="sm:pt-4 pt-3">
                  <div className="text-center inline-block">
                    <button className="btn2">
                      <span className="sm:px-[20px] px-4 sm:py-[10px] py-2 sm:text-[16px] text-[15px] sm:font-bold font-medium">
                        Send Message
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2"></div>
      </div>
    </div>
  );
}
