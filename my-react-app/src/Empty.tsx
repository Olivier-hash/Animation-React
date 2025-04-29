import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData } from './CustomForm.types';
import { validationSchema } from './validationSchema';

const CustomForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name:</label>
        <input {...register('name')} />
        <p className="text-red-500">{errors.name?.message}</p>
      </div>

      <div>
        <label>Email:</label>
        <input {...register('email')} />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>

      <div>
        <label>Age:</label>
        <input type="number" {...register('age')} />
        <p className="text-red-500">{errors.age?.message}</p>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
