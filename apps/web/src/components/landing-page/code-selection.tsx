"use client"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CustomAccordionItem from '@/components/ui/custom-accordion-item';
import { useState } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import {AccordionData,AccordionDataItemType} from '@/config/code-selection-items-config'



const CodeSelection = () => {

 

  const [currentStep, setCurrentStep] = useState<number>(0);


  return (
    <div 
    // className="flex flex-col gap-2 lg:flex-row sm:gap-4 mt-2"
    className='grid lg:grid-cols-2 mt-6 items-center gap-5 md:gap-5 xl:gap-32 grid-cols-1 '
    >
          <div className="w-full m-2  max-w-full relative rounded-lg">
            <p className='absolute top-0 ml-1 border-b border-r rounded-br-md pr-2 p-1 font-medium border-gray-800 left-0 text-[#4FFA7B]/70 '>{AccordionData[currentStep].fileName}</p>
            <SyntaxHighlighter 
            language="tsx" 
            style={nightOwl}
            customStyle={{
              borderRadius: '0.5rem',
              overflow: 'auto',        
              paddingTop: '1rem',
              height:'30rem',
              textAlign: 'left',
              fontSize: '0.8rem',
              msOverflowStyle: 'none',  // IE and Edge
              scrollbarWidth: 'none',   // Firefox
              // '&::-webkit-scrollbar': { // Chrome, Safari and Opera
              //   display: 'none'
              // },
                }}
                
                >
              {AccordionData[currentStep].codeString}
            </SyntaxHighlighter>

            <BorderBeam size={250} duration={12} colorFrom="#d4921e" colorTo="#d4921e" delay={9}/>

          </div>

          <div className="flex flex-col gap-4">
            <p className="text-left max-w-sm text-xl md:text-xl lg:text-2xl xl:text-4xl">Follow these steps to add and use the API</p>
            <div className='w-full max-w-full'>
              {AccordionData.map((item : AccordionDataItemType,index : number ) => (
                <CustomAccordionItem
                doc_link={item.doc_link}
                accordionContent={item.content}
                accordionTitle={item.title}
                isOpen={currentStep === item.index}
                onClick={() => setCurrentStep(item.index)}
                key={index}
                />
              ))}
            </div>
          </div>

    </div>
    
  )
}

export default CodeSelection