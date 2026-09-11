// Single source of truth for the church details that appear on more than one page.
// Until there is a CMS, changing a service time or an address should be a one-line edit.

export const CHURCH_NAME = "Ekklesia";

export const CHURCH_TAGLINE =
  "A gospel-centered church serving the Murray community.";

export const SERVICE_TIME = "11:00 AM";

// Singular on purpose: there is currently one Sunday service.
export const SERVICE_TIME_LABEL = "Service Time";

export const SERVICE_SUMMARY = `Sunday Worship: ${SERVICE_TIME}`;

export const CHURCH_ADDRESS = {
  line1: "617 S 9th St (Gymnasium)",
  line2: "Murray, KY 42071",
} as const;

export const LOGO = {
  src: "/logos/MCF Church Logo1.jpg",
  alt: CHURCH_NAME,
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Beliefs", href: "/beliefs" },
  { label: "What to Expect", href: "/what-to-expect" },
  { label: "Connect", href: "/connect" },
  { label: "Donate", href: "/donations" },
  { label: "Upcoming Events", href: "/upcoming-events" },
];
