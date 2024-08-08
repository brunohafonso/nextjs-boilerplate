import {
  AppWindow,
  Cog,
  Home,
  MessageCircleQuestion,
  Receipt,
  Speech,
  User,
} from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { NavLink } from './components/NavLink';

const menuLinks = [
  {
    label: 'Dashboard',
    href: '/dashboard/home',
    icon: Home,
  },
  {
    label: 'Users',
    href: '/dashboard/users',
    icon: User,
  },
  {
    label: 'Plans',
    href: '/dashboard/plans',
    icon: Receipt,
  },
];

const usefulLinks = [
  {
    label: 'Support',
    href: '/dashboard/support',
    icon: Speech,
  },
  {
    label: 'Faq',
    href: '/dashboard/faq',
    icon: MessageCircleQuestion,
  },
];

export const Sidebar = () => {
  return (
    <div className="hidden w-14 flex-col gap-5 border-r  pb-4 md:flex lg:w-72 ">
      <div className="flex h-16 items-center justify-center gap-3 border-b px-2 lg:justify-start lg:px-4">
        <AppWindow className="size-5 text-primary" />
        <span className="hidden text-lg font-semibold uppercase -tracking-widest lg:block">
          NEXTJS-BOILERPLATE
        </span>
      </div>
      <nav className="block px-2 lg:hidden lg:px-4">
        <ul className="flex flex-col gap-2">
          {menuLinks.map((link) => {
            return (
              <TooltipProvider key={link.label}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <li>
                      <NavLink href={link.href}>
                        <link.icon className="size-5 shrink-0" />
                      </NavLink>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </ul>
      </nav>
      <nav className="hidden px-2 lg:block lg:px-4">
        <ul className="flex flex-col gap-2">
          {menuLinks.map((link) => {
            return (
              <li key={link.label}>
                <NavLink href={link.href}>
                  <link.icon className="size-5 shrink-0" />
                  <span className="hidden lg:block">{link.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <footer className="mt-auto flex flex-col gap-10 px-2 lg:hidden lg:px-4">
        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-2">
            {usefulLinks.map((link) => {
              return (
                <TooltipProvider key={link.label}>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <li>
                        <NavLink href={link.href}>
                          <link.icon className="size-5 shrink-0" />
                        </NavLink>
                      </li>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </ul>
        </div>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div>
                <NavLink href="/dashboard/settings/profile">
                  <Cog className="size-5 shrink-0" />
                </NavLink>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </footer>
      <footer className="mt-auto hidden flex-col gap-10 px-2 lg:flex lg:px-4">
        <div className="flex flex-col gap-3">
          <span className="hidden pl-2 text-sm font-semibold lg:block">
            Useful links
          </span>
          <ul className="flex flex-col gap-2">
            {usefulLinks.map((link) => {
              return (
                <li key={link.label}>
                  <NavLink href={link.href}>
                    <link.icon className="size-5 shrink-0" />
                    <span className="hidden lg:block">{link.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <NavLink href="/dashboard/settings/profile">
          <Cog className="size-5 shrink-0" />
          <span className="hidden lg:block">Settings</span>
        </NavLink>
      </footer>
    </div>
  );
};
