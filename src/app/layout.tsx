import type { Metadata } from "next";
import { Domine } from "next/font/google";
import "./globals.css";

const domine = Domine({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tiaraxUGC - UGC Content Creator Portfolio",
  description:
    "Explore tiaraxUGC's portfolio showcasing user-generated content creation, brand collaborations, and creative digital marketing solutions.",
  keywords: [
    "UGC",
    "Content Creator",
    "Digital Marketing",
    "Brand Collaborations",
    "Social Media Content",
    "Portfolio",
  ],
  authors: [{ name: "tiaraxUGC" }],
  creator: "tiaraxUGC",
  publisher: "tiaraxUGC",
  robots: "index, follow",
  openGraph: {
    title: "tiaraxUGC - UGC Content Creator Portfolio",
    description:
      "Explore tiaraxUGC's portfolio showcasing user-generated content creation, brand collaborations, and creative digital marketing solutions.",
    url: "https://tiaraxugc.com",
    siteName: "tiaraxUGC Portfolio",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tiaraxUGC - UGC Content Creator Portfolio",
    description:
      "Explore tiaraxUGC's portfolio showcasing user-generated content creation, brand collaborations, and creative digital marketing solutions.",
    creator: "@tiaraxUGC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${domine.className} antialiased bg-gradient-to-r from-[#efe9e4] via-[#f5f2ef] to-[#dcd4cd] to-80%`}
      >
        {children}
      </body>
    </html>
  );
}
