"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import jobsImage from "@/public/images/jobs/Starry-Night-Reflection.jpeg"; // Fallback image

type Job = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  link: string;
  acf?: {
    featured_image?: string;
  };
};

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch(
        `https://construction-world.org/jobs/wp-json/wp/v2/job-listings?per_page=6&page=${page}`
      );
      const data = await res.json();
      const total = res.headers.get("X-WP-TotalPages");
      setJobs(data);
      if (total) setTotalPages(parseInt(total));
    };
    fetchJobs();
  }, [page]);

  const stripHtml = (html: string) =>
    html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ");

  const trimWords = (text: string, wordLimit: number) => {
    const words = text.trim().split(/\s+/);
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <section className="lg:py-20 md:py-16 py-[60px]" id="jobs">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 md:gap-4 justify-end items-end mb-10">
          <div className="lg:col-span-6 md:col-span-8 col-span-12">
            <h4 className="text-nu40 sm:mb-3 mb-2 fontMont font-semibold">
              Jobs
            </h4>
            <h1 className="text-nu30 fontMont sm:font-bold font-semibold">
              Building with Precision, Innovation, and Integrity
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-nu70 sm:px-4 px-2 sm:py-4 py-2 rounded-lg"
            >
              <div className="img-box">
                <Link href={job.link}>
                  <Image
                    className="w-full h-[200px] object-cover rounded-md"
                    src={job.acf?.featured_image || jobsImage.src}
                    alt={job.title.rendered}
                    width={500}
                    height={300}
                  />
                </Link>
              </div>
              <div className="sm:mt-6 mt-4 w-full h-full">
                <Link href={job.link}>
                  <h4 className="text-nu30 sm:mb-2 mb-1 fontMont line-clamp-1">
                    {job.title.rendered}
                  </h4>
                </Link>
                <p className="text-nu30 sm:pb-6 pb-4 sm:text-[18px] text-[14px] font-medium">
                  {trimWords(stripHtml(job.content.rendered), 15)}
                </p>
                <Link
                  href={job.link}
                  className="text-nu30 sm:font-bold font-semibold hover:text-primary duration-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-nu40 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-nu30 font-semibold">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-nu40 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}