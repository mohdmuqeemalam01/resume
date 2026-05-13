import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata =  {
  title: "Mohd Muqeem Alam | Full Stack Developer",

  description:
    "Passionate Full Stack Developer skilled in React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Building responsive and modern web applications.",

  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Mohd Muqeem Alam",
    "Muqeem",
    "mohdmuqeemalam",
    
  ],

  authors: [{ name: "Mohd Muqeem Alam" }],

  creator: "Mohd Muqeem Alam",

  openGraph: {
    title: "Mohd Muqeem Alam | Full Stack Developer",
    description:
      "Portfolio of Mohd Muqeem Alam - Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, and MongoDB.",
    url: "https://mohdmuqeemalam.vercel.app/",
    siteName: "Mohd Muqeem Alam Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body >{children}</body>
    </html>
  );
}
