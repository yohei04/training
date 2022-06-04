import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { number } from 'zod';

import { CreateTourDto } from '../../__generated__';
import style from './CreateTour.module.css';

type Props = {};

export const CreateTour: FC<Props> = () => {
  const { register, handleSubmit, setError, formState } = useForm<CreateTourDto>({
    criteriaMode: 'all',
  });

  return (
    <div className={style.root}>
      <form className={style.form}>
        <fieldset className={style['form-items']}>
          <div>
            <label className={style.label} htmlFor="name">
              ツアー名:
            </label>
            <input className={style.input} id="name" {...register('name')} />
          </div>

          <div>
            <p>ツアータイプ：</p>
            <div className={style['tour-type']}>
              <div className={style['radio-button']}>
                <input type="radio" id="mountain" {...register('tourType')} />
                <label className={style.label} htmlFor="mountain">
                  山
                </label>
              </div>
              <div className={style['radio-button']}>
                <input type="radio" id="river" {...register('tourType')} />
                <label className={style.label} htmlFor="river">
                  川
                </label>
              </div>
              <div className={style['radio-button']}>
                <input type="radio" id="sea" {...register('tourType')} />
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
                <input type="checkbox" id="week" {...register('timeType')} />
                <label className={style.label} htmlFor="week">
                  週帰り
                </label>
              </div>
              <div className={style.checkbox}>
                <input type="checkbox" id="day" {...register('timeType')} />
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
              <option value={1}>日本</option>
              <option value={2}>アメリカ</option>
              <option value={3}>カナダ</option>
              <option value={4}>台湾</option>
            </select>
          </div>

          <div>
            <label className={style.label} htmlFor="participantsNumber">
              人数制限：
            </label>
            <select id="participantsNumber" {...register('participantsNumber')}>
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
            <input className={style.input} type="number" {...register('ageLimit')} />
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
