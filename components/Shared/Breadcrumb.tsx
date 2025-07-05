import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string; // If href is not provided, it will be plain text (like the current page)
}

interface BreadcrumbProps {
  sectionClass?: string;
  title: string;
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  sectionClass = "about-section xl:py-[230px] lg:py-[190px] md:py-[150px] sm:py-[100px] py-20",
  title,
  items,
}: BreadcrumbProps) {
  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="text-center" data-aos="fade-right">
          <h2
            className="text-nu10 fontMont sm:font-bold font-semibold"
            data-aos="fade-right"
            data-aos-duration="2000">
            {title}
          </h2>
          <div
            className="flex justify-center items-center gap-2 mt-4"
            data-aos="fade-left"
            data-aos-duration="2000">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    className="font-semibold hover:underline"
                    href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <p className="font-semibold text-primary">{item.label}</p>
                )}
                {index < items.length - 1 && (
                  <span className="font-semibold md:text-[28px] text-[24px] text-nu10">
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
