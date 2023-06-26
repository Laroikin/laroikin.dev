import TiltCard from '@/components/tilt-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laroikin',
  description: "Laroikin's personal website",
};

export default function Home() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Laroikin</h1>
      <p className="mb-4 text-lg text-mauve-11">
        Hello there! I&apos;m Laroikin, a proficient Full Stack Developer and
        UI/UX Designer. Born and raised in Uzbekistan, I have since moved to
        South Korea, where I am studying at Sejong University and applying my
        skills at Habsida.
      </p>
      <h2 className="my-2 text-xl font-bold">Work Experience:</h2>
      <div className="grid grid-cols-3 gap-4">
        <TiltCard
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          className="col-span-2 row-span-2 aspect-video"
          color={'from-violet-8 to-crimson-9'}
        />
        <TiltCard
          className="row-span-3"
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          color={'from-violet-8 to-crimson-9'}
        />
        <TiltCard
          className="aspect-square"
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          color={'from-violet-8 to-crimson-9'}
        />
        <TiltCard
          className="aspect-square"
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          color={'from-violet-8 to-crimson-9'}
        />
        <TiltCard
          className="aspect-square"
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          color={'from-violet-8 to-crimson-9'}
        />
      </div>
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
    </>
  );
}
