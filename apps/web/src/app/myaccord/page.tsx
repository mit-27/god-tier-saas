"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionItems = [
  { accordionTitle: 'getting-started', accordionContent: ' for item 1' },
  { accordionTitle: 'about', accordionContent: ' for item 2' },
  { accordionTitle: 'section', accordionContent: ' for item 3' },
];

type accordionItemsType = {
  accordionTitle: string;
  accordionContent: string;
}

const AccordionItem = ({accordionTitle , accordionContent, isOpen, onClick } : { accordionTitle: string, accordionContent: string, isOpen: boolean, onClick: () => void }) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b ${isOpen ? 'border-blue-500' : ''}`}>
      <button
        className={`w-full font-semibold text-[1.2rem] text-zinc-950 dark:text-neutral-400 hover:dark:text-neutral-50 text-left py-2 px-2 transition-colors duration-300 ${
          isOpen ? 'dark:text-zinc-50' : ''
        }`}
        onClick={onClick}
      >
        {accordionTitle}
      </button>

      {/* Animate the content's entry and exit */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="text-left text-wrap dark:text-neutral-400 text-[0.9rem] px-3 overflow-hidden">{accordionContent}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items } : { items: accordionItemsType[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index : number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {items.map((item : accordionItemsType, index : number) => (
        <AccordionItem
          key={index}
          accordionTitle={item.accordionTitle}
          accordionContent={item.accordionContent}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

const  page = () => {
  return (
    <div className='max-w-xl'>
      <Accordion items={accordionItems} />
    </div>
  )
}

export default page
