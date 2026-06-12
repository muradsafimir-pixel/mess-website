import { whatWeOffer } from "@/lib/siteContent";

export function WhatWeOffer() {
  return (
    <section id="offer" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cougar-red">
              What We Offer
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Support systems for rigorous classes, ambitious careers, and
              meaningful community.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            MESS is designed to be practical: the kind of organization where a
            first-year student can find support, an upperclassman can lead, and
            sponsors can see a serious pipeline of future engineers.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeOffer.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded border border-slate-200 bg-[#FFFDF9] p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-soft"
            >
              <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-red-100 bg-white/70" />
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded bg-slate-950 text-sm font-black text-white transition group-hover:bg-cougar-red">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-black text-slate-950">
                  {item.title}
                </h3>
              </div>
              <p className="mt-5 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
