import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';
import '../styles/portfolio.css';
import '../styles/themes.css';

const siteUrl = 'https://mohamed-mohsen2003.github.io/mohamed-mohsen-portfolio/';

const poppins = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/poppins/files/poppins-latin-300-normal.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/poppins/files/poppins-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/poppins/files/poppins-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mohamed Mohsen — Full-Stack Developer',
  description:
    'Full-Stack Developer with over four years of experience in React, Python, Laravel, .NET, WordPress, Flutter, CRM and SaaS development.',
  alternates: { canonical: siteUrl },
  icons: { icon: `${siteUrl}favicon.svg?v=2` },
  openGraph: {
    title: 'Mohamed Mohsen — Full-Stack Developer',
    description:
      'Full-Stack Developer and UI/UX Designer with 500+ completed projects. Explore web apps, e-commerce stores, mobile apps and business systems built with React, Next.js, Laravel and Flutter.',
    url: siteUrl,
    type: 'website',
    images: [{ url: `${siteUrl}assets/images/og-cover.jpg`, width: 1200, height: 627 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#121212' };

const themeScript = `try { const theme = localStorage.getItem('mm-portfolio-theme'); if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme; } catch {}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Script
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
