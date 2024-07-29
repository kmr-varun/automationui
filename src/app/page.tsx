"use client";
import React from 'react'
import Footer from '@/components/Pages/Footer';
import EmailForm from '@/components/Pages/EmailFormComponent';
import AutomationSettingPanel from '@/components/Pages/AutomationSettingPanel';
import TriggerSettings from '@/components/Pages/TriggerSettings ';
import ActionSettings from '@/components/Pages/ActionSettings';
import AutomationActions from '@/components/Pages/AutomationActions';


const HomePage = () => {
  const dropdownOptions = {
    trigger: [
      'When a Record Matches a Condition',
      'Status changes from Contacted to Proposal',
      'When a Record is Updated',
      'When a Form is Submitted',
      'When a Webhook is Recieved',
      'At a Scheduled Time'
    ],
    integration: [
      'When a Form is Submitted',
      'When a Webhook is Recieved',
      'At a Scheduled Time'
    ]
  };


  const handleSelect = (option: string) => {
    console.log('Selected:', option);
  };

  return (
    <div className='w-screen h-screen bg-black text-white'>
      <div className='h-[92%] flex flex-row  p-4 gap-4 '>
        {/* This is the left side initial component  */}
        <div className='basis-1/4 flex  bg-[#0B0B0C] rounded-[12px] border-solid border-[1px] border-[#242428] flex flex-col p-8'>
          <AutomationSettingPanel dropdownOptions={dropdownOptions} handleSelect={handleSelect} />
        </div>

        {/* //This is the right side initial component */}
        <div className='basis-3/4 bg-[#242428] rounded-[12px] h-full flex flex-1 items-center justify-center'>
          <div id='main' className='w-fit mx-auto'>
            {/* Trigger Settings */}
            {/* <TriggerSettings dropdownOptions={{ dropdownOptions }} handleSelect={handleSelect} /> */}
            {/* Action Settings */}
            {/* <ActionSettings dropdownOptions={{dropdownOptions}} handleSelect={handleSelect} /> */}
            {/* email settings */}
            {/* <div id='main' className='w-full mx-20'>
              <EmailForm />
            </div> */}
            {/* Automation Steps */}
            <AutomationActions
              dropdownOptions={dropdownOptions}
              handleSelect={(selectedOption) => {
                console.log('Selected option:', selectedOption);
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default HomePage