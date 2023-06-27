import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="underline font-medium underline-offset-4 transition duration-150 hover:text-mauve-12"
    >
      <span>{children}</span>
    </Link>
  );
}
