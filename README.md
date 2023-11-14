# Project Title

This is a Nextjs Starter Template.

## Table of Contents

- [Project Title](#project-title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Description

This is a starter template in nextjs 13 with app router. Eslint, Prettier and Husky is configured. Class variant authority is added to create reusable components. Icons library is added to create react icon components from SVG icons. 

## Installation

1. Clone this repository.
2. Install the necessary dependencies with:
   ``` npm install ```
3. Configure environment variables as needed.
4. Go to to icons folder and install necessary dependencies with: 
``` npm install ```

## Usage

1. Start the development server:
     ```npm run dev```
2. Access the application at `http://localhost:3000`.

## Features

- ### CVA
  CVA (Class Variant Authority) is used to create reusable components. 


  #### Example Usage

  To add component in `ui` folder, you need to follow these steps.

  - Create a file with component name like button.tsx in `ui` folder.
  - Add a code for Nextjs component like bellow example code.

  ```bash
  import React, { ReactNode } from 'react';
  import { cva, type VariantProps } from 'class-variance-authority';

  const button = cva(['text-white', 'rounded'], {
    variants: {
      intent: {
        primary: ['bg-blue-500', 'hover:bg-blue-600'],
        secondary: ['bg-gray-500', 'hover:bg-gray-600'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
      },
    },
    compoundVariants: [{ intent: 'primary', size: 'medium' }],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  });

  export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    children: ReactNode;
  }

  const Button: React.FC<IButtonProps> = ({className, intent, size, children, onClick, ...props}): ReactNode => (
    <button
      type="button"
      className={button({ intent, size, className })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  export default Button;
  ```

  There are 3 sections of this component.

  #### CVA Function Call

  Call function and assigned to button variable. cva function take two arguments (array of default class names and object conditional class names). second argument contains variant, compoundVariants and defaultVariants. You can add variants as per your requirements.

  #### Interface

  Create interface for component props.

  #### Component

  Create a TSX component and put TSX as per your requirements.

  To read CVA doc, Click [Here](https://cva.style/docs)

## Badges

[![Build Status](https://img.shields.io/travis/username/repo.svg)](https://travis-ci.org/username/repo)


## Code Examples

```javascript
const exampleCode = () => {
 // Your code here
};

