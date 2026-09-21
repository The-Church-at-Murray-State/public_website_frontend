import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Donations() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-church-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Ministry</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Your generous giving helps us share the gospel and serve our community
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-6">Give Online</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We appreciate your generosity. You can give securely through Venmo or PayPal
              using the links below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <a
              href="https://account.venmo.com/u/Ekklesia-MurrayKY"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-church-blue hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300"
            >
              <div className="text-church-blue group-hover:text-white mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-church-blue group-hover:text-white mb-3">Venmo</h3>
              <p className="text-church-gray group-hover:text-gray-200 mb-4">
                Send a donation via Venmo
              </p>
              <span className="inline-block bg-church-gold text-white font-semibold py-2 px-6 rounded-lg text-lg">
                Give with Venmo
              </span>
            </a>

            <a
              href="https://paypal.com/donate/?hosted_button_id=VL4U335TJMEW2"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-church-blue hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300"
            >
              <div className="text-church-blue group-hover:text-white mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-church-blue group-hover:text-white mb-3">PayPal</h3>
              <p className="text-church-gray group-hover:text-gray-200 mb-4">
                Send a donation via PayPal
              </p>
              <span className="inline-block bg-church-gold text-white font-semibold py-2 px-6 rounded-lg text-lg">
                Give with PayPal
              </span>
            </a>
          </div>

          <div className="mt-16 bg-church-blue text-white p-8 rounded-lg text-center">
            <p className="text-blue-200 italic text-lg leading-relaxed max-w-2xl mx-auto">
              &quot;Each of you should give what you have decided in your heart to give,
              not reluctantly or under compulsion, for God loves a cheerful giver.&quot;
            </p>
            <p className="text-church-gold font-semibold mt-4">2 Corinthians 9:7</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-church-blue mb-6">Questions About Giving?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re here to help answer any questions you might have about giving or financial stewardship.
          </p>
          <Link
            href="/connect"
            className="bg-church-gold hover:bg-church-gold text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
