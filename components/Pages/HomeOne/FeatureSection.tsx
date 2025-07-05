// components/FeatureSection.tsx
"use client";
import Image from "next/image";
import "phosphor-icons/src/css/icons.css";

const cards = [
    { icon: "camera", title: "Photography" },
    { icon: "pen-nib", title: "Design Ideas" },
    { icon: "rocket", title: "Creative" },
    { icon: "paper-plane", title: "Marketing" },
];

export default function FeatureSection() {
    return (
        <section className="relative bg-nu10 py-12 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-5 items-center gap-8">

                    {/* Left: real Pexels image */}
                    <div className="lg:col-span-3">
                        <div className="overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="https://images02.nicepage.com/c461c07a441a5d220e8feb1a/c77f9e3512b55a7d893ca86f/rte-min.jpg"
                                alt="Modern workspace"
                                width={900}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: dots, stripes, cards */}
                    <div className="lg:col-span-2 relative">
                        {/* Dot grid (lg+) */}
                        <div className="hidden lg:grid absolute -top-4 right-0 grid-cols-7 gap-2">
                            {Array.from({ length: 14 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="w-3 h-3 bg-nu30 rounded-full"
                                />
                            ))}
                        </div>

                        {/* Diagonal stripe block */}
                        <div
                            className="hidden md:block absolute bottom-0 right-0 w-64 h-64 transform translate-x-16 translate-y-16"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(45deg, var(--color-nu30) 0 10px, var(--color-nu10) 10px 20px)",
                            }}
                        />

                        {/* 2×2 cards */}
                        <div className="relative grid grid-cols-2 gap-6 z-10">
                            {cards.map(({ icon, title }) => (
                                <div
                                    key={title}
                                    className="bg-nu10 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
                                >
                                    {/* Perfect circle: fixed w/h + flex centering */}
                                    <div className="bg-primary text-nu10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <i className={`ph-${icon} text-nu30 text-[32px]`} />
                                    </div>
                                    <h4 className="text-nu30 font-semibold">{title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
