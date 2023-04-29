import { useState, useEffect } from 'react';

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark' | null>(null);

  const toggleColorScheme = () => setColorScheme((value) => (value === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    if (!colorScheme) {
      if (
        localStorage.theme &&
        typeof localStorage.theme === 'string' &&
        (localStorage.theme === 'dark' || localStorage.theme === 'light')
      ) {
        return setColorScheme(localStorage.theme);
      }

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return setColorScheme('dark');

      return setColorScheme('light');
    }

    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [colorScheme]);

  return { colorScheme, toggleColorScheme };
};
