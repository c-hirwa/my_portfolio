import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

const description = `${profile.name} — ${profile.role} in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description,
  authors: [{ name: profile.name }],
  keywords: ["Chris Hirwa", "software engineer Rwanda", "web developer Kigali", "Next.js developer", "freelance developer"],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: profile.name, description },
};

export const viewport: Viewport = { themeColor: "#09080c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh overflow-x-hidden">{children}</body>
    </html>
  );
}
