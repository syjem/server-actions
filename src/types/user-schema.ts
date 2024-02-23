import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().toLowerCase(),
  password: z.string().toLowerCase().min(6),
});

export type UserSchemaType = z.infer<typeof userSchema>;
