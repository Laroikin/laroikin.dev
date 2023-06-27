import BentoGrid from '@/components/bento-grid';
import ExternalLink from '@/components/external-link';
import { Metadata } from 'next';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'Laroikin',
  description: "Laroikin's personal website",
};

export default function Home() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Laroikin</h1>
      <p className="text mb-4 h-fit max-w-md text-mauve-11 transition duration-300 hover:h-full">
        <Balancer>
          Hello there! I&apos;m Laroikin, a proficient Full Stack Developer and
          UI/UX Designer. Born and raised in Uzbekistan, I have since moved to
          South Korea, where I am studying at{' '}
          <ExternalLink href="https://sejong.ac.kr">
            Sejong University
          </ExternalLink>{' '}
          and applying my skills at <Link href="#myballs">Habsida</Link>
          .
        </Balancer>
      </p>
      <h2 className="mb-4 mt-10 text-xl font-bold">Work Experience:</h2>
      <BentoGrid />
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>

      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
      <h3>Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>

      <h3 id="myballs">Education:</h3>
      <ul>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
        <li>
          <a href="https://www.uztelecom.uz">Uztelecom</a>
        </li>
      </ul>
    </>
  );
}
