'use client';

import { useEffect } from 'react';

export const TempScrollToTopFix: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return null;
};
