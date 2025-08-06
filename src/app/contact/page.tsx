import Link from "next/link";

export default function Contact() {
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
                <Link href="/messages" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Messages
                </Link>
                <Link href="/donations" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                  Donations
                </Link>
                <Link href="/contact" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with any questions or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-church-blue mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-blue mb-2">Address</h3>
                    <p className="text-church-gray">
                      1508 Chestnut St.<br />
                      Murray, KY 42071
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-blue mb-2">Service Times</h3>
                    <p className="text-church-gray">
                      Sunday Worship: 11:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-blue mb-2">Email</h3>
                    <div className="text-church-gray space-y-2">
                      <p><strong>General Inquiries:</strong><br />contact@thechurchatmurraystate.com</p>
                      <p><strong>Pastor (Spiritual Concerns):</strong><br />pastor@thechurchatmurraystate.com</p>
                      <p><strong>Website/Tech Issues:</strong><br />admin@thechurchatmurraystate.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-blue mb-2">Phone</h3>
                    <p className="text-church-gray">
                      (270) XXX-XXXX<br />
                      <span className="text-sm text-gray-500">(Phone number coming soon)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Pastoral Contact */}
              <div className="mt-12 bg-church-blue text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Meet Our Pastor</h3>
                <p className="text-blue-200 mb-4">
                  <strong>Pastor James Revell</strong> would love to meet with you and answer any questions 
                  you might have about our church, our beliefs, or the Christian faith.
                </p>
                <p className="text-blue-200 mb-4">
                  For spiritual concerns, pastoral care, or to schedule a meeting, please contact Pastor James directly at:
                </p>
                <p className="text-church-gold font-semibold text-lg">
                  pastor@thechurchatmurraystate.com
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-church-blue mb-8">Send Us a Message</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-church-gray mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-blue focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-church-gray mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-blue focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-church-gray mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-blue focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-church-gray mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-blue focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="visiting">Planning to Visit</option>
                      <option value="questions">General Questions</option>
                      <option value="beliefs">Questions about Beliefs</option>
                      <option value="pastoral">Pastoral Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-church-gray mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-blue focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-amber-800 text-sm">
                      <strong>Note:</strong> This contact form is not yet functional. Please use the contact 
                      information provided to reach us directly for now. For technical issues with this website, 
                      please contact our tech team at admin@thechurchatmurraystate.com.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled
                    className="w-full bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg text-lg cursor-not-allowed"
                  >
                    Send Message (Coming Soon)
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Directions & Parking</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-church-blue mb-6">Getting Here</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-1">
                    <span className="text-sm font-bold px-2">1</span>
                  </div>
                  <p className="text-church-gray">
                    <strong>From Murray State Campus:</strong> Head west on Chestnut Street. 
                    We're located at 1508 Chestnut St., just a few minutes from campus.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-1">
                    <span className="text-sm font-bold px-2">2</span>
                  </div>
                  <p className="text-church-gray">
                    <strong>Parking:</strong> Free parking is available on-site and on nearby streets. 
                    Arrive 10-15 minutes early for the best parking spots.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-1">
                    <span className="text-sm font-bold px-2">3</span>
                  </div>
                  <p className="text-church-gray">
                    <strong>Accessibility:</strong> Our building is accessible for wheelchairs and mobility devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/90 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">🗺️ Interactive Map</h3>
              <p className="text-center text-gray-300 mb-4">
                Detailed map and directions coming soon
              </p>
              <div className="text-center">
                <p className="text-amber-400 font-semibold">1508 Chestnut St.</p>
                <p className="text-gray-300">Murray, KY 42071</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-church-blue mb-2">When should I arrive for Sunday service?</h3>
              <p className="text-church-gray">We recommend arriving 10-15 minutes before the 11:00 AM start time to find parking and get settled.</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-church-blue mb-2">Is childcare available?</h3>
              <p className="text-church-gray">We're currently developing our children's ministry. For now, children are welcome in the main service with their families.</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-church-blue mb-2">Can I meet with the pastor?</h3>
              <p className="text-church-gray">Absolutely! Pastor James would love to meet with you. Feel free to approach him after service or contact us to schedule a meeting.</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-church-blue mb-2">Do you have small groups or Bible studies?</h3>
              <p className="text-church-gray">We're in the process of developing small group ministries. Check back soon for updates on available groups and meeting times.</p>
            </div>
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