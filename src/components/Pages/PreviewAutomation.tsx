'use client';
import React from 'react';
import StatusCard from '@/components/StatusCard';
import OptionsDropdown from '@/components/OptionsDropdown';

interface PreviewAutomationProps {
  dropdownOptions: { trigger: string[]; integration: string[] };
  handleSelect: (option: string) => void;
  triggerLabel1: string;
  triggerStatusLabel1: string;
  actionLabel1: string;
  actionStatusLabel1: string;
  actionLabel2: string;
  actionStatusLabel2: string;
}

const PreviewAutomation: React.FC<PreviewAutomationProps> = ({
  dropdownOptions,
  handleSelect,
  triggerLabel1,
  triggerStatusLabel1,
  actionLabel1,
  actionStatusLabel1,
  actionLabel2,
  actionStatusLabel2,
}) => (
  <div className='basis-3/4 bg-[#0B0B0C] rounded-[12px] h-full flex flex-1 border-[1px] border-[#262525] items-center justify-center p-8'>
    <div className='w-full max-w-screen-lg flex flex-col gap-8 mx-auto'>
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='text-3xl'>When</h2>
          <p className='text-xl text-[#848694]'>this happens</p>
        </div>
        <StatusCard
          triggerLabel={triggerLabel1}
          statusLabel={triggerStatusLabel1}
          barColor="#95A4FC"
        />
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-8'>
          <div>
            <h2 className='text-3xl'>Then</h2>
            <p className='text-xl text-[#848694]'>do this</p>
          </div>
          <StatusCard
            triggerLabel={actionLabel1}
            statusLabel={actionStatusLabel1}
            barColor="#BAEDBD"
          />
          <OptionsDropdown
            title="Add Action"
            options={dropdownOptions}
            onSelect={handleSelect}
          />
        </div>
        <div className='flex flex-col gap-8'>
          <div>
            <h2 className='text-3xl'>And also</h2>
            <p className='text-xl text-[#848694]'>do this</p>
          </div>
          <StatusCard
            triggerLabel={actionLabel2}
            statusLabel={actionStatusLabel2}
            barColor="#B1E3FF"
          />
          <OptionsDropdown
            title="Add Action"
            options={dropdownOptions}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  </div>
);

export default PreviewAutomation;
