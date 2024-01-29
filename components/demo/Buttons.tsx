'use client';

import { ArrowIcon } from '@/icons';
import Button from '@/components/shared-components/button';
import React from 'react';

const Buttons = () => (
  <>
    <div className="my-3">
      <Button onClick={() => {}}>Default Button</Button>
    </div>
    <div className="my-3">
      <Button intent="primary" onClick={() => {}}>
        <span className="flex">
          <span className="mr-2 flex items-center">Primary Button</span>
          <span className="flex items-center">
            <ArrowIcon className="w-5 h-5" />
          </span>
        </span>
      </Button>
    </div>
    <div className="my-3">
      <Button intent="secondary" onClick={() => {}}>
        Secondary Button
      </Button>
    </div>
  </>
);

export default Buttons;
