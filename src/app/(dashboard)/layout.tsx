import { ReactNode } from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

interface IDashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="px-4 py-10 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
