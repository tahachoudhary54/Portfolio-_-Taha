import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Taha Choudhary — AI/DS Student & Web Developer",
  description:
    "Portfolio of Taha Choudhary — an AI & Data Science student at Nexcore Institute of Technology, building beautiful web experiences with React, Next.js, and Figma.",
  keywords:
    "Taha Choudhary, Web Developer, UI/UX Designer, AI, Data Science, React, Next.js, Mumbai",
  authors: [{ name: "Taha Choudhary" }],
  openGraph: {
    title: "Taha Choudhary — AI/DS Student & Web Developer",
    description:
      "Building beautiful web experiences with modern technologies. AI & Data Science trainee at Nexcore Institute of Technology.",
    url: "https://taha-choudhary.vercel.app",
    siteName: "Taha Choudhary Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Choudhary — AI/DS Student & Web Developer",
    description:
      "Building beautiful web experiences with modern technologies.",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="grain">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
