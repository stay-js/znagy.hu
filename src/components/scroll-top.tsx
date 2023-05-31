'use client';

import { useEffect, useState } from 'react';
import { TbArrowUp } from 'react-icons/tb';
import { cn } from '~/utils/cn';

export const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScroll = () => (window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={cn(
        'fixed bottom-6 right-6 z-40 rounded-full bg-neutral-700 p-2 transition duration-200 hover:bg-neutral-600',
        isVisible ? 'translate-y-0' : 'translate-y-20',
      )}
      type="button"
      title="Back to top"
      onClick={scrollToTop}
    >
      <TbArrowUp size={24} color="white" />
    </button>
  );
};
