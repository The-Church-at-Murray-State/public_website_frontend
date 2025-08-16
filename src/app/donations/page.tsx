"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Donations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="enhanced-navbar relative z-50">
        <div className="navbar-logo-absolute">
          <Link href="/">
            <Image 
              src="/logos/MCF Church Logo1.jpg" 
              alt="The Church at Murray State" 
              className="navbar-logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="navbar-container">
          <div className="block md:hidden absolute right-4">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => {
                setIsMenuOpen((o) => {
                  const next = !o;
                  console.log("[Donations] toggle menu ->", next);
                  return next;
                });
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
              {/* Donations link hidden until ready */}
              <Link href="/connect" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Connect
              </Link>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </nav>
      <div className={`mobile-menu w-full ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 py-3">
          <Link href="/" className="">Home</Link>
          <Link href="/beliefs" className="">Beliefs</Link>
          <Link href="/what-to-expect" className="">What to Expect</Link>
            {/* Donations link hidden until ready */}
          <Link href="/connect" className="">Connect</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-church-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Ministry</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Your generous giving helps support our mission to share the gospel and serve our community
          </p>
        </div>
      </section>

      {/* Giving Philosophy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-6">Our Heart for Giving</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Giving is an act of worship and a response to God&apos;s generous love toward us. 
              We believe in cheerful, voluntary giving that flows from a grateful heart.
            </p>
          </div>

          {/* Biblical Foundation */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-church-blue mb-6 text-center">Biblical Foundation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-bold text-church-blue mb-3">2 Corinthians 9:7</h4>
                <p className="text-gray-700 italic mb-3">
                  &quot;Each of you should give what you have decided in your heart to give, not reluctantly 
                  or under compulsion, for God loves a cheerful giver.&quot;
                </p>
                <p className="text-gray-600 text-sm">
                  We believe giving should be joyful and voluntary, not burdensome or pressured.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-bold text-church-blue mb-3">Malachi 3:10</h4>
                <p className="text-gray-700 italic mb-3">
                  &quot;Bring the whole tithe into the storehouse, that there may be food in my house. 
                  Test me in this,&apos; says the Lord Almighty...&quot;
                </p>
                <p className="text-gray-600 text-sm">
                  God invites us to participate in His work through our faithful giving.
                </p>
              </div>
            </div>
          </div>

          {/* How Your Giving Helps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">How Your Giving Helps</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-church-blue p-6 rounded-lg">
                <div className="text-church-gold mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4m-5 0V9a2 2 0 012-2h2a2 2 0 012 2v10.1M9 21v-2a2 2 0 012-2h2a2 2 0 012 2v2M9 12h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-church-blue mb-3">Ministry Operations</h3>
                <p className="text-gray-700">
                  Supporting our Sunday services, pastoral ministry, and the practical needs 
                  of our growing church community.
                </p>
              </div>

              <div className="bg-white border-2 border-church-blue p-6 rounded-lg">
                <div className="text-church-gold mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-church-blue mb-3">Community Outreach</h3>
                <p className="text-gray-700">
                  Reaching out to Murray State students and the broader Murray community 
                  with the love of Christ.
                </p>
              </div>

              <div className="bg-white border-2 border-church-blue p-6 rounded-lg">
                <div className="text-church-gold mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-church-blue mb-3">Discipleship & Teaching</h3>
                <p className="text-gray-700">
                  Providing biblical resources, training materials, and opportunities 
                  for spiritual growth and discipleship.
                </p>
              </div>

              <div className="bg-white border-2 border-church-blue p-6 rounded-lg">
                <div className="text-church-gold mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-church-blue mb-3">Future Expansion</h3>
                <p className="text-gray-700">
                  Planning for future growth, potential facility needs, and expanding 
                  our ministry reach in the Murray area.
                </p>
              </div>
            </div>
          </div>

          {/* Ways to Give */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Ways to Give</h2>
            
            <div className="bg-church-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Give During Sunday Service</h3>
              <p className="text-blue-200 text-center mb-6 text-lg">
                We collect offerings during our Sunday worship service. You can give cash or check 
                made out to &quot;The Church at Murray State.&quot;
              </p>
              
              <div className="bg-black/20 p-6 rounded-lg text-center">
                <h4 className="text-xl font-bold text-church-gold mb-4">💳 Online Giving Coming Soon</h4>
                <p className="text-blue-200">
                  We&apos;re working on setting up secure online giving options including credit/debit cards, 
                  bank transfers, and recurring donations. Check back soon for these convenient options!
                </p>
              </div>
            </div>
          </div>

          {/* Giving Guidelines */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-church-blue mb-6 text-center">Giving Guidelines</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-church-gold text-white rounded-full p-2">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-church-blue mb-2">Give Prayerfully</h4>
                  <p className="text-gray-700">
                    Seek God&apos;s guidance about how much to give. Consider your financial situation 
                    and give what you can cheerfully and faithfully.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-church-gold text-white rounded-full p-2">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-church-blue mb-2">No Pressure</h4>
                  <p className="text-gray-700">
                    Visitors and guests should never feel obligated to give. Giving is for members 
                    and regular attenders who want to support our ministry.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-church-gold text-white rounded-full p-2">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-church-blue mb-2">Faithful Stewardship</h4>
                  <p className="text-gray-700">
                    We commit to using all gifts wisely and transparently to advance God&apos;s kingdom 
                    and serve our community effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact for Questions - match Beliefs CTA styling */}
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

      {/* Footer */}
      <footer className="bg-church-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold mb-4">The Church at Murray State</h3>
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
          
          {/* Copyright removed */}
        </div>
      </footer>
    </div>
  );
}