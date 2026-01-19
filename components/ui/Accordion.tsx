"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full py-6 flex items-center justify-between text-left group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-navy pr-8 group-hover:text-navy-light transition-colors">
              {item.question}
            </span>
            {openIndex === index ? (
              <Minus className="w-4 h-4 text-charcoal-light flex-shrink-0" />
            ) : (
              <Plus className="w-4 h-4 text-charcoal-light flex-shrink-0" />
            )}
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${
              openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-6 text-charcoal-light leading-relaxed pr-12">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
