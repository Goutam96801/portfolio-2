"use client";

import Image from "next/image";

const photos = [
  { id: 1, src: "/gallary/profile1.jpeg", caption: "That's me", alt: "A moment", rotate: -2.5, tape: "left", landscape: false },
  { id: 2, src: "/gallary/vaishno-devi.jpeg", caption: "Mata Vaishno Devi", alt: "A moment", rotate: -1, tape: "center", landscape: false },
  { id: 3, src: "/gallary/personal2.jpeg", caption: "That's me", alt: "A moment", rotate: 1, tape: "right", landscape: false },

  // landscape images
  { id: 4, src: "/gallary/vaishno-devi1.jpeg", caption: "Mata Vaishno Devi", alt: "A moment", rotate: -2, tape: "center", landscape: true },
  { id: 5, src: "/gallary/journey-start.jpeg", caption: "Circle", alt: "A moment", rotate: 2.5, tape: "left", landscape: true },
  { id: 6, src: "/gallary/golden-temple.jpeg", caption: "Golden Temple", alt: "A moment", rotate: 1.5, tape: "right", landscape: true },

];

const tapePosition = {
  left: "left-3",
  center: "left-1/2 -translate-x-1/2",
  right: "right-3",
} as const;

export const Photos = () => {
  return (
    <div id="photos" className="absolute left-556 top-30">
      <div className="mb-8">
        <div className="relative inline-block">
          <div className="absolute inset-0 -inset-x-2 -inset-y-1 -z-10 -rotate-1 rounded bg-[#e9d5ff]" />
          <h2 className="px-2 font-['Kalam',cursive] text-2xl font-bold text-stone-800 md:text-3xl">
            Photography
          </h2>
        </div>
      </div>
      <div className="w-175 rounded-2xl border border-stone-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm">


        <div className="grid grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`
        relative transition-transform duration-300
        hover:-translate-y-1 hover:rotate-0
        animate-[tremble_0.16s_ease-in-out_10]
      `}
              style={{
                rotate: `${photo.rotate}deg`,
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div
                className={`absolute -top-2 z-10 h-5 w-12 rotate-2 bg-yellow-200/80 shadow-sm ${tapePosition[photo.tape as keyof typeof tapePosition]}`}
                aria-hidden="true"
              />

              <div className="space-y-2 bg-white p-2 pb-3 shadow-md">
                <div
                  className={`
            relative overflow-hidden bg-neutral-100
            ${photo.landscape ? "aspect-video" : "aspect-square"}
          `}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="1000px"
                    className="object-cover"
                  />
                </div>

                <p className="text-center text-xs text-neutral-400">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative max-w-xs -rotate-1 bg-yellow-200 px-4 py-3 shadow-md">
            <p className="font-['Kalam',cursive] text-sm text-stone-700">
              Moments captured with intention
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
