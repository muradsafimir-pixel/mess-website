import Image from "next/image";
import { navItems } from "@/lib/siteContent";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/mess-logo.png"
            alt="MESS logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded border border-red-100 bg-white object-contain p-1"
          />
          <span>
            <span className="block text-sm font-black tracking-wide text-cougar-red">
              MESS
            </span>
            <span className="hidden text-xs text-slate-600 sm:block">
              Muslim Engineering Student Society
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-5 text-sm font-semibold text-slate-700 lg:flex">
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

        <div className="flex items-center gap-3">
          <a href="#events" className="rounded px-2 py-3 text-sm font-bold text-cougar-red hover:text-cougar-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-cougar-red lg:hidden">Events</a>
          <a
            href="#join"
            className="rounded bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-cougar-red"
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
}
