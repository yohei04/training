import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color: 'blue' | 'red';
  size: 's' | 'm' | 'l';
  space?: keyof typeof utilStyles;
  // as: 'button' | 'link'
}

const Button = ({ color, size, space = 'm_0', ...rest }: ButtonProps) => {
  const buttonStyle = clsx(
    styles.base,
    styles[color],
    styles[size],
    utilStyles[space]
  );
  return <button className={buttonStyle} {...rest} />;
};

export default Button;
