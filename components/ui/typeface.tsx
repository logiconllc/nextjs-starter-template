import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const H1 = ({ children, className, ...props }: Props) => {
  return (
    <h1
      className={cn("text-xl sm:text-2xl md:text-3xl lg:text-4xl", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...props }: Props) => {
  return (
    <h2
      className={cn("text-lg sm:text-xl md:text-2xl lg:text-3xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, ...props }: Props) => {
  return (
    <h3
      className={cn("text-base sm:text-lg md:text-xl lg:text-2xl", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className, ...props }: Props) => {
  return (
    <h4
      className={cn("text-sm sm:text-base md:text-lg lg:text-xl", className)}
      {...props}
    >
      {children}
    </h4>
  );
};

export const H5 = ({ children, className, ...props }: Props) => {
  return (
    <h5
      className={cn("text-xs sm:text-sm md:text-base lg:text-lg", className)}
      {...props}
    >
      {children}
    </h5>
  );
};

export const H6 = ({ children, className, ...props }: Props) => {
  return (
    <h6
      className={cn("text-2xs sm:text-xs md:text-sm lg:text-base", className)}
      {...props}
    >
      {children}
    </h6>
  );
};
