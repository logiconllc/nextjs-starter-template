This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## CVA

### Installation

Install the necessary packages in your Next.js project:

```bash
npm install class-variance-authority
```

## Example Usage

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

Create a JSX component and put JSX as per your requirements.

To read CVA doc, Click [Here](https://cva.style/docs)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
