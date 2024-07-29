'use client';
import React from 'react';
import OptionsDropdown from '@/components/OptionsDropdown';
import StatusCard from '@/components/StatusCard';

interface InitialSettingProps {
  dropdownOptions: { trigger: string[]; integration: string[] };
  handleSelect: (option: string) => void;
}

const InitialSetting: React.FC<InitialSettingProps> = ({ dropdownOptions, handleSelect }) => (
  <div className='basis-1/4 flex  bg-[#0B0B0C] rounded-[12px] border-solid border-[1px] border-[#242428] flex flex-col p-8'>
    <div className='flex h-full'>
      <div className='flex flex-col h-full'>
        <div className='w-8 h-[32%] border-[1px] border-l-[#27282A] border-y-[#27282A] border-transparent'></div>
        <div className='w-8 h-72 border-[1px] border-l-[#27282A] border-y-[#27282A] border-transparent'></div>
      </div>
      <div className='flex-1'>
        <div>
          <span className='text-3xl'>When</span><br />
          <span className='text-xl text-[#848694]'>this happens</span>
          <div className="py-5">
            <OptionsDropdown
              title="Add Trigger"
              options={dropdownOptions}
              onSelect={handleSelect}
            />
          </div>
        </div>
        <StatusCard triggerLabel="Trigger" statusLabel="Status Changes" barColor="#95A4FC" />
        <div className='mt-8'>
          <span className='text-3xl'>Then</span><br />
          <span className='text-xl text-[#848694]'>do this</span>
          <div className="py-5">
            <StatusCard triggerLabel="Action" statusLabel="Send an email" barColor="#BAEDBD" />
            <div className='mt-5'>
              <OptionsDropdown
                title="Add Action"
                options={dropdownOptions}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
        <div className='my-0'>
          <span className='text-3xl'>And also</span><br />
          <span className='text-xl text-[#848694]'>do this</span>
          <div className="py-5">
            <StatusCard triggerLabel="Action" statusLabel="Send an email" barColor="#BAEDBD" />
            <div className='my-5'>
              <OptionsDropdown
                title="Add Action"
                options={dropdownOptions}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InitialSetting;
