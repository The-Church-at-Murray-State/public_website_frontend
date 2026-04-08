"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Donations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <nav className="enhanced-navbar relative z-50">
        <div className="navbar-logo-absolute">
          <Link href="/">
            <Image
              src="/logos/MCF Church Logo1.jpg"
              alt="Ekklesia Nondenominational Church"
              className="navbar-logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="navbar-container relative">
          <div className="block md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => {
                setIsMenuOpen((o) => !o);
              }}
              className="cursor-pointer text-church-gray hover:text-church-gold"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="navbar-links-section hidden md:block">
            <div className="navbar-links">
              <Link href="/" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Home
              </Link>
              <Link href="/beliefs" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Beliefs
              </Link>
              <Link href="/what-to-expect" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                What to Expect
              </Link>
              <Link href="/connect" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Connect
              </Link>
              <Link href="/donations" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Donate
              </Link>
            </div>
          </div>
          <div className="md:hidden col-start-2 justify-self-center font-semibold text-church-blue">
            Donate
          </div>
          <div className="hidden md:block"></div>
        </div>
      </nav>
      <div className={`mobile-menu w-full ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 py-3">
          <Link href="/" className="">Home</Link>
          <Link href="/beliefs" className="">Beliefs</Link>
          <Link href="/what-to-expect" className="">What to Expect</Link>
          <Link href="/connect" className="">Connect</Link>
          <Link href="/donations" className="">Donate</Link>
        </div>
      </div>

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
            <h3 className="text-2xl font-bold mb-4">Give In Person</h3>
            <p className="text-blue-200 text-lg">
              You can also give during our Sunday worship service. Cash and checks
              made out to &quot;Ekklesia Nondenominational Church&quot; are accepted.
            </p>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-gray-600 italic text-lg leading-relaxed max-w-2xl mx-auto">
              &quot;Each of you should give what you have decided in your heart to give,
              not reluctantly or under compulsion, for God loves a cheerful giver.&quot;
            </p>
            <p className="text-church-blue font-semibold mt-4">2 Corinthians 9:7</p>
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

      <footer className="bg-church-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold mb-4">Ekklesia Nondenominational Church</h3>
              <p className="text-gray-300">
                A gospel-centered community serving Murray State University and the Murray community.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Times</h4>
              <p className="text-gray-300">Sunday Worship: 11:00 AM</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <p className="text-gray-300">
                1508 Chestnut St.<br />
                Murray, KY 42071
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
