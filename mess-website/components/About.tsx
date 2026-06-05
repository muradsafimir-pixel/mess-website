import { focusAreas } from "@/lib/siteContent";

export function About() {
  return (
    <section id="about" className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cougar-red">
            About
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            A welcoming home for Muslim students in engineering.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            The Muslim Engineering Student Society connects University of
            Houston students who are pursuing engineering and technology fields.
            MESS is designed to help members feel supported academically,
            spiritually, socially, and professionally.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded border border-red-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-950">
                {area.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
