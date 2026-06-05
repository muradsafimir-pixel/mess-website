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
    <section id="team" className="bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">
              Team
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Officer Board
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-300">
            Placeholder cards are ready for the final officer list before
            submission.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {officers.map((officer) => (
            <article
              key={officer.role}
              className="rounded border border-white/10 bg-white/5 p-6"
            >
              <div className="grid h-16 w-16 place-items-center rounded bg-cougar-red text-xl font-black text-white">
                {getInitials(officer.name)}
              </div>
              <h3 className="mt-5 text-lg font-bold">{officer.name}</h3>
              <p className="mt-1 text-sm font-semibold text-red-300">
                {officer.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
