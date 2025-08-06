import Link from "next/link";

export default function Messages() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-church-blue">The Church at Murray State</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link href="/" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Home
                </Link>
                <Link href="/beliefs" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Beliefs
                </Link>
                <Link href="/what-to-expect" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  What to Expect
                </Link>
                <Link href="/messages" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-church-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Previous Messages</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Listen to previous sermons and biblical teachings from our church services
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="bg-amber-50 border-2 border-amber-200 p-12 rounded-lg mb-16">
            <div className="text-church-gold mb-6">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Message Archive Coming Soon</h2>
            <p className="text-xl text-amber-700 mb-6">
              We're working on setting up our sermon archive so you can listen to previous messages online.
            </p>
            <p className="text-lg text-church-gold">
              Check back soon for audio and video recordings of our Sunday teachings!
            </p>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8">What to Expect from Our Messages</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-church-blue mb-4">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-church-blue mb-3">Biblical & Expository</h3>
                <p className="text-church-gray">
                  Our messages are rooted in Scripture and seek to explain the text clearly, 
                  showing how God's Word applies to our lives today.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-church-blue mb-4">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-church-blue mb-3">Gospel-Centered</h3>
                <p className="text-church-gray">
                  Every message points to Jesus Christ and the good news of salvation. 
                  We believe the gospel transforms hearts and lives.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-church-blue mb-4">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-church-blue mb-3">Practical Application</h3>
                <p className="text-church-gray">
                  We don't just explain what the Bible says, but help you understand 
                  how to live it out in your daily life.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-church-blue mb-4">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-church-blue mb-3">Accessible to All</h3>
                <p className="text-church-gray">
                  Whether you're new to the Bible or have been studying it for years, 
                  our messages are designed to be clear and understandable.
                </p>
              </div>
            </div>
          </div>

          {/* Current Teaching Series */}
          <div className="bg-church-blue text-white p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Current Teaching Series</h2>
            <div className="bg-black/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">📚 Series Information Coming Soon</h3>
              <p className="text-blue-200 text-lg mb-4">
                We're currently planning our upcoming teaching series and will share details soon.
              </p>
              <p className="text-blue-200">
                Join us on Sunday mornings to hear God's Word taught with clarity and passion!
              </p>
            </div>
          </div>

          {/* Message Format */}
          <div>
            <h2 className="text-3xl font-bold text-church-blue mb-8">Message Format & Length</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-church-gold mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-church-blue mb-2">30-35 Minutes</h3>
                  <p className="text-gray-600">Focused, substantive teaching that respects your time</p>
                </div>

                <div className="text-center">
                  <div className="text-church-gold mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-church-blue mb-2">Interactive</h3>
                  <p className="text-gray-600">Scripture references displayed for easy following along</p>
                </div>

                <div className="text-center">
                  <div className="text-church-gold mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-church-blue mb-2">Scripture-Rich</h3>
                  <p className="text-gray-600">Multiple Bible passages to build comprehensive understanding</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-church-gold text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us This Sunday</h2>
          <p className="text-xl mb-8 text-amber-100">
            Experience biblical teaching that will encourage and challenge your faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/what-to-expect"
              className="bg-white text-church-gold hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Plan Your Visit
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-church-gold text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Ask Questions
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