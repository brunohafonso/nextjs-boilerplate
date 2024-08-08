import {
  Home,
  MessageCircleQuestion,
  Receipt,
  Speech,
  User,
} from 'lucide-react';

export const menuLinks = [
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

export const usefulLinks = [
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
