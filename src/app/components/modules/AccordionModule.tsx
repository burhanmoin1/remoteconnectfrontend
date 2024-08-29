// AccordionItem.tsx
import React,  { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AccordionItemProps {
  index: number;
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onToggle: (index: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  title,
  content,
  isActive,
  onToggle,
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        itemRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
        // Clean up the title and update the URL
        const formattedTitle = title
          .replace(/^[0-9]+\.\s*/, '') // Remove leading numbers and periods (e.g., "1. ")
          .replace(/\s+/g, '-').toLowerCase() // Replace spaces with hyphens and convert to lowercase
          .replace(/[^\w-]+/g, ''); // Remove any characters that are not alphanumeric or hyphens
        window.history.replaceState(null, '', `#${formattedTitle}`);
      }, 300); // Ensure this delay matches your animation duration
    }
  }, [isActive, title]);

  return (
    <div ref={itemRef} className="border border-gray-300 rounded-md">
      <button
        onClick={() => onToggle(index)}
        className={`flex justify-between w-full p-4 text-black text-left text-lg md:text-xl lg:text-2xl font-medium focus:outline-none ${
          isActive ? 'bg-[#1F2B5F] text-white' : 'bg-white'
        }`} 
      >
        {title}
        <span>{isActive ? '-' : '+'}</span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-4 text-black">{content}</div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
