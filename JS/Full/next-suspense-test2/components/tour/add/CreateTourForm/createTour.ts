import axios, { AxiosError } from 'axios';
import router, { useRouter } from 'next/router';
import { FC } from 'react';
import { useForm, UseFormSetError } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { z } from 'zod';

import { CreateTourDto, TourEntity } from '../../../../__generated__';

const createTour = (newTour: CreateTourDto) => {
  return axios.post<TourEntity>('http://localhost:4000/tours', newTour);
};

export const useCreateTour = (setError: UseFormSetError<CreateTourDto>) => {
  return useMutation((newTour: CreateTourDto) => createTour(newTour), {
    onSuccess: (data) => {
      // queryClient.setQueryData<TourEntity[]>(['tour', postId], (old) =>
      //   old ? [...old, data.data] : []
      // );
      toast.success('作成しました');
      router.push('/tour');
    },
    onError: (err: Error | AxiosError) => {
      if (axios.isAxiosError(err)) {
        const errors = err?.response?.data.errors;
        errors.forEach((error: any) => {
          setError(error.property, {
            type: 'apiError',
            types: error.constraints,
          });
        });
      } else {
        console.error(err);
      }
    },
  });
};
