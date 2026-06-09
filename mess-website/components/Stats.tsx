import { stats } from "@/lib/siteContent";

export function Stats() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl rounded bg-slate-950 p-6 text-white shadow-premium md:p-8">
        <div className="islamic-geometry rounded border border-white/10 p-6 md:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-white md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-red-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
