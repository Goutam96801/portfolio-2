"use client";

import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "Machine Learning: Concepts and Applications",
    subtitle: "The University of Chicago | Coursera",
    image: "/images/machine-learning.jpeg",
    url: "https://coursera.org/share/50543715d1e0164f00873e7012f72e21"
  },
  {
    id: 2,
    title: "IBM Full Stack Software Developer",
    subtitle: "IBM | Coursera",
    image: "/images/ibm-full-stack-software-developer.jpeg",
    url: "https://coursera.org/share/c35f660b5c5250b3b55df922748ec271"
  },
  {
    id: 3,
    title: "Deep Learning for Developers",
    subtitle: "Infosys | Springboard",
    image: "/images/deep-learning-for-developers.jpeg",
    url: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01274814254931148859_shared/1-2f23a160-0d26-4305-94d2-e58e136c46ae.pdf"
  },
  {
    id: 4,
    title: "Mobile Development and JavaScript",
    subtitle: "Meta | Coursera",
    image: "/images/mobile-development-and-javascript.jpeg",
    url: "https://coursera.org/share/ad51ab76b65be2a21c6d08d1c5832f8b"
  },
  {
    id: 5,
    title: "Automate Cybersecurity Tasks with Python",
    subtitle: "Google | Coursera",
    image: "/images/automate-cybersecurity-tasks-with-python.jpeg",
    url: "https://coursera.org/share/ef09f7d0c157f429e61cfb9110183ced"
  },
]
export const Certification = () => {
  return (
    <div id="certifications" className="absolute left-267 top-30">
      <div className="mb-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 -inset-x-2 -inset-y-1 -z-10 -rotate-1 rounded bg-[#a2ff86]" />
          <h2 className="px-2 font-['Kalam',cursive] text-2xl font-bold text-stone-800 md:text-3xl">
            Certifications
          </h2>
        </div>
      </div>
      <div className="w-275 rounded-2xl border border-stone-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm">


        <div className="grid gap-6 grid-cols-3">
          {certificates.map((cert) => (
            <figure key={cert.id} className="space-y-3">
              <div
                className="relative aspect-4/3 overflow-hidden rounded-lg border border-stone-200 bg-neutral-100 shadow-sm"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="space-y-1">
                <h3 className="text-sm font-semibold leading-snug text-stone-900 line-clamp-2">
                  {cert.title}
                </h3>
                <span className="flex gap-4 items-center">
                  <p className="text-xs text-stone-500">
                    {cert.subtitle}
                  </p>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500">
                    Certificate
                  </a>
                </span>

              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};
