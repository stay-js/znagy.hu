import Link from 'next/link';

interface Props {}

const GetInTouch: React.FC<Props> = (props) => {
  return (
    <section className='get-in-touch content' id='get-in-touch'>
      <h2 className='section-title'>
        <span className='section-number'>3.</span>Get In Touch
      </h2>
      <h1 className='get-in-touch-title'>Hello!</h1>
      <div className='get-in-touch-content'>
        <p>
          Got something you would like to say? Or have a question? Feel free to
          send me a message using the form down below. I&rsquo;m just a few
          clicks away...
        </p>
      </div>

      <Link href='/contact'>
        <a className='get-in-touch-btn no-dec'>Contact</a>
      </Link>
    </section>
  );
};

export default GetInTouch;
