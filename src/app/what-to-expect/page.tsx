import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CHURCH_ADDRESS, SERVICE_SUMMARY, SERVICE_TIME_LABEL } from "@/lib/site";

export default function WhatToExpect() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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
                    {SERVICE_TIME_LABEL}
                  </h3>
                  <p className="text-church-gray mb-4">
                    <strong>{SERVICE_SUMMARY}</strong>
                  </p>
                  <p className="text-gray-600">
                    We recommend arriving 5-10 minutes early to get settled, but don&apos;t hesitate to come on in if you are running late.
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
                    {CHURCH_ADDRESS.line1}<br />
                    {CHURCH_ADDRESS.line2}
                  </p>
                  <p className="text-gray-600">
                    We are located in the Gymnasium behind Grace Baptist Church. The primary entrance is located between the two buildings. Parking is available beside, behind, and across the road from the main Grace Baptist Sanctuary.
                  </p>
                </div>
              </div>
            </div>

            {/* Moved What to Wear to Common Questions per request */}
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
                  <h3 className="text-xl font-bold text-church-blue mb-2">Welcome & Greeting (11:00 AM)</h3>
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
                  <h3 className="text-xl font-bold text-church-blue mb-2">Praise and Worship (11:05 AM)</h3>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-blue mb-2">Prayer & Scripture Reading (11:20 AM)</h3>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-3">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-blue mb-2">Biblical Teaching (11:25 AM)</h3>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full p-3">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-blue mb-2">Closing (11:55 AM)</h3>
                  <p className="text-church-gray">We will close with prayer. The service should end around 12:00 PM.</p>
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
              <p className="text-blue-200 mb-4">
                We also serve lunch immediately after the service. Everyone is welcome to stay and share a meal together!
              </p>
              <p className="text-blue-200">
                Don&apos;t feel obligated to stay if you need to leave, but if you have time, we&apos;d love to get to know you better!
              </p>
            </div>
          </div>

          {/* For Families */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">For Families with Children</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-church-blue mb-3">Children in Service</h3>
                <p className="text-church-gray">Children of all ages are welcome in our worship service.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-church-blue mb-3">Sunday School</h3>
                <p className="text-church-gray">Sunday school for children runs concurrently with our main service, so kids can learn in an age-appropriate setting while parents enjoy the main service. However, we understand that many visitors may wish to keep their children with them during service, which is perfectly fine as well!</p>
              </div>
            </div>
          </div>

          {/* Common Questions */}
          <div>
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Common Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-church-blue mb-2">What should I wear?</h3>
                <p className="text-church-gray">Come as you are. You&apos;ll see people in everything from jeans to business casual.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-church-blue mb-2">Will I be asked to stand up or introduce myself?</h3>
                <p className="text-church-gray">No! We want you to feel comfortable. You&apos;re welcome to participate as much or as little as you&apos;d like.</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-church-blue mb-2">Will someone ask me for money?</h3>
                <p className="text-church-gray">Although we accept donations after the service, this is done discreetly and no donations in any amount are required or expected.</p>
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

      <Footer />
    </div>
  );
}