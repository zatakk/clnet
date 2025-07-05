import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import React from "react";

const membershipBenefits = [
  {
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-10 h-10 text-blue-600"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" /></svg>
    ),
    title: "DISCOUNTS",
    desc: "Each Membership gives special discounts across all your purchases",
  },
  {
    icon: (
      <svg viewBox="0 0 576 512" fill="currentColor" className="w-10 h-10 text-green-600"><path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
    ),
    title: "LIVE SESSIONS",
    desc: "Get invited to Live Sessions",
  },
  {
    icon: (
      <svg viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10 text-purple-600"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" /></svg>
    ),
    title: "SPECIAL ACCESS",
    desc: "Get access to membership only content that is not available to others",
  },
  {
    icon: (
      <svg viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10 text-yellow-600"><path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z" /></svg>
    ),
    title: "Special Prices",
    desc: "Get Special Prices on select services for members only",
  },
];

// Membership packages data (student, professional, corporate)
const studentPackages = [
  {
    name: "Rookie",
    price: 250,
    duration: "for 3 months",
    features: [
      { label: "Foundation Courses", included: true },
      { label: "Intermediate Courses", included: false },
      { label: "Advanced Courses", included: false },
      { label: "Career Corner", included: false },
      { label: "Internships", included: false },
      { label: "Fresher Jobs", included: false },
      { label: "Standard Discount", included: false },
      { label: "Special Discounts", included: false },
    ],
    cta: { text: "Get Rookie", href: "?add-to-cart=36128" },
  },
  {
    name: "Champ",
    price: 450,
    duration: "for 6 months",
    features: [
      { label: "Foundation Courses", included: true },
      { label: "Intermediate Courses", included: true },
      { label: "Advanced Courses", included: false },
      { label: "Career Corner", included: true },
      { label: "Internships", included: true },
      { label: "Fresher Jobs", included: false },
      { label: "Standard Discount - 5%", included: true },
      { label: "Special Discounts", included: false },
    ],
    cta: { text: "Get Champ", href: "?add-to-cart=36136" },
  },
  {
    name: "Pro",
    price: 750,
    duration: "for 12 months",
    features: [
      { label: "Foundation Courses", included: true },
      { label: "Intermediate Courses", included: true },
      { label: "Advanced Courses", included: true },
      { label: "Career Corner", included: true },
      { label: "Internships", included: true },
      { label: "Fresher Jobs", included: true },
      { label: "Standard Discount - 5%", included: true },
      { label: "Special Discounts", included: true },
    ],
    cta: { text: "Get Pro", href: "?add-to-cart=36137" },
    ribbon: "BEST",
  },
];

const professionalPackages = [
  {
    name: "Silver",
    price: 600,
    duration: "for 3 months",
    features: [
      "Access to Foundation Courses",
      "Access to Intermediate Courses",
      "Access to Advanced Courses - No",
      "Standard Discount - None",
      "Spl Discounts - None",
      "Job Search - Standard",
      "Careers - Standard",
    ],
    cta: { text: "Get started", href: "?add-to-cart=36138" },
  },
  {
    name: "Gold",
    price: 999,
    duration: "for 6 months",
    features: [
      "Access to Foundation Courses",
      "Access to Intermediate Courses",
      "Access to Advanced Courses",
      "Standard Discount - 5%",
      "Spl Discounts - None",
      "Job Search - Standard",
      "Careers - Premium",
    ],
    cta: { text: "Get started", href: "?add-to-cart=36139" },
  },
  {
    name: "Platinum",
    price: 1500,
    duration: "for 12 months",
    features: [
      "Access to Foundation Courses",
      "Access to Intermediate Courses",
      "Access to Advanced Courses",
      "Standard Discount - 10%",
      "Spl Discounts - 5%",
      "Job Search - Premium",
      "Careers - Premium",
    ],
    cta: { text: "Get started", href: "?add-to-cart=36140" },
    ribbon: "Best",
  },
];

const corporatePackages = [
  {
    name: "Basic",
    price: 5000,
    duration: "for 6 Months",
    features: [
      "5 Employee Accounts",
      "5% discount on Course Fees",
      "Standard Job Listing - 2 per month",
      "Premium Job Listing - None",
      "Assessments - None",
    ],
    cta: { text: "Subscribe", href: "?add-to-cart=40981" },
  },
  {
    name: "Prime",
    price: 12000,
    duration: "for 12 Months",
    features: [
      "5 Employee Accounts",
      "10% discount on Course Fees",
      "Standard Job Listing - 2 per month",
      "Premium Job Listing - 2 per month",
      "Assessments - Standard Access",
    ],
    cta: { text: "Subscribe", href: "?add-to-cart=36141" },
  },
  {
    name: "Elite",
    price: 18000,
    duration: "for 12 Months",
    features: [
      "10 Employee Accounts",
      "10% discount on Course Fees",
      "Standard Job Listing - 5 per month",
      "Premium Job Listing - 5 per month",
      "Assessments - Premium Access",
    ],
    cta: { text: "Subscribe", href: "?add-to-cart=36135" },
    ribbon: "Best",
  },
];

function FeatureIcon({ included }: { included: boolean }) {
  return included ? (
    <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 text-green-500 inline-block mr-2"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg>
  ) : (
    <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 text-gray-300 inline-block mr-2"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
  );
}

// Custom card background style
const cardBgStyle = { background: '#0000000a' };

