

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "My life",
  description: "Know more about me",
};

export default function Life() {
  return (
    <main className="relative overflow-hidden">

      {/* Floating Graphics */}
      <div className="absolute top-8 -left-6 hidden -rotate-12 opacity-50 lg:block">
        <Image
          src="/shared/headphone.png"
          alt=""
          aria-hidden="true"
          width={112}
          height={112}
          className="size-28 mix-blend-multiply"
        />
      </div>

      <div className="absolute top-12 -right-8 hidden rotate-12 opacity-50 lg:block">
        <Image
          src="/shared/flower.png"
          alt=""
          aria-hidden="true"
          width={128}
          height={128}
          className="size-32 mix-blend-multiply"
        />
      </div>

      {/* Hero */}
      <section className="pb-4 pt-10 md:pt-16">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-4">
          <p
            className="text-[11px] uppercase tracking-[0.35em] text-zinc-400 opacity-0 animate-fadeInUp"
            style={{ opacity: 1, transform: 'none' }}
          >
            A personal note
          </p>

          <h1
            className="mt-6 font-handwritten text-5xl leading-[1.15] text-zinc-900 md:text-6xl lg:text-7xl opacity-0 animate-fadeInUp"
            style={{ opacity: 1, transform: 'none' }}
          >
            Life, beyond
            <br />
            the portfolio
          </h1>

          <p
            className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-zinc-500 md:text-base opacity-0 animate-fadeInUp"
            style={{ opacity: 1, transform: 'none' }}
          >
            Not a résumé. Not a timeline. Just the story underneath the work.
          </p>

          <div
            className="mt-8 "
            style={{ opacity: 1, transform: 'none' }}
          >
            <Image
              src="/shared/divider-stitch.svg"
              alt=""
              aria-hidden="true"
              width={224}
              height={40}
              className="mx-auto w-48 opacity-30 md:w-56"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative mx-auto max-w-xl px-6 pb-24 pt-8 md:px-4">

        <div className="absolute -right-16 top-0 hidden -rotate-6 opacity-50 lg:block">
          <Image
            src="/shared/idea-light.png"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="size-24 mix-blend-multiply"
          />
        </div>

        {/* Photo */}
        <div
          className="mb-14 flex justify-center opacity-0 animate-fadeInUp"
          style={{ opacity: 1, transform: 'none' }}
        >
          <div className="rotate-2 bg-white p-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:rotate-0">
            <Image
              src="/gallary/profile.jpeg"
              alt="Goutam Choudhary"
              width={208}
              height={256}
              priority
              className="h-56 w-44 object-cover md:h-64 md:w-52"
            />

            <p className="mt-1.5 text-center font-handwritten text-[11px] text-zinc-400">
              Convocation is pending ⏳
            </p>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-left text-[15px] leading-[1.85] text-zinc-700 sm:text-justify md:text-base md:leading-[1.9]">
          <p style={{ opacity: 1, transform: 'none' }}>
            Hey, thanks for being here.
          </p>

          <p style={{ opacity: 1, transform: 'none' }}>
            I'm Goutam. I studied Computer Science at Chandigarh University. I started out
            focused on building things that worked technically, but over time I
            became more interested in how people actually experienced the products I
            was creating.
          </p>

          <p style={{ opacity: 1, transform: 'none' }}>
            While working on projects, I noticed that even well-built software could
            still feel confusing to use. That pushed me to think beyond just code —
            understanding user behavior, simplifying flows, and designing interfaces
            that feel natural from the first interaction.
          </p>
        </div>

        <div className="my-14 flex items-center justify-center gap-4 md:my-16">
          <span className="h-px w-16 bg-zinc-300/60" />

          <Image
            src="/shared/stamp-star.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="size-5 opacity-40"
          />

          <span className="h-px w-16 bg-zinc-300/60" />
        </div>
        <div className="relative">
          <div className="absolute -left-40 top-4 opacity-50 hidden lg:block transform rotate-6">
            <Image
              src="/shared/book.png"
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="size-24 mix-blend-multiply"
            />
          </div>
          <div className="space-y-6 text-left text-[15px] leading-[1.85] text-zinc-700 sm:text-justify md:text-base md:leading-[1.9]">
            <p style={{ opacity: 1, transform: 'none' }}>
              During college, watching others get placed through campus while I kept
              struggling was mentally exhausting. I constantly questioned myself and my
              future. But instead of giving up, I kept learning, building projects,
              improving my skills, and applying everywhere possible, believing that
              consistency would eventually create an opportunity for me.
            </p>
            <p style={{ opacity: 1, transform: 'none' }}>
              Eventually, I received an off-campus internship opportunity at Mono, and it
              completely changed my direction. Working under <a href="https://www.linkedin.com/in/shubhrohilla/" target="_blank" rel="noopener noreferrer" className='text-orange-500'>Shubh Rohilla</a> sir helped me understand
              real product thinking, ownership, and team collaboration. I'm genuinely
              thankful for his guidance, patience, and support during a phase where I was
              still figuring everything out.
            </p>
          </div>
        </div>
        <div className="my-14 flex items-center justify-center gap-4 md:my-16">
          <span className="h-px w-16 bg-zinc-300/60" />

          <Image
            src="/shared/stamp-star.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="size-5 opacity-40"
          />

          <span className="h-px w-16 bg-zinc-300/60" />
        </div>

        <div className="space-y-6 text-left text-[15px] leading-[1.85] text-zinc-700 sm:text-justify md:text-base md:leading-[1.9]">
          <p style={{ opacity: 1, transform: 'none' }}>
            After months of hard work and consistently pushing myself, I received a
            full-time opportunity in the same company. I tried giving more than what was
            expected in every task, whether it was solving problems, improving products,
            or learning faster. That experience shaped both my confidence and work ethic.
          </p>
          <p style={{ opacity: 1, transform: 'none' }}>
            Over time, I also changed the way I build software. I started using AI not
            just for speed, but as a thinking partner for ideas, systems, and product
            decisions. It helped me prototype faster, learn quicker, and transform rough
            concepts into polished products with far better execution.
          </p>

          <p className="pt-6 text-center font-handwritten text-xl text-zinc-500" style={{ opacity: 1, transform: 'none' }}>Goutam</p>
        </div>
        {/* Footer CTA */}
        <div
          className="mt-20 flex flex-col items-center gap-3 border-t border-zinc-200 pt-10 sm:flex-row sm:justify-between"
          style={{ opacity: 1, transform: 'none' }}
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
            Explore other sections
          </p>

          <div className="flex gap-3">
            <Link
              href="/projects"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900"
            >
              Projects
            </Link>
            <Link
              href="/playground"
              className="rounded-full border border-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              Play
            </Link>


          </div>
        </div>
      </section>


    </main>
  );
}
