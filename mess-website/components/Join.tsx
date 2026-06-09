import { links } from "@/lib/siteContent";

export function Join() {
  return (
    <section id="join" className="islamic-geometry bg-cougar-cream px-5 py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded border border-red-100 bg-white/94 p-7 shadow-premium md:flex-row md:items-center md:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cougar-red">
            Join
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Join the first wave of MESS members.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Add the official membership or interest form here when it is ready.
            This call-to-action is intentionally prominent for organization
            submissions, tabling, and sponsor conversations.
          </p>
        </div>
        <a
          href={links.signup}
          className="rounded bg-cougar-red px-8 py-4 text-center font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-cougar-dark"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
}
