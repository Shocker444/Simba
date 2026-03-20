import React from 'react';

export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMenu?: () => void) => {
  e.preventDefault();
  const id = href.replace('#', '');
  const element = document.getElementById(id);
  
  if (element) {
    const offset = 80; // Height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else if (href === '#') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  if (closeMenu) closeMenu();
};
