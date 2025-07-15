"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import fallbackImage from "@/public/images/jobs/Starry-Night-Reflection.jpeg";

type Event = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  link: string;
  acf?: {
    featured_image?: string;
  };
};

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(
        `https://construction-world.org/events/wp-json/wp/v2/event?per_page=6&page=${page}`
      );
      const data = await res.json();
      const total = res.headers.get("X-WP-TotalPages");
      setEvents(data);
      if (total) setTotalPages(parseInt(total));
    };
    fetchEvents();
  }, [page]);

  const stripHtmlAndDecode = (html: string) => {
    const stripped = html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ");
    const txt = document.createElement("textarea");
    txt.innerHTML = stripped;
    return txt.value;
  };

  return (
    <section className="lg:py-20 md:py-16 py-[60px]" id="events">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 md:gap-4 justify-end items-end mb-10">
          <div className="lg:col-span-6 md:col-span-8 col-span-12">
            <h4 className="text-nu40 sm:mb-3 mb-2 fontMont font-semibold">
              Events
            </h4>
            <h1 className="text-nu30 fontMont sm:font-bold font-semibold">
              Discover Our Upcoming Construction Events
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={event.link}>
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={event.acf?.featured_image || fallbackImage}
                    alt={event.title.rendered}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              </Link>

              <div className="p-5">
                <Link href={event.link}>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {event.title.rendered}
                  </h4>
                </Link>
                <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                  {stripHtmlAndDecode(event.excerpt.rendered)}
                </p>
                <Link
                  href={event.link}
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}