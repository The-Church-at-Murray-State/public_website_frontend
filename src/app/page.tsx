import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-church-blue">The Church at Murray State</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link href="/" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Home
                </Link>
                <Link href="/beliefs" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Beliefs
                </Link>
                <Link href="/what-to-expect" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  What to Expect
                </Link>
                <Link href="/messages" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Messages
                </Link>
                <Link href="/donations" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Donations
                </Link>
                <Link href="/contact" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-church-gray hover:text-church-gold">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="video-background">
          <div className="video-placeholder">
            <p>🎥 Live Worship Background Video</p>
            <p className="text-sm mt-2">(Video placeholder - shows church gathering footage)</p>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to<br />
            <span className="text-church-gold">The Church at Murray State</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            A gospel-centered community serving Murray State University and the Murray community
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
              href="/contact"
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
                Whether you're a Murray State student, a longtime Murray resident, or just visiting, 
                we'd love to welcome you into our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-church-blue mb-16">Connect With Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/what-to-expect" className="group bg-gray-50 hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300">
              <div className="text-church-gold group-hover:text-church-gold mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-blue group-hover:text-white mb-3">First Time Visiting?</h3>
              <p className="text-gray-600 group-hover:text-gray-200">Learn what to expect when you visit us for worship</p>
            </Link>

            <Link href="/beliefs" className="group bg-gray-50 hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300">
              <div className="text-church-gold group-hover:text-church-gold mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-blue group-hover:text-white mb-3">What We Believe</h3>
              <p className="text-gray-600 group-hover:text-gray-200">Explore our doctrinal beliefs and confessions</p>
            </Link>

            <Link href="/donations" className="group bg-gray-50 hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300">
              <div className="text-church-gold group-hover:text-church-gold mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-blue group-hover:text-white mb-3">Support Our Ministry</h3>
              <p className="text-gray-600 group-hover:text-gray-200">Learn about giving and supporting our mission</p>
            </Link>

            <Link href="/contact" className="group bg-gray-50 hover:bg-church-blue p-8 rounded-lg text-center transition-colors duration-300">
              <div className="text-church-gold group-hover:text-church-gold mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-blue group-hover:text-white mb-3">Get In Touch</h3>
              <p className="text-gray-600 group-hover:text-gray-200">Questions? We'd love to hear from you</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-church-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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
