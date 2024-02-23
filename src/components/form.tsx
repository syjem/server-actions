'use client';

import { Input } from '@/components/ui/input';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formAction } from '@/lib/actions';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type UserSchemaType, userSchema } from '@/types/user-schema';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Form = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserSchemaType> = async (data) => {
    await formAction(data);
    toast('Data has been successfully submitted.');
    reset();
  };

  return (
    <Card className="max-w-md mx-auto mt-20 border-none pt-5 shadow-xl">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2.5">
            <Input
              className="border-gray-300"
              aria-label="Name"
              label="Name"
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              className="border-gray-300"
              aria-label="Email"
              label="Email"
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              className="border-gray-300"
              aria-label="Email"
              label="Password"
              error={errors.password?.message}
              {...register('password')}
            />
            <Button
              type="submit"
              aria-disabled={isSubmitting}
              disabled={isSubmitting}>
              {isSubmitting && (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              )}
              {isSubmitting ? 'Submitting' : 'Submit'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
