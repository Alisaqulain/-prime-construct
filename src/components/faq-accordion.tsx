"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        return (
          <div
            key={item.question}
            className={clsx(
              "overflow-hidden rounded-2xl border bg-white/[0.03] backdrop-blur-sm transition",
              isOpen ? "border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/10" : "border-white/10 hover:border-white/20"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-white md:text-base">{item.question}</span>
              <ChevronDown
                size={18}
                className={clsx("shrink-0 text-[#D4AF37] transition-transform", isOpen && "rotate-180")}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-white/75">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
