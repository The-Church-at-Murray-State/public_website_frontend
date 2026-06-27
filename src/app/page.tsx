"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    console.log("[Home] mounted");
    // Lazy load video after page content loads
    const loadVideo = () => {
      const video = document.querySelector('video.lazy-video') as HTMLVideoElement;
      if (video) {
        // Small delay to ensure page content loads first
        setTimeout(() => {
          // Ensure autoplay-friendly settings for mobile
          video.muted = true;
          video.playsInline = true;
          video.autoplay = true;

          video.load();
          const tryPlay = () => {
            video.classList.add('loaded');
            // Attempt to play in case some devices require an explicit call
            const playPromise = video.play();
            if (playPromise && typeof playPromise.then === 'function') {
              playPromise.catch(() => {
                // In case autoplay is blocked, leave it silent and user will start it
              });
            }
          };
          video.addEventListener('loadeddata', tryPlay, { once: true });
          video.addEventListener('canplay', tryPlay, { once: true });
        }, 500);
      }
    };

    // Load video after DOM is ready and other content has loaded
    if (document.readyState === 'complete') {
      loadVideo();
    } else {
      window.addEventListener('load', loadVideo);
    }

    return () => {
      window.removeEventListener('load', loadVideo);
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="enhanced-navbar relative z-50">
        <div className="navbar-logo-absolute">
          <Image 
            src="/logos/MCF Church Logo1.jpg" 
            alt="Ekklesia Nondenominational Church" 
            className="navbar-logo"
            width={100}
            height={100}
          />
        </div>
        <div className="navbar-container relative">
          <div className="block md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => {
                setIsMenuOpen((o) => {
                  const next = !o;
                  console.log("[Home] toggle menu ->", next);
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
              <Link href="/" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
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
              <Link href="/donations" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Donate
              </Link>
            </div>
          </div>
          {/* Current page label on mobile */}
          <div className="md:hidden col-start-2 justify-self-center font-semibold text-church-blue">
            Home
          </div>
          {/* Mobile menu button (duplicate removed) */}
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

      {/* Hero Section with Video Background */}
      <section className="relative h-[calc(95svh-80px)] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover lazy-video video-zoom-slight"
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
        >
          <source src="/videos/church_website_video.webm" type="video/webm" />
          {/* Fallback for browsers that don't support WebM */}
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to<br />
            <span className="text-church-gold">Ekklesia Nondenominational Church</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            A gospel-centered community serving Murray State University and the Murray community.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/what-to-expect"
              className="bg-church-gold hover:bg-church-gold text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            >
              Learn More
            </Link>
            <Link 
              href="/connect"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-church-blue text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Church Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-church-blue mb-4">Join Us for Worship</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience authentic Christian community and biblical teaching every Sunday
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Service Times & Location */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Service Times
                </h3>
                <p className="text-lg text-gray-700">
                  <strong>Sunday Worship:</strong> 11:00 AM
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location
                </h3>
                <p className="text-lg text-gray-700">
                  1508 Chestnut St.<br />
                  Murray, KY 42071
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-church-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                We exist to glorify God by making disciples of Jesus Christ through gospel-centered 
                worship, biblical teaching, authentic community, and missional living.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you&apos;re a Murray State student, a longtime Murray resident, or just visiting,
                we&apos;d love to welcome you into our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-church-blue mb-16">Connect With Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/beliefs" className="group bg-gray-50 hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300">
              <div className="text-church-gold group-hover:text-church-gold mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-blue group-hover:text-white mb-3">What We Believe</h3>
              <p className="text-gray-600 group-hover:text-gray-200">Explore our doctrinal beliefs and confessions</p>
            </Link>

            <Link href="/what-to-expect" className="group bg-gray-50 hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300">
              <div className="text-church-gold group-hover:text-church-gold mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-blue group-hover:text-white mb-3">First Time Visiting?</h3>
              <p className="text-gray-600 group-hover:text-gray-200">Learn what to expect when you visit us for worship</p>
            </Link>

            <Link href="/connect" className="group bg-gray-50 hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300">
              <div className="text-church-gold group-hover:text-church-gold mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-blue group-hover:text-white mb-3">Connect With Us</h3>
              <p className="text-gray-600 group-hover:text-gray-200">Questions? Join our community!</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
          
          {/* Copyright removed */}
        </div>
      </footer>
    </div>
  );
}
