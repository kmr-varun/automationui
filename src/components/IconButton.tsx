import React from 'react';
import { CarbonIconType } from '@carbon/icons-react';// Adjust the import based on your icon library

interface IconButton {
  label: string;
  Icon: CarbonIconType; // Use the correct type for your icons
  iconSize?: number;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButton> = ({
  label,
  Icon,
  iconSize = 20,
  className,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center justify-center w-fit rounded-xl px-6 py-2 bg-[#080808] border-[1px] border-[#4F4F4F] text-sm font-medium text-white focus:outline-none ${className}`}
      onClick={onClick}
    >
      <Icon style={{ fontSize: iconSize }} className="mr-2" />
      {label}
    </button>
  );
};


export default IconButton;
