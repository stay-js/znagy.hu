import { useMantineColorScheme } from '@mantine/core';
import { TbSun, TbMoon } from 'react-icons/tb';

const ThemeToggle: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <button
      className="p-2 ring-neutral-400 hover:ring-2 rounded-lg bg-neutral-300 dark:bg-neutral-600 transition-all"
      type="button"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {colorScheme === 'dark' ? <TbMoon size={22} /> : <TbSun size={22} />}
    </button>
  );
};

export default ThemeToggle;
