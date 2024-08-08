'use client';

import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { updateProfile } from '@/actions/updateProfile.action';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { zodResolver } from '@hookform/resolvers/zod';

import { IUpdateProfilePayload, updateProfileSchema } from './schemas';

export const ProfileForm = () => {
  const { status, data, update } = useSession();
  const form = useForm<IUpdateProfilePayload>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: data?.user?.name || '',
    },
  });

  const {
    formState: { isSubmitting, isDirty },
  } = form;

  useEffect(() => {
    if (status === 'authenticated') {
      form.setValue('name', data?.user?.name || '');
    }
  }, [status, data, form]);

  async function onSubmit({ name }: IUpdateProfilePayload) {
    try {
      await updateProfile({ name });
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Error while updating your profile', {
        description:
          'Try again later, if the problem persists contact the support',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                {!(status === 'authenticated') ? (
                  <Skeleton className="h-10" />
                ) : (
                  <Input
                    placeholder="your name"
                    disabled={isSubmitting}
                    {...field}
                  />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="flex items-center gap-2"
          disabled={!(status === 'authenticated') || isSubmitting || !isDirty}
        >
          {isSubmitting && <Loader2 className="size-4 animate-spin" />}
          Update profile
        </Button>
      </form>
    </Form>
  );
};
