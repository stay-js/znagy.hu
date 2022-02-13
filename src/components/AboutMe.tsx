import Link from 'next/link';
import Image from 'next/image';
import me from '../assets/images/me.png';

interface Props {}

const AboutMe: React.FC<Props> = (props) => {
  return (
    <section className="about-me content" id="about">
      <h2 className="section-title">
        <span className="section-number">1.</span>About Me
      </h2>
      <div className="flex">
        <div className="about-me-image-container">
          <div className="about-me-image">
            <Image src={me} layout="responsive" />
          </div>
        </div>
        <div className="about-me-content">
          <p>Glad you are here! </p>
          <p>
            My name is Zétény, I&rsquo;m from Hungary. Currently studying in{' '}
            <Link href="http://njszg.hu">
              <a target="_blank" className="link">
                BMSzC Neumann János Informatikai Technikum
              </a>
            </Link>
            .
          </p>
          <p>
            My intrest in development started in 2015. I love doing Kyokushin
            Karate and Thai-Boxing. My favourite subjects are Maths and
            Chemistry. I want to be a Full Stack web developer when I grow up.
          </p>
          <p>Here are a few technologies I have an understanding of:</p>
          <div className="about-me-technologies">
            <ul className="about-me-technologies-list">
              <li>
                <Link href="https://www.javascript.com/">
                  <a target="_blank" className="link">
                    JavaScript
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.typescriptlang.org/">
                  <a target="_blank" className="link">
                    TypeScript
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://nodejs.org/">
                  <a target="_blank" className="link">
                    Node.js
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="about-me-technologies-list">
              <li>
                <Link href="https://expressjs.com/">
                  <a target="_blank" className="link">
                    Express
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://reactjs.org/">
                  <a target="_blank" className="link">
                    React
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://nextjs.org/">
                  <a target="_blank" className="link">
                    Next.js
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
