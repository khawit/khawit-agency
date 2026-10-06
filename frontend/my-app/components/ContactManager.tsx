"use client";

import { useEffect, useState } from "react";
import { ContactModal } from "./ui/ContactModal";

export function ContactManager() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href') === '#start-project') {
        e.preventDefault();
        setIsOpen(true);
        if (window.location.hash === '#start-project') {
          window.history.pushState('', document.title, window.location.pathname + window.location.search);
        }
      }
    };

    if (window.location.hash === '#start-project') {
      setIsOpen(true);
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
