"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LOGO, NAV_LINKS } from "@/lib/site";

// Pages that are reachable but deliberately not in the navbar still need a label
// for the mobile header, so they pass one in.
type NavbarProps = { label?: string };

export default function Navbar({ label }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentLabel =
    NAV_LINKS.find((link) => link.href === pathname)?.label ?? label ?? "";

  return (
    <>
      <nav className="enhanced-navbar relative z-50">
        <div className="navbar-logo-absolute">
          <Image
            src={LOGO.src}
            alt={LOGO.alt}
            className="navbar-logo"
            width={100}
            height={100}
          />
        </div>
        <div className="navbar-container relative">
          <div className="block md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="cursor-pointer text-church-gray hover:text-church-gold"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="navbar-links-section hidden md:block">
            <div className="navbar-links">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={link.href === pathname ? "page" : undefined}
                  className={`${
                    link.href === pathname ? "text-church-blue" : "text-church-gray"
                  } hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Current page label on mobile */}
          <div className="md:hidden col-start-2 justify-self-center font-semibold text-church-blue">
            {currentLabel}
          </div>
          <div className="hidden md:block"></div>
        </div>
      </nav>
      <div className={`mobile-menu w-full ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 py-3">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
