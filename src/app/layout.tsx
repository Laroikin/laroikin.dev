import './globals.css';
import { Inter_Tight } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Providers } from '@/components/providers';

const inter = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '700', '300', '600', '900'],
});

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
