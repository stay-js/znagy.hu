'use client';

import { TbArrowNarrowDown } from 'react-icons/tb';
import { Button } from '~/components/button';

export const HeroButton = () => (
  <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
    <TbArrowNarrowDown size={18} />
    More About Me
  </Button>
);
