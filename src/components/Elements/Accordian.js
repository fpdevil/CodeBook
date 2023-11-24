import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

export const Accordian = ({ id, question, answer }) => {
    const [active, setActive] = useState(false);

    return (
        <div key={id} className="mb-4 last:mb-0">
            <button
                type="button"
                className="flex justify-between items-center p-5 w-full font-medium text-left rounded-xl border border-b-0 border-gray-200 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 bg-slate-100 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-gray-700 dark:focus:ring-blue-400"
                onClick={() => setActive(!active)}
            >
                <span>{question}</span>
                <svg
                    data-accordion-icon
                    className={`${active ? 'rotate-180' : 'rotate-0'} h-3 w-3 shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="#871F78"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                    />
                </svg>
            </button>
            <AnimatePresence initial={false}>
                {active && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                    >
                        <div className="pt-4 pb-2 mx-4 font-serif font-medium tracking-wider last:pb-0 text-md text-slate-600 dark:text-slate-300">{answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
