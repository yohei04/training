import axios, { AxiosError } from 'axios';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { CreateTourDto, TourEntity } from '../../__generated__';
import { FormErrorMessages } from '../form';
import style from './CreateTour.module.css';

type Props = {};

const tourTypeOptions = ['mountain', 'river', 'sea'] as const;
const tourTypeOptionsObj = [
  { value: 'mountain', label: '山' },
  { value: 'river', label: '川' },
  { value: 'sea', label: '海' },
] as const;

const timeTypeOptions = ['week', 'day'] as const;
// const timeTypeOptionsObj = [
//   { value: 'week', label: '週帰り' },
//   { value: 'day', label: '日帰り' },
// ] as const;
const countryOptions = ['jp', 'us', 'ca', 'tw'] as const;
const countryOptionsObj = [
  { value: 'jp', label: '日本' },
  { value: 'us', label: 'アメリカ' },
  { value: 'ca', label: 'カナダ' },
  { value: 'tw', label: '台湾' },
] as const;
const participantsNumberOptions = [1, 2, 3, 4] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: '入力してください' })
    // .min(12, { message: '12文字以上で入力してください' })
    .max(10, { message: '10文字以下で入力してください' }),
  tourType: z.enum(tourTypeOptions, {
    errorMap: () => ({ message: '値が不正です' }),
  }),
  // tourType: z.union([z.literal('mountain'), z.literal('river')]),
  timeType: z.enum(timeTypeOptions, {
    errorMap: () => ({ message: '値が不正です' }),
  }),
  country: z.enum(countryOptions, {
    errorMap: () => ({ message: '値が不正です' }),
  }),
  participantsNumber: z.number().refine((n: any) => participantsNumberOptions.includes(n), {
    message: '値が不正です',
  }),
  ageLimit: z
    .number()
    .refine((n) => n >= 0 && n <= 100, { message: '0以上100以下で入力してください' }),
  price: z.number().gte(1, { message: '1以上で入力してください' }),
  description: z.string().max(50, { message: '50文字以下で入力してください' }),
  size: z.string(),
});

export const CreateTour: FC<Props> = () => {
  const { register, handleSubmit, setError, formState, watch } = useForm<CreateTourDto>({
    defaultValues: {
      name: '',
      tourType: 'mountain',
      timeType: 'week',
      country: 'jp',
      participantsNumber: 4,
      ageLimit: 20,
      description: '',
      price: 5000,
      size: '',
    },
    resolver: zodResolver(schema),
    criteriaMode: 'all',
  });
  const { errors, isSubmitting } = formState;

  const { mutate, isLoading } = useMutation((newTour: CreateTourDto) => createTour(newTour), {
    onSuccess: (data) => {
      // queryClient.setQueryData<TourEntity[]>(['tour', postId], (old) =>
      //   old ? [...old, data.data] : []
      // );
      toast.success('作成しました');
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
      toast.error('作成できませんでした');
    },
  });

  const tourType = watch('tourType');
  const isWeekDisabled = tourType === 'sea';

  const timeTypeOptionsObj = [
    { value: 'week', label: '週帰り', isDisabled: isWeekDisabled },
    { value: 'day', label: '日帰り', isDisabled: false },
  ] as const;

  const onSubmit = (newTour: CreateTourDto) => {
    console.log({ newTour });
    mutate(newTour);
  };

  return (
    <div className={style.root}>
      <Toaster />
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={style['form-items']} disabled={isLoading}>
          <div>
            <label className={style.label} htmlFor="name">
              ツアー名：
            </label>
            <input
              className={style.input}
              id="name"
              aria-invalid={!!errors.name ? 'true' : 'false'}
              aria-errormessage="name-error"
              {...register('name')}
            />
            <FormErrorMessages property="name" errors={errors} />
          </div>

          <fieldset>
            <legend>ツアータイプ：</legend>
            <div className={style['tour-type']}>
              {tourTypeOptionsObj.map((tt) => (
                <div className={style['radio-button']} key={tt.value}>
                  <input type="radio" id={tt.value} value={tt.value} {...register('tourType')} />
                  <label className={style.label} htmlFor={tt.value}>
                    {tt.label}
                  </label>
                </div>
              ))}
            </div>
            <FormErrorMessages property="tourType" errors={errors} />
          </fieldset>

          <div>
            <p>期間タイプ：</p>
            <div className={style['time-type']}>
              {timeTypeOptionsObj.map((tt) => (
                <div className={style.checkbox} key={tt.value}>
                  <input
                    type="radio"
                    id={tt.value}
                    value={tt.value}
                    disabled={tt.isDisabled}
                    {...register('timeType')}
                  />
                  <label className={style.label} htmlFor={tt.value}>
                    {tt.label}
                  </label>
                </div>
              ))}
            </div>
            <FormErrorMessages property="timeType" errors={errors} />
          </div>

          <div>
            <label className={style.label} htmlFor="country">
              国：
            </label>
            <select id="country" {...register('country')}>
              {countryOptionsObj.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <FormErrorMessages property="country" errors={errors} />
          </div>

          <div>
            <label className={style.label} htmlFor="participantsNumber">
              人数制限：
            </label>
            <select
              id="participantsNumber"
              {...register('participantsNumber', { valueAsNumber: true })}
            >
              {participantsNumberOptions.map((pn) => (
                <option key={pn} value={pn}>
                  {pn}
                </option>
              ))}
            </select>
            <span>人</span>
            <FormErrorMessages property="participantsNumber" errors={errors} />
          </div>

          {/* <div>
            <label className={style.label} htmlFor="ageLimit">
              年齢制限：
            </label>
            <input
              className={style.input}
              type="number"
              {...register('ageLimit', { valueAsNumber: true })}
            />
            <FormErrorMessages property="ageLimit" errors={errors} />
          </div>

          <div>
            <label className={style.label} htmlFor="price">
              値段：
            </label>
            <input
              className={style.input}
              type="number"
              {...register('price', { valueAsNumber: true })}
            />
            <FormErrorMessages property="price" errors={errors} />
          </div>

          <div>
            <label className={style.label} htmlFor="description">
              説明：
            </label>
            <textarea className={style.input} {...register('description')} />
            <FormErrorMessages property="description" errors={errors} />
          </div> */}
        </fieldset>
        <div className={style['button-wrapper']}>
          <button className={style.button} type="submit" name="post" disabled={isLoading}>
            作成
          </button>
        </div>
      </form>
    </div>
  );
};

const createTour = (newTour: CreateTourDto) => {
  return axios.post<TourEntity>('http://localhost:4000/tours', newTour);
};
