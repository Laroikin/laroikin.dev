import TiltCard from '@/components/tilt-card';

export default function Home() {
  return (
    <>
      <p>
        Building the{' '}
        <span className="rounded bg-mauve-12 px-2 py-1 text-mauve-1">
          Brightest
        </span>{' '}
        of the Futures, One Line of Code at a Time
      </p>
      <hr className="my-4 border-mauve-5" />
      <h3>Work:</h3>
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
