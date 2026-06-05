export function Footer() {
  return (
    <footer className="border-t border-red-100 bg-white px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-600 md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Muslim Engineering Student Society.
        </p>
        <p>University of Houston student organization website.</p>
      </div>
    </footer>
  );
}
