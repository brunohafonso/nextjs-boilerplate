import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface INextAuthSessionProviderProps {
  children: ReactNode;
}

export const NextAuthSessionProvider = ({
  children,
}: INextAuthSessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
