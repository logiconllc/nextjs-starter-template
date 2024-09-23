import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const H1 = ({ children, className, ...props }: Props) => {
  return (
    <h1
      className={cn("lg:text-4xl md:text-3xl sm:text-2xl text-xl", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...props }: Props) => {
  return (
    <h2
      className={cn("lg:text-3xl md:text-2xl sm:text-xl text-lg", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, ...props }: Props) => {
  return (
    <h3
      className={cn("lg:text-2xl md:text-xl sm:text-lg text-base", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className, ...props }: Props) => {
  return (
    <h4
      className={cn("lg:text-xl md:text-lg sm:text-base text-sm", className)}
      {...props}
    >
      {children}
    </h4>
  );
};

export const H5 = ({ children, className, ...props }: Props) => {
  return (
    <h5
      className={cn("lg:text-lg md:text-base sm:text-sm text-xs", className)}
      {...props}
    >
      {children}
    </h5>
  );
};

export const H6 = ({ children, className, ...props }: Props) => {
  return (
    <h6
      className={cn("lg:text-base md:text-sm sm:text-xs text-2xs", className)}
      {...props}
    >
      {children}
    </h6>
  );
};
