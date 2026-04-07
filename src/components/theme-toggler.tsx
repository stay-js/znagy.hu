import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '~/components/ui/button';
import { useMounted } from '~/hooks/use-mounted';

export const nextTheme = {
  dark: 'system',
  light: 'dark',
  system: 'light',
} as const;

export const icons = {
  dark: Moon,
  light: Sun,
  system: Monitor,
};

export function ThemeToggler() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme, theme } = useTheme();

  if (!mounted) return <div />;

  const currentTheme = (theme ?? resolvedTheme ?? 'system') as keyof typeof icons;

  const Icon = icons[currentTheme];

  return (
    <Button
      onClick={() => setTheme(nextTheme[currentTheme])}
      size="icon"
      title="Toggle theme"
      type="button"
      variant="ghost"
    >
      <Icon className="size-4.5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
