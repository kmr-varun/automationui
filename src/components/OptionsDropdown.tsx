"use client";
import React, { useState } from 'react';
import { Add } from '@carbon/icons-react';
interface OptionsDropdown {
  title: string;
  options: any;
  onSelect: (option: string) => void;
}

const OptionsDropdown: React.FC<OptionsDropdown> = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left">
      <button
        className="flex items-center justify-center w-full rounded-xl  px-8 py-3 bg-[#19191B] text-sm font-medium text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Add size={30} className="mr-2" />
        {title}
      </button>


      {isOpen && (
        <div className="origin-center absolute mt-4 w-full rounded-lg z-10 shadow-lg bg-[#242428]">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {Object.keys(options).map((key) => (
              <div key={key}>
                <div className="px-4 py-2 text-[#777777] font-bold text-xs">{key?.toUpperCase()}</div>
                {options[key].map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(option)}
                    className="w-full text-left px-6 py-4 text-white border-b-[1px] border-[#39393A] text-sm hover:bg-[#19191B]"
                    role="menuitem"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default OptionsDropdown;


