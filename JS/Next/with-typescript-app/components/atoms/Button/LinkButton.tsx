import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

interface LinkButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  color: 'blue' | 'red';
  size: 's' | 'm' | 'l';
  space?: keyof typeof utilStyles;
  // as: 'button' | 'link'
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ color, size, space = 'm_0', ...rest }, ref) => {
    const buttonStyle = clsx(
      styles.base,
      styles[color],
      styles[size],
      utilStyles[space]
    );
    return <a className={buttonStyle}  ref={ref} {...rest} />;
  }
);

export default LinkButton;
