"use client";
import Link from "next/link";
import { useState } from "react";

export default function WhatToExpect() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="enhanced-navbar relative z-50">
        <div className="navbar-logo-absolute">
          <Link href="/">
            <img 
              src="/logos/MCF Church Logo1.jpg" 
              alt="The Church at Murray State" 
              className="navbar-logo"
            />
          </Link>
        </div>
        <div className="navbar-container">
          <div className="block md:hidden absolute right-4">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((o) => !o)}
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
              <Link href="/what-to-expect" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                What to Expect
              </Link>
              {/* Messages link hidden until ready */}
              <Link href="/donations" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Donations
              </Link>
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
          <Link href="/donations" className="">Donations</Link>
          <Link href="/connect" className="">Connect</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-church-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What to Expect</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Your first visit should feel welcoming and comfortable. Here&apos;s what you can expect when you join us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Before You Arrive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Before You Arrive</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-church-blue mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Service Times
                  </h3>
                  <p className="text-church-gray mb-4">
                    <strong>Sunday Worship:</strong> 11:00 AM
                  </p>
                  <p className="text-gray-600">
                    We recommend arriving 10-15 minutes early to find parking and get settled.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-church-blue mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location & Parking
                  </h3>
                  <p className="text-church-gray mb-4">
                    1508 Chestnut St.<br />
                    Murray, KY 42071
                  </p>
                  <p className="text-gray-600">
                    Free parking is available on-site and on nearby streets.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-3">What to Wear</h3>
              <p className="text-amber-700">
                Come as you are! You&apos;ll see people in everything from jeans to business casual. 
                We care more about your heart than your clothes.
              </p>
            </div>
          </div>

          {/* During the Service */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">During the Service</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-blue mb-2">Welcome & Greeting (10:55 AM)</h3>
                  <p className="text-church-gray">
                    We&apos;ll start with a warm welcome and brief announcements. Don&apos;t worry if you&apos;re 
                    still finding your seat - we understand life happens!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-blue mb-2">Worship Through Song (11:00 AM)</h3>
                  <p className="text-church-gray">
                    We&apos;ll sing together for about 20-25 minutes. Lyrics are displayed on screens, 
                    so don&apos;t worry about knowing the songs. Participate as much or as little as you&apos;re comfortable with.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-blue mb-2">Prayer & Scripture Reading (11:25 AM)</h3>
                  <p className="text-church-gray">
                    A time of prayer for our church, community, and world, followed by the reading 
                    of God&apos;s Word for the day.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-3">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-blue mb-2">Biblical Teaching (11:30 AM)</h3>
                  <p className="text-church-gray">
                    Our pastor will teach from the Bible for about 30-35 minutes. We believe God&apos;s 
                    Word is relevant and life-changing, and we aim to explain it clearly and practically.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-3">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-blue mb-2">Response & Closing (12:05 PM)</h3>
                  <p className="text-church-gray">
                    We&apos;ll close with a song of response and prayer. The service typically ends by 12:15 PM.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* After the Service */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">After the Service</h2>
            
            <div className="bg-church-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Fellowship & Connection</h3>
              <p className="text-blue-200 mb-4">
                We&apos;d love to meet you! Many people stick around after the service to chat and connect. 
                Our pastors and members would be delighted to answer any questions you might have.
              </p>
              <p className="text-blue-200">
                Don&apos;t feel obligated to stay if you need to leave, but if you have time, we&apos;d love to get to know you better.
              </p>
            </div>
          </div>

          {/* For Families */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">For Families with Children</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-church-blue mb-3">Children in Service</h3>
                <p className="text-church-gray">
                  Children of all ages are welcome in our worship service. We understand that little ones 
                  can be active, and we&apos;re a family-friendly church.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-church-blue mb-3">Children&apos;s Ministry</h3>
                <p className="text-church-gray">
                  We&apos;re working on developing age-appropriate children&apos;s programming. 
                  For now, we welcome families to worship together.
                </p>
              </div>
            </div>
          </div>

          {/* Common Questions */}
          <div>
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Common Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-church-blue mb-2">Will I be asked to stand up or introduce myself?</h3>
                <p className="text-church-gray">No! We want you to feel comfortable. You&apos;re welcome to participate as much or as little as you&apos;d like.</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-church-blue mb-2">Will someone ask me for money?</h3>
                <p className="text-church-gray">We do take an offering during the service, but it&apos;s only for members and regular attenders. As a visitor, please don&apos;t feel any obligation to give.</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-church-blue mb-2">What if I have more questions?</h3>
                <p className="text-church-gray">We&apos;d love to answer them! Feel free to ask anyone after the service, or contact us anytime.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action - match Beliefs CTA styling */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-church-blue mb-6">Ready to Visit?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We can&apos;t wait to meet you and worship together this Sunday!
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
          <div className="grid md:grid-cols-3 gap-8 items-start">
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
          
          <div className="border-t border-church-blue mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 The Church at Murray State. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}