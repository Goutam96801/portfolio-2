'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

type ProjectImageGalleryProps = {
  images: string[];
  title: string;
};

const AUTOPLAY_MS = 3500;

export default function ProjectImageGallery({
  images,
  title,
}: ProjectImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [images.length, paused]);

  if (!images.length) return null;

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length);
  };

  return (
    <section className="mb-20 md:mb-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="inline-block w-10 h-1 bg-orange-400" />
        <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-orange-500">
          Image gallery
        </h2>
      </div>

      <div
        className="relative border-2 border-black bg-neutral-100/60 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
        <div className="relative aspect-video">
          {images.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={src}
                alt={`${title} gallery image ${i + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous gallery image"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-orange-400 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next gallery image"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-orange-400 transition-colors"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Show gallery image ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 border-2 border-black transition-all ${
                    i === index
                      ? 'w-7 bg-orange-400'
                      : 'w-2.5 bg-white hover:bg-neutral-200'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
