"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

function stripHtmlTags(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").trim();
}

export default function BlogsListing() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const perPage = 9;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `https://construction-world.org/blogs/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`
      );
      const data: Post[] = await res.json();
      const totalPages = res.headers.get("X-WP-TotalPages");

      setPosts(data);
      setTotalPages(Number(totalPages));
    };

    fetchPosts();
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <section className="bg-nu10 lg:py-20 md:py-16 py-12" id="courses-webinars">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-6 items-end mb-14">
          <div className="2xl:col-span-6 lg:col-span-7 col-span-12">
            <h1 className="text-nu30 fontMont sm:font-bold font-semibold">
              Latest Blogs
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {posts.map((post) => {
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/default-image.jpg";

            return (
              <div key={post.id} className="xl:col-span-4 md:col-span-6 col-span-12">
                <div className="bg-secondary1 w-full h-full md:px-6 sm:px-4 px-2 md:py-6 sm:py-4 py-2">
                  <div className="img-box relative">
                    <Image
                      src={image}
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover"
                      alt={post.title.rendered}
                    />
                    <div className="absolute bottom-[20px] left-[20px]">
                      <p className="sm:px-4 px-3 py-1 text-[14px] font-medium bg-primary text-nu30">
                        {post.categories?.length ? "Construction" : "Blog"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5
                      className="fontMont text-nu30 mt-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="text-nu50 mt-2 font-medium">
                      {stripHtmlTags(post.excerpt.rendered)}
                    </p>
                    <Link
                      href={post.link}
                      target="_blank"
                      className="border-[1px] border-nu40 inline-block sm:mt-4 mt-3 btn card-btm"
                    >
                      <span className="text-nu30 font-semibold sm:px-5 px-2 sm:py-[10px] py-2 sm:text-[18px] text-[16px]">
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 border border-nu40 text-nu30"
          >
            Prev
          </button>
          <span className="font-semibold text-nu30">Page {page} of {totalPages}</span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 border border-nu40 text-nu30"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}