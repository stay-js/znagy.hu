import { useEffect, useState } from 'react';
import { TbArrowUp } from 'react-icons/tb';

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScroll = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      title="Back to top"
      className={`${
        isVisible ? 'translate-y-0' : 'translate-y-20'
      } fixed bottom-6 right-6 z-40 rounded-full bg-neutral-700 p-2 transition-all duration-200 hover:bg-neutral-600`}
      onClick={scrollToTop}
    >
      <TbArrowUp size={24} color="white" />
    </button>
  );
};
export default ScrollTop;