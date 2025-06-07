import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Bridge } from '@/context/theme-context';
import { ThemeProvider } from '@/components/theme-provider';
import LoaderWrapper from '@/components/loader-wrapper';
import { ComingSoonPage } from '@/components/coming-soon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Web Portfolio | I Putu Crisna Putra Ardhika',
  description:
    'Personal portfolio of Ardhika, a full stack developer specializing in Python, Node.js, and React.',
};

const IS_LIVE = process.env.MAINTENANCE_MODE === 'false';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Bridge>
            {IS_LIVE ? (
              <LoaderWrapper>{children}</LoaderWrapper>
            ) : (
              <ComingSoonPage />
            )}
          </Bridge>
        </ThemeProvider>
      </body>
    </html>
  );
}
