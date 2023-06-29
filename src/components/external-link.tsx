import Link from 'next/link';
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
      className="font-medium border-b border-mauve-8 hover:border-mauve-12 transition-[border-color] duration-150 text-mauve-12"
    >
      <span>{children}</span>
    </Link>
  );
}
