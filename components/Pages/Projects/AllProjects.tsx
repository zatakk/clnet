"use client";
import Image from "next/image";
import Link from "next/link";
import home2recent1 from "@/public/images/Webinar/all-courses_img.jpg";
import home2recent2 from "@/public/images/Webinar/bg (15).jpg";
import home2recent3 from "@/public/images/Webinar/webinar_cm.jpg";
import home2recent4 from "@/public/images/Webinar/webinar_cm.jpg";
import home2recent5 from "@/public/images/Webinar/webinar_cm.jpg";
import home2recent6 from "@/public/images/Webinar/webinar_cm.jpg";
import home2recent7 from "@/public/images/Webinar/webinar_cm.jpg";
import metro from "@/public/images/project-details-page/metro.png";
import projectGallery1 from "@/public/images/project-details-page/project-gallery1.png";
import projectGallery2 from "@/public/images/project-details-page/project-gallery2.png";
import projectGallery3 from "@/public/images/project-details-page/project-gallery3.png";
import projectGallery4 from "@/public/images/project-details-page/project-gallery4.png";
import blogHero from "@/public/images/blog-page/blog-hero.png";
import latestConstruction1 from "@/public/images/blog-page/latest-construction1.png";
import latestConstruction2 from "@/public/images/blog-page/latest-construction2.png";
import latestConstruction3 from "@/public/images/blog-page/latest-construction3.png";
import latestConstruction4 from "@/public/images/blog-page/latest-construction4.png";
import latestConstruction5 from "@/public/images/blog-page/latest-construction5.png";
import latestConstruction6 from "@/public/images/blog-page/latest-construction6.png";
import projects1 from "@/public/images/services-details-page/projects1.png";
import projects2 from "@/public/images/services-details-page/projects2.png";
import residential1 from "@/public/images/services-details-page/residential1.png";
import residential2 from "@/public/images/services-details-page/residential2.png";
import servicesDetails from "@/public/images/services-details-page/services-details.png";
import working from "@/public/images/services-details-page/working.png";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "Residential", label: "Residential" },
  { value: "Luxury Homes", label: "Luxury Homes" },
  { value: "Commercial", label: "Commercial" },
  { value: "Infrastructure", label: "Infrastructure" },
];

// Card data for each tab (example, you can expand/adjust as needed)
const tabLabels = [
  'Project Management',
  'Construction Management',
  'Contract Management',
  'Quantity Survey',
  'Project Controls',
  'Estimation & Tendering',
  'Budgeting & Cost Control',
  'Scheduling',
  'Quality',
  'Safety',
];

