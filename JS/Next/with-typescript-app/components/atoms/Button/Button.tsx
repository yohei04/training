import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color: 'blue' | 'red';
  size: 's' | 'm' | 'l';
  margin: string;
}

const Button = ({ color, size, margin, ...rest }: ButtonProps) => {
  return (
    <>
      <h1 className={styles.text_blue_10}>aaaaaaaaaaa</h1>
      <button
        className={clsx(styles.default, styles[color], styles[size], margin)}
        {...rest}
      />
    </>
  );
};

export default Button;
