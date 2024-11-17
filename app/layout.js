// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const clashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    
    {
      path: './fonts/ClashDisplay-Regular.woff',
      style: 'normal',
      weight: "400"
    },
  ],

  variable:  '--font-clash-display',
})

export const Metadata = {
  title: "Eazyfit | Easy, Fast, and Affordable",
  description: "Landing page for Eazyfit",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={ clashDisplay.variable }
      >
        {children}
      </body>
    </html>
  );
}
