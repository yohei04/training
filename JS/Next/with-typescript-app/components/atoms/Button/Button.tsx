import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color: 'blue' | 'red';
  size: 's' | 'm' | 'l';
  margin?: string;
}

const Button = ({ color, size, margin, ...rest }: ButtonProps) => {
  return (
    <>
      <button
        className={clsx(styles.base, styles[color], styles[size], utilStyles.m_10 )}
        {...rest}
      />
    </>
  );
};

export default Button;
