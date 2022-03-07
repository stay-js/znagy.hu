import Link from 'next/link';

interface Props {}

const Title: React.FC<Props> = (props) => {
  return (
    <section className='title content'>
      <p className='title-first-paragraph'>Hi, my name is</p>
      <h1 className='title-name'>Zétény Nagy.</h1>
      <p className='title-content'>
        Full stack developer wannabe. IT Student. Kyokushin. Muay Thai.
      </p>
      <ul className='title-links'>
        <li>
          <Link href='https://github.com/stay-js'>
            <a target='_blank' className='title-link' title='GitHub'>
              <i className='fab fa-github' />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.facebook.com/nagy.zeteny.06/'>
            <a target='_blank' className='title-link' title='Facebook'>
              <i className='fab fa-facebook' />
            </a>
          </Link>
        </li>
        <li>
          <Link href='mailto:nagyzeteny6@gmail.com'>
            <a target='_blank' className='title-link' title='E-mail'>
              <i className='fas fa-envelope' />
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.youtube.com/channel/UCEGp1S_QTS3goAVX1cVw-tQ'>
            <a target='_blank' className='title-link' title='YouTube'>
              <i className='fab fa-youtube' />
            </a>
          </Link>
        </li>
      </ul>
      <Link href='#about'>
        <a className='title-btn'>More About Me</a>
      </Link>
    </section>
  );
};

export default Title;
