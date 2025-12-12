import React from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id, style }) => {
  return (
    <section
      id={id}
      style={style}
      className={cn(
        // Common styles
        "min-h-screen w-full flex flex-col justify-center items-center relative",
        // Padding is essential to prevent content from being clipped on small screens when centered
        "py-24",
        // Ensure background elements don't overflow horizontally
        "overflow-x-clip",
        className
      )}
    >
      {children}
    </section>
  );
};
