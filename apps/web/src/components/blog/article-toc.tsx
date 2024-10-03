"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

type TOCItemType = {
    title: React.ReactNode,
    url: string,
    depth: number,
}

// Custom hook to track the active section
const useActiveSection = (tableOfContents: TOCItemType[], offset = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            let current = '';

            for (const item of tableOfContents) {
                const element = document.getElementById(item.url.slice(1));
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    if (top - offset < 0) {
                        current = item.url;
                    } else {
                        break;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, [tableOfContents, offset]);

    return activeSection;
};

const ArticleTOC = ({tableOfContents} : {tableOfContents: TOCItemType[]}) => {
    const activeSection = useActiveSection(tableOfContents);

    return (
        <ul className="relative flex flex-col gap-1 overflow-hidden">
            {tableOfContents.length > 0 && 
                tableOfContents.map((item : TOCItemType, index : number) => (
                    <li key={`${item.url}`}>
                        <Link
                            href={`${item.url}`}
                            data-level={item.depth}
                            className={cn(
                                "transition-all duration-300 ease-in-out transform hover:text-white",
                                {
                                    "text-md font-medium mt-4 text-white/65 truncate":
                                        item.depth === 1 || item.depth === 2,
                                    "text-sm ml-4 leading-8 text-white/65 truncate":
                                        item.depth === 3 || item.depth === 4,
                                    "font-bold text-white scale-105": activeSection === item.url,
                                }
                            )}
                          
                        >
                            {item.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default ArticleTOC