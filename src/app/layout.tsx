import './globals.css';
import Navbar from '@/components/navbar';
import { Providers } from '@/components/providers';

import { inter } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-mauve-2 text-mauve-12`}
      >
        <Providers>
          <Navbar />
          <main className="m-auto max-w-4xl p-4 pt-8 antialiased transition-transform duration-300">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
