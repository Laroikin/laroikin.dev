'use client';
import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

export default function TiltCard({
  title,
  subtitle,
  date,
  link,
  color,
  className,
  imgSrc,
}: {
  title: string;
  subtitle: string;
  date: string;
  color?: string;
  link: string;
  className?: string;
  imgSrc?: StaticImageData;
}) {
  return (
    <>
      <Link
        href={link ?? ''}
        target="_blank"
        className={`w-full no-underline ${className}`}
      >
        <div
          className={`group flex h-full flex-col justify-between
          overflow-hidden
          rounded-xl bg-gradient-to-br ${color} card-shadow relative p-2 text-white duration-300`}
        >
          <div className="z-10 grow p-2 ">
            <span className="font-bold text-white">{title}</span>
          </div>
          <div className="dotted-bg z-10 flex w-full translate-y-1/3 scale-95 items-center justify-between rounded-md border-b border-l border-r border-t  border-white/30 border-b-white/5 border-l-white/20 border-r-white/20 px-4 py-2 text-sm opacity-0 shadow-md backdrop-blur-lg duration-150 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 ">
            {link}
            <ArrowUpRight className="h-5 w-5" />
          </div>
          {imgSrc && (
            <Image
              src={imgSrc}
              fill={true}
              style={{ objectFit: 'cover' }}
              alt={title}
              className="z-[1]"
            />
          )}
        </div>
      </Link>
    </>
  );
}
