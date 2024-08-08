import { z } from 'zod';

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'name must be at least 2 characters.',
    })
    .max(30, {
      message: 'name must not be longer than 30 characters.',
    }),
});

export type IUpdateProfilePayload = z.infer<typeof updateProfileSchema>;
