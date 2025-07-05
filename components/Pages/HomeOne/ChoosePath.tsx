// components/ChoosePath.tsx
"use client";

import React from "react";

const paths = [
    {
        title: "Instructor",
        description:
            "If you have a passion for teaching in a structured way, then you could be training the next-gen engineers as an Instructor.",
    },
    {
        title: "Technical Writers",
        description:
            "Do you have a flair for writing technical articles on Construction, Projects, Careers, etc.? It’s your chance to make a difference!",
    },
    {
        title: "Subject Matter Expert",
        description:
            "As a subject matter expert, can you create training content from your experience and help in building a knowledge base?",
    },
    {
        title: "Recruiter",
        description:
            "Can you identify the opportunities and connect them to deserving candidates? Impact careers in a meaningful way.",
    },
];

export default function ChoosePath() {
    return (
        <section className="bg-nu80 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-nu30 fontMont text-3xl sm:text-4xl font-semibold text-center mb-12">
                    Choose Your Path
                </h2>
                <div className="grid gap-8 sm:grid-cols-2">
                    {paths.map((p) => (
                        <div
                            key={p.title}
                            className="bg-nu30 border-2 border-primary rounded-lg p-6 flex flex-col h-full"
                        >
                            <h3 className="text-nu10 fontMont text-2xl font-semibold mb-3">
                                {p.title}
                            </h3>
                            <div className="border-t border-primary mb-4" />
                            <p className="text-nu10 leading-relaxed flex-grow">
                                {p.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
