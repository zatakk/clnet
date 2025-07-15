"use client";

import { useEffect, useState } from "react";

export default function MembershipsListing() {
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemberships = async () => {
      setLoading(true);
      const res = await fetch("https://construction-world.org/wp-json/custom-api/v1/membership-levels");
      const data = await res.json();
      setLevels(data);
      setLoading(false);
    };

    fetchMemberships();
  }, []);

  const formatCycle = (cycle_number, cycle_period) => {
    if (cycle_number === "0" || cycle_period === "0") return "One-time";
    return `${cycle_number} ${cycle_period}${cycle_number > 1 ? "s" : ""}`;
  };

  return (
    <section className="bg-gray-50 py-16 px-4" id="membership-levels">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Membership</h1>
        <p className="text-gray-600 text-lg">
          Select the best membership plan that fits your journey with us.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-lg font-semibold text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {levels.map((level) => (
            <div
              key={level.level_id}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 transition-transform transform hover:-translate-y-2 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{level.level_name}</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-4">
                {level.initial_payment > 0 ? `₹${level.initial_payment}` : "Free"}
              </div>
              <p className="text-gray-600 text-sm mb-6">
                {level.billing_amount > 0
                  ? `₹${level.billing_amount} every ${formatCycle(level.cycle_number, level.cycle_period)}`
                  : "No recurring payments"}
              </p>

              <a
                href={level.buy_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-primary text-white font-semibold py-2 px-5 rounded hover:bg-opacity-90 transition"
              >
                Select Package
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}