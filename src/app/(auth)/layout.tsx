import { AppWindow } from 'lucide-react';
import { ReactNode } from 'react';

interface IAuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <>
      <div className="container relative grid min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-secondary/50 p-10 text-foreground dark:border-r lg:flex">
          <div className="absolute inset-0 -z-10 size-full bg-auth-hero bg-cover bg-center bg-no-repeat blur-sm grayscale" />
          <div className="relative z-20 flex items-center gap-3 text-lg font-medium">
            <AppWindow className="size-5 text-primary" />
            <span className="text-lg font-semibold uppercase -tracking-widest">
              NEXTJS-BOILERPLATE
            </span>
          </div>
          <footer className="relative z-20 mt-auto">
            <p className="text-sm text-foreground">
              All rights reserved &copy; NEXTJS-BOILERPLATE{' '}
              {new Date().getFullYear()}
            </p>
          </footer>
        </div>
        <div className="flex h-full flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
}
