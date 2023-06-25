'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LetterCarousel from './letter-carousel';
import { Separator } from '@/components/ui/separator';
import ThemeSwitcher from './theme-switcher';

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-mauve-5 bg-mauve-2/95 py-5 backdrop-blur-md backdrop-saturate-200">
        <div className="m-auto flex max-w-4xl flex-row items-center justify-between px-4">
          <div className="flex flex-row items-center gap-2">
            <LetterCarousel />
            <h1 className="text-lg font-semibold text-mauve-12">Laroikin</h1>
          </div>
          <div className="flex w-fit flex-row items-center">
            {routes.map((route) => (
              <AnimatePresence key={route.href} initial={false}>
                <Link
                  href={route.href}
                  onMouseEnter={() => setActiveTab(route.href)}
                  className={`relative px-3 py-1.5 text-sm transition focus-visible:outline-2`}
                  onMouseLeave={() => setActiveTab(null)}
                >
                  {activeTab === route.href && (
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center rounded bg-mauve-12/5"
                      layoutId="hoverBackground"
                      transition={{
                        duration: 0.4,
                        bounce: 0.1,
                        type: 'spring',
                      }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-20 ${
                      route.href === activeTab || route.href === pathname
                        ? 'text-mauve-12'
                        : 'text-mauve-9'
                    } duration-200`}
                  >
                    {route.label}
                  </span>
                </Link>
              </AnimatePresence>
            ))}
            <Separator orientation="vertical" className="mx-2 h-4" />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
