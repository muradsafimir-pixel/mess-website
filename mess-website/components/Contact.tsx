import { links } from "@/lib/siteContent";

const socialLinks = [
  { label: "Instagram", href: links.instagram },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GroupMe / Discord", href: links.community },
];

export function Contact() {
  return (
    <section id="contact" className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cougar-red">
          Contact
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded border border-red-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Email</h2>
            <p className="mt-3 text-slate-700">
              Reach out for membership, partnerships, and event questions.
            </p>
            <a
              href={`mailto:${links.email}`}
              className="mt-5 inline-block font-semibold text-cougar-red hover:text-cougar-dark"
            >
              {links.email}
            </a>
          </div>

          <div className="rounded border border-red-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Socials</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="rounded border border-slate-300 px-4 py-2 font-semibold hover:border-cougar-red hover:text-cougar-red"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
