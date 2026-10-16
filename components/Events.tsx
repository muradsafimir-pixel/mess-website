// Use the same official monthly-view URL for the embed and its fallback link.
const zohoCalendarUrl =
  "https://calendar.zoho.com/zc/ui/embed/#calendar=080112481490faabac6a272ae7d3b9140000c2217abe2b13e2d76de3d545186b0c5bfa7203bc1fed1bf89acd63a97766712a1f04ba650d585468d8eccbf3d06364d4a8674d609abc99932ede&title=MESS%20Events&type=1&language=en&timezone=America%2FChicago&showTitle=1&showTimezone=1&startingDayOfWeek=0&timeFormat=0&view=month&showDetail=0&theme=1&showAttendee=0&showSwitchingViews=0&expandAllday=0&eventColorType=light&showAllEvents=0";

export function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="scroll-mt-24 bg-cougar-cream py-24 sm:px-5"
    >
      <div className="mx-auto max-w-6xl">
        <div className="px-5 text-center sm:px-0">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cougar-red">
            Events
          </p>
          <h2
            id="events-heading"
            className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl"
          >
            MESS Events Calendar
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Stay updated with upcoming MESS meetings, workshops, networking
            opportunities, and community events.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded border border-red-100 bg-white shadow-soft">
          <iframe
            src={zohoCalendarUrl}
            title="MESS Events"
            width="100%"
            height="700"
            frameBorder="0"
            scrolling="no"
            className="block h-[700px] w-full border-0 sm:h-[650px]"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={zohoCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-cougar-red px-6 py-3 font-bold text-white shadow-sm transition hover:bg-cougar-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cougar-red"
          >
            Open MESS Calendar
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
