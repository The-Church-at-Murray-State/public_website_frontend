import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eventsData from "@/data/events.json";

// Events are hand-maintained in src/data/events.json until a CMS replaces it.
// The shape is declared here so a malformed entry fails the build rather than the page.
type ChurchEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
};

// Dates are stored as YYYY-MM-DD. Split the parts by hand so the date is read in
// local time; passing the string straight to Date() treats it as UTC and can shift
// the day backwards for anyone west of Greenwich.
function formatEventDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Sorted here rather than relying on the file being kept in order by hand. The sort is
// stable, so two events on the same day stay in the order the JSON lists them.
// Past events are not filtered out: this page is statically rendered, so a
// build-time cutoff would go stale. Remove finished events from the JSON.
const events: ChurchEvent[] = [...(eventsData as ChurchEvent[])].sort((a, b) =>
  a.date.localeCompare(b.date)
);

export default function UpcomingEvents() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-church-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Gatherings, special services, and community outreach opportunities
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {events.length === 0 ? (
            <p className="text-lg text-gray-700 text-center">
              There are no events on the calendar right now. Please check back soon.
            </p>
          ) : (
            <div className="space-y-8">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-church-gold"
                >
                  <h2 className="text-2xl font-bold text-church-blue mb-4">{event.title}</h2>

                  <dl className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <dt className="text-sm font-semibold text-church-gray uppercase tracking-wide">
                        Date
                      </dt>
                      <dd className="text-lg text-gray-700">{formatEventDate(event.date)}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-church-gray uppercase tracking-wide">
                        Time
                      </dt>
                      <dd className="text-lg text-gray-700">{event.time}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-church-gray uppercase tracking-wide">
                        Location
                      </dt>
                      <dd className="text-lg text-gray-700">{event.location}</dd>
                    </div>
                  </dl>

                  {event.description && (
                    <p className="text-lg text-gray-700 leading-relaxed">{event.description}</p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
