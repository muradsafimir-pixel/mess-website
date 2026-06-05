import { links } from "@/lib/siteContent";

export function Join() {
  return (
    <section id="join" className="bg-cougar-cream px-5 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cougar-red">
            Join
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Ready to be part of MESS?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Add the official membership or interest form here when it is ready.
          </p>
        </div>
        <a
          href={links.signup}
          className="rounded bg-cougar-red px-7 py-3 text-center font-semibold text-white shadow-soft transition hover:bg-cougar-dark"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
}
