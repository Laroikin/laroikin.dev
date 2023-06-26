import TiltCard from '@/components/tilt-card';

export default function Home() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Laroikin</h1>
      <p className="text-mauve-11 mb-4 text-lg">
        Hi, I&apos;m Laroikin. I&apos;m a full-stack developer and a UI
        designer, currently working at Habsida.
      </p>
      <h2 className='font-bold text-xl my-2'>Work Experience:</h2>
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
