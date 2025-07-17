"use client";

import { useEffect, useState } from "react";

interface MembershipLevel {
  level_id: string;
  level_name: string;
  initial_payment: number;
  billing_amount: number;
  cycle_number: string;
  cycle_period: string;
  buy_url: string;
  description: string;
}

// Placeholder BestRibbon component
const BestRibbon = ({ text }: { text: string }) => (
  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
    {text}
  </div>
);

export default function MembershipsListing() {
  const [levels, setLevels] = useState<MembershipLevel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMemberships = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://construction-world.org/wp-json/custom-api/v1/membership-levels"
        );
        if (!res.ok) {
          throw new Error('Failed to fetch membership levels');
        }
        const data: MembershipLevel[] = await res.json();
        setLevels(data);
      } catch (error) {
        console.error('Error fetching membership levels:', error);
        setLevels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberships();
  }, []);

  const formatCycle = (cycle_number: string, cycle_period: string): string => {
    if (cycle_number === "0" || cycle_period === "0") return "One-time";
    const num = parseInt(cycle_number);
    return `${num} ${cycle_period}${num > 1 ? "s" : ""}`;
  };

  // Map levels to package structure
  const studentPackages = levels.map((level) => {
    const nameParts = (level.level_name || "Unnamed").split(" ");
    const firstPart = nameParts[0] || "Unnamed";
    const secondPart = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
    return {
      name: level.level_name,
      price: level.initial_payment,
      duration: level.billing_amount > 0
        ? `₹${level.billing_amount} every ${formatCycle(level.cycle_number, level.cycle_period)}`
        : "No recurring payments",
      features: level.description || '<ul><li>No features available</li></ul>',
      cta: { href: level.buy_url, text: "Select Package" },
      ribbon: level.level_name.toLowerCase().includes("premium") ? "Best Value" : null,
      firstPart,
      secondPart,
    };
  });

  // Placeholder background style
  const cardBgStyle = { backgroundColor: "#ffffff" };

  return (
    <section className="bg-gray-50 py-16 px-4" id="membership-levels">
      <style jsx>{`
        .features-container ul {
          list-style-type: disc !important;
          list-style-position: outside !important;
          margin-left: 0;
        }
        .features-container li {
          list-style-type: disc !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Membership</h1>
        <p className="text-gray-600 text-lg">
          Select the best membership plan that fits your journey with us.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-lg font-semibold text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {studentPackages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className="relative bg-gray-50 rounded-2xl p-2 border border-gray-100 hover:scale-105 hover:border-[#ffc000] transition-transform duration-200 cursor-pointer"
            >
              <div
                className="rounded-xl p-8 flex flex-col items-center w-full h-full"
                style={cardBgStyle}
              >
                {pkg.ribbon && <BestRibbon text={pkg.ribbon} />}
                <div className="w-full rounded-lg bg-gray-900 text-white mb-6 flex flex-col items-center py-4 px-2">
                  <h3 className="text-xl font-bold mb-1 text-white">{pkg.firstPart}</h3>
                  <span className="text-base font-semibold tracking-wide mb-2">{pkg.secondPart}</span>
                  <div className="text-4xl font-extrabold mb-1 text-white">₹{pkg.price}</div>
                  <div className="text-gray-200 text-sm">{pkg.duration}</div>
                </div>
                {/* Render raw HTML for features with styling */}
                <div
                  className="features-container mb-8 w-full text-gray-700 text-base pl-4"
                  dangerouslySetInnerHTML={{ __html: pkg.features }}
                />
                <a
                  href={pkg.cta.href}
                  className="mt-auto bg-[#ffc000] hover:bg-[#e6ad00] text-black font-bold px-8 py-2 rounded-lg transition shadow"
                >
                  {pkg.cta.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}