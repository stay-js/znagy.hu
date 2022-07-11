import Button from '../Button';
import SectionTitle from './SectionTitle';

const GetInTouch: React.FC = () => (
  <section className="min-h-[40vh] mb-20 content" id="get-in-touch">
    <SectionTitle title="Get In Touch" number={3} />

    <h1 className="mb-2 font-serif text-2xl font-semibold">Hello!</h1>
    <div className="max-w-[60ch] mb-8">
      <p>
        Got something you would like to say? Or have a question? Feel free to send me a message
        using the form down below. I&rsquo;m just a few clicks away...
      </p>
    </div>

    <Button href="/contact">Contact</Button>
  </section>
);

export default GetInTouch;