const tabCards = [
  [ // Project Management
    {
      img: home2recent1,
      category: 'Residential',
      title: 'Modern Urban Villa',
      subtitle: 'A luxury villa project with smart home features.',
      link: '/courses',
    },
    {
      img: metro,
      category: 'Infrastructure',
      title: 'Metro Rail Project',
      subtitle: 'Urban mass transit construction and management.',
      link: '/webinar-details/',
    },
    {
      img: projectGallery1,
      category: 'Commercial',
      title: 'Downtown Office Complex',
      subtitle: 'High-rise office space in the city center.',
      link: '/courses',
    },
    {
      img: home2recent1,
      category: 'Residential',
      title: 'Modern Urban Villa',
      subtitle: 'A luxury villa project with smart home features.',
      link: '/webinar-details/',
    },
    {
      img: metro,
      category: 'Infrastructure',
      title: 'Metro Rail Project',
      subtitle: 'Urban mass transit construction and management.',
      link: '/courses',
    },
  ],
  [ // Construction Management
    {
      img: home2recent2,
      category: 'Luxury Homes',
      title: 'Oceanview Apartments',
      subtitle: 'Premium apartments with sea-facing views.',
      link: '/webinar-details/',
    },
    {
      img: projectGallery2,
      category: 'Industrial',
      title: 'Tech Park Expansion',
      subtitle: 'Expansion of a major technology park.',
      link: '/courses',
    },
    {
      img: latestConstruction1,
      category: 'Residential',
      title: 'Green Meadows',
      subtitle: 'Eco-friendly housing development.',
      link: '/webinar-details/',
    },
  ],
  [ // Contract Management
    {
      img: home2recent3,
      category: 'Commercial',
      title: 'Skyline Office Tower',
      subtitle: 'Contract oversight for a landmark tower.',
      link: '/courses',
    },
    {
      img: projectGallery3,
      category: 'Infrastructure',
      title: 'City Bridge Project',
      subtitle: 'Bridge construction and contract management.',
      link: '/webinar-details/',
    },
    {
      img: latestConstruction2,
      category: 'Industrial',
      title: 'Logistics Hub',
      subtitle: 'Centralized logistics and warehousing.',
      link: '/courses',
    },
  ],
  [ // Quantity Survey
    {
      img: home2recent4,
      category: 'Residential',
      title: 'Greenwood Apartments',
      subtitle: 'Cost estimation and quantity takeoff.',
      link: '/webinar-details/',
    },
    {
      img: projectGallery4,
      category: 'Commercial',
      title: 'Retail Mall',
      subtitle: 'Surveying for a new retail destination.',
      link: '/courses',
    },
    {
      img: latestConstruction3,
      category: 'Infrastructure',
      title: 'Airport Terminal',
      subtitle: 'Survey and cost control for airport expansion.',
      link: '/webinar-details/',
    },
  ],
  [ // Project Controls
    {
      img: home2recent5,
      category: 'Industrial',
      title: 'Metro Rise Constructions',
      subtitle: 'Project controls for a metro construction.',
      link: '/courses',
    },
    {
      img: blogHero,
      category: 'Infrastructure',
      title: 'Smart City Initiative',
      subtitle: 'Integrated project controls for smart city.',
      link: '/webinar-details/',
    },
    {
      img: latestConstruction4,
      category: 'Commercial',
      title: 'Business Park',
      subtitle: 'Controls for a multi-building business park.',
      link: '/courses',
    },
  ],
  [ // Estimation & Tendering
    {
      img: home2recent6,
      category: 'Infrastructure',
      title: 'City Bridge Project',
      subtitle: 'Tendering for a major bridge project.',
      link: '/webinar-details/',
    },
    {
      img: projects1,
      category: 'Residential',
      title: 'Sunrise Villas',
      subtitle: 'Estimation for a luxury villa community.',
      link: '/courses',
    },
    {
      img: latestConstruction5,
      category: 'Commercial',
      title: 'Convention Center',
      subtitle: 'Tendering for a new convention center.',
      link: '/webinar-details/',
    },
  ],
  [ // Budgeting & Cost Control
    {
      img: home2recent7,
      category: 'Industrial',
      title: 'Advanced Facility',
      subtitle: 'Cost control for a high-tech facility.',
      link: '/courses',
    },
    {
      img: projects2,
      category: 'Commercial',
      title: 'Downtown Plaza',
      subtitle: 'Budgeting for a mixed-use plaza.',
      link: '/webinar-details/',
    },
    {
      img: latestConstruction6,
      category: 'Infrastructure',
      title: 'Highway Expansion',
      subtitle: 'Cost control for highway construction.',
      link: '/courses',
    },
  ],
  [ // Scheduling
    {
      img: residential1,
      category: 'Residential',
      title: 'Lakeview Residences',
      subtitle: 'Scheduling for a lakeside housing project.',
      link: '/webinar-details/',
    },
    {
      img: residential2,
      category: 'Residential',
      title: 'Urban Heights',
      subtitle: 'Timeline management for urban apartments.',
      link: '/courses',
    },
    {
      img: servicesDetails,
      category: 'Commercial',
      title: 'Corporate HQ',
      subtitle: 'Scheduling for a new headquarters.',
      link: '/webinar-details/',
    },
  ],
  [ // Quality
    {
      img: working,
      category: 'Industrial',
      title: 'Precision Manufacturing',
      subtitle: 'Quality assurance in manufacturing.',
      link: '/courses',
    },
    {
      img: home2recent1,
      category: 'Residential',
      title: 'Eco Homes',
      subtitle: 'Quality checks for eco-friendly homes.',
      link: '/webinars',
    },
    {
      img: home2recent2,
      category: 'Commercial',
      title: 'Retail Park',
      subtitle: 'Quality control for retail development.',
      link: '/courses',
    },
  ],
  [ // Safety
    {
      img: home2recent3,
      category: 'Infrastructure',
      title: 'Bridge Safety Audit',
      subtitle: 'Safety audit for a major bridge.',
      link: '/webinar-details/',
    },
    {
      img: home2recent4,
      category: 'Industrial',
      title: 'Plant Safety Upgrade',
      subtitle: 'Upgrading safety in an industrial plant.',
      link: '/courses',
    },
    {
      img: home2recent5,
      category: 'Commercial',
      title: 'Mall Safety Program',
      subtitle: 'Implementing safety protocols in a mall.',
      link: '/webinar-details/',
    },
  ],
];
while (tabCards.length < tabLabels.length) tabCards.push(tabCards[0]);

