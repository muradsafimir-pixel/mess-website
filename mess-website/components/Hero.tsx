export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-red-100 bg-white"
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-cougar-red" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cougar-red">
            University of Houston
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Muslim Engineering Student Society
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            A student-led organization supporting Muslim engineers through
            community, service, professional development, and academic growth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#join"
              className="rounded bg-cougar-red px-6 py-3 text-center font-semibold text-white shadow-soft transition hover:bg-cougar-dark"
            >
              Get Involved
            </a>
            <a
              href="#about"
              className="rounded border border-slate-300 px-6 py-3 text-center font-semibold text-slate-800 transition hover:border-cougar-red hover:text-cougar-red"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="rounded border border-red-100 bg-cougar-cream p-6 shadow-soft">
          <div className="rounded bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cougar-red">
              MESS at UH
            </p>
            <p className="mt-4 text-3xl font-black text-slate-950">
              Engineering community rooted in faith and purpose.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Community", "Mentorship", "Career Growth", "Service"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded border border-red-100 bg-white px-4 py-3 font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
