export function Footer() {
  return (
    <footer className="border-t border-red-100 bg-slate-950 px-5 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-600 md:flex-row">
        <p className="text-slate-300">
          &copy; {new Date().getFullYear()} Muslim Engineering Student Society.
        </p>
        <p className="text-slate-400">University of Houston student organization website.</p>
      </div>
    </footer>
  );
}
