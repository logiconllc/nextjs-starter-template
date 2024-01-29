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

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  className,
  intent,
  size,
  children,
  onClick,
  ...props
}): ReactNode => (
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
