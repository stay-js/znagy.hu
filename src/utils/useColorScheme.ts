import { useState, useEffect } from 'react';

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark' | null>(null);

  const toggleColorScheme = () => setColorScheme((value) => (value === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    if (!colorScheme) {
      if (localStorage.theme) return setColorScheme(localStorage.theme);
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

export default useColorScheme;
