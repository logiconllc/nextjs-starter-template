'use client';

import { Button } from '@/ui/button';
import React from 'react';

const Buttons = () => (
  <>
    <div className="my-3">
      <Button onClick={() => console.log('Default Button Clicked')}>Default Button</Button>
    </div>
    <div className="my-3">
      <Button intent="primary" onClick={() => console.log('Primary Button Clicked')}>
        Primary Button
      </Button>
    </div>
    <div className="my-3">
      <Button intent="secondary" onClick={() => console.log('Secondary Button Clicked')}>
        Secondary Button
      </Button>
    </div>
  </>
);

export default Buttons;
