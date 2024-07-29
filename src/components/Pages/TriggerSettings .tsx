import React from 'react';

import { AddFilled } from '@carbon/icons-react'; // Adjust import path as needed
import ConditionDropdown from '../ConditionDropdown';
import IconButton from '../IconButton';

interface TriggerSettingsProps {
  dropdownOptions: { [key: string]: any }; // Adjust type if needed
  handleSelect: (selectedOption: string) => void;
}

const TriggerSettings: React.FC<TriggerSettingsProps> = ({ dropdownOptions, handleSelect }) => {
  return (
    <div className='p-8'>
      <div className='text-xl text-[#848694] my-4'>Trigger Settings</div>
      <div className='text-3xl text-white my-2'>
        When a Status changes from <span className='text-[#4E4E58]'>something</span> to <span className='text-[#4E4E58]'>something</span>
      </div>
      <div className='text-[#848694] text-[15px]'>The trigger will fire when a status is updated</div>
      <div className='my-16'>
        <div className='text-white my-2 text-base'>Conditions</div>
        <div className='flex gap-4 items-center'>
          <div className='py-3 px-6 bg-[#35363A] rounded-xl w-32 text-center'>Where</div>
          <ConditionDropdown
            title="Status"
            options={dropdownOptions}
            onSelect={handleSelect}
          />
          <ConditionDropdown
            title="Changes"
            options={dropdownOptions}
            onSelect={handleSelect}
          />
        </div>
        <div className='py-8 mx-4'>
          <div className='flex items-center'>
            <div className='mx-8'>From</div>
            <ConditionDropdown
              title="Contacted"
              options={dropdownOptions}
              onSelect={handleSelect}
              width="w-72"
            />
          </div>
          <div className='flex my-8 items-center'>
            <div className='mx-8'>From</div>
            <ConditionDropdown
              title="Proposal"
              options={dropdownOptions}
              onSelect={handleSelect}
              width="w-72"
            />
          </div>
          <div className='my-4 mx-8'>
            <IconButton label="Add Conditions" Icon={AddFilled} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriggerSettings;
