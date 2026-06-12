export function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cougar-red">
            Who We Are
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            A welcoming home for Muslim students in engineering.
          </h2>
        </div>

        <div className="technical-frame rounded border border-red-100 bg-white p-7 shadow-soft">
          <p className="text-lg leading-8 text-slate-700">
            The Muslim Engineering Student Society connects University of
            Houston students pursuing engineering and technology fields. MESS
            exists for students who want serious academic growth, professional
            preparation, and a community where Muslim identity is understood and
            celebrated.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Faith", "Engineering", "Service"].map((value) => (
              <div
                key={value}
                className="rounded border border-slate-200 bg-[#FFFDF9] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-800"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
