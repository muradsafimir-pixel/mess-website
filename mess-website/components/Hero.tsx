import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="engineering-grid relative overflow-hidden border-b border-red-100 bg-[#FFFDF9]"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-cougar-red" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-white/55 lg:block" />
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.08fr_0.92fr] md:items-center lg:py-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded border border-red-100 bg-white/85 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-cougar-red shadow-sm">
            <span>Muslim Engineering Student Society</span>
            <span className="text-slate-300">/</span>
            <span>University of Houston</span>
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
            Building Faith, Community, and Engineering Excellence
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">
            A modern student organization for Muslim engineers at UH, created
            to support technical ambition, professional growth, and a strong
            sense of belonging.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#join"
              className="rounded bg-cougar-red px-6 py-3 text-center font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-cougar-dark"
            >
              Join MESS
            </a>
            <a
              href="#team"
              className="rounded border border-slate-300 bg-white/85 px-6 py-3 text-center font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-cougar-red hover:text-cougar-red"
            >
              Meet the Team
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-sm font-bold text-slate-700 sm:grid-cols-4">
            {["Mentorship", "Industry", "Service", "Community"].map((item) => (
              <span
                key={item}
                className="rounded border border-slate-200 bg-white/85 px-4 py-3 text-center"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="technical-frame islamic-geometry rounded border border-red-100 bg-white/82 p-5 shadow-premium">
            <div className="rounded bg-white p-7 shadow-sm">
              <Image
                src="/mess-logo.png"
                alt="Muslim Engineering Student Society logo"
                width={288}
                height={288}
                className="mx-auto h-56 w-56 object-contain sm:h-72 sm:w-72"
              />
              <div className="mt-7 border-t border-red-100 pt-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-cougar-red">
                  Engineering with purpose
                </p>
                <p className="mt-3 text-2xl font-black leading-tight text-slate-950">
                  A community where identity and technical excellence reinforce
                  each other.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded bg-slate-950 px-5 py-4 text-white shadow-premium">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
              Faculty and sponsor ready
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Student leadership, professional development, and community
              impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
