'use client';

import { ReactNode } from 'react';

import { queryClient } from '@/lib/reactQuery';
import { QueryClientProvider } from '@tanstack/react-query';

interface IProvidersProps {
  children: ReactNode;
}

export default function ReactQueryProvider({ children }: IProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
