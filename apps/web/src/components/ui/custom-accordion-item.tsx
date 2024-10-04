"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomAccordionItem = ({accordionTitle , accordionContent,doc_link, isOpen, onClick } : { accordionTitle: string, accordionContent: string, doc_link?: string, isOpen: boolean, onClick: () => void }) => {
    // const [isOpen, setIsOpen] = useState(false);
    return (
      <div className={`border-b ${isOpen ? 'border-[#d4921e]' : ''}`}>
        <button
          className={`w-full font-semibold text-[1.2rem] text-zinc-950 dark:text-neutral-400 hover:dark:text-neutral-50 text-left px-2 transition-all duration-300 ${
            isOpen ? 'dark:text-zinc-50' : 'py-2'
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
              <div className={`text-left text-wrap dark:text-neutral-400 text-[0.9rem] px-3 overflow-hidden ${isOpen ? 'pb-3' : 'py-2'}`}>{accordionContent} {doc_link && <a href={doc_link} target="_blank" className="text-xs text-white/50 underline underline-offset-4">{`[ Docs ]`}</a>}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  export default CustomAccordionItem