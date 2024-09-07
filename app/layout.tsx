
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./provider";
import { Appbar } from "./components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muzer",
  description: "Song/Stream Voting and streaming Application",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

       <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
          <Providers>
            <Appbar />
            {children}
          </Providers>
        </body>
    </html>
  );
}
