import { officers } from "@/lib/siteContent";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function Team() {
  return (
    <section id="team" className="bg-slate-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">
              Executive Board
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Student leaders prepared to represent MESS with excellence.
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-300">
            Meet the officers building MESS into a polished, service-minded
            engineering organization for the University of Houston community.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {officers.map((officer) => (
            <article
              key={officer.role}
              className="flex min-h-72 flex-col rounded border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-red-300/50 hover:bg-white/[0.09]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-16 w-16 place-items-center rounded bg-white text-xl font-black text-cougar-red shadow-soft">
                  {getInitials(officer.name)}
                </div>
                <a
                  href={officer.linkedin}
                  className="rounded border border-white/15 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:border-red-300 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-tight">
                {officer.name}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-red-300">
                {officer.role}
              </p>
              <p className="mt-auto pt-5 text-sm leading-6 text-slate-300">
                {officer.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
