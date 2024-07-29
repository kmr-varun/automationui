import { ChevronDown } from '@carbon/icons-react';
import React, { useState } from 'react';

interface ConditionDropdown {
  title: string;
  options: any;
  onSelect: (option: string) => void;
  width?: string; 
  bgColor?: string;
  borderColor?: string;
}

const ConditionDropdown: React.FC<ConditionDropdown> = ({
  title,
  options,
  onSelect,
  width = 'w-56',
  bgColor = '#242428',
  borderColor = '#848694',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left">
      <button
        className={`flex items-center justify-between rounded-xl mx-auto px-8 py-3 ${width} bg-transparent text-sm font-medium text-white focus:outline-none border`}
        style={{ borderColor, backgroundColor: bgColor }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div
          className="origin-center absolute mt-4 w-full rounded-lg shadow-lg"
          
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {Object.keys(options).map((key) => (
              <div key={key}>
                <div className="px-4 py-2 text-[#777777] font-bold text-xs">{key?.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConditionDropdown;
