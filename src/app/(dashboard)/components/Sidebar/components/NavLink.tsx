'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface INavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost';
}

export const NavLink = ({
  children,
  className,
  variant = 'ghost',
  ...props
}: INavLinkProps) => {
  const pathname = usePathname();

  const isLinkActive = pathname.endsWith(props.href.toString());

  return (
    <Link
      {...props}
      className={cn(
        buttonVariants({ variant, size: 'sm' }),
        'w-full lg:justify-start gap-2 px-2 text-muted-foreground',
        {
          'text-foreground': isLinkActive,
          'bg-secondary': isLinkActive,
        },
        className,
      )}
    >
      {children}
    </Link>
  );
};
