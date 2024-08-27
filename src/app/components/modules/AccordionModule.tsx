// AccordionItem.tsx
import React from 'react';
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

  return (
    <div className="border border-gray-300 rounded-md">
      <button
        onClick={() => onToggle(index)}
        className="flex justify-between w-full p-4 text-black text-left text-lg md:text-xl lg:text-xl font-medium focus:outline-none"
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