// Add this helper component for the ribbon
const BestRibbon = ({ text = "Best" }) => (
  <div
    className="absolute top-0 right-0 z-10"
    style={{ width: 120, height: 120, overflow: 'hidden', pointerEvents: 'none' }}
  >
    <div
      className="flex items-center justify-center font-semibold text-white text-sm"
      style={{
        background: '#00ce1b',
        color: '#fff',
        width: 180,
        position: 'absolute',
        top: 32,
        right: -60,
        transform: 'rotate(45deg)',
        fontSize: 14,
        height: 32,
        boxShadow: '0 2px 8px #00ce1b44',
        letterSpacing: 1,
        textAlign: 'center',
        pointerEvents: 'auto',
      }}
    >
      {text}
    </div>
  </div>
);

const MembershipDetailsPage = () => {
  return (
    <>

      <Navbar />
      <Breadcrumb
        title="Membership Details"
        sectionClass="project-section md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Membership Details" }]}
      />
      <main className="min-h-screen py-12 px-2 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">Membership Details</h1>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold mb-8 text-center text-blue-800 bg-blue-50 px-8 py-4 rounded-xl shadow-sm inline-block">Explore the benefits of Memberships</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {membershipBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl  p-2 border border-gray-100  hover:scale-105 hover:border-[#ffc000] transition-transform duration-200 cursor-pointer">
                  <div className="rounded-xl p-6 flex flex-col items-center text-center w-full h-full" style={cardBgStyle}>
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{benefit.title}</h3>
                    <p className="text-nu30 text-base font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Student Membership Packages */}
          <section className="mb-20">
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold mb-8 text-center text-blue-800 bg-blue-50 px-8 py-4 rounded-xl shadow-sm inline-block">Student Membership Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {studentPackages.map((pkg, idx) => (
                <div key={pkg.name} className="relative bg-gray-50 rounded-2xl  p-2 border border-gray-100  hover:scale-105 hover:border-[#ffc000] transition-transform duration-200 cursor-pointer">
                  <div className="rounded-xl p-8 flex flex-col items-center w-full h-full" style={cardBgStyle}>
                    {pkg.ribbon && <BestRibbon text={pkg.ribbon} />}
                    <div className="w-full rounded-lg bg-gray-900 text-white mb-6 flex flex-col items-center py-4 px-2">
                      <h3 className="text-xl font-bold mb-1 text-white">Student</h3>
                      <span className="text-base font-semibold tracking-wide mb-2">{pkg.name}</span>
                      <div className="text-4xl font-extrabold mb-1 text-white">₹{pkg.price}</div>
                      <div className="text-gray-200 text-sm">{pkg.duration}</div>
                    </div>
                    <ul className="mb-8 w-full">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center mb-3 text-gray-700 text-base">
                          <FeatureIcon included={feature.included} />
                          <span className="font-medium">{feature.label}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={pkg.cta.href} className="mt-auto bg-[#ffc000] hover:bg-[#e6ad00] text-black font-bold px-8 py-2 rounded-lg transition shadow">{pkg.cta.text}</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Membership Packages */}
          <section className="mb-20">
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold mb-8 text-center text-blue-800 bg-blue-50 px-8 py-4 rounded-xl shadow-sm inline-block">Professional Membership Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {professionalPackages.map((pkg, idx) => (
                <div key={pkg.name} className="relative bg-gray-50 rounded-2xl  p-2 border border-gray-100  hover:scale-105 hover:border-[#ffc000] transition-transform duration-200 cursor-pointer">
                  <div className="rounded-xl p-8 flex flex-col items-center w-full h-full" style={cardBgStyle}>
                    {pkg.ribbon && <BestRibbon text={pkg.ribbon} />}
                    <div className="w-full rounded-lg bg-gray-900 text-white mb-6 flex flex-col items-center py-4 px-2">
                      <h3 className="text-xl font-bold mb-1 text-white">Professional</h3>
                      <span className="text-base font-semibold tracking-wide mb-2">{pkg.name}</span>
                      <div className="text-4xl font-extrabold mb-1 text-white">₹{pkg.price}</div>
                      <div className="text-gray-200 text-sm">{pkg.duration}</div>
                    </div>
                    <ul className="mb-8 w-full">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center mb-3 text-gray-700 text-base">
                          <span className="w-2 h-2 rounded-full bg-[#ffc000] mr-3 inline-block"></span>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={pkg.cta.href} className="mt-auto bg-[#ffc000] hover:bg-[#e6ad00] text-black font-bold px-8 py-2 rounded-lg transition shadow">{pkg.cta.text}</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Corporate Membership Packages */}
          <section className="mb-20">
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold mb-8 text-center text-blue-800 bg-blue-50 px-8 py-4 rounded-xl shadow-sm inline-block">Corporate Membership Package</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {corporatePackages.map((pkg, idx) => (
                <div key={pkg.name} className="relative bg-gray-50 rounded-2xl  p-2 border border-gray-100  hover:scale-105 hover:border-[#ffc000] transition-transform duration-200 cursor-pointer">
                  <div className="rounded-xl p-8 flex flex-col items-center w-full h-full" style={cardBgStyle}>
                    {pkg.ribbon && <BestRibbon text={pkg.ribbon} />}
                    <div className="w-full rounded-lg bg-gray-900 text-white mb-6 flex flex-col items-center py-4 px-2">
                      <h3 className="text-xl font-bold mb-1 text-white">Corporate</h3>
                      <span className="text-base font-semibold tracking-wide mb-2">{pkg.name}</span>
                      <div className="text-4xl font-extrabold mb-1 text-white">₹{pkg.price}</div>
                      <div className="text-gray-200 text-sm">{pkg.duration}</div>
                    </div>
                    <ul className="mb-8 w-full">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center mb-3 text-gray-700 text-base">
                          <span className="w-2 h-2 rounded-full bg-[#ffc000] mr-3 inline-block"></span>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={pkg.cta.href} className="mt-auto bg-[#ffc000] hover:bg-[#e6ad00] text-black font-bold px-8 py-2 rounded-lg transition shadow">{pkg.cta.text}</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MembershipDetailsPage;
