"use client";

import DynamicIconButton from '@/components/IconButton';
import ConditionDropdown from '@/components/ConditionDropdown';
import OptionsDropdown from '@/components/OptionsDropdown';
import StatusCard from '@/components/StatusCard';
import { AddFilled } from '@carbon/icons-react';
import React from 'react'
import Button from '@/components/Button';
import Footer from '@/components/Pages/Footer';
import automationData from './data.json';
import EmailForm from '@/components/Pages/EmailFormComponent';
import PreviewAutomation from '@/components/Pages/PreviewAutomation';


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
          
          <div className=' flex h-full'>
            <div className='flex flex-col h-full'>
              <div className='w-8 h-[32%] border-[1px] border-l-[#27282A] border-y-[#27282A] border-transparent'>
                <div className='w-full '></div>
              </div>
              <div className='w-8 h-72 border-[1px] border-l-[#27282A] border-y-[#27282A] border-transparent'>
                <div className='w-full '></div>
              </div>

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
        {/* //This is the right side initial component */}
        <div className='basis-3/4 bg-[#242428] rounded-[12px] h-full flex flex-1 items-center justify-center'>
        <div id='main' className='w-fit mx-auto'>

          <div className='text-xl text-[#848694] my-4'>Trigger Settings</div>
          <div className='text-3xl text-white my-2'>When a Status changes from <span className='text-[#4E4E58]'>something</span> to <span className='text-[#4E4E58]'>something</span></div>
          <div className='text-[#848694] text-[15px]'>The trigger will fire when a status is updated</div>
          <div className='my-16'>
            <div className='text-white my-2 text-base'>Conditions</div>
            <div className='flex gap-4 items-center'>
              <div className='py-3 px-6 bg-[#35363A] rounded-xl w-32 text-center '>Where</div>
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
                <div className='mx-8'>
                  From
                </div>
                <ConditionDropdown
                  title="Contacted"
                  options={dropdownOptions}
                  onSelect={handleSelect}
                  width="w-72"
                />

              </div>
              <div className='flex my-8 items-center'>
                <div className='mx-8'>
                  From
                </div>
                <ConditionDropdown
                  title="Proposal"
                  options={dropdownOptions}
                  onSelect={handleSelect}
                  width="w-72"
                />

              </div>

              <div className='my-4 mx-8'>
                <DynamicIconButton label="Add Conditions" Icon={AddFilled} />
              </div>

            </div>
          </div>
        </div>
      </div>

      

        {/* //This is the actionsetting component of right side which comes after initial component */}

        <div className='basis-3/4 bg-[#242428] rounded-[12px] h-full flex flex-1 items-center justify-center'>
        <div id='main' className='w-fit mx-auto'>

          <div className='text-xl text-[#848694] my-4'>Action Settings</div>
          <div className='text-3xl text-white my-2'>Send a follow Reminder</div>
          <div className='text-[#848694] text-[15px]'>The Action will fire when send a follow up reminder</div>
          <div className='my-12'>
            <div className='text-white my-2 text-base'>Conditions</div>
            <div className='flex gap-4 items-center'>
              <ConditionDropdown
                title="After"
                options={dropdownOptions}
                onSelect={handleSelect}
                width='w-32'
                bgColor='#35363A'
                borderColor='transparent'
              />
              <ConditionDropdown
                title="A Week"
                options={dropdownOptions}
                onSelect={handleSelect}
              />
              <ConditionDropdown
                title="Sent Date"
                options={dropdownOptions}
                onSelect={handleSelect}
              />
            </div>
            <div className='py-6'>
              <div className='my-4 '>
                <DynamicIconButton label="Add Conditions" Icon={AddFilled} />
              </div>
            </div>
          </div>



        </div>
      </div>

      {/* //This is the emailform of right side which comes after action setting component */}
        <div className='basis-3/4 bg-[#242428] rounded-[12px] h-full flex flex-1 items-center justify-center'>
          <div id='main' className='w-full mx-20'>
            <EmailForm />
          </div>
        </div>


        

      </div>
      <Footer />
    </div>

  )
}

export default HomePage