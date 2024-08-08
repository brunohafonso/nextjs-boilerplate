import { ReactNode } from 'react';

import { Separator } from '@/components/ui/separator';

import { Sidebar } from './settings/components/Sidebar';

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/dashboard/settings/profile',
  },
  {
    title: 'Integrations',
    href: '/dashboard/settings/integrations',
  },
];

interface ISettingsProps {
  children: ReactNode;
}

export default function Settings({ children }: ISettingsProps) {
  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings.</p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <Sidebar items={sidebarNavItems} />
        </aside>
        <div className="flex-1  lg:max-w-2xl">{children}</div>
      </div>
    </>
  );
}
