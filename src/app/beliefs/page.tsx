"use client";
import Link from "next/link";
import { useState } from "react";

export default function Beliefs() {
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
                  console.log("[Beliefs] toggle menu ->", next);
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
              <Link href="/beliefs" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
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
          {/* Current page label on mobile */}
          <div className="md:hidden col-start-2 justify-self-center font-semibold text-church-blue">
            Beliefs
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Believe</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Our faith is built on the foundation of Scripture and historic Christian doctrine
          </p>
        </div>
      </section>

      {/* Beliefs Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Doctrinal Foundation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Our Doctrinal Foundation</h2>
            <div className="bg-church-blue text-white p-6 rounded-lg mb-8">
              <p className="text-blue-200 leading-relaxed">
                Our theological confessions place our work within the historic confessions of the church and ground 
                the basis of our ministry. Though we are non-denominational, we are deeply committed to Scripture 
                and the historic Christian tradition.
              </p>
            </div>
          </div>

          {/* Scripture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Scripture</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">God-Breathed Authority</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Scripture is God-breathed, inspired by the Holy Spirit, and the foundational means by which 
                  believers can claim special revelation of God. In all matters of spiritual knowledge and right living, 
                  Scripture has the final word. The Christian life must be thoroughly Scripture-oriented and built upon its promises.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Divine and Human Authorship</h3>
                <p className="text-gray-700 leading-relaxed">
                  Though the Scripture is God-breathed, it was also penned by humans. The divine was entrusted to the natural 
                  and conveyed in numerous genres, contextual settings, and occasions over vast distance of time and space. 
                  These realities necessitate careful consideration of contexts and authorial intent in discerning Scripture&apos;s meaning.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">The Holy Spirit&apos;s Role</h3>
                <p className="text-gray-700 leading-relaxed">
                  Just as the Holy Spirit inspired the writing of the Scriptures, He also works in the hearts and minds 
                  of people who read God&apos;s Word. The Holy Spirit is able to convict hearts, renew minds, and work in power 
                  to change lives, utilizing any translation to lead a person to saving knowledge of the truth found in Jesus.
                </p>
              </div>
            </div>
          </div>

          {/* Trinity */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">The Triune God</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Trinity</h3>
                <p className="text-gray-700 leading-relaxed">
                  God is a triune being; while God is unified in Himself, He is known through three distinct persons: 
                  the Father, the Son, and the Holy Spirit. All persons of the Trinity are coeternal and share in the 
                  same divine essence. There is no chronological priority of any one person—they are coeternal, yet each 
                  may be known through their distinct roles.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">God the Father</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Father is the Creator of the world, sovereign over all parts of His creation, and works providentially 
                  for His people in all times and places. God&apos;s desire for the salvation of mankind is evident in the 
                  sending of His Son to be sacrificed on behalf of sinful humans.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">God the Son</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Son holds all creation together and, though having full equality with God, took on human flesh 
                  through the virgin Mary. Being fully God and fully man, the Son lived a sinless life of active obedience, 
                  submitted to crucifixion to save those who receive His sacrifice by faith, demonstrated His power over 
                  death in resurrection, and will return to inaugurate a New Creation.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">God the Holy Spirit</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Holy Spirit proceeds from the Son and Father to convict the world of sin, righteousness, and judgment. 
                  He regenerates believers&apos; hearts, dwells within them, testifies on their behalf, sanctifies them, and draws 
                  them into Christ&apos;s image. The Holy Spirit is the seal of believers, their guarantee of redemption, and 
                  equips them for Kingdom service.
                </p>
              </div>
            </div>
          </div>

          {/* Mankind and Salvation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Mankind and Salvation</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Image and Sin</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mankind—male and female alike—bears the image of God, making all humans inherently valuable. God made man 
                  upright as morally responsible agents. Nevertheless, Adam&apos;s failure led to sin and death spreading to all 
                  his progeny. All humans are born into sin and are sinners by nature and choice, separated from God and 
                  incapable of attaining salvation by their own works.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Salvation by Grace Alone</h3>
                <p className="text-gray-700 leading-relaxed">
                  Salvation is afforded to believers through Jesus alone, by grace alone, through faith alone, for God&apos;s 
                  glory alone. For any person who repents of sin, acknowledges Christ as Lord, and believes that Jesus 
                  was raised from the dead, such a person will be saved through justification, sanctification, and 
                  glorification—culminating in resurrection to new life in the New Heavens and New Earth.
                </p>
              </div>
            </div>
          </div>

          {/* The Church */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">The Church</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                The church in its essence is the representative body of all believers in Jesus in all times and places. 
                Believers are commanded to meet together for mutual edification, teaching, preaching, taking of the 
                sacraments, worship, and prayer. The church is the Body of Christ, diverse in its members who represent 
                different gifts. As the Body of Christ, the church is commissioned to participate in evangelization and 
                discipleship of the world.
              </p>
            </div>
          </div>

          {/* Statement of Faith placeholder removed */}

          {/* Theological Commitments */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Theological Commitments</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Gospel-Centered</h3>
                <p className="text-gray-700">
                  Everything we do flows from and points back to the good news of Jesus Christ.
                </p>
              </div>

              <div className="bg-white border-2 border-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Scripture-Based</h3>
                <p className="text-gray-700">
                  We are committed to expository preaching and teaching that faithfully explains God&apos;s Word.
                </p>
              </div>

              <div className="bg-white border-2 border-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Historically Informed</h3>
                <p className="text-gray-700">
                  We value the wisdom of historic Christianity and learn from faithful believers throughout history.
                </p>
              </div>

              <div className="bg-white border-2 border-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Missionally Focused</h3>
                <p className="text-gray-700">
                  We exist to make disciples and spread the gospel both locally and globally.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-church-blue mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;d love to discuss our beliefs with you and answer any questions you might have.
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