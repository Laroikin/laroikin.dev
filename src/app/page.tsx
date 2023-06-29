import BentoGrid from '@/components/bento-grid';
import ExternalLink from '@/components/external-link';
import { Metadata } from 'next';
import { Balancer } from 'react-wrap-balancer';
import Logo from '../../public/assets/img/HomeLogo.svg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Laroikin',
  description: "Laroikin's personal website",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="w-fit self-center rounded-[2.75rem] bg-mauve-12 p-2 dark:bg-transparent">
          <Image src={Logo} alt="logo" className="h-36 w-36" />
        </div>
        <div className="grow">
          <h1 className="mb-2 text-center text-3xl font-bold sm:text-start">
            Laroikin
          </h1>
          <Balancer
            className="mx-auto text-center text-mauve-11 sm:max-w-md sm:text-start"
            as="p"
          >
            Hello there! I&apos;m Laroikin, a proficient{' '}
            <strong className="font-semibold text-mauve-12">
              Full Stack Developer
            </strong>{' '}
            and{' '}
            <strong className="font-semibold text-mauve-12">
              UI/UX Designer
            </strong>
            . Born and raised in Uzbekistan, I have since moved to South Korea,
            where I am studying at{' '}
            <ExternalLink href="http://sejong.ac.kr">
              Sejong University
            </ExternalLink>{' '}
            and applying my skills at{' '}
            <ExternalLink href="https://habsida.com">Habsida</ExternalLink>.
          </Balancer>
        </div>
      </div>
      <h2 className="mb-4 mt-10 text-xl font-bold">Work Experience:</h2>
      <BentoGrid />
      <h3 className="mt-8">Education:</h3>
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
