export const navItems = [
  {
    name: 'Home',
    path: '/',
  },

  // Temporarily removed, because scroll is not behaving as expected
  // https://github.com/vercel/next.js/issues/49255

  // {
  //   name: 'Projects',
  //   path: '/#projects',
  // },

  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Setup',
    path: '/setup',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Links',
    path: 'https://links.znagy.hu',
  },
] as const;
