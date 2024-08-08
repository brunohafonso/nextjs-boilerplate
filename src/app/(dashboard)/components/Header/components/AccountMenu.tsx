'use client';

import { CreditCard, LogOut, User2 } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { getNameInitials } from '@/lib/getNameInitials';

export const AccountMenu = () => {
  const { status, data } = useSession();

  const isLoading = status !== 'authenticated';

  const handleSignOut = () => {
    signOut({
      redirect: true,
      callbackUrl: '/auth/sign-in',
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer select-none" asChild>
        {isLoading ? (
          <Skeleton className="size-10 rounded-md" />
        ) : (
          <Avatar className="rounded-md">
            <AvatarImage
              src={data?.user?.image || ''}
              alt={data?.user?.name || ''}
            />
            <AvatarFallback className="rounded-md">
              {getNameInitials(data?.user?.name)}
            </AvatarFallback>
          </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span className="capitalize">{data?.user?.name}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {data?.user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <User2 className="mr-2 size-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <CreditCard className="mr-2 size-4" />
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          <LogOut className="mr-2 size-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
