import Button from '../../Button';
import style from './GetInTouch.module.scss';

const GetInTouch: React.FC = () => (
  <section className={`${style['get-in-touch']} content`} id="get-in-touch">
    <h2 className="section-title">
      <span className="section-number">3.</span>
      Get In Touch
    </h2>
    <h1 className={style.title}>Hello!</h1>
    <div className={style.content}>
      <p>
        Got something you would like to say? Or have a question? Feel free to send me a message
        using the form down below. I&rsquo;m just a few clicks away...
      </p>
    </div>

    <Button href="/contact">Contact</Button>
  </section>
);

export default GetInTouch;
