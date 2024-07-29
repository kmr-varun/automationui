import React from 'react';
import OptionsDropdown from '../OptionsDropdown';
import StatusCard from '../StatusCard';


interface AutomationActionsProps {
  dropdownOptions: { [key: string]: string[] }; 
  handleSelect: (selectedOption: string) => void;
}

const AutomationActions: React.FC<AutomationActionsProps> = ({
  dropdownOptions,
  handleSelect
}) => {
  return (
    <div className='flex w-full max-w-screen-lg mx-auto gap-16 '>
      {/* "When" Block */}
      <div className='flex-1 flex items-center'>
        <div className='w-full'>
          <div className='my-4'>
            <span className='text-3xl'>When</span><br />
            <span className='text-xl text-[#848694]'>this happens</span>
          </div>
          <StatusCard 
            triggerLabel="Trigger" 
            statusLabel="Status Changes" 
            barColor="#95A4FC" 
          />
        </div>
      </div>

      {/* "Then" and "And also" Blocks */}
      <div className='flex-1 flex flex-col gap-20'>
        <div className='my-4 space-y-4'>
          <div className='my-4'>
            <span className='text-3xl'>Then</span><br />
            <span className='text-xl text-[#848694]'>do this</span>
          </div>
          <StatusCard 
            triggerLabel="Action" 
            statusLabel="Send an email" 
            barColor="#BAEDBD" 
          />
          <OptionsDropdown
            title="Add Action"
            options={dropdownOptions}
            onSelect={handleSelect}
          />
        </div>

        <div className='my-4 space-y-4'>
          <div className='my-4'>
            <span className='text-3xl'>And also</span><br />
            <span className='text-xl text-[#848694]'>do this</span>
          </div>
          <StatusCard 
            triggerLabel="Action" 
            statusLabel="Send a follow Reminder" 
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
  );
};

export default AutomationActions;
