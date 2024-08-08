import { AppWindow, Cog, Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

import { menuLinks, usefulLinks } from '../../sideBarConfig';
import { NavLink } from '../Sidebar/components/NavLink';

export const SidebarMobile = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className="cursor-pointer" asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex w-72 flex-col gap-5 overflow-y-auto"
        >
          <SheetHeader className="flex flex-row items-center gap-3 space-y-0">
            <AppWindow className="size-5 text-primary" />
            <span className="text-lg font-semibold uppercase -tracking-widest">
              NEXTJS-BOILERPLATE
            </span>
          </SheetHeader>
          <nav>
            <ul className="flex flex-col gap-2">
              {menuLinks.map((link) => {
                return (
                  <li key={link.label}>
                    <NavLink className="justify-start" href={link.href}>
                      <link.icon className="size-5 shrink-0" />
                      <span className="">{link.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <footer className="mt-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="pl-2 text-sm font-semibold">Useful links</span>
              <ul className="flex flex-col gap-2">
                {usefulLinks.map((link) => {
                  return (
                    <li key={link.label}>
                      <NavLink className="justify-start" href={link.href}>
                        <link.icon className="size-5 shrink-0" />
                        <span>{link.label}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <NavLink
              className="m-auto justify-start"
              href="/dashboard/settings"
            >
              <Cog className="size-5 shrink-0" />
              <span>Settings</span>
            </NavLink>
          </footer>
        </SheetContent>
      </Sheet>
    </div>
  );
};
