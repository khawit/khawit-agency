"use client";

import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

interface ServiceItemsProps {
  items: string[];
}

export function ServiceItems({ items }: ServiceItemsProps) {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {items.map((item, i) => (
        <li 
          key={i} 
          className="service-item group relative flex items-center justify-between py-4 border-b border-white/10 hover:border-[#bc9f70]/50 transition-colors duration-300 cursor-default"
        >
          <div className="flex items-center gap-4">
            <span className="text-[#a8aeb5] text-xs font-mono group-hover:text-[#d8c29d] transition-colors">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-[#f0ece3] text-sm md:text-base font-medium group-hover:text-[#bc9f70] transition-colors">
              {item}
            </span>
          </div>
          <FiCheckCircle className="text-[#a8aeb5] group-hover:text-[#bc9f70] transition-colors transform group-hover:scale-110 duration-300" />
        </li>
      ))}
    </ul>
  );
}
