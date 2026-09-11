import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CHURCH_ADDRESS, SERVICE_SUMMARY, SERVICE_TIME_LABEL } from "@/lib/site";

export default function Connect() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-church-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect With Us</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Join our community and discover how you can be part of what God is doing in Murray
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
                        {CHURCH_ADDRESS.line1}<br />
                        {CHURCH_ADDRESS.line2}
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
                        <li><span className="font-semibold">General Inquiries:</span> contact@encmurray.com</li>
                        <li><span className="font-semibold">Pastor Jamie (Spiritual Concerns):</span> pastor@encmurray.com</li>
                        <li><span className="font-semibold">Website/Tech Issues:</span> admin@encmurray.com</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right column: Service Time and Phone */}
                <div className="w-full md:w-fit md:justify-self-end">
                  {/* Row 1: Service Time */}
                  <div className="grid grid-cols-[3rem_minmax(0,1fr)] md:grid-cols-[3rem_max-content] gap-x-4 items-start h-20 mb-8">
                    <div className="flex-shrink-0 bg-church-gold text-white p-3 rounded-lg w-12 h-12 grid place-items-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0 text-left break-words">
                      <h3 className="text-xl font-bold text-church-blue mb-2">{SERVICE_TIME_LABEL}</h3>
                      <p className="text-church-gray">{SERVICE_SUMMARY}</p>
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
                      <p className="text-church-gray">(270) 753-7356</p>
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
                  pastor@encmurray.com
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Directions & Parking intentionally removed */}

      <Footer />
    </div>
  );
}