export default function AllProjects() {
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [search, setSearch] = useState("");

  // Filter cards for the active tab
  const filteredCards = tabCards[tabIndex].filter(card => {
    const searchLower = search.toLowerCase();
    return (
      card.title.toLowerCase().includes(searchLower) ||
      card.category.toLowerCase().includes(searchLower) ||
      (card.subtitle && card.subtitle.toLowerCase().includes(searchLower))
    );
  });

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  return (
    <section className="most-popular-section bg-nu10 lg:py-20 md:py-16 py-12">
      <div className="container">
        <Tabs
          className="singletab"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}>
          <div className="flex max-lg:flex-wrap justify-between items-center gap-6">

            <TabList
              className="tablinks rounded-[48px] flex flex-wrap items-center gap-4 sm:gap-6"
              data-aos="fade-left"
              data-aos-duration="2000"
              style={{ rowGap: '1rem' }}
            >
              {tabLabels.map((label) => {
                const slug = slugify(label);
                return (
                  <Tab
                    key={slug}
                    id={`tab-${slug}`}
                    aria-controls={`panel-${slug}`}
                    className="nav-links border-2 border-nu40 sm:px-4 px-3 sm:py-2 py-1 text-nu30 hover:bg-primary"
                  >
                    <button type="button">{label}</button>
                  </Tab>
                );
              })}
            </TabList>
          </div>
          <div className="md:mt-[60px] sm:mt-10 mt-6">
            <div className="tabcontents">
              <div
                className="flex justify-center md:pb-10 sm:mb-8 mb-4 w-full"
                data-aos="fade-right"
                data-aos-duration="2000">
                <form
                  action="form"
                  className="flex w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
                  onSubmit={e => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Search here"
                    className="flex-1 px-5 py-3 text-gray-800 placeholder-gray-400 bg-transparent border-none focus:ring-0 focus:outline-none text-base"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <button className="pt-1" type="submit">
                    <i className="px-[15px] py-[15px] bg-nu30 text-nu10 ph-bold ph-magnifying-glass-plus"></i>
                  </button>
                </form>
              </div>
              {/* Render TabPanels dynamically */}
              {tabLabels.map((label, idx) => {
                const slug = slugify(label);
                return (
                  <TabPanel key={slug}
                    id={`panel-${slug}`}
                    aria-labelledby={`tab-${slug}`} className="tabitem active">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                      {tabIndex === idx && filteredCards.length === 0 && (
                        <div className="col-span-full text-center text-nu30 py-12 text-xl font-semibold">No projects found.</div>
                      )}
                      {tabIndex === idx && filteredCards.map((card, i) => (
                        <div key={card.title + i}>
                          <div
                            className="relative min-h-[350px] md:min-h-[400px] flex flex-col justify-between rounded-xl shadow-lg border border-gray-100 overflow-hidden group"
                            data-aos="zoom-in"
                            data-aos-duration="2000">
                            {/* Background image covers the card */}
                            <Image
                              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
                              src={card.img}
                              alt={card.title}
                              fill
                              priority={false}
                            />
                            {/* Gradient overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                            {/* Card content over image */}
                            <div className="relative z-20 flex-1 flex flex-col justify-end p-6 h-full">
                              <div>
                                <p className="text-white sm:mb-2 mb-1 font-medium drop-shadow">
                                  {card.category}
                                </p>
                                <h4 className="text-white fontMont sm:mb-2 mb-2 text-2xl font-bold drop-shadow">
                                  {card.title}
                                </h4>
                                {card.subtitle && (
                                  <p className="text-white text-lg mb-4 font-medium drop-shadow">
                                    {card.subtitle}
                                  </p>
                                )}
                              </div>
                              <div>
                                <Link href={card.link} className="btn">
                                  <span className="md:px-[20px] sm:px-4 px-2 py-2 sm:text-[16px] text-[15px] sm:font-semibold font-medium">
                                    Learn More
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {tabIndex === idx && (() => {
                        // Responsive columns: 1 (mobile), 2 (sm), 3 (lg)
                        // We'll add up to 2 placeholders for 3-col grid
                        const colCount = 3; // matches lg:grid-cols-3
                        const remainder = filteredCards.length % colCount;
                        const placeholders = remainder === 0 ? 0 : colCount - remainder;
                        return Array.from({ length: placeholders }).map((_, i) => (
                          <div key={"placeholder-" + i} aria-hidden="true">
                            <div className="min-h-[350px] md:min-h-[400px] p-6 bg-transparent rounded-xl" />
                          </div>
                        ));
                      })()}
                    </div>
                  </TabPanel>
                );
              })}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}