import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Guardian',
  description: 'Guardian — AI-powered Git hook for code review.',
  applicationName: 'Guardian',
  authors: {
    name: 'josecortezz25'
  },
  metadataBase: new URL('https://guardian-cli-ai.vercel.app')
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      {googleTagManagerId ? (
        <GoogleTagManager gtmId={googleTagManagerId} />
      ) : null}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
