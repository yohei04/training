import axios, { AxiosError } from 'axios';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { CreateTourDto, TourEntity } from '../../__generated__';
import style from './CreateTour.module.css';

type Props = {};

const schema = z.object({
  name: z
    .string()
    .min(1, { message: '入力してください' })
    .max(10, { message: '10文字以下で入力してください' }),
  tourType: z.string(),
  timeType: z.string(),
  country: z.string(),
  participantsNumber: z.number(),
  ageLimit: z.number(),
  description: z.string(),
  price: z.number(),
  size: z.string(),
});

export const CreateTour: FC<Props> = () => {
  const { register, handleSubmit, setError, formState } = useForm<CreateTourDto>({
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
  const nameErrors = errors.name?.types && Object.entries(errors.name?.types);

  const { mutate, isLoading } = useMutation((newTour: CreateTourDto) => createTour(newTour), {
    onSuccess: (data) => {
      // queryClient.setQueryData<TourEntity[]>(['tour', postId], (old) =>
      //   old ? [...old, data.data] : []
      // );
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

  const onSubmit = (newTour: CreateTourDto) => {
    console.log({ newTour });
    mutate(newTour);
  };

  return (
    <div className={style.root}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={style['form-items']}>
          <div>
            <label className={style.label} htmlFor="name">
              ツアー名:
            </label>
            <input className={style.input} id="name" {...register('name')} />
            {errors.name?.type !== 'apiError' &&
              nameErrors?.map(([type, message]) => (
                <p className="text-red-600" key={type} role="alert">
                  {message}
                </p>
              ))}
          </div>

          <div>
            <p>ツアータイプ：</p>
            <div className={style['tour-type']}>
              <div className={style['radio-button']}>
                <input type="radio" id="mountain" value="mountain" {...register('tourType')} />
                <label className={style.label} htmlFor="mountain">
                  山
                </label>
              </div>
              <div className={style['radio-button']}>
                <input type="radio" id="river" value="river" {...register('tourType')} />
                <label className={style.label} htmlFor="river">
                  川
                </label>
              </div>
              <div className={style['radio-button']}>
                <input type="radio" id="sea" value="sea" {...register('tourType')} />
                <label className={style.label} htmlFor="sea">
                  海
                </label>
              </div>
            </div>
          </div>

          <div>
            <p>期間タイプ：</p>
            <div className={style['time-type']}>
              <div className={style.checkbox}>
                <input type="radio" id="week" value="week" {...register('timeType')} />
                <label className={style.label} htmlFor="week">
                  週帰り
                </label>
              </div>
              <div className={style.checkbox}>
                <input type="radio" id="day" value="day" {...register('timeType')} />
                <label className={style.label} htmlFor="day">
                  日帰り
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className={style.label} htmlFor="country">
              国：
            </label>
            <select id="country" {...register('country')}>
              <option value={'jp'}>日本</option>
              <option value={'usa'}>アメリカ</option>
              <option value={'ca'}>カナダ</option>
              <option value={'tw'} disabled>
                台湾
              </option>
            </select>
          </div>

          <div>
            <label className={style.label} htmlFor="participantsNumber">
              人数制限：
            </label>
            <select
              id="participantsNumber"
              {...register('participantsNumber', { valueAsNumber: true })}
            >
              <option value={1}>1人</option>
              <option value={2}>2人</option>
              <option value={3}>3人</option>
              <option value={4}>4人</option>
            </select>
          </div>

          <div>
            <label className={style.label} htmlFor="ageLimit">
              年齢制限：
            </label>
            <input
              className={style.input}
              type="number"
              {...register('ageLimit', { valueAsNumber: true })}
            />
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
          </div>

          <div>
            <label className={style.label} htmlFor="description">
              説明：
            </label>
            <textarea className={style.input} {...register('description')} />
          </div>
        </fieldset>
        <div className={style['button-wrapper']}>
          <button className={style.button} type="submit" name="post">
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
