import { useEffect } from 'react';

export default function AnimatedTitle() {
  useEffect(() => {
    const titles = ['anthony.lsc', '< anthony.lsc />', '$ anthony.lsc', '{ anthony.lsc }', '[ anthony.lsc ]'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      document.title = titles[currentIndex];
      currentIndex = (currentIndex + 1) % titles.length;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
