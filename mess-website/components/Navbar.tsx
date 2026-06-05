import { navItems } from "@/lib/siteContent";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded bg-cougar-red text-sm font-black text-white">
            M
          </span>
          <span>
            <span className="block text-sm font-bold tracking-wide text-cougar-red">
              MESS
            </span>
            <span className="hidden text-xs text-slate-600 sm:block">
              Muslim Engineering Student Society
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-cougar-red"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#join"
          className="rounded bg-cougar-red px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-cougar-dark"
        >
          Join Us
        </a>
      </div>
    </nav>
  );
}
