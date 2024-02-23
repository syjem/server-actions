'use server';

import { type UserSchemaType } from '@/types/user-schema';

export const formAction = async (formData: UserSchemaType) => {
  const name = formData.name as string;
  const email = formData.email as string;
  const password = formData.password as string;
  console.log(formData);
};
