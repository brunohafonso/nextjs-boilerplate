'use client';

import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import { SocialLoginProviders } from '../../../components/SocialLoginProviders';
import { AuthFormSchema } from './schemas';
import type { IAuthFormPayload } from './schemas';

interface IAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthForm({ className, ...props }: IAuthFormProps) {
  const form = useForm<IAuthFormPayload>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit({ email }: IAuthFormPayload) {
    try {
      await signIn('nodemailer', {
        email,
        redirect: false,
      });

      toast.success('Magic Link Sent', {
        description: 'Check your email for the magic link to login',
        action: {
          label: 'resend',
          onClick: () => {
            onSubmit({ email });
          },
        },
      });
    } catch (error) {
      toast.error('Error', {
        description: 'An error occurred. Please try again.',
      });
    }
  }

  async function handleSignInWithProvider(
    provider: 'google' | 'github' | 'linkedin',
  ) {
    await signIn(provider, {
      callbackUrl: '/dashboard',
    });
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="text-foreground"
          >
            {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
            Sign In with Email
          </Button>
        </form>
      </Form>
      <SocialLoginProviders isLoading={isSubmitting} />
    </div>
  );
}
