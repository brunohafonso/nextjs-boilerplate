import { ThemeToggle } from '@/components/ThemeToggle';
import { Separator } from '@/components/ui/separator';

import { SidebarMobile } from '../SidebarMobile/SidebarMobile';
import { AccountMenu } from './components/AccountMenu';

export const Header = () => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <SidebarMobile />
      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle />
        <Separator orientation="vertical" className="h-8" />
        <AccountMenu />
      </div>
    </div>
  );
};
