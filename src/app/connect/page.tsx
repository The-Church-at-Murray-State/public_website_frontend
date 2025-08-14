"use client";
import Link from "next/link";
import { useState } from "react";

export default function Connect() {
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
        <div className="navbar-container relative">
          <div className="block md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => {
                setIsMenuOpen((o) => {
                  const next = !o;
                  console.log("[Connect] toggle menu ->", next);
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
              <Link href="/connect" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Connect
              </Link>
            </div>
          </div>
          {/* Current page label on mobile */}
          <div className="md:hidden col-start-2 justify-self-center font-semibold text-church-blue">
            Connect
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect With Us</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Join our community and discover how you can be part of what God is doing at Murray State
          </p>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Get In Touch</h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                {/* Left column: Address and Email */}
                <div className="w-full md:w-fit md:justify-self-start">
                  {/* Row 1: Address */}
                  <div className="grid grid-cols-[3rem_minmax(0,1fr)] md:grid-cols-[3rem_max-content] gap-x-4 items-start h-20 mb-8">
                    <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg w-12 h-12 grid place-items-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0 text-left break-words">
                      <h3 className="text-xl font-bold text-church-blue mb-2">Address</h3>
                      <p className="text-church-gray">
                        1508 Chestnut St.<br />
                        Murray, KY 42071
                      </p>
                    </div>
                  </div>
                  
                  {/* Row 2: Email */}
                  <div className="grid grid-cols-[3rem_minmax(0,1fr)] md:grid-cols-[3rem_max-content] gap-x-4 items-start">
                    <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg w-12 h-12 grid place-items-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0 text-left break-words">
                      <h3 className="text-xl font-bold text-church-blue mb-2">Email</h3>
                      <ul className="text-church-gray space-y-2 list-disc pl-5">
                        <li><span className="font-semibold">General Inquiries:</span> contact@thechurchatmurraystate.com</li>
                        <li><span className="font-semibold">Pastor Jamie (Spiritual Concerns):</span> pastor@thechurchatmurraystate.com</li>
                        <li><span className="font-semibold">Website/Tech Issues:</span> admin@thechurchatmurraystate.com</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right column: Service Times and Phone */}
                <div className="w-full md:w-fit md:justify-self-end">
                  {/* Row 1: Service Times */}
                  <div className="grid grid-cols-[3rem_minmax(0,1fr)] md:grid-cols-[3rem_max-content] gap-x-4 items-start h-20 mb-8">
                    <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg w-12 h-12 grid place-items-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0 text-left break-words">
                      <h3 className="text-xl font-bold text-church-blue mb-2">Service Times</h3>
                      <p className="text-church-gray">Sunday Worship: 11:00 AM</p>
                    </div>
                  </div>
                  
                  {/* Row 2: Phone */}
                  <div className="grid grid-cols-[3rem_minmax(0,1fr)] md:grid-cols-[3rem_max-content] gap-x-4 items-start">
                    <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg w-12 h-12 grid place-items-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0 text-left break-words">
                      <h3 className="text-xl font-bold text-church-blue mb-2">Phone</h3>
                      <p className="text-church-gray">
                        (270) XXX-XXXX<br />
                        <span className="text-sm text-gray-500">(Phone number coming soon)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pastoral Contact */}
              <div className="mt-12 bg-church-blue text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Meet Our Pastor</h3>
                <p className="text-blue-200 mb-4">
                  <strong>Pastor Jamie Revell</strong> would love to meet with you and answer any questions 
                  you might have about our church, our beliefs, or the Christian faith.
                </p>
                <p className="text-blue-200 mb-4">
                  For spiritual concerns, pastoral care, or to schedule a meeting, please contact Pastor Jamie directly at:
                </p>
                <p className="text-church-gold font-semibold text-lg">
                  pastor@thechurchatmurraystate.com
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* College Ministry Section */}
      <section className="bg-church-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Join Our College Ministry</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Murray State students - connect with a broader community of believers through our partnership with MCF!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Murray Christian Fellowship (MCF)</h3>
              <p className="text-blue-200 mb-6 text-lg leading-relaxed">
                We&apos;re closely connected with Murray Christian Fellowship, a vibrant college ministry 
                that has been serving Murray State students for years. Through MCF, you&apos;ll find:
              </p>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly Bible studies and discipleship groups</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community events and fellowship opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Peer mentorship and spiritual growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Service opportunities in the Murray community</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Ready to Connect?</h4>
              <p className="text-blue-200 mb-6">
                Visit MCF&apos;s website to learn more about their ministry and upcoming events.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://www.mcfhouse.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white text-church-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                >
                  Visit MCF Website
                </a>
                <p className="text-blue-200 text-sm text-center">
                  Questions about college ministry? Contact Pastor Jamie at<br />
                  <span className="font-semibold">pastor@thechurchatmurraystate.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Got Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Got Questions?</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Here are some common questions we hear from students and visitors:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-church-blue mb-2">What&apos;s the connection between your church and MCF?</h3>
              <p className="text-church-gray">We work closely with MCF to provide a seamless ministry experience for Murray State students. While we&apos;re an independent church, we share the same heart for reaching college students with the gospel.</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-church-blue mb-2">I&apos;m new to Murray State. Where should I start?</h3>
              <p className="text-church-gray">Great question! We&apos;d recommend visiting us on a Sunday morning and also checking out MCF&apos;s regular activities during the week. This gives you the best of both worlds - Sunday worship and weekday community.</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-church-blue mb-2">Do I have to choose between your church and MCF?</h3>
              <p className="text-church-gray">Not at all! We encourage students to be involved in both. Think of Sunday mornings as your spiritual &quot;home base&quot; and MCF activities as your college community throughout the week.</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-church-blue mb-2">What if I have more questions about faith or the Bible?</h3>
              <p className="text-church-gray">Pastor Jamie loves answering questions about faith, the Bible, and Christian living. Don&apos;t hesitate to reach out via email or approach him after service. No question is too big or too small!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Parking intentionally removed */}

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