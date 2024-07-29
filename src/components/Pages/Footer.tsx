'use client';
import React from 'react';
import Button from '@/components/Button';

const Footer = () => (
  <div className='space-x-4 absolute right-10 my-2 mx-8'>
    <Button
      text="Cancel"
      variant="primary"
      onClick={() => console.log('Save Cancel')}
    />
    <Button
      text="Save"
      variant="primary"
      onClick={() => console.log('Save clicked')}
    />
    <Button
      text="Save and Apply"
      variant="secondary"
      onClick={() => console.log('Save and Apply clicked')}
    />
  </div>
);

export default Footer;
