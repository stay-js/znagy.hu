import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
  IconWorld,
} from '@tabler/icons-react';

export const LINKS = [
  {
    grid: false,
    links: [
      {
        icon: IconWorld,
        label: 'Website',
        url: 'https://znagy.hu',
      },
      {
        icon: IconBrandGithub,
        label: 'GitHub',
        url: 'https://github.com/stay-js',
      },
      {
        icon: IconBrandX,
        label: 'X (Twitter)',
        url: 'https://x.com/znagyy',
      },
      {
        icon: IconBrandInstagram,
        label: 'Instagram',
        url: 'https://www.instagram.com/zeteny_ngy',
      },
      {
        icon: IconMail,
        label: 'E-mail',
        url: 'mailto:znagy@znagy.hu',
      },
    ],
    title: 'Connect with me',
  },
  {
    grid: true,
    links: [
      {
        label: 'Frontend Mentor',
        url: 'https://www.frontendmentor.io/profile/stay-js',
      },
      {
        label: 'BABA Construction Corp.',
        url: 'https://www.babaconstructioncorp.com',
      },
      {
        label: 'Tatabányai Ultrahang',
        url: 'https://www.tatabanyaultrahang.eu',
      },
      {
        label: 'REGALE Energy Zrt.',
        url: 'https://www.regale.hu',
      },
      {
        label: 'JobKeeper',
        url: 'https://job-keeper.znagy.hu',
      },
      {
        label: 'Flashcards App',
        url: 'https://flashcards.znagy.hu',
      },
      {
        label: 'Stay Random',
        url: 'https://random.znagy.hu',
      },
      {
        label: 'Todo App',
        url: 'https://todo.znagy.hu',
      },
      {
        label: 'Rate Limiter',
        url: 'https://ratelimit.znagy.hu',
      },
    ],
    title: 'Featured Projects',
  },
] as const;
