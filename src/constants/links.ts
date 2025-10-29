import {
  IconMail,
  IconWorld,
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
} from '@tabler/icons-react';

export const LINKS = [
  {
    title: 'Connect with me',
    grid: false,
    links: [
      {
        label: 'Website',
        url: 'https://znagy.hu',
        icon: IconWorld,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/stay-js',
        icon: IconBrandGithub,
      },
      {
        label: 'X / Twitter',
        url: 'https://x.com/znagyy',
        icon: IconBrandX,
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/zeteny_ngy',
        icon: IconBrandInstagram,
      },
      {
        label: 'E-mail',
        url: 'mailto:znagy@znagy.hu',
        icon: IconMail,
      },
    ],
  },
  {
    title: 'Featured Projects',
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
  },
] as const;
