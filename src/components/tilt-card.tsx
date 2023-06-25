'use client';
import Link from 'next/link';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { IconArrowUpRight } from '@tabler/icons-react';

export default function TiltCard({
  title,
  subtitle,
  date,
  link,
  color,
  className,
}: {
  title: string;
  subtitle: string;
  date: string;
  color: string;
  link: string;
  className?: string;
}) {
  return (
    <>
      <Link
        href={link ?? ''}
        target="_blank"
        className={`w-full no-underline ${className}`}
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.5}
          perspective={1000}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareColor="#ffffff"
          glarePosition="all"
          className='w-full h-full'
          glareBorderRadius="0.75rem"
        >
          <div
            className={`z-10 flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br ${color} text-white duration-300 hover:shadow-xl hover:shadow-blackA-4`}
          >
            <div className="grow p-4">
              <span className="text-white">{title}</span>
            </div>
            <div className="flex w-full items-center justify-between border-t border-white/30 dotted-bg px-4 py-2 backdrop-blur-3xl backdrop-saturate-150">
              {link}
              <IconArrowUpRight />
            </div>
          </div>
        </Tilt>
      </Link>
    </>
  );
}
