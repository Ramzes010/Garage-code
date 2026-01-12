"use client";

import { useState } from "react";

type Props = {
  question: string;
};

export default function FAQItem({ question }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        border-b
        border-[#DEE2E6]
        py-[1.3vw]
        cursor-pointer
      "
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">

        <span className="text-[0.94vw] text-[#393939]">
          {question}
        </span>

        {/* Plus → X */}
        <span
          className={`
            relative
            w-[1.25vw]
            h-[1.25vw]
            transition-transform
            duration-300
            ${open ? "rotate-45" : ""}
          `}
        >
          <span className="absolute inset-0 m-auto w-full h-[0.1vw] bg-[#ADB5BD]" />
          <span className="absolute inset-0 m-auto h-full w-[0.1vw] bg-[#ADB5BD]" />
        </span>

      </div>

      {/* Answer placeholder */}
      {open && (
        <div className="mt-[0.8vw] text-[0.83vw] text-[#868E96] max-w-[60vw]">
          {/* ТЕКСТ ТЫ ВСТАВИШЬ САМ */}
          Текст ответа будет здесь.
        </div>
      )}
    </div>
  );
}
