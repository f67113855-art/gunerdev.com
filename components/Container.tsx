import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  className?: string;
  children: ReactNode;
};

export function Container<T extends ElementType = 'div'>({
  as,
  className,
  children,
}: ContainerProps<T>) {
  const Component = (as ?? 'div') as ElementType;
  return <Component className={cn('container', className)}>{children}</Component>;
}
