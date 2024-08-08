import { z } from 'zod';

export const AuthFormSchema = z.object({
  email: z.string().email(),
});

export type IAuthFormPayload = z.infer<typeof AuthFormSchema>;
