import { useMantineColorScheme } from '@mantine/core';
import { TbSun, TbMoon } from 'react-icons/tb';

const ThemeToggle: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <button
      className="border rounded p-1"
      type="button"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {colorScheme === 'dark' ? <TbMoon size={22} /> : <TbSun size={22} />}
    </button>
  );
};

export default ThemeToggle;
