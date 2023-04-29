import { Button } from '@components/Button';
import { SectionTitle } from './SectionTitle';

export const GetInTouch: React.FC = () => (
  <section className="content flex flex-col gap-4">
    <SectionTitle title="Get In Touch" number={3} />

    <div className="flex flex-col gap-6">
      <p className="max-w-[60ch]">
        Got something you would like to say? Or have a question? Feel free to send me a message
        using the form down below. I&rsquo;m just a few clicks away...
      </p>

      <Button href="/contact">Contact</Button>
    </div>
  </section>
);
