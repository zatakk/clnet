"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";

interface Course {
  id: number;
  title: string;
  description: string;
  featured_image: string;
  wc_price: string;
  link: string;
}

interface FilterOption {
  value: string | number;
  label: string;
}

interface Filters {
  category: FilterOption | null;
  level: FilterOption | null;
  instructor: FilterOption | null;
  priceType: string | null;
  priceMin: string;
  priceMax: string;
  durationMin: string;
  durationMax: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<FilterOption[]>([]);
  const [levels, setLevels] = useState<FilterOption[]>([]);
  const [instructors, setInstructors] = useState<FilterOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filters, setFilters] = useState<Filters>({
    category: null,
    level: null,
    instructor: null,
    priceType: null,
    priceMin: "",
    priceMax: "",
    durationMin: "",
    durationMax: ""
  });

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.category?.value) params.append("catid", filters.category.value.toString());
      if (filters.level?.value) params.append("level", filters.level.value.toString());
      if (filters.instructor?.value) params.append("instructor", filters.instructor.value.toString());
      if (filters.priceType) params.append("price", filters.priceType);
      if (filters.priceMin) params.append("price_min", filters.priceMin);
      if (filters.priceMax) params.append("price_max", filters.priceMax);
      if (filters.durationMin) params.append("duration_min", filters.durationMin);
      if (filters.durationMax) params.append("duration_max", filters.durationMax);

      const res = await fetch(
        `https://construction-world.org/lms/wp-json/custom-llms/v1/courses?${params.toString()}`
      );

      if (!res.ok) throw new Error('Failed to fetch courses');

      const data: Course[] = await res.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  };

 const fetchFilters = async () => {
  try {
    const [catRes, levelRes, instructorRes] = await Promise.all([
      fetch("https://construction-world.org/lms/wp-json/custom-llms/v1/course-categories"),
      fetch("https://construction-world.org/lms/wp-json/custom-llms/v1/course-difficulties"),
      fetch("https://construction-world.org/lms/wp-json/custom-llms/v1/instructors"),
    ]);

    const [catData, levelData, instructorData] = await Promise.all([
      catRes.json() as Promise<Array<{ id: number; name: string }>>,
      levelRes.json() as Promise<Array<{ id: number; name: string }>>,
      instructorRes.json() as Promise<Array<{ id: number; name: string }>>,
    ]);

    setCategories(catData.map((item) => ({ value: item.id, label: item.name })));
    setLevels(levelData.map((item) => ({ value: item.id, label: item.name })));
    setInstructors(instructorData.map((item) => ({ value: item.id, label: item.name })));
  } catch (error) {
    console.error('Error fetching filters:', error);
  }
};

  const handleFilterChange = (name: keyof Filters, value: any) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCourses();
    }, 300);
    return () => clearTimeout(timer);
  }, [filters]);

  const stripAndTrim = (html: string): string => {
    if (!html) return "";
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent?.trim().slice(0, 120) + "..." || "";
  };

  const decodeHtml = (html: string): string => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const clearFilters = () => {
    setFilters({
      category: null,
      level: null,
      instructor: null,
      priceType: null,
      priceMin: "",
      priceMax: "",
      durationMin: "",
      durationMax: ""
    });
  };

  return (
    <section className="bg-nu10 py-12 lg:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-xl p-5 space-y-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter Courses</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <Select 
                options={categories} 
                value={filters.category} 
                onChange={(option) => handleFilterChange('category', option)} 
                placeholder="Select Category" 
                className="text-black" 
                isClearable
                styles={{
                  control: (base) => ({ ...base, paddingLeft: '0.75rem', minHeight: '2.5rem', borderColor: '#d1d5db', backgroundColor: '#ffffff' }),
                  placeholder: (base) => ({ ...base, color: '#6b7280' }),
                  input: (base) => ({ ...base, margin: 0, padding: 10 }),
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
              <Select 
                options={levels} 
                value={filters.level} 
                onChange={(option) => handleFilterChange('level', option)} 
                placeholder="Select Level" 
                className="text-black" 
                isClearable 
                styles={{
                  control: (base) => ({ ...base, paddingLeft: '0.75rem', minHeight: '2.5rem', borderColor: '#d1d5db', backgroundColor: '#ffffff' }),
                  placeholder: (base) => ({ ...base, color: '#6b7280' }),
                  input: (base) => ({ ...base, margin: 0, padding: 10 }),
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instructor</label>
              <Select 
                options={instructors} 
                value={filters.instructor} 
                onChange={(option) => handleFilterChange('instructor', option)} 
                placeholder="Select Instructor" 
                className="text-black" 
                isClearable 
                styles={{
                  control: (base) => ({ ...base, paddingLeft: '0.75rem', minHeight: '2.5rem', borderColor: '#d1d5db', backgroundColor: '#ffffff' }),
                  placeholder: (base) => ({ ...base, color: '#6b7280' }),
                  input: (base) => ({ ...base, margin: 0, padding: 10 }),
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Type</label>
              <Select
                options={[{ value: "S", label: "Free" }, { value: "H", label: "Paid" }]}
                value={filters.priceType ? { value: filters.priceType, label: filters.priceType === "S" ? "Free" : "Paid" } : null}
                onChange={(option) => handleFilterChange('priceType', option?.value || null)}
                placeholder="Select Price Type"
                className="text-black"
                isClearable
                styles={{
                  control: (base) => ({ ...base, paddingLeft: '0.75rem', minHeight: '2.5rem', borderColor: '#d1d5db', backgroundColor: '#ffffff' }),
                  placeholder: (base) => ({ ...base, color: '#6b7280' }),
                  input: (base) => ({ ...base, margin: 0, padding: 10 }),
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Price (₹)</label>
              <input 
                type="number" 
                value={filters.priceMin} 
                onChange={(e) => handleFilterChange('priceMin', e.target.value)} 
                placeholder="Min Price" 
                className="border px-3 py-2 rounded text-black w-full" 
                min="0" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Price (₹)</label>
              <input 
                type="number" 
                value={filters.priceMax} 
                onChange={(e) => handleFilterChange('priceMax', e.target.value)} 
                placeholder="Max Price" 
                className="border px-3 py-2 rounded text-black w-full" 
                min="0" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Duration (mins)</label>
              <input 
                type="number" 
                value={filters.durationMin} 
                onChange={(e) => handleFilterChange('durationMin', e.target.value)} 
                placeholder="Min Duration" 
                className="border px-3 py-2 rounded text-black w-full" 
                min="0" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Duration (mins)</label>
              <input 
                type="number" 
                value={filters.durationMax} 
                onChange={(e) => handleFilterChange('durationMax', e.target.value)} 
                placeholder="Max Duration" 
                className="border px-3 py-2 rounded text-black w-full" 
                min="0" 
              />
            </div>

            <button
              onClick={clearFilters}
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded transition-colors w-full text-sm"
            >
              Clear All Filters
            </button>
          </aside>

          <div className="w-full md:w-2/3 lg:w-3/4">
            {isLoading ? (
              <div className="text-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-2">Loading courses...</p>
              </div>
            ) : courses.length === 0 ? (
              <div className="text-center py-10 text-gray-500">No courses found matching your filters</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => {
                  const imageSrc = typeof course.featured_image === "string" && course.featured_image?.trim() ? course.featured_image : '';
                  return (
                    <div key={course.id} className="bg-white border rounded-xl shadow p-4 flex flex-col hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48 mb-4">
                        <Image 
                          src={imageSrc} 
                          alt={course.title} 
                          fill 
                          className="object-cover rounded bg-gray-300" 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-nu30">{decodeHtml(course.title)}</h3>
                      <p className="text-sm text-gray-600 my-2">{stripAndTrim(course.description)}</p>
                      <div className="flex justify-between items-center mt-auto pt-2">
                        <span dangerouslySetInnerHTML={{ __html: course.wc_price || "Free" }} className="font-bold text-primary" />
                        <Link href={course.link} target="_blank" className="text-sm font-medium text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded transition-colors">
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